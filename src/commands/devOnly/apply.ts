import { EmbedBuilder } from 'discord.js';
import { UserModel } from '../../data/models/UserModel.js';
import { AnyCommandBuilder, SlashCommandBuilder } from 'reciple';

export class Apply {
    public versions: string = '^7';
    devCommands: AnyCommandBuilder[] = [
        new SlashCommandBuilder()
            .setName("apply")
            .setDescription("An example of a command using a schema to register information from discord to the database")
            .addStringOption(option =>
                option.setName("name")
                    .setDescription("What is your name?")
                    .setRequired(true)
            )
            .addStringOption(option =>
                option.setName("email")
                    .setDescription("What is your email?")
                    .setRequired(true)
            )
            .addStringOption(option =>
                option.setName("password")
                    .setDescription("What is your password?")
                    .setRequired(true)
            )
            .setCooldown(5)
            .setExecute(async ({ interaction, client }) => {
                const { options } = interaction;

                const name = options.getString("name");
                const email = options.getString("email");
                const password = options.getString("password");

                UserModel.create({
                    Name: name,
                    Email: email,
                    Password: password
                });

                const embed = new EmbedBuilder()
                    .setAuthor({ name: "Application Test" })
                    .setDescription("You've successfully applied with your information to the database.")
                    .setTimestamp();

                await interaction.reply({ embeds: [embed] });
            }),
    ];
    async onStart() {
        return true;
    }
}

export default new Apply();