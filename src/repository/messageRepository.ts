import { Message } from 'discord.js';

export interface MessageRepository {
  saveMessage(message: Message): void;
}
