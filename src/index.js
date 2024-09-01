import prompt from "prompt";
import promptIndex from "./prompts/schema-index.js";
import chalk from "chalk";
import createQRCode from "./services/qr-code/create-qrcode.js";
import createPassword from "./services/password/create-password.js";

async function main() {
    prompt.get(promptIndex, async (error, choose) => {
        if(error){
            console.log(chalk.red("Error: " + error.message));
            return;
        }
        if (choose.select == 1) await createQRCode();
        if (choose.select == 2) await createPassword();

    });
    prompt.start();
}
main();