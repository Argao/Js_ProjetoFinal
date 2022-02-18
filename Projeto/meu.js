/*
Escola/curso
	Cadastro de alunos
	Cadastro de turmas
	Cadastro de alunos nas turmas(preparando para BD)
	cadastro de professores nas turmas
	Relatório de Alunos (todos ou por turma)
	Relatório de turmas em andamento
	Relatório de turmas encerradas
LOGIN(aluno só consulta suas turmas/funcionário cadastra e vê relatórios)
*/

///////////////CLASSES////////////////////////////

class Aluno {
	nome
	email
	tel
	sexo
	nascimento
	cpf
	endereco
	login
	senha
	ativo = true
	alteracao
	idade


	getNome() {
		return this.nome
	}
	setNome(nome) {
		this.nome = nome
	}

	getTel() {
		return this.tel
	}
	setTel(tel) {
		this.tel = tel
	}

	getCpf() {
		return this.cpf
	}
	setCpf(cpf) {
		let encontrou = false
		for (let i = 0; i < array_alunos.length; i++) {
			if (array_alunos[i].cpf == cpf && array_alunos[i].ativo) {
				alert("CPF já cadastrado!")
				encontrou = true
			}
		}

		if (encontrou) {
			this.cpf = "erro"
		} else {
			this.cpf = cpf
		}
	}

	getEmail() {
		return this.email
	}
	setEmail(email) {
		let encontrou = false
		for (let i = 0; i < array_alunos.length; i++) {
			if (array_alunos[i].email == email && array_alunos[i].ativo) {
				alert("E-mail já cadastrado!")
				encontrou = true
			}
		}

		if (encontrou) {
			this.email = "erro"
		} else {
			this.email = email
		}
	}

	getNascimento() {
		return this.nascimento

	}
	setNascimento(nascimento) {
		this.nascimento = nascimento
	}

	getSexo() {
		return this.sexo
	}
	setSexo(sexo) {
		this.sexo = sexo
	}

	getEndereco() {
		return this.endereco
	}
	setEndereco(endereco) {
		this.endereco = endereco
	}

	getLogin() {
		return this.login
	}
	setLogin(login) {
		let encontrou = false
		for (let i = 0; i < array_alunos.length; i++) {
			if (array_alunos[i].login == login && array_alunos[i].ativo) {
				alert("Nome de usuário já em uso!")
				encontrou = true
			}
		}

		if (encontrou) {
			this.login = "erro"
		} else {
			this.login = login
		}
	}

	getSenha() {
		return this.senha
	}
	setSenha(senha) {
		console.log(senha)
		if (senha.length < 6 && senha != "") {
			alert("A senha tem que ter no minimo 6 caracteres!")
			this.senha = "erro"
		} else {
			this.senha = senha
		}
	}
	getAlteracao() {
		return this.alteracao
	}
	setAlteracao(alteracao) {
		this.alteracao = alteracao
	}
	getIdade() {
		return this.idade
	}
	setIdade(nascimento) {
		let data_atual = new Date()
		nascimento = nascimento.split("-")
		let data_nascimento = new Date(nascimento[0], nascimento[1] - 1, nascimento[2])
		let diff = moment(data_atual, "DD/MM/YYYY HH:mm:ss").diff(data_nascimento, "DD/MM/YYYY HH:mm:ss")
		this.idade = Math.floor(moment.duration(diff).asYears())
	}

	getAtivo() {
		return this.ativo
	}
	setAtiva(ativo) {
		this.ativo = ativo
	}


	constructor(nome, email, tel, sexo, nascimento, cpf, endereco, login, senha, alteracao) {
		this.setNome(nome)
		this.setEmail(email)
		this.setTel(tel)
		this.setSexo(sexo)
		this.setNascimento(nascimento)
		this.setCpf(cpf)
		this.setEndereco(endereco)
		this.setLogin(login)
		this.setSenha(senha)
		this.setAlteracao(alteracao)
		this.setIdade(nascimento)
	}
}

class Turma {
	nome
	materia
	nivel
	faixa_etaria
	sala
	dias
	hora
	ativa = true
	alteracao

	getAtiva() {
		return this.ativa
	}
	setAtiva(ativa) {
		this.ativa = ativa
	}
	getNome() {
		return this.nome
	}
	setNome(nome) {
		let encontrou = false
		for (let i = 0; i < array_turmas.length; i++) {
			if (nome == array_turmas[i].nome && array_turmas[i].ativa) {
				alert("Já tem uma turma ativa com esse nome!")
				encontrou = true
			}
		}
		if (encontrou) {
			this.nome = "erro"
		} else {
			this.nome = nome
		}
	}

	getMateria() {
		return this.materia
	}
	setMateria(materia) {
		this.materia = materia
	}

