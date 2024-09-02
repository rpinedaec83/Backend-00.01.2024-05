import Note from './models/Note';

const OpenAI =require( 'openai');
const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  });
  
export default(io)=>{
    io.on('connection',(socket)=>{
        
        const emitNotes= async()=>{
            const notes=await Note.find()
            io.emit('server:loadnotes',notes);
        };
        emitNotes();

        socket.on('client:newnote', async (data)=>{
           const newNote= new Note(data);
           const savedNote= await newNote.save();
           io.emit('server:newnote',savedNote);
        });

        socket.on('client:deletenote', async (id)=>{
            await Note.findByIdAndDelete(id)
            emitNotes()
        });

        socket.on('client:getnote',async id=>{
            const note= await Note.findById(id)
            io.emit('server:selectednote',note);
        })

        socket.on('client:updatenote',async(updatedNote)=>{
            await Note.findByIdAndUpdate(updatedNote._id,{
                title:updatedNote.title,
                description:updatedNote.description
            });
            emitNotes();
        })

        const conversationHistory = [];
        socket.on('client:boot', async(id, callback)=>{
            try {
                const message= await Note.findById(id)
                console.log(message);
                conversationHistory.push({ role: "user", content: message.description });
                const completion = await openai.chat.completions.create({
                    model: process.env.MODEL || "gpt-3.5-turbo",
                    messages: conversationHistory,
                });
                console.log(completion);
                
                  const response = completion.choices[0].message?.content;
                  console.log(response);
                conversationHistory.push({ role: "assistant", content: response });
                socket.emit("message", {id:id,message: response});

                // callback();
            } catch (error) {
                console.error(error);
                // callback("Error: Unable to connect to the chatbot");
            }
        });
        socket.on("disconnect", () => {console.log("User disconnected");});
    });
};