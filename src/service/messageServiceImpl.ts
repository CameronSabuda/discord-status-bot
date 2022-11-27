import { Message } from 'discord.js';
import { MessageRepository } from '../repository/messageRepository';
import { MessageService } from './messageService';

export class MessageServiceImpl implements MessageService {
  private readonly messageRepository: MessageRepository;

  constructor(messageRepository: MessageRepository) {
    this.messageRepository = messageRepository;
  }

  handleMessage(message: Message<boolean>): void {
    this.messageRepository.saveMessage(message);
  }
}
