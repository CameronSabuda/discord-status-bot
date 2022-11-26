import { Client, GatewayIntentBits, Events } from "discord.js"


export class StatusBot {

  private readonly INTENTS = [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMessages];

  private readonly discordClient: Client;

  private readonly DISCORD_TOKEN = process.env.DISCORD_TOKEN;

  constructor() { 
    this.discordClient = new Client({ intents: this.INTENTS })
   }

  public init(): void {
    this.discordClient.once(Events.ClientReady, c => {
      console.log(`Ready! Logged in as ${c.user.tag}`);
    });
  
    this.discordClient.login(this.DISCORD_TOKEN)
  }
}