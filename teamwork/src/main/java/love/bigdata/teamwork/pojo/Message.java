package love.bigdata.teamwork.pojo;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Id;

@Getter
@Setter
@Document(value = "ghostanimals")
public class Message {
    @Id // 这是主键
    String id;
    String comment;
    String introduce;
    String title;
    String up;
    String viewer;
}
