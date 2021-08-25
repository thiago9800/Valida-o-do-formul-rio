var button1 = document.getElementById("Validar");
button1.addEventListener("click", verificar);

var button2 = document.getElementById("butassin");
button2.addEventListener("click", assinar);
/**************************************
                ↑↑ botão ↑↑
 **************************************/
function verificar() {
    var dado_formulario = {
        Name: Nome(),
        Cpf: Cpf(),
        Email: Email(),
        Birth_date: Aniversario(),
        Salario: Salario(),
        Sexo: Sexo(),
        Time: Time_de_Futebol(),
        Planos: Planos(),
        Premiere: Premiere(),
        Total: Total(),
        tempo: contador,
    }
    /**********************************************************
     ↑↑ variável que armazena todos os campos do formulario ↑↑
     *********************************************************/
    var acesso = Login();

    if (acesso != false &&
        dado_formulario.Name != false &&
        dado_formulario.Cpf != false &&
        dado_formulario.Birth_date != false &&
        dado_formulario.Salario != false &&
        dado_formulario.Time != false &&
        dado_formulario.Planos != false &&
        dado_formulario.Premiere != false) {
        /***************************************************************
        ↑↑ esse if verificar se algum campo do formulario nâo foi preenchido ↑↑
        ***************************************************************/
        document.getElementById("butassin").disabled = false;
    }
}
function assinar() {

    var json = JSON.stringify(verificar.dado_formulario);
    console.log(json);
    document.write("<h1>Dados</h1>");//escreve o titulo do json
    document.write(json);//escreve os dados do furmulario no json
    return json;
    /**********************************
    ↑↑ cria e prenche o arquivo json ↑↑
     **********************************/
}

/***********************************************************************
↓↓ funções para verificar se os dados do formulario foram preenchidos ↓↓
 ***********************************************************************/
function Nome() {

    if (document.getElementById("nome").value == "") {
        alert("Nome esta vazio")
        return (false);
    } else {
        return (document.getElementById('nome').value)
    }
}
function Email() {
    if (document.getElementById("email").value == "") {
        alert("Email esta vazio")
        return (false);
    } else {
        return (document.getElementById("email").value);
    }
}
function Cpf() {
    if (document.getElementById("cpf").value == "") {
        alert("CPF esta vazio")
        return (false);
    } else {
        var strCPF = TestaCPF(document.getElementById("cpf").value);
        if (strCPF != true) {
            alert("CPF invalido");
            return (false);
        } else {

            var cpf_errado = document.getElementById("cpf").value;
            r = cpf_errado.split("");//transformar uma string em um array separrando cada letra
            var cpf_certo = r[0] + r[1] + r[2] + "." + r[3] + r[4] + r[5] + "." + r[6] + r[7] + r[8] + "-" + r[9] + r[10]//combina o array em uma string 

            return (cpf_certo)
        }
    }
}
function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}
function Aniversario() {
    if (document.getElementById("nascimento").value == "") {
        alert("Data Nascimento esta vazio")
        return (false);
    } else {
        return (document.getElementById("nascimento").value)
    }
}
function Salario() {
    if (document.getElementById("salario").value == "") {
        alert("Salario esta vazio")
        return (false);
    } else {
        return (document.getElementById("salario").value)
    }
}
function Sexo() {
    if (document.getElementById("sexoM").checked == true) {
        return ("M");
    }
    if (document.getElementById("sexoF").checked == true) {
        return ("F")
    }
}
function Time_de_Futebol() {
    if (document.getElementById("times").value == "") {
        alert("Time não escolido")
        return (false);
    } else {
        return (document.getElementById("times").value)
    }
}
function Planos() {
    var planosM = document.getElementById("planosM").checked
    var planosQ = document.getElementById("planosQ").checked
    var planosA = document.getElementById("planosA").checked
    if (planosM == true) {
        return ("M");
    }
    if (planosQ == true) {
        return ("Q")
    }
    if (planosA == true) {
        return ("A")
    }
    if (planosM == false && planosQ == false && planosA == false) {
        alert("escolha um plano")
        return (false);
    }
}
function Premiere() {
    var premiereE = document.getElementById("premiereE").checked;
    var premiereC = document.getElementById("premiereC").checked
    if (premiereE == true) {
        return ("E");
    }
    if (premiereC == true) {
        return ("Q");
    }
    if (premiereC == false && premiereE == false) {
        alert("escolha um das opções do Premiere");
        return (false);
    }
}
function Total() {
    return (document.getElementById("total").value)
}
function Login() {
    if (document.getElementById("login").value == "" || document.getElementById("senha").value == "") {
        alert("login ou senha invalida");
        return (false);
    } else {
        if (document.getElementById("login").value == "Usuario") {
            if (document.getElementById("senha").value == "Abc$123") {
                return (true);
            } else {
                return (false);
            }
        } else {
            return (false);
        }

    }
}

var d = new Date();
document.getElementById("datahoje").value = d;



setInterval(contartempo, 1000);


var contador=1;
function contartempo(){ 
	document.getElementById("tempo").innerHTML = contador;
	contador++;
}

