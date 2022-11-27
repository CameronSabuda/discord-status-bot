import 'reflect-metadata';
import * as dotenv from 'dotenv';

import { StatusBot } from './statusBot';
import Container, { Token } from 'typedi';
import { MessageService } from './service/messageService';
import { MessageServiceImpl } from './service/messageServiceImpl';
import { MessageRepository } from './repository/messageRepository';
import { MongoDBMessageRepository } from './repository/mongodbMessageRepository';

dotenv.config();

function bootstrap(): void {
  const messageServiceToken = new Token<MessageService>('MessageService');
  const messageRepositoryToken = new Token<MessageRepository>('MessageRepository');

  Container.set(messageRepositoryToken, new MongoDBMessageRepository());

  Container.set(messageServiceToken, new MessageServiceImpl(Container.get(messageRepositoryToken)));

  const statusBot = new StatusBot(Container.get(messageServiceToken));

  statusBot.init();
}

bootstrap();
