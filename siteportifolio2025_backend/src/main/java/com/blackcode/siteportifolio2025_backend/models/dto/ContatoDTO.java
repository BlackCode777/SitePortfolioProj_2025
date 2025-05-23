package com.blackcode.siteportifolio2025_backend.models.dto;

public class ContatoDTO {
	
	private String nome;
	private String email;
	private String mensagem;
	
	public ContatoDTO() {
	}

	public ContatoDTO( String nome, String email, String mensagem) {
		this.nome = nome;
		this.email = email;
		this.mensagem = mensagem;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}	

}
