import { Client, GatewayIntentBits, Events, Message } from 'discord.js';
import { MessageService } from './service/messageService';

export class StatusBot {
  private readonly INTENTS = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
  ];

  private readonly discordClient: Client;

  private readonly DISCORD_TOKEN = process.env.DISCORD_TOKEN;

  constructor(private readonly messageService: MessageService) {
    this.discordClient = new Client({ intents: this.INTENTS });
  }

  public init(): void {
    this.discordClient.once(Events.ClientReady, () => {
      console.log(`Successfully logged in.`);
    });

    this.discordClient.on(Events.MessageCreate, (message: Message) => this.messageService.handleMessage(message));

    this.discordClient.login(this.DISCORD_TOKEN);
  }
}
