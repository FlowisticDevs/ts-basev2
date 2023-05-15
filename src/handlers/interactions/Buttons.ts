import { ButtonInteraction } from "discord.js";

export class Buttons {
    public versions: string = '^7';

    public async onStart() {
        return true;
    }

    public async handleButtonInteraction(interaction: ButtonInteraction) {


        if (interaction.customId === "button1") {
            // i'm going to configure mongoDB pretty quickly (i love mongoDB 😻)
        }
    }
}

export default new Buttons();