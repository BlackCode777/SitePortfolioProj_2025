package com.blackcode.siteportifolio2025_backend.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.blackcode.siteportifolio2025_backend.models.dto.ContatoDTO;
import com.blackcode.siteportifolio2025_backend.services.EmailService;

@RestController
@RequestMapping("/contact")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {
	
	private final EmailService emailService;
	
	public ContactController(EmailService emailService) {
		this.emailService = emailService;
	}
	
	@PostMapping("/send")
	public ResponseEntity<Map<String, String>> sendEmail(@RequestBody ContatoDTO contact) {
	    emailService.sendEmail(contact);
	    Map<String, String> response = new HashMap<>();
	    response.put("message", "Email enviado com sucesso!");
	    return ResponseEntity.ok(response);
	}

}
