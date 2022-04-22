package com.udacity.jwdnd.c1.review.controller;

import com.udacity.jwdnd.c1.review.services.MessageListService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {
    private MessageListService messageListService;

    public HomeController(MessageListService messageListService) {
        this.messageListService = messageListService;
    }

    @GetMapping("/home") //special RequestMapping for processing get requesting
    public String getPage(@ModelAttribute("newMessage") MessageForm newMessage, Model model){
        model.addAttribute("greetings",this.messageListService.getMessages());
        return "Home";
    }
    @PostMapping("/home")
    public String addMessage(@ModelAttribute("newMessage") MessageForm messageForm, Model model){
        messageListService.addMessage(messageForm.getText());
        model.addAttribute("greetings",this.messageListService.getMessages());
        messageForm.setText("");
        return "Home";
    }


}