	getNivel() {
		return this.nivel
	}
	setNivel(nivel) {
		this.nivel = nivel
	}

	getFaixa_etaria() {
		return this.faixa_etaria
	}
	setFaixa_etaria(faixa_etaria) {
		this.faixa_etaria = faixa_etaria
	}

	getSala() {
		return this.sala
	}
	setSala(sala) {
		this.sala = sala
	}

	getDias() {
		return this.dias
	}
	setDias(dias) {
		this.dias = dias
	}

	getHora() {
		return this.hora
	}
	setHora(hora) {
		this.hora = hora
	}

	getAlteracao() {
		return this.alteracao
	}
	setAlteracao(alteracao) {
		this.alteracao = alteracao
	}

	disponibilidade(sala, dias, hora) {


		let testaDisponibilidade = []
		let encontrou = false

		for (let i = 0; i < array_turmas.length; i++) {
			if (array_turmas[i].sala == sala && array_turmas[i].ativa) {
				testaDisponibilidade.push(array_turmas[i])
			}
		}

		for (let i = 0; i < testaDisponibilidade.length; i++) {
			let testa_dias = []
			for (let j = 0; j < testaDisponibilidade[i].dias.length; j++) {
				testa_dias.push(testaDisponibilidade[i].dias[j])
			}
			console.log(testa_dias)
			for (let j = 0; j < dias.length; j++) {
				if (testa_dias.indexOf(dias[j]) != -1) {
					let hora_cadastrada = converteHora(testaDisponibilidade[i].hora)
					let hora_testa = converteHora(hora)

					if (hora_testa >= hora_cadastrada && hora_testa < hora_cadastrada + 60) {
						alert("Essa sala esta ocupada no horario e dia constado")
						encontrou = true
						break
					}

				}
			}
			if (encontrou) {
				break
			}
		}

		if (encontrou) {
			return "erro"
		}

	}

	constructor(nome, materia, nivel, faixa_etaria, sala, dias, hora, alteracao) {
		this.setNome(nome)
		this.setMateria(materia)
		this.setNivel(nivel)
		this.setFaixa_etaria(faixa_etaria)
		this.setSala(sala)
		this.setDias(dias)
		this.setHora(hora)
		this.setAlteracao(alteracao)
	}
}

class Funcionario {
	nome
	login
	senha
	adm
	getNome() {
		return this.nome
	}
	setNome(nome) {
		this.nome = nome
	}
	getLogin() {
		return this.login
	}
	setLogin(login) {
		let encontrou = false

		for (let i = 0; i < array_alunos.length; i++) {
			if (login == array_alunos[i].login) {
				encontrou = true
			}
		}

		for (let i = 0; i < array_funcionarios.length; i++) {
			if (login == array_funcionarios[i].login) {
				encontrou = true
			}
		}

		if (encontrou) {
			alert("Login ja em uso!")
			this.login = "erro"
		} else {
			this.login = login
		}

	}
	getSenha() {
		return this.senha
	}
	setSenha(senha) {
		if (senha.length < 6 && senha.length > 0) {
			alert("A senha tem que ter no minimo 6 caracteres!")
			this.senha = "erro"
		} else {
			this.senha = senha
		}
	}
	getAdm() {
		return this.adm
	}
	setAdm(adm) {
		this.adm = adm
	}
	constructor(nome, login, senha, adm) {
		this.setNome(nome)
		this.setLogin(login)
		this.setSenha(senha)
		this.setAdm(adm)

	}
}

class Professores {
	nome
	materias
	alteracao

	setNome(nome){
		let encontrou = false
		for (let i = 0; i < array_professores.length; i++) {
			if (nome == array_professores[i].nome) {
				alert("Professor já cadastrado!")
				encontrou = true
			}
		}
		if (encontrou) {
			this.nome = "erro"
		} else {
			this.nome = nome
		}
	}
	constructor(nome, materias,alteracao) {
		this.setNome(nome)
		this.materias = materias
		this.alteraçao = alteracao
	}
}

///////////////////////VARIÁVEIS GLOBAIS////////////////////////

var array_alunos = JSON.parse(localStorage.getItem('array_alunos'))
var array_funcionarios = JSON.parse(localStorage.getItem('array_funcionarios'))
var array_turmas = JSON.parse(localStorage.getItem('array_turmas'))
var array_alunoTurma = JSON.parse(localStorage.getItem('array_alunoTurma'))
var array_professores = JSON.parse(localStorage.getItem('array_professores'))
var array_professorTurma = JSON.parse(localStorage.getItem('array_professorTurma'))

console.log(array_professores)
console.log(array_alunos)
console.log(array_funcionarios)
console.log(array_turmas)
console.log(array_alunoTurma)
console.log(array_professorTurma)

///////////////////////---------FUNÇÕES------------////////////////////////



