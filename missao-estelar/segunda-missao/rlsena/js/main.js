//Segunda Missão Estelar JS

/* Apertem os cintos!

Para adentrarmos ao hiper espaço
rumo a uma nova missão estelar JS.

:)

*/

//Declaração de variáveis
var missao = "Segunda Missão Estelar JS";
var hiperespaco = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";
var nomeCliente = "João";
var renda = "1000";
var dataNascimento = "1980/01/01";
var ativo = true;
var ClienteArray = [['nome: ', 'maria'], ['renda: ', '3000'], ['dataNascimento: ', new Date("1990-02-02")], ['ativo: ', true]];
var ClienteObject = { nome: 'Carlos', renda: '5000', dataNascimento: new Date("1970-03-03"), ativo: false };
var hiperEspacoRegExp = new RegExp("Estelar");
var textoMissao = "Apertem os cintos para adentramos ao hiper-espaço rumo a uma nova Missão Estelar JS!:)";



//Execuções
console.log(missao + " " + "Tipo de dado: " + typeof missao);
console.log(hiperespaco + " " + "Tipo de dado: " + typeof hiperespaco);
console.log("******");
exibirDadosClienteVariaveis();
console.log("******");
exibirDadosClienteArray();
console.log("******");
exibirDadosClienteObject();
console.log(retornaDataAtualFormatada());
console.log("Expressão encontrada: " + (hiperEspacoRegExp.test(textoMissao) == true ? "Sim" : "Não"));
console.log(hiperEspacoRegExp.exec(textoMissao));

//15

try {
    for (var i = 30, c = 0; i >= 0; i-- , c++) {
        console.log(i);

        if (c == 29) {

            throw new Error("Ocoreru um erro na iteração " + c);

        }
    }
} catch (error) {

    console.log(error.nome);
    console.log(error.message);


} finally {

    console.log("Fim da execução FOR! Executado com sucesso!");
}

//Fim 15



//Declaração de funções
function exibirDadosClienteVariaveis() {
    console.log("Nome: " + nomeCliente);
    console.log("Renda: " + renda);
    console.log("Data de nascimento: " + dataNascimento);
    console.log("ativo: " + (ativo == true ? "Sim" : "Não"));

}

function exibirDadosClienteArray() {   //Precisei dar uma colada na resolução, mas fiquei revoltado por ser tão simples e eu não estar enxergando. :-/

    for (var dados of ClienteArray) {
        if (dados[0] == 'ativo: ') {
            console.log(dados[0], dados[1] == true ? "Sim" : "Não");
        } else {

            console.log(dados[0], dados[1]);

        }
    }

}

function exibirDadosClienteObject() {  //Fiz de maneira distinta incialmente por falta de atenção no enunciado. Sem switch. Me dei conta ao revisar a resolução. Retornei e refiz.

    for (chave in ClienteObject) {

        switch (chave) {
            case "nome":
                console.log("Nome: " + ClienteObject[chave]);
                break;

            case "renda":
                console.log("renda: " + ClienteObject[chave]);
                break;

            case "dataNascimento":
                console.log("dataNascimento: " + ClienteObject[chave]);
                break;

            case "ativo":

                if (ClienteObject[chave] == true) {
                    console.log("ativo: Sim");
                } else {
                    console.log("ativo: Não");
                }
                break;


        }


    }
}

function retornaDataAtualFormatada() {

    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();
    var dataFormatada = "";

    if (dia.toString().length == 1) {
        dataFormatada += "0" + dia.toString();
    } else {
        dataFormatada += dia.toString();
    }

    if (mes.toString().length == 1) {

        dataFormatada += "/0" + mes.toString();
    } else {
        dataFormatada += "/" + mes.toString();
    }

    dataFormatada += "/" + ano.toString();

    return dataFormatada;


}


//16

function recebeDadosFormBoot(objFormElementos) {

    console.log(Object.prototype.toString.call(objFormElementos));

    var objDadosForm = new Object();

    console.log("Nome", objFormElementos.nomeBoot.value);
    objDadosForm.nomeBoot = objFormElementos.nomeBoot.value;

    console.log("E-emailBoot", objFormElementos.emailBoot.value);
    objDadosForm.emailBoot = objFormElementos.emailBoot.value;

    console.log("emailPromocionalCheckBoot", objFormElementos.emailPromocionalCheckBoot.checked);
    objDadosForm.emailPromocionalCheckBoot = objFormElementos.emailPromocionalCheckBoot.checked;

    console.log("formaContatoTelefoneRadioBoot", objFormElementos.formaContatoTelefoneRadioBoot.checked);
    objDadosForm.formaContatoTelefoneRadioBoot = objFormElementos.formaContatoTelefoneRadioBoot.checked;

    console.log("formaContatoEmailRadioBoot", objFormElementos.formaContatoEmailRadioBoot.checked);
    objDadosForm.formaContatoEmailRadioBoot = objFormElementos.formaContatoEmailRadioBoot.checked;

    console.log("estadoSelectBoot", objFormElementos.estadoSelectBoot.value);
    objDadosForm.estadoSelectBoot = objFormElementos.estadoSelectBoot.value;

    console.log(objDadosForm);

    preencherFormHTML(objDadosForm);

    function preencherFormHTML(objDados){
        nomeHtml.value = objDados.nomeBoot;
        emailHtml.value = objDados.emailBoot;
        emailPromocionalCheckHtml.checked = objDados.emailPromocionalCheckBoot;
        formaContatoTelefoneRadioHtml.checked = objDados.formaContatoTelefoneRadioHtml;
        formaContatoEmailRadioHtml.checked = objDados.formaContatoEmailRadioHtml;
        estadoSelectHtml.value = objDados.estadoSelectBoot;

        
    }
    
}

