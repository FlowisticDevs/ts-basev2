import { AnyCommandBuilder, SlashCommandBuilder } from "reciple";

export class Ping {
    versions: string = '^7';
    devCommands: AnyCommandBuilder[] = [
        new SlashCommandBuilder()
            .setName('ping')
            .setDescription('Verify the bot connection')
            .setExecute(async ({ interaction, client }) => {
                await interaction.reply(`${client.ws.ping}ms`);
            })
    ];

    async onStart() {
        return true;
    }
}

export default new Ping();