const axios = require("axios");

const sendSms = async (name) => {
  try {
    const response = await axios.get(
      `https://www.fast2sms.com/dev/bulkV2?authorization=${process.env.SMS_TOKEN}&route=q&message=${name}%20started&language=english&flash=0&numbers=${process.env.PHONE}`
    );
    console.log(response.data);
    return true;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sendSms };
