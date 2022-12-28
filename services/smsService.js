const twilio = require("twilio");

const ACCOUNTSID = process.env.TWILIO_ACCOUNT_SID;
const AUTHTOKEN = process.env.TWILIO_AUTH_TOKEN;
const SMSFROM = process.env.SMS_FROM;
const SMSTO = process.env.SMS_TO;

const client = twilio(ACCOUNTSID, AUTHTOKEN);

const sendSMS = async (body) => {
  try {
    const message = await client.messages.create({
      body,
      from: SMSFROM,
      to: SMSTO,
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = sendSMS;
