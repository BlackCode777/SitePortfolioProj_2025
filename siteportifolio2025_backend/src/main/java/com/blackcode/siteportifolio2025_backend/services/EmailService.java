package com.blackcode.siteportifolio2025_backend.services;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.blackcode.siteportifolio2025_backend.models.dto.ContatoDTO;

@Service
public class EmailService {

	private final JavaMailSender mailSender;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }
    
    public void sendEmail(ContatoDTO contact) {
    	SimpleMailMessage message = new SimpleMailMessage();
    	message.setFrom("b166er1980@gmail.com");
    	message.setTo("b166er1980@gmail.com");
    	message.setSubject("Contato do site: " + contact.getNome());
    	message.setText("Nome: " + contact.getNome() + "\nEmail: " + contact.getEmail() + "\nMensagem: " + contact.getMensagem());
    	
    	mailSender.send(message);
    	
	}
	
}
