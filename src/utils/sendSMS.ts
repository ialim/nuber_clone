import Twilio from "twilio";

const twilioClient = Twilio(
  process.env.TWILIO_ACC_SID,
  process.env.TWILIO_ATH_TOK
);

export const sendSMS = (to: string, body: string) => {
  return twilioClient.messages.create({
    body,
    to,
    from: process.env.TWILIO_PHN_NUM,
  });
};

export const sendVerificationSMS = (to: string, key: string) =>
  sendSMS(to, `Your verification key is: ${key}`);
