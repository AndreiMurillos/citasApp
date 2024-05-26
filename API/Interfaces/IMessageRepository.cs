using API.Entities;
using API.Helpers;
using API.DTOs;

namespace API.Interfaces;

public interface IMessageRepository
{
  void AddMessage(Message message);
  void DeleteMessage(Message message);
  Task<Message> GetMessageAsync(int id);
  Task<PagedList<MessageDto>> GetMessagesForUserAsync(MessageParams messageParams);
  Task<IEnumerable<MessageDto>> GetMessageThreadAsync(string currentUserName, string recipientUserName);
  Task<bool> SaveAllAsync();
}