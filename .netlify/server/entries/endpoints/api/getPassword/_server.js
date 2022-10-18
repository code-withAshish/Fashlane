import { object, number, string } from "zod";
import { e as error, j as json } from "../../../../chunks/index2.js";
const schema = object({
  Length: number().min(4, "Minimum length is 4").max(40, "Maximum length is 40"),
  Uppercase: string().optional(),
  Lowercase: string().optional(),
  Numbers: string().optional(),
  Symbols: string().optional()
});
async function POST({ request }) {
  if (request.method !== "POST") {
    throw error(405, "Method not allowed");
  }
  try {
    const postBody = await request.json();
    const data = schema.parse(postBody);
    var password = "";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()";
    var chars = "abcdefghijklmnopqrstuvwxyz";
    if (data.Uppercase)
      chars += uppercase;
    if (data.Numbers)
      chars += numbers;
    if (data.Symbols)
      chars += symbols;
    for (var i = 0; i <= data.Length; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
    return json({ password });
  } catch (err) {
    throw error(500, `{ error: ${err.toString()} }`);
  }
}
export {
  POST
};
