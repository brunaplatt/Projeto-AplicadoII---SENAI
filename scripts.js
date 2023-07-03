let admins = [
	{nome: "Bruna", senha: "123"},
	{nome: "Douglas", senha: "456"},
	{nome: "Luiz", senha: "789"}
]

let alunosProfessores = [
	{nome: "Maria", senha: "123"},
]

function loginAdmin() {
  let getUsuario = document.getElementById("nome").value;
	let getSenha = document.getElementById("senha").value;
  let validaLogin = false;
	
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

// let botaoEntrarAdmin = document.getElementById('btnLogar');

// botaoEntrarAdmin.addEventListener('click', function loginAdmin() {
//   let getUsuario = document.getElementById("nome").value;
// 	let getSenha = document.getElementById("senha").value;
//   let validaLogin = false;
	
// 	for (let i in admins){
// 		if(getUsuario == admins[i].nome && getSenha == admins[i].senha){
// 			validaLogin = true;
// 			break;
// 		}
// 	}

// 	if (validaLogin == true) {
// 		// alert('Sucesso');
// 		window.location.href="adm.html";
// 	} else {
// 		  alert("Login Incorreto")
// 	  }

// })

// let botaoEntrarProfAluno = document.getElementById('btnLogar');

// botaoEntrarProfAluno.addEventListener('click', function loginProfAluno() {
//   let getUsuario = document.getElementById("nome").value;
// 	let getSenha = document.getElementById("senha").value;
//   let validaLogin = false;
	
// 	for (let i in admins){
// 		if(getUsuario == admins[i].nome && getSenha == admins[i].senha){
// 			validaLogin = true;
// 			break;
// 		}
// 	}

// 	if (validaLogin == true) {
// 		// alert('Sucesso');
// 		window.location.href="adm.html";
// 	} else {
// 		  alert("Login Incorreto")
// 	  }

// })

function direcionaLoginAdmin(){
	window.location.href = "login_admin.html"
}
function direcionaLoginProfAluno(){
	window.location.href = "login_prof_aluno.html"
}