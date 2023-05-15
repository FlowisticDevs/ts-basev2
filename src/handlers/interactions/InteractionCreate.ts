import { RecipleClient, RecipleModule, RecipleModuleScript } from "reciple";
// Any JS imports are because compiled versions of these modules are turned into JS
import Buttons from './Buttons.js';
import SelectMenu from "./SelectMenu.js";


export class InteractionCreate implements RecipleModuleScript {
    public versions: string = '^7';

    public async onStart(client: RecipleClient<false>, module: RecipleModule): Promise<boolean> {
        client.on('interactionCreate', async (interaction) => {
            if (interaction.isButton()) {
                Buttons.handleButtonInteraction(interaction);
            } else if (interaction.isAnySelectMenu()) {
                SelectMenu.handleSelectMenu(interaction);
            }
        });

        return true;
    }
}

export default new InteractionCreate();
// All calls that are imported locally inside of the events folder will be called from here