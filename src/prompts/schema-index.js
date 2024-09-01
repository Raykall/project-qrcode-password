import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.redBright("Escolha entre as ferramentas (1- QRCODE) ou (2- PASSWORD)"),
        pattern: /^[1-2]+$/,
        message: chalk.cyan.italic("Escolha apenas entre 1 e 2"),
        required: true,
    },
]

export default mainPrompt;