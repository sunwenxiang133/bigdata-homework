package love.bigdata.teamwork.service;

import love.bigdata.teamwork.pojo.Message;

import java.util.List;

public interface MessageService {
    List<Message> findAll();
}
