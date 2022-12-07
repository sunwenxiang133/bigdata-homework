package love.bigdata.teamwork.service;

import love.bigdata.teamwork.pojo.Message;
import love.bigdata.teamwork.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageServiceImp implements MessageService {
    @Autowired
    MessageRepository messageRepository;

    @Override
    public List<Message> findAll() {
        return (List<Message>) messageRepository.findAll();
    }
}