/////////////////Funções de login /////////////////////////
function logar() {
	let login = document.getElementById("inputLogin").value
	let senha = document.getElementById("inputSenha").value

	if (login == "" || senha == "") {

		window.alert("Preencha todos os campos!")

	} else {

		let radio = document.getElementsByName('radioLogin')
		let radio_value

		for (let i = 0; i < radio.length; i++) {
			if (radio[i].checked) {
				radio_value = radio[i].value
				break
			}
		}

		if (radio_value == "1") {
			loginAluno(login, senha)
		} else {
			loginFuncionario(login, senha)
		}

	}
}

function loginAluno(login, senha) {
	let encontrou = false
	for (let i = 0; i < array_alunos.length; i++) {
		if (array_alunos[i].login == login && array_alunos[i].senha == senha && array_alunos[i].ativo) {
			encontrou = true
			sessionStorage.setItem("aluno_logado",JSON.stringify(array_alunos[i]))
			window.location.href = ("./pag_aluno.html")
		}
	}
	if (!encontrou) {
		alert("Login ou Senha incorretos!")
	}
}

function loginFuncionario(login, senha) {
	let encontrou = false

	if (login == "admin" && senha == "admin") {
		encontrou = true
		let aux = {
			nome: "admin",
			login: "admin",
			adm: "sim"
		}

		sessionStorage.setItem('funcionario_logado', JSON.stringify(aux))
		console.log(JSON.parse(sessionStorage.getItem('funcionario_logado')))
		window.location.href = ("./pag_funcionario.html")
	} else {
		for (let i = 0; i < array_funcionarios.length; i++) {
			if ((array_funcionarios[i].login == login && array_funcionarios[i].senha == senha)) {
				encontrou = true
				sessionStorage.setItem('funcionario_logado', JSON.stringify(array_funcionarios[i]))
				window.location.href = ("./pag_funcionario.html")
			}
		}
	}

	if (!encontrou) {
		alert("Login ou Senha incorretos!")
	}
}

//////////////////Funções de cadastro//////////////////////
function cadastraAluno() {

	let alteracao = JSON.parse(sessionStorage.getItem('funcionario_logado'))

	let aluno = new Aluno(
		document.getElementById("inputNome").value,
		document.getElementById("inputEmail").value,
		document.getElementById("inputTel").value,
		document.getElementById("selectSexo").value,
		document.getElementById("inputNascimento").value,
		document.getElementById("inputCpf").value,
		document.getElementById("inputEndereco").value,
		document.getElementById("inputLoginCadastro").value,
		document.getElementById("inputSenhaCadastro").value,
		alteracao.login
	)




	if (aluno.nome == "" || aluno.email == "" || aluno.tel == "" || aluno.sexo == "" || aluno.nascimento == "" || aluno.cpf == "" || aluno.endereco == "" || aluno.login == "" || aluno.senha == "") {
		alert("Preencha todos os campos!")
	} else if (aluno.cpf == "erro" || aluno.email == "erro" || aluno.login == "erro" || aluno.senha == "erro") {} else {
		array_alunos.push(aluno)
		localStorage.setItem('array_alunos', JSON.stringify(array_alunos))
		alert("Aluno cadastrado com sucesso!")
		document.formCadastroAlunos.reset()
	}

	console.log(array_alunos)
}

function cadastraTurma() {

	let checkbox = document.getElementsByName("inputDiasAula")
	let checkbox_value = []
	let alteracao = JSON.parse(sessionStorage.getItem('funcionario_logado'))

	for (let i = 0; i < checkbox.length; i++) {
		if (checkbox[i].checked) {
			checkbox_value.push(checkbox[i].value)
		}
	}


	let turma = new Turma(
		document.getElementById("inputNomeTurma").value,
		document.getElementById("selectCursos").value,
		document.getElementById("selectNivel").value,
		document.getElementById("selectFaixaEtaria").value,
		document.getElementById("inputSala").value,
		checkbox_value,
		document.getElementById("inputHorario").value,
		alteracao.login
	)
	console.log(turma)

	if (turma.nome == "" || turma.sala == "" || turma.dias == "" || turma.hora == "" || turma.materia == "" || turma.nivel == "" || turma.faixa_etaria == "") {
		alert("Preencha todos os campos!")
	} else if (turma.disponibilidade(turma.sala, turma.dias, turma.hora) == "erro" || turma.nome == "erro"){

	} else{
		array_turmas.push(turma)
		localStorage.setItem('array_turmas', JSON.stringify(array_turmas))
		alert("Turma cadastrada com sucesso!")
		document.formCadastroTurmas.reset()
	}
	console.log(array_turmas)


}

