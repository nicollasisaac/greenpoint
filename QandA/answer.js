let questions = [
    {
        question: "Não quero mais doar, o que faço?",
        Answer: "Caso não deseje mais fazer doações, entre no app, clique no botão menu e acesse “Configurações”. Ative ou desative o modo Continuar doando. "
    },
    {
        question: "Como entro em contato com os desenvolvedores do GreenPoint?",
        Answer: "Para entrar em contato com os desenvolvedores do GreenPoint, vá na página Sobre Nõs. No fim dela, haverá fotos dos responsáveis pelo projeto e você poderá escolher em qual clicar e, então, ser direcionado para o meio de contato com o desenvolvedor escolhido."
    },
    {
        question: "Como registro minha ONG?",
        Answer: "Para registrar sua ONG no aplicativo ou no site, clique no botão menu e acesse “ONG’s”. Ao ir para a tela dos locais e sites de ONG’s, clique no botão com sinal + (mais). Você será direcionado a um formulário com dados a serem preenchidos sobre a ONG. A ONG será adicionada assim    que as informações enviadas forem analisadas e comprovadas verdadeiras."
    },
    {
        question: "Como Funciona o GreenPoint?",
        Answer: "O GreenPoint é um projeto que tem como finalidade ajudar pessoas de baixa renda que sofrem com algum grau de insegurança alimentar."
    },
    {
        question: "Onde posso retirar minhas dúvidas?",
        Answer: "Clique no botão menu e acesse “Configurações”. Clique em Entrar em contato. Você irá para a página de dúvidas frequentes. Caso sua dúvida não seja resolvida, vá ao final da página e aperte em “clique aqui”. Você será direcionado para um formulário, no qual poderá relatar uma dúvida, sugestão, um problema ou erro do sistema."
    },
    {
        question: "Os meus dados estão seguros?",
        Answer: ""
    },
    {
        question: "O que colocar na “Renda familiar” e “Número de dependentes”?",
        Answer: "No aplicativo, ao preencher os dados necessários para se cadastrar como alguém que deseja receber doações, deverá ser inserida a renda familiar, ou seja, a renda total dos moradores de sua casa no período de um mês (30 dias) e, também, a quantidade  de pessoas que dependem dessa renda mensalmente."
    },
];

questions.map((itemQuestion) => {
    let itemsQuestion = document.querySelector(`TextQandA`);
       
    itemQuestion.querySelector("question p").innerHTML = itemsQuestion.question;
})