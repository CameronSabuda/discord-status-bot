import { MessageRepository } from 'src/repository/messageRepository';
import { mock } from 'jest-mock-extended';
import { MessageServiceImpl } from './messageServiceImpl';
import { Message } from 'discord.js';

describe('MessageService implementation', () => {
  const mockMessageRepository = mock<MessageRepository>();
  describe('handleCreateMessage', () => {
    it('should save the message', () => {
      const mockMessage = mock<Message>();

      const messageService = new MessageServiceImpl(mockMessageRepository);

      messageService.handleMessage(mockMessage);

      expect(mockMessageRepository.saveMessage).toHaveBeenCalled();
    });
  });
});
