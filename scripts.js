let admins = [
	{nome: "Bruna", senha: "123"},
	{nome: "Douglas", senha: "456"},
	{nome: "Luiz", senha: "789"}
]

let alunosProfessores = [
	{nome: "Maria", senha: "123"},
	{nome: "Roberto", senha: "456"},
	{nome: "Ana", senha: "1789"},
]

let itens = [
	{id: "1", nome: "João", item: "Caneta", local: "Sala F21", imagem: "caneta.jpg"},
	{id: "2", nome: "Julia", item: "Celular", local: "Sala D22", imagem: "celular.jpg"},
]

function loginAdmin() {
    let getUsuario = document.getElementById("nome").value;
	let getSenha = document.getElementById("senha").value;
    let validaLogin = false;
	localStorage.setItem("admins", JSON.stringify(admins));
	
	for (let i in admins){
		if(getUsuario == admins[i].nome && getSenha == admins[i].senha){
			validaLogin = true;
			break;
		}
	}

	if (validaLogin == true) {
		// alert('Sucesso');
		window.location.href="adm.html";
	} else {
		  alert("Login Incorreto")
	  }
}

function loginProfAluno() {
	let getUsuario = document.getElementById("nome").value;
	let getSenha = document.getElementById("senha").value;
	let validaLogin = false;
	
	for (let i in alunosProfessores){
		if(getUsuario == alunosProfessores[i].nome && getSenha == alunosProfessores[i].senha){
			validaLogin = true;
			break;
		}
	}

	if (validaLogin == true) {
		// alert('Sucesso');
		window.location.href="alu_prof.html";
	} else {
			alert("Login Incorreto")
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
		var globo = 1;
	} else if(globo !==1) {
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

function direcionaLoginAdmin(){
	window.location.href = "login_admin.html"
}
function direcionaLoginProfAluno(){
	window.location.href = "login_prof_aluno.html"
}
function logout(){
	window.location.href = "index.html"
}