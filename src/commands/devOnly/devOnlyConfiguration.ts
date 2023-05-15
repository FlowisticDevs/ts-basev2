import {
    AnySlashCommandBuilder,
    CommandType,
    ContextMenuCommandBuilder,
    ContextMenuCommandResolvable,
    RecipleClient,
    RecipleModule,
    RecipleModuleScript,
    SlashCommandBuilder,
    SlashCommandResolvable
} from "reciple";

export class RegisterDevCommands implements RecipleModuleScript {
    public versions: string = '^7';

    public async onStart(client: RecipleClient<false>, module: RecipleModule): Promise<boolean> {
        return true;
    }

    public async onLoad(client: RecipleClient<true>, module: RecipleModule): Promise<void> {
        if (!process.env.devguild) return;

        const modules = client.modules.modules.map(s => s.script as RecipleModuleScript & { devCommands?: (SlashCommandResolvable | ContextMenuCommandResolvable)[] });
        const commands: (AnySlashCommandBuilder | ContextMenuCommandBuilder)[] = [];

        for (const module of modules) {
            if (!module.devCommands) continue;

            commands.push(...module.devCommands.map(s =>
                s.commandType === CommandType.SlashCommand
                    ? SlashCommandBuilder.resolve(s)
                    : ContextMenuCommandBuilder.resolve(s)
            ));
        }

        client.on('recipleRegisterApplicationCommands', (registeredCommands, guildId) => {
            if (guildId === process.env.devguild) return;

            client.commands.add(commands);
            client.logger?.log(`Registered ${commands.length} dev commands for guild ${process.env.devguild}`);
        });

        await client.application.commands.set(commands, process.env.devguild!);
    }
}

export default new RegisterDevCommands();