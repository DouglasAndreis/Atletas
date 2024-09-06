// Função para pesquisar e exibir os resultados
function pesquisar() {
    // Seleciona o elemento HTML com o ID "resultados-pesquisa"
    // e armazena em uma variável para facilitar o acesso
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
if(!campoPesquisa){
    section.innerHTML = "<p>Nenhum resultado foi encontrado</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) no array de dados
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

       if (titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
       
         // Concatena o HTML de cada resultado à string 'resultados'
             resultados += `
                <div class="item-resultado">
                  <h2>
                 <a href="https://www.instagram.com/p/C9XFwmsrRGW/" target="_blank">${dado.titulo}</a>
                 </h2>
                 <p class="descricao-meta">${dado.descricao}</p>
                 <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>`;
        }
    }

    if( ! resultados){
        
        resultados = "<p>Nada foi encontrado</p>";        
    }
// Atribui a string completa de resultados ao conteúdo HTML do elemento 'section'
section.innerHTML = resultados;
}
       

  

