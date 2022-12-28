const { createTransport } = require("nodemailer");
const { logger } = require("../src/utils/logger");

const path = require("path");

const transporter = createTransport({
  service: 'gmail',
  port: 587,
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PSW,
  },
});

const sendEmail = async ({ username, name, age, address, phone, image }) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Nuevo registro de Usuarix:`,
      html: `
      <h1>USUARIX REGISTRADX:</h1>
      <h2>NOMBRE ${name}usuario: ${username}</h2>
      <p>Usuario: ${username}</p>
      <p>Edad: ${age}</p>
      <p>Direccion: ${address}</p>
      <p>Telefono Celular: ${phone}</p>
      <img src="${path.join(__dirname, "../public/uploads/") + image}" />
      `,
      attachments: [
        {
          filename: `${image}`,
          path: path.join(__dirname, "../public/uploads/") + image,
        },
      ],
    };
    const info = await transporter.sendMail(mailOptions);
    logger.info({ message: "email enviado", info });
  } catch (err) {
    errorLogger.error(err);
  }
};

const sendPurchaseEmail = async (formattedProducts, user) => {
  try {
    const { username, name, age, address, phone, image } = user;

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Nuevo pedido de ${name}, ${username}`,
      html: `
      <h1>NUEVO PEDIDO RECIBIDO</h1>
      <div>Detalle del pedido</div>
      <div><p>${formattedProducts.join("</p><p>")}</p></div>
      </div>
      `,
    };
    const info = await transporter.sendMail(mailOptions);
    logger.info({ message: "email enviado", info });
  } catch (err) {
    errorLogger.error(err);
  }
};

module.exports = { sendEmail, sendPurchaseEmail };
