package love.bigdata.teamwork.repository;

import love.bigdata.teamwork.pojo.Message;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface MessageRepository extends MongoRepository<Message,Long> {
    List<Message> findMessageByCommentLike(String username);
}
