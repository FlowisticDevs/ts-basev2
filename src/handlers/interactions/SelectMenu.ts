import { AnySelectMenuInteraction } from "discord.js";

export class SelectMenu {
    public versions: string = '^7';

    public async onStart() {
        return true;
    }

    public async handleSelectMenu(interaction: AnySelectMenuInteraction) {
        // TODO: Actually do this
    }
}

export default new SelectMenu();

