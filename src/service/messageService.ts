import { Message } from 'discord.js';

export interface MessageService {
  handleMessage(message: Message): void;
}
