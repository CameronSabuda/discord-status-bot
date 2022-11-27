import { Message } from 'discord.js';
import { MongoClient } from 'mongodb';
import { MessageRepository } from './messageRepository';

export class MongoDBMessageRepository implements MessageRepository {
  private readonly dbUri = process.env.DB_URI || '';

  private readonly mongodbClient = new MongoClient(this.dbUri);

  public saveMessage = (message: Message): void => {
    console.log(message);
    throw new Error('saveMessage not implemented');
  };
}
