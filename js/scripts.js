let user = [
	{nome: "Bruna", senha: "123", acesso: "Adm"},
	{nome: "Douglas", senha: "456", acesso: "Adm"},
	{nome: "Luiz", senha: "789", acesso: "Adm"},
    {nome: "Maria", senha: "123", acesso: "Al_Prof"},
	{nome: "Roberto", senha: "456", acesso: "Al_Prof"},
	{nome: "Ana", senha: "789", acesso: "Al_Prof"},
]

let itens = [
	{id: "1", nome: "João", item: "Caneta", local: "Sala F21", imagem: "imagem"},
	// {id: "2", nome: "Julia", item: "Celular", local: "Sala D22", imagem: "celular.jpg"},
]
// localStorage.setItem("itens", JSON.stringify(itens));
// var imagem = new image();
// imagem.src = "C:\Users\dougf\VSCode\Projeto-AplicadoII---SENAI\img.envelope.jpg";
// itens[0][4] = imagem;

function login() {
    let getNome = document.getElementById("nome").value;
	let getSenha = document.getElementById("senha").value;
    let getAcesso = document.getElementById("usuario").value;
	let validaLogin = false;

	localStorage.setItem("user", JSON.stringify(user));
		
	for (let i in user){
		if(getNome == user[i].nome && getSenha == user[i].senha && getAcesso == user[i].acesso){
			direcionaLogin(user[i].acesso);
			validaLogin = true;
			break;
	    }
    }

	if(!validaLogin){
		alert("Login Incorreto");
	}
}
    
function direcionaLogin(acesso){
	if(acesso == "Adm"){
		window.location.href = "/adm.html";
	} else {
		window.location.href = "/alu_prof.html";
	}
}

function constroiItem(idItem, nome, nomeItem, localItem, imagemItem) {
	this.id = idItem;
	this.nome = nome;
	this.item = nomeItem;
	this.local = localItem;
	this.imagem = imagemItem;
}
	
function cadastrarItem(){	

	let nome = document.getElementById("nome").value; 
	let nomeItem = document.getElementById("nomeItem").value;
	let localItem = document.getElementById("localItem").value;
	let imagemItem = document.getElementById("imagemItem").value;
	localStorage.setItem("itens", JSON.stringify(itens));
	let itens2 = JSON.parse(localStorage.getItem("itens"));
	let idItem = parseFloat(itens2[itens2.length - 1].id) + 1

	if (nome == "" || nomeItem == "" || localItem == "" || imagemItem == "") {
		alert("Preencha todos os campos")
		var flag = 1;
	} else if(flag !==1) {
		var add = new constroiItem(String(idItem), nome, nomeItem, localItem, imagemItem)

		if(!localStorage.itens){
			itens = []
		} else {
			itens = JSON.parse(localStorage.itens)
		}

		itens.push(add)
		localStorage.setItem("itens", JSON.stringify(itens));
		console.log(Object.values(itens))
		alert("Item cadastrado com sucesso")

		document.getElementById("nome").value = null;
		document.getElementById("nomeItem").value = null;
		document.getElementById("localItem").value = null;
		document.getElementById("imagemItem").value = null;
	}
}

function imprimiItens(){

	function criaTag(elemento) {
		return document.createElement(elemento)
	}

	let tabela = document.getElementById("tbitens");
	var linha = criaTag("tr");
	// let coluna = criaTag("td");        

	let itensTabela = JSON.parse(localStorage.getItem("itens"));

	itensTabela.sort(ordenacao);

	function criaCelula (tag, text){
		tag = criaTag(tag);
		tag.textContent = text;
		return tag;
	}

	let id = "";
	let nome = "";
	let item = "";
	let local = "";    
	let imagem = "";    

	for(let j = 0; j < itensTabela.length; j++){

		var linha = criaTag("tr");
		tabela.appendChild(linha);
		id = criaCelula("td", itensTabela[j].id);
		linha.appendChild(id);
		nome = criaCelula("td", itensTabela[j].nome);
		linha.appendChild(nome);
		item = criaCelula("td", itensTabela[j].item);
		linha.appendChild(item);
		local = criaCelula("td", itensTabela[j].local);
		linha.appendChild(local);
		imagem = criaCelula("td", itensTabela[j].imagem);
		linha.appendChild(imagem);
	}
}

function ordenacao(a, b, c, d, e){
	return a.id - b.id;
}