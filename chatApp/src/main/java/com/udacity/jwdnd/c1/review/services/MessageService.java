package com.udacity.jwdnd.c1.review.services;

import com.udacity.jwdnd.c1.review.model.ChatForm;
import com.udacity.jwdnd.c1.review.model.ChatMessage;
import jakarta.annotation.PostConstruct;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Service
public class MessageService {
    //private String message;
    private Date time;
    private List<ChatMessage> chatMessages;

//    public MessageService(String message){
//        this.message = message;
//    }
//    public String uppercase(){
//        return this.message.toUpperCase();
//    }
//    public String lowercase(){
//        return this.message.toLowerCase();
//    }
    public void addMessage(ChatForm message){
        ChatMessage newMesage = new ChatMessage();
        newMesage.setUsername(message.getMessageType());
        switch (message.getMessageType()){
            case "Say":
                newMesage.setMessage(message.getMessageText());
                break;
            case "Shout":
                newMesage.setMessage(message.getMessageText().toUpperCase());
                break;
            case "Whisper":
                newMesage.setMessage(message.getMessageText().toLowerCase());
                break;
        }
        this.chatMessages.add(newMesage);
    }

    public List<ChatMessage> getChatMessages() {
        return chatMessages;
    }

    @PostConstruct //for logging the creation of the MessageService
    public void postConstruct(){
        System.out.println("Creating MessageService bean");
        this.chatMessages = new ArrayList<>();
    }
}
