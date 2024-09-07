const socket = io();
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const messagesUl = document.getElementById("messages");



sendBtn.addEventListener("click", () => {
  const msg = messageInput.value;
  const location = "Some location"; // Aquí puedes obtener la ubicación del paquete
  if (msg.trim()) {
    socket.emit("send-message", { msg, location });
    messageInput.value = "";
  }
});


socket.on("new-message", (data) => {
  const li = document.createElement("li");
  li.textContent = `${data.username}: ${data.msg}`;
  messagesUl.appendChild(li);
});

// Mostrar mensajes iniciales cuando se cargue la página
socket.emit("initial-messages");
socket.on("initial-messages", (data) => {
  
  const messages = JSON.parse(data.msg);
  console.log("Mensajes iniciales recibidos2222:", messages);
  messages.forEach((message) => {
    const li = document.createElement("li");
    li.textContent = `${message.user}: ${message.message}`;
    messagesUl.appendChild(li);
  });
});

const addPackageBtn = document.getElementById("track-btn");
const description = document.getElementById("package-description");
const sender = document.getElementById("package-sender");
const recipient = document.getElementById("package-recipient");
const status2 = document.getElementById("package-status");
const latitude = document.getElementById("package-latitude");
const longitude = document.getElementById("package-longitude");

addPackageBtn.addEventListener("click", () => {
  const desc = description.value;
  const send = sender.value;
  const reci = recipient.value;
  const sta = status2.value;
  const latitude2 = latitude.value;
  const longitude2=longitude.value;

  // Cambiar los nombres de las propiedades al enviar en el fetch para que coincidan con lo que el servidor espera
  fetch("/add-package", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: desc,
      sender: send,
      recipient: reci,
      status: sta,
      latitude:latitude2,
      longitude:longitude2
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Package added with ID:", data.packageId);
       // Limpiar las cajas de texto después de enviar los datos
       description.value = "";
       sender.value = "";
       recipient.value = "";
       status2.value = "";
      latitude.value="";
      longitude.value="";
    
    })
    .catch((error) => console.error("Error adding package:", error));
});




// Logout
document.getElementById("logout-btn").addEventListener("click", () => {
  window.location.href = "/logout";
});


