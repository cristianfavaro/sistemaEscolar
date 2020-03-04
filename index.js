
const alunosDaEscola=[
    {nome:"Henrique",notas:[],cursos:[],faltas:5},
    {nome:"Edson",notas:[],cursos:[],faltas:2},
    {nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},
    {nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},
    {nome:"Carlos",notas:[],cursos:[],faltas:0},
    {nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


function adicionarAluno(nomeAluno){

    /*Essa função irá receber uma *string* que é nome do aluno a ser criado. 
    E seguindo o modelo de aluno, o mesmo deverá ser inserido na lista de alunos.
    A função deve devolver um feedback de sucesso, caso o aluno seja inserido corretamente.*/

    let aluno = {nome: nomeAluno, notas:[],cursos:[],faltas:0}
    if (nomeAluno){
        alunosDaEscola.push(aluno)
        console.log(`${nomeAluno} foi adicionado corretamente à base!`)
    }else{
        console.log("Adicione um formato válido")
    }
}


function listarAlunos(){
    /*Com essa função o usuário poderá ver todos os alunos cadastrados atualmente no sistema. 
    Vale dizer que As informações deverão ser exibidas em um formato amigável.*/

    for (let aluno in alunosDaEscola){
        console.log(
            `
            --Nome: ${alunosDaEscola[aluno].nome}
                Curso: ${alunosDaEscola[aluno].cursos == true? alunosDaEscola[aluno].cursos[aluno].nomeDoCurso : "Vazio"}
                notas: ${alunosDaEscola[aluno].notas}
            -----------------------------------------------
            `
            );
    }
}


function buscarAluno(nomeAluno){
    /* Por meio dessa função, podemos pesquisar um aluno por nome na lista de aluno. Ela deverá exibir um feedback, tanto para quando encontrar o aluno, tanto quando não encontrar. E deverá devolver um aluno em seu retorno. */
    //que maneiro esse filtro com chave
    let busca = alunosDaEscola.filter(({ nome }) => nome === nomeAluno)

    busca.length ? console.log(busca) : console.log(`${nomeAluno} não encontrado na base.`);
    
    return busca 

}

function matricularAluno(aluno, curso){
    /* Essa funcionalidade irá permitir, cadastrar um aluno em um curso. 
    Essa função só poderá ser executada em um aluno já devidamente cadastrado no sistema, e deverá armazenar a data atual no momento da matricula
    Lembre-se de exibir o feedback para o usuário. */

    if (buscarAluno(aluno).length){
        alunosDaEscola.filter(({ nome }) => nome == aluno)[0].cursos.push({nomeDoCurso: curso, dataMatricula:new Date})

        console.log(`${aluno} foi matriculado no curso ${curso} com sucesso.`)
    }else{
        console.log(`${aluno} não está na lista de alunos`)
    }
}


function aplicarFalta(aluno){
    /*
    Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
    */

    if (buscarAluno(aluno).length){
        if (buscarAluno(aluno)[0].cursos.length){
            alunosDaEscola.filter(({ nome }) => nome == aluno)[0].faltas += 1;

            console.log(`${aluno} recebeu uma falta com sucesso.`)
        }else{
            console.log(`${aluno} não matriculado para poder receber faltas.`)
        }

    }else{
        console.log(`${aluno} não está na lista de alunos`)
    }

}


function aplicarNota(aluno, nota){
    // /*
    // Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
    // */

    if (buscarAluno(aluno).length){
        if (buscarAluno(aluno)[0].cursos.length){
            alunosDaEscola.filter(({ nome }) => nome == aluno)[0].notas.push(nota);

            console.log(`${aluno} recebeu a nota ${nota} com sucesso.`)
        }else{
            console.log(`${aluno} não matriculado para poder receber notas.`)
        }

    }else{
        console.log(`${aluno} não está na lista de alunos`)
    }

}


function aprovarAluno(aluno){
    // /* 
    // Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
    // Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
    // */

    let alunoBusca = buscarAluno(aluno)[0]
    let notasAluno = alunoBusca.notas


    let somaAluno = notasAluno.reduce(function (acumulador, umNumero){
            return acumulador + umNumero
        });

    let media = somaAluno / notasAluno.length
    
    if (media >= 7 && alunoBusca.faltas < 4){
        console.log("Aprovado")
    }else{
        console.log("Reprovado")
    }
    
}