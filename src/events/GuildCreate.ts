import { RecipleClient } from "reciple";
import { GuildModel } from "../data/models/GuildModel.js";

export class GuildCreate {
    public versions: string = '^7'

    public async onStart(client: RecipleClient) {
        client.on("guildCreate", async (guild) => {
            GuildModel.create({
                GuildID: guild.id,
                Premium: false,
            });
        });
        return true;
    }
}

export default new GuildCreate();