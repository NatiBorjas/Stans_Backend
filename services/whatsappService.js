
const twilio = require("twilio");

const ACCOUNTSID = process.env.TWILIO_ACCOUNT_SID;
const AUTHTOKEN = process.env.TWILIO_AUTH_TOKEN;
const FROMWSP = process.env.FROM_WSP;
const TOWSP = process.env.TO_WSP;


const client = twilio(ACCOUNTSID, AUTHTOKEN);

const sendWhatsapp = async (body) => {
  try {
    await client.messages
      .create({
        body,
        from: FROMWSP,
        to: TOWSP,
      })
      .then((message) => console.log(message.sid))
      .done();
  } catch (e) {
    console.log(e);
  }
};

module.exports = sendWhatsapp;