function cadastraAlunoNaTurma() {
	let cpf = document.getElementById("inputCpfAlunoTurma").value
	let turma = document.getElementById("selectTurmaAluno").value

	if (cpf == "") {
		alert("Preencha todos os campos!")
	} else {
		let encontrou = false
		let alunoArray
		let turmaArray
		for (let i = 0; i < array_alunos.length; i++) {
			if (cpf == array_alunos[i].cpf) {

				encontrou = array_alunos[i].cpf
				alunoArray = array_alunos[i]
				break
			}
		}

		if (encontrou) {
			let alunoTurma = {
				aluno: encontrou,
				turma: turma
			}
			let achou = false

			for (let i = 0; i < array_alunoTurma.length; i++) {
				if (array_alunoTurma[i].aluno == alunoTurma.aluno && array_alunoTurma[i].turma == alunoTurma.turma) {
					achou = true
					break
				}
			}

			if (achou) {
				alert("Aluno ja cadastrado nessa turma!")
			} else {
				for (let i = 0; i < array_turmas.length; i++) {
					console.log("entrou")
					console.log(array_turmas[i].nome)
					console.log(turma)
					if (array_turmas[i].nome == turma) {
						turmaArray = array_turmas[i]
					}
				}

				if ((alunoArray.idade < 15 && turmaArray.faixa_etaria == "2")) {
					alert("Esse aluno é novo de mais para essa turma!")
				} else if ((alunoArray.idade >= 15 && turmaArray.faixa_etaria == "1")) {
					alert("Esse aluno é velho de mais para essa turma!")
				} else {
					array_alunoTurma.push(alunoTurma)
					localStorage.setItem('array_alunoTurma', JSON.stringify(array_alunoTurma))
					alert("Aluno cadastrado na turma com sucesso!")
					document.getElementById("inputCpfAlunoTurma").value = ""
				}
			}

		} else {
			alert("Cpf digitado nao encontrado!")
		}

	}
	console.log(array_alunoTurma)
}

function cadastrarProfessorNaTurma() {

	// se der tempo, melhorar !
	let professor = document.getElementById("selectProfessor").value
	let turma = document.getElementById("selectTurmaProfessor").value
	let encontrou = false
	let professorTurma = {
		professor: professor,
		turma: turma
	}

	for (let i = 0; i < array_professorTurma.length; i++) {
		if (array_professorTurma[i].turma == turma) {
			encontrou = true
			break
		}
	}

	if (encontrou) {
		alert("Essa turma já tem um professor!")
	} else if(professorTurma.turma == ""){
		alert("Nenhuma turma disponível para esse professor")
	}else{
		array_professorTurma.push(professorTurma)
		localStorage.setItem('array_professorTurma', JSON.stringify(array_professorTurma))
		alert("Professor cadastrado na turma com sucesso!")
		carregarTurmasProfessor()
	}

	console.log(array_professorTurma)


}

function cadastraFuncionario() {

	let adm = document.getElementsByName("radioAdm")

	for (let i = 0; i < adm.length; i++) {
		if (adm[i].checked) {
			adm = adm[i].value
			break
		}
	}

	let funcionario = new Funcionario(
		document.getElementById("inputNomeFuncionario").value,
		document.getElementById("inputLoginCadastroFuncionario").value,
		document.getElementById("inputSenhaCadastroFuncionario").value,
		adm
	)

	if (funcionario.nome == "" || funcionario.login == "" || funcionario.senha == "") {
		alert("Preencha todos os campos!")
	} else if (funcionario.login == "erro" || funcionario.senha == "erro") {

	} else {
		array_funcionarios.push(funcionario)
		localStorage.setItem('array_funcionarios', JSON.stringify(array_funcionarios))
		alert("Funcionario cadastrado com sucesso!")
		document.formCadastroFuncionarios.reset()
	}

	console.log(array_funcionarios)
}
function cadastraProfessor(){
	let checkbox = document.getElementsByName("checkboxeMaterias")
	let checkbox_value = []

	for (let i = 0; i < checkbox.length; i++) {
		if (checkbox[i].checked) {
			checkbox_value.push(checkbox[i].value)
		}
	}

	let professor = new Professores(
		document.getElementById("inputNomeProfessor").value,
		checkbox_value,
		JSON.parse(sessionStorage.getItem('funcionario_logado')).login
	)

	if(professor.nome == "" || professor.materias == ""){
		alert("Preencha todos os campos")
	}else if(professor.nome == "erro"){
	}else{
		array_professores.push(professor)
		localStorage.setItem("array_professores",JSON.stringify(array_professores))
		alert("Professor cadastrado com sucesso!")
		document.formCadastroProfessor.reset()
	}

}

////////////////Funções de impressão///////////////////////

