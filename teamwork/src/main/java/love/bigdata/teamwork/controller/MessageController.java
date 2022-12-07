package love.bigdata.teamwork.controller;

import love.bigdata.teamwork.pojo.Message;
import love.bigdata.teamwork.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MessageController {
    @Autowired
    MessageService messageService;

    @GetMapping("/all")
    public ResponseEntity<List<Message>> getAll(){
        return new ResponseEntity<>(messageService.findAll(), HttpStatus.ACCEPTED);
    }
}
