let questions = [
    {
        id: 0,
        question: "Tenho menos de 18 anos, posso usar o app?",
        Answer: "O cadastro no aplicativo está disponível apenas para pessoas que tenham pelo menos 18 anos de idade. Porém, com auxílio de um responsável, é permitido a realização de doações para instituições por meio do nosso site."
    },
    {
        id: 1,
        question: "Como entro em contato com os desenvolvedores do GreenPoint?",
        Answer: "Para entrar em contato com os desenvolvedores do GreenPoint, vá na página Sobre Nõs. No fim dela, haverá fotos dos responsáveis pelo projeto e você poderá escolher em qual clicar e, então, ser direcionado para o meio de contato com o desenvolvedor escolhido."
    },
    {
        id: 2,
        question: "Não quero mais doar, o que faço?",
        Answer: "Caso não deseje mais fazer doações, entre no app, clique no botão menu e acesse “Configurações”. Ative ou desative o modo Continuar doando."
    },
    {
        id: 3,
        question: "Como entro em contato com os desenvolvedores do GreenPoint?",
        Answer: "Para entrar em contato com os desenvolvedores do GreenPoint, vá na página Sobre Nõs. No fim dela, haverá fotos dos responsáveis pelo projeto e você poderá escolher em qual clicar e, então, ser direcionado para o meio de contato com o desenvolvedor escolhido."
    },
    {
        id: 4,
        question: "Como registro minha ONG?",
        Answer: "Para registrar sua ONG no aplicativo ou no site, clique no botão menu e acesse “ONG’s”. Ao ir para a tela dos locais e sites de ONG’s, clique no botão com sinal + (mais). Você será direcionado a um formulário com dados a serem preenchidos sobre a ONG. A ONG será adicionada assim    que as informações enviadas forem analisadas e comprovadas verdadeiras."
    },
    {
        id: 5,
        question: "Como Funciona o GreenPoint?",
        Answer: "O GreenPoint é um projeto que tem como finalidade ajudar pessoas de baixa renda que sofrem com algum grau de insegurança alimentar. Ele facilita a comunicação entre pessoas que necessitam de doações de alimentos e possíveis doadores que se interessem pela causa."
    },
    {
        id: 6,
        question: "Onde posso retirar minhas dúvidas?",
        Answer: "Clique no botão menu e acesse “Configurações”. Clique em Entrar em contato. Você irá para a página de dúvidas frequentes. Caso sua dúvida não seja resolvida, vá ao final da página e aperte em “clique aqui”. Você será direcionado para um formulário, no qual poderá relatar uma dúvida, sugestão, um problema ou erro do sistema."
    },
    {
        id: 7,
        question: "Os meus dados estão seguros?",
        Answer: "Os seus dados estão seguros de acordo com a nossa Política de Privacidade. Caso queira mais informações, clique no botão ques está no fim do site e veja os nossos termos de uso."
    },
    {
        id: 8,
        question: "O que colocar na “Renda familiar” e “Número de dependentes”?",
        Answer: "No aplicativo, ao preencher os dados necessários para se cadastrar como alguém que deseja receber doações, deverá ser inserida a renda familiar, ou seja, a renda total dos moradores de sua casa no período de um mês (30 dias) e, também, a quantidade  de pessoas que dependem dessa renda mensalmente."
    }
];

questions.map((itemQuestion, index) => {
    let itemsQuestions = document.querySelector(".questionItem").cloneNode(true);

    itemsQuestions.id = "questionItem";
    itemsQuestions.querySelector(".TextQandA p").innerHTML = itemQuestion.question;
    itemsQuestions.setAttribute("onclick", `showAnwer(${index})`);

    document.querySelector("#Questions").append(itemsQuestions);
})

document.getElementById("questionItem").parentNode.removeChild(document.getElementById("questionItem"));






var show = false;

function showAnwer(index){
    var answerVisible = document.querySelectorAll(".Answer");
    
    if(show == false){
        answerVisible[index].style.visibility = "hidden";
        show = true;
    }
    else {
        answerVisible[index].style.visibility = "visible";
    }
    
}