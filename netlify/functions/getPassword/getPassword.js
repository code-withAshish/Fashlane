const zod = require("zod");

const schema = zod.object({
  length: zod
    .number()
    .min(4, "Minimum length is 4")
    .max(40, "Maximum length is 40"),
  uppercase: zod.boolean().optional(),
  lowercase: zod.boolean().optional(),
  numbers: zod.boolean().optional(),
  symbols: zod.boolean().optional(),
});

const handler = async (event) => {
  try {
    const postBody = JSON.parse(event.body);
    const data = schema.parse(postBody);
    var password;
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";
    var chars = "abcdefghijklmnopqrstuvwxyz";

    if (data.uppercase) chars += uppercase;
    if (data.numbers) chars += numbers;
    if (data.symbols) chars += symbols;

    for (var i = 0; i <= data.length; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ password }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
