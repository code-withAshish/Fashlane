import { object, number, string } from "zod";

const schema = object({
  Length: number()
    .min(4, "Minimum length is 4")
    .max(40, "Maximum length is 40"),
  Uppercase: string().optional(),
  Lowercase: string().optional(),
  Numbers: string().optional(),
  Symbols: string().optional(),
});

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  try {
    const postBody = JSON.parse(event.body);
    const data = schema.parse(postBody);
    var password = "";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";
    var chars = "abcdefghijklmnopqrstuvwxyz";

    if (data.Uppercase) chars += uppercase;
    if (data.Numbers) chars += numbers;
    if (data.Symbols) chars += symbols;

    for (var i = 0; i <= data.Length; i++) {
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
