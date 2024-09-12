const cors = require("cors");
const express = require("express");
require("dotenv").config();
const app = express();

const Culqi = require('culqi-node');
const culqi = new Culqi({
    privateKey: process.env.privateKey,
    publicKey: process.env.publicKey,
    pciCompliant:true
});



// Middlewares here 
app.use(express.json());
app.use(cors({
    origin: '*'
  }));

// Routes here 
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/api/process/pay", async (req, res) => {
    const product = req.body;

    
        const token = await culqi.tokens.createToken({
            card_number: '4111111111111111',
            cvv: '123',
            expiration_month: '09',
            expiration_year: '2025',
            email: 'richard@piedpiper.com',
        }).then(restoken=>{
            console.log(restoken);
            console.log(product);
            debugger
            try {
                const charge =  culqi.charges.createCharge({
                    amount: product.amount * 100,
                    currency_code: product.currency_code,
                    email: product.email,
                    installments: product.installments,
                    description: product.description,
                    source_id: restoken.id,
        
                }).then(respuesta => {
                    console.log(respuesta);
                    res.send({res:"recibido", respuesta});
                });
        
        
        
            } catch (error) {
                console.log(error)
            }
        }).catch(error =>{
            console.error(error)
        });
        
   
   
});


app.listen(8000, () => {
    console.log("Server started at port 8000");
}); 