function relatorioDeAlunos() {

	let texto = ""
	if (array_alunos.length == 0) {
		texto = "<h3 class='titulo-relatorio'>Nenhum aluno cadastrado</h3>"
	} else {
		texto = "<h2 class='titulo-relatorio'>Relatorio de Alunos</h2>"
		for (let i = 0; i < array_alunos.length; i++) {
			let turmas = "<span class='col-md-3'>Turmas: </span><div class='col-md-9'>"
			let encontrou = false

			for (let j = 0; j < array_alunoTurma.length; j++) {
				console.log(array_alunoTurma[j].aluno)
				console.log("oi")
				if (array_alunos[i].cpf == array_alunoTurma[j].aluno) {
					turmas += array_alunoTurma[j].turma + ", "
					encontrou = true
				}
			}

			if (!encontrou) {
				turmas += "Esse aluno não está matriculado em nenhuma turma!"
			}

			texto += "<div class = 'relatorio-box row'>" + "<br/>" +
				"<span class='col-md-3'>Nome: </span><div class='col-md-9'>" + array_alunos[i].nome + "</div>" +
				"<span class='col-md-3'> CPF: </span><div class='col-md-9'>" + array_alunos[i].cpf + "</div>" +
				"<span class='col-md-3'>Tel: </span><div class='col-md-9'>" + array_alunos[i].tel + "</div>" +
				"<span class='col-md-3'>Sexo: </span><div class='col-md-9'>" + switchSexo(array_alunos[i].sexo) + "</div>" +
				"<span class='col-md-3'>Nascimento: </span><div class='col-md-9'>" + formataData(array_alunos[i].nascimento) + "</div>" +
				"<span class='col-md-3'>Endereço: </span><div class='col-md-9'>" + array_alunos[i].endereco + "</div>" +
				"<span class='col-md-3'>Login: </span><div class='col-md-9'>" + array_alunos[i].login + "</div>" +
				turmas + "</div></div>"

		}
	}

	document.getElementById("mostraAlunos").innerHTML = texto

}

function turmasEmAndamento() {
	let texto = ""
	if (array_turmas.length == 0) {
		texto = "<h2>Nenhuma turma cadastrada!</h2>"
	} else {
		let turmasAndamento = []



		for (let i = 0; i < array_turmas.length; i++) {
			if (array_turmas[i].ativa) {
				turmasAndamento.push(array_turmas[i])
			}
		}
		texto = "<h2  class='titulo-relatorio'> Turmas em Andamento</h2>"

		for (let i = 0; i < turmasAndamento.length; i++) {

			let alunos = ""
			let professor = ""
			let encontrouAlunos = false
			let encontrouProfessor = false
			let dias = ""

			for (let j = 0; j < array_professorTurma.length; j++) {
				if (turmasAndamento[i].nome == array_professorTurma[j].turma) {
					professor += array_professorTurma[j].professor + ", "
					encontrouProfessor = true
				}
			}

			for (let j = 0; j < array_alunoTurma.length; j++) {
				if (turmasAndamento[i].nome == array_alunoTurma[j].turma) {
					alunos += encontraAlunoPorCpf(array_alunoTurma[j].aluno) + ", "
					encontrouAlunos = true
				}
			}

			for (let j = 0; j < turmasAndamento[i].dias.length; j++) {
				dias += switchDia(turmasAndamento[i].dias[j]) + ", "
			}

			

			if (!encontrouAlunos) {
				alunos = "Nenhum aluno ainda foi cadastrado na turma!"
			}
			if (!encontrouProfessor) {
				professor = "Nenhum professor ainda foi cadastrado na turma!"
			}



			console.log(i)
			texto += 

				"<div class = 'turmasAndamento turmas-ativas-box row' id ='turmasAndamento" + i + "' >" +
				"<div class='col-md-11 '> </div>"+
				"<div class='col-md-1 '> "+
				"<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor'    onclick=\" encerraTurma('" + turmasAndamento[i].nome + "')\"     class='bi bi-x-circle-fill ' viewBox='0 0 16 16'> <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z'/>  </svg>"+ "</div>" +
				"<span class='col-md-3'>Nome: </span><div class='col-md-9'>" + turmasAndamento[i].nome + "</div>" +
				"<span class='col-md-3'>Materia: </span><div class='col-md-9'>" + switchMateria(turmasAndamento[i].materia) + "</div>" +
				"<span class='col-md-3'>Nível: </span><div class='col-md-9'>" + switchNivel(turmasAndamento[i].nivel) + "</div>" +
				"<span class='col-md-3'>Faixa etária: </span><div class='col-md-9'>" + switchFaixaEtaria(turmasAndamento[i].faixa_etaria) + "</div>" +
				"<span class='col-md-3'>Dias de aula: </span><div class='col-md-9'>" + dias + "</div>" +
				"<span class='col-md-3'>Hora de início: </span><div class='col-md-9'>" + turmasAndamento[i].hora +"h"+ "</div>" +
				"<span class='col-md-3'>Sala: </span><div class='col-md-9'>" + turmasAndamento[i].sala + "</div>" +
				"<span class='col-md-3'>Professor: </span><div class='col-md-9'>" + professor + "</div>" +
				"<span class='col-md-3'>Alunos: </span><div class='col-md-9'>" + alunos + "</div>" +
				"</div>"


		}

	}
	document.getElementById("mostraTurmasAndamento").innerHTML = texto
}

function turmasEncerradas() {
	let texto = ""
	if (array_turmas.length == 0) {
		texto = "<h2>Nenhuma turma cadastrada!</h2>"
	} else {
		texto = "<h2  class='titulo-relatorio'> Turmas Encerradas</h2>"
		let turmasEncerradas = []



		for (let i = 0; i < array_turmas.length; i++) {
			if (!array_turmas[i].ativa) {
				turmasEncerradas.push(array_turmas[i])
			}
		}

		for (let i = 0; i < turmasEncerradas.length; i++) {

			let alunos = ""
			let professor = ""
			let encontrouAlunos = false
			let encontrouProfessor = false
			let dias = ""

			for (let j = 0; j < array_professorTurma.length; j++) {
				if (turmasEncerradas[i].nome == array_professorTurma[j].turma) {
					professor += array_professorTurma[j].professor + ", "
					encontrouProfessor = true
				}
			}

			for (let j = 0; j < array_alunoTurma.length; j++) {
				if (turmasEncerradas[i].nome == array_alunoTurma[j].turma) {
					alunos += encontraAlunoPorCpf(array_alunoTurma[j].aluno) + ", "
					encontrouAlunos = true
				}
			}

			for (let j = 0; j < turmasEncerradas[i].dias.length; j++) {
				dias += switchDia(turmasEncerradas[i].dias[j]) + ", "
			}


			if (!encontrouAlunos) {
				alunos = "Nenhum aluno ainda foi cadastrado na turma!"
			}
			if (!encontrouProfessor) {
				professor = "Nenhum professor ainda foi cadastrado na turma!"
			}

			console.log(i)
			texto += "<div class = 'turmasEncerradas relatorio-box row' id ='turmasEncerradas" + i + "'>" + "<br/>" +
				"<span class='col-md-3'> Nome: </span> <div class='col-md-9'>" + turmasEncerradas[i].nome + "</div>" +
				"<span class='col-md-3'>Materia: </span> <div class='col-md-9'>" + switchMateria(turmasEncerradas[i].materia) + "</div>" +
				"<span class='col-md-3'>Nível: </span> <div class='col-md-9'>" + switchNivel(turmasEncerradas[i].nivel) + "</div>" +
				"<span class='col-md-3'>Faixa etária: </span> <div class='col-md-9'>" + switchFaixaEtaria(turmasEncerradas[i].faixa_etaria) + "</div>" +
				"<span class='col-md-3'>Dias de aula: </span> <div class='col-md-9'>" + dias + "</div>" +
				"<span class='col-md-3'>Hora de início: </span> <div class='col-md-9'>" + turmasEncerradas[i].hora +"h"+ "</div>" +
				"<span class='col-md-3'>Sala: </span> <div class='col-md-9'>" + turmasEncerradas[i].sala + "</div>" +
				"<span class='col-md-3'>Professor: </span> <div class='col-md-9'>" + professor + "</div>" +
				"<span class='col-md-3'>Alunos: </span> <div class='col-md-9'>" + alunos + "</div>" +
				"</div>"
		}
		if (texto == "") {
			texto = "<h2>Nenhuma turma encerradas.</h2>"
		}

	}
	document.getElementById("mostraTurmasEncerradas").innerHTML = texto
}

function mostraDadosDoAluno(){
	let texto = "<h2  class='titulo-relatorio'>Dados do Aluno</h2>"
	let aluno = JSON.parse(sessionStorage.getItem("aluno_logado"))


	texto += "<div class = 'relatorio-box row'>" + "<br/>" +
	"<span class='col-md-3'>Nome: </span><div class='col-md-9'>" + aluno.nome + "</div>" +
	"<span class='col-md-3'> CPF: </span><div class='col-md-9'>" + aluno.cpf + "</div>" +
	"<span class='col-md-3'>Tel: </span><div class='col-md-9'>" + aluno.tel + "</div>" +
	"<span class='col-md-3'>Sexo: </span><div class='col-md-9'>" + switchSexo(aluno.sexo) + "</div>" +
	"<span class='col-md-3'>Nascimento: </span><div class='col-md-9'>" + formataData(aluno.nascimento) + "</div>" +
	"<span class='col-md-3'>Endereço: </span><div class='col-md-9'>" + aluno.endereco + "</div>" +
	"<span class='col-md-3'>Login: </span><div class='col-md-9'>" + aluno.login + "</div>" +
	"</div>"

	document.getElementById("mostraDados").innerHTML = texto


}

function mostraTurmasDoAluno(){
	let texto = "<h2  class='titulo-relatorio'>Turmas do Aluno</h2>"
	let aluno = JSON.parse(sessionStorage.getItem("aluno_logado"))
	let turmaNome = []
	let encontrou = false
	let turmas = []
	dias = ""

	for(let i = 0; i < array_alunoTurma.length;i++){

		if (array_alunoTurma[i].aluno == aluno.cpf) {
			turmaNome.push(array_alunoTurma[i].turma)
		}
	}
	console.log(turmaNome)
	for(let i = 0; i < turmaNome.length;i++){
		for(let j = 0; j < array_turmas.length;j++){
			if(turmaNome[i] == array_turmas[j].nome && array_turmas[j].ativa){
				turmas.push(array_turmas[j])
				encontrou = true
			}
		}

	}
	if(encontrou){
		
		for(let i = 0; i< turmas.length;i++){
			let professor = ""
			let encontrouProfessor = false

			for(let j = 0; j < array_professorTurma.length ; j++){
				if(turmas[i].nome == array_professorTurma[j].turma){
					professor = array_professorTurma[j].professor
					encontrouProfessor = true
					break
				}
			}
			for (let j = 0; j < turmas[i].dias.length; j++) {
				dias += switchDia(turmas[i].dias[j]) + ", "
			}

			if(!encontrouProfessor){
				professor = "Nenhum professor ainda foi cadastrado na turma!"
			}

			texto += "<div class = 'relatorio-box row' >" + "<br/>" +
			"<span class='col-md-3'> Nome: </span> <div class='col-md-9'>" + turmas[i].nome+ "</div>" +
			"<span class='col-md-3'>Materia: </span> <div class='col-md-9'>" + switchMateria(turmas[i].materia) + "</div>" +
			"<span class='col-md-3'>Nível: </span> <div class='col-md-9'>" + switchNivel(turmas[i].nivel) + "</div>" +
			"<span class='col-md-3'>Faixa etária: </span> <div class='col-md-9'>" + switchFaixaEtaria(turmas[i].faixa_etaria) + "</div>" +
			"<span class='col-md-3'>Dias de aula: </span> <div class='col-md-9'>" + dias + "</div>" +
			"<span class='col-md-3'>Hora de início: </span> <div class='col-md-9'>" + turmas[i].hora +"h"+ "</div>" +
			"<span class='col-md-3'>Sala: </span> <div class='col-md-9'>" + turmas[i].sala + "</div>" +
			"<span class='col-md-3'>Professor: </span> <div class='col-md-9'>" + professor + "</div>" +
			"</div>"

		}


	}else{
		texto = "<h2  class='titulo-relatorio'>Você não está matriculado em nenhuma turma</h2>"

	}

	document.getElementById("mostraTurmasDoAluno").innerHTML = texto
}


///////////////Funções para carregar algo//////////////////

function carregarTurmasAluno() {
	let options = ""

	for (let i = 0; i < array_turmas.length; i++) {
		if (array_turmas[i].ativa) {
			options += "<option value'" + array_turmas[i].nome + " '>" + array_turmas[i].nome + "</option>"
		}
	}

	document.getElementById("selectTurmaAluno").innerHTML = options
}

function carregarTurmasProfessor() {

	let options2 = ""
	let materias 
	let encontrou = false
	let professorNome = document.getElementById("selectProfessor").value
	console.log(professorNome)
	for (let i = 0; i < array_professores.length; i++) {
		if (professorNome == array_professores[i].nome) {
			materias = array_professores[i].materias
		}
	}



	

	for (let i = 0; i < materias.length; i++) {
		for (let j = 0; j < array_turmas.length; j++) {
			if (materias[i] == array_turmas[j].materia && array_turmas[j].ativa && verificaProfessorNaTurma(array_turmas[j].nome)) {
				encontrou = true
				options2 += "<option value'" + array_turmas[j].nome + " '>" + array_turmas[j].nome + "</option>"
			}
		}
	}

	if(!encontrou){
		options2 = "<option value = \"\">Nenhuma turma para esse professor</option>"
	}

	document.getElementById("selectTurmaProfessor").innerHTML = options2

}

function carregarProfessores() {
	let options = ""
	for (let i = 0; i < array_professores.length; i++) {
		options += "<option value'" + array_professores[i].nome + " '>" + array_professores[i].nome + "</option>"
	}
	document.getElementById("selectProfessor").innerHTML = options
}

function mostraCadastraFuncionarios() {
	let funcionario_logado = JSON.parse(sessionStorage.getItem('funcionario_logado'))

	if (funcionario_logado.adm == "sim") {
		document.getElementById("li_cadastraFuncionario").style.display = "block"
	}

}

