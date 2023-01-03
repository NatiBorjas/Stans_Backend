const socket = io();

const denormalize = (messages) => {
  const author = new normalizr.schema.Entity("authors");
  const mensajes = new normalizr.schema.Entity("mensajes", {
    author: author,
  });
  const chats = new normalizr.schema.Entity("chats", { chats: [mensajes] });

  const denormalizedMessages = normalizr.denormalize(
    messages.result,
    chats,
    messages.entities
  );

  return denormalizedMessages;
};

const button = document.getElementById("submitMessage");
button.addEventListener("click", (e) => {
  const mensaje = {
    author: {
      id: document.getElementById("email").value,
      alias: document.getElementById("alias").value,
      avatar: document.getElementById("avatar").value,
    },
    text: document.getElementById("caja-msg").value,
  };
  socket.emit("nuevo-mensaje", JSON.stringify(mensaje));
  document.getElementById("caja-msg").value = "";
});

socket.on("mensajes", (data) => {
  let denormalizedChats = denormalize(data);
  const add = denormalizedChats.chats
    .map((chat) => {
      let time = new Date(chat.timestamp);
      let formatedTime = time
        .toISOString()
        .replace(/([^T]+)T([^\.]+).*/g, "$1 $2");
      return `
  <p>
  <img class='avatar' style="width:3rem" src='${chat.author.avatar}'></img>
  <span style="color: green;">${chat.author.id}</span>
  <span style="color: blue;">[${formatedTime}]: </span>
  <span style="color: brown;">${chat.text}</span>
  </p>
  `;
    })
    .join(" ");

  document.getElementById("div-chats").innerHTML = add;
});