///////////////Funções auxiliares//////////////////////////

function converteHora(hora) {
	hora = hora.split(":")
	hora[0] = Number(hora[0]) * 60
	hora[1] = Number(hora[1])
	hora = hora[0] + hora[1]

	return hora
}

function switchSexo(sexo) {
	switch (sexo) {
		case "m":
			return "Masculino"
		case "f":
			return "Feminino"
		case "o":
			return "Outros"
	}
}

function formataData(data) {
	let nascimento = data.split("-")
	let data_formatada = ""
	return data_formatada.concat(nascimento[2], "/", nascimento[1], "/", nascimento[0])
}

function switchMateria(materia) {
	switch (materia) {
		case "1":
			return "Teclado e Piano"
		case "2":
			return "Violão e Guitarra"
		case "3":
			return "Baixo"
		case "4":
			return "Bateria"
		case "5":
			return "Percussão"
		case "6":
			return "Canto"
		case "7":
			return "Cordas"
		case "8":
			return "Teoria Musical "
		case "9":
			return "Sopro"
		case "10":
			return "Produção Musical"
	}
}

function switchNivel(nivel) {
	switch (nivel) {
		case "1":
			return "Iniciante"
		case "2":
			return "Intermediário"
		case "3":
			return "Avançado"
	}
}

function switchFaixaEtaria(faixa) {
	switch (faixa) {
		case "1":
			return "Infantil"
		case "2":
			return "Jovens e Adultos"
	}
}

function switchDia(dia) {
	switch (dia) {
		case "1":
			return "Domingo"
		case "2":
			return "Segunda"
		case "3":
			return "Terça"
		case "4":
			return "Quarta"
		case "5":
			return "Quinta"
		case "6":
			return "Sexta"
		case "7":
			return "Sábado"
	}
}

function encontraAlunoPorCpf(cpf) {
	for (let i = 0; i < array_alunos.length; i++) {
		if (cpf == array_alunos[i].cpf) {
			return array_alunos[i].nome
		}
	}
}

function encerraTurma(turma) {
	if (window.confirm("Você realmente deseja encerrar essa turma?")) {
		for (let i = 0; i < array_turmas.length; i++) {
			if (array_turmas[i].nome == turma && array_turmas[i].ativa) {
				array_turmas[i].ativa = false
				localStorage.setItem('array_turmas', JSON.stringify(array_turmas))
				turmasEmAndamento()
			}
		}
	}
}

function verificaCadastroAlunoTurma(){
	if(array_alunos.length == 0 || array_turmas.length == 0){
		document.getElementById("li_cadastroAlunoTurma").style.display = "none"
	}
}

function verificaCadastroProfessorTurma(){
	if(array_turmas.length == 0 || array_professores.length == 0 ){
		document.getElementById("li_cadastroProfessorTurma").style.display = "none"
	}
}

function sair(){
	if(window.confirm("Você realmente deseja sair?")){
		window.location.href = ("./index.html")
	}
}
/*
function verProximaAula(){
	let data = new Date()
	let hoje = Number(data.getDay() + 1)
	let horaAtual = moment().format('HH:mm')
	console.log(hoje)
	let aluno = JSON.parse(sessionStorage.getItem("aluno_logado"))
	
	let turmas = []

	for(let i = 0; i < array_alunoTurma.length;i++){
		if(aluno.cpf == array_alunoTurma[i].aluno){
			for(let j = 0; i < array_turmas.length;j++){
				if(array_alunoTurma[i].turma == array_turmas[j].nome){
					turmas.push(array_turmas[j])
				}
			}
		}
	}

	if(turmas.length == 0){
		return "erro"
	}else{
		let diasDeAula = []
		 
		for(let i = 0; i < turmas.length;i++){
			diasDeAula.push([
				Number(turmas[i].dias),
				turmas[i].hora,
				turma[i].sala
			])
		}
		let aulaMaisProxima = diasDeAula[0]

		for(let i = 0; i < diasDeAula.length; i ++){
			if(diasDeAula[i][0] == hoje){
				if (converteHora(diasDeAula[i][2] < converteHora(horaAtual))) {

				}
			}
		}
	}
	
}

*/

function bemVindo(){
	
	let aluno = JSON.parse(sessionStorage.getItem("aluno_logado")).nome
	document.getElementById("bem-vindo").innerHTML = "<h2><span>Bem vindo <br/></span>"+aluno+"</h2>"
	console.log(aluno)
}
function verificaProfessorNaTurma(turma){
	for(let i = 0; i < array_professorTurma.length ;i++){
		if (turma == array_professorTurma[i].turma) {
			return false
		}
	}		
	return true
}