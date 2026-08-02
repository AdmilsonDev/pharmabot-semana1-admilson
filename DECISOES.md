PARTE C 

Cenário 1
Um contato manda a mensagem: "O remédio que vocês entregaram é diferente do que a receita pedia, isso é urgente, preciso
de ajuda agora". Pelas regras desta atividade, essa mensagem tem palavra da categoria "urgente" ("urgente") e também teria
batido em "reclamacao" se não fosse a prioridade. A categoria final é "urgente".
O que pode dar errado se o time tratar toda mensagem "urgente" com a mesma pressa, sem diferenciar os motivos?
O que você faria diferente no desenho dessa classificação, e por quê?

R: Acredito que acarretaria em uma sobrecarga de mensagens urgentes, fazendo com que alguns cenários que são mais urgentes ou mais críticos ficassem atrás de outros não tão urgentes, igual na fila de um hospital mesmo tendo dois casos urgentes o pior deles terá preferência sobre o outro. O que eu faria de diferente seria acrescentar uma subcategoria classificando esse tipo de urgência, por exemplo se for erro de pagamento ele vai ser mais urgente do que um erro do motoboy ao entregar o remédio ou um erro de miligramas.


Cenário 2
Você percebe que boa parte das mensagens reais dos clientes não bate em nenhuma palavra-chave da lista e cai em "outro" —
por exemplo, perguntas sobre preço, ou sobre um produto específico pelo nome.
Isso é um problema para o negócio? Se você tivesse que escolher só mais uma categoria para adicionar nesta lista,
qual seria e por quê — pensando no volume de mensagens e no impacto para o cliente que fica sem resposta certa?

R: Sim é um problema para o negócio, eu criaria uma categoria de vendas onde adicionaria palavras chaves que remetem a vendas por exemplo: “preço”, “qual valor”,” valor”, “pix”, “desconto” e também adicionaria dentro dessa categoria palavras chaves sobre tipo de remédios como “dor de cabeça”, “estômago”,  “gripe”, “genérico” e etc. Acho que colocar uma categoria com os nomes específicos dos remédios não seria muito bom pelo fato da alta quantidade e pelo fato do usuário talvez não saber escrever corretamente o nome de um medicamento.

Cenário 3
Um colega sugere resolver a Parte B com uma sequência de 20 ou mais "if" comparando a mensagem inteira contra frases
prontas ("oi, tudo bem?", "bom dia, vocês entregam hoje?"...) em vez de procurar palavras-chave dentro do texto.
Essa solução passaria nos exemplos da tabela? O que ela não vai conseguir classificar direito quando chegar uma
mensagem real de um cliente, fora da tabela de exemplos?

R: Essa lógica passaria nos exemplos da tabela porque ela foi feita justamente para passar por ela, dando o resultado de acordo com uma entrada específica o problema nessa lógica é que o usuário não vai usar as mesmas frases ou sequência de palavras e quando isso acontecer ela vai falhar porque estava esperando uma entrada especificamente igual ao que ela tem na categoria. Ao não comparar palavras-chaves essa lógica não acertaria frases diferentes das que estão no If else e também não conseguiria fazer a distinção da categoria e escolher a que tem prioridade.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

PARTE T

T 1
let quantidade = 5
quantidade = "cinco"
Esse código compila em TypeScript? Se não compila, por quê? Se compilasse (como compilaria em JavaScript puro), o
que poderia dar errado mais adiante no programa por causa dessa troca de tipo?

R: Ele não compilaria porque está associando uma string a um number, mesmo sem ter declaro a variável como number o TS já entende que é um number
ai quando você muda o tipo dela para string isso gera um erro de type. O JS como não é uma linguagem fortimente tipada ela permite fazer isso, porém isso pode levar a bugs futuros e erros ao rodar a aplicação.

T 2
Na Parte B, a categoria "urgente" é verificada antes da categoria "saudacao" na ordem de prioridade.
Por que essa ordem importa? Dê um exemplo de mensagem em que o resultado de classificarMensagem mudaria se a
ordem fosse invertida (saudacao verificada antes de urgente).

R: Essa ordem importa porque assim evitamos de fazer buscas desnecessárias, a maior prioridade é 1 se foi encontrado uma palavra dentro dessa categoria não tem necessidade de fazer a busca nos outros arrays. No caso de inverter a lógica, o meu código teria que mudar para ter um resultado satisfatório porque ele busca a palavra e retorna a categoria, se na mensagem tivesse uma saudação e depois uma urgência o sistema classificaria como saudação ai nessa caso eu teria colocar uma validação para escolher a prioridade entre as categorias encontradas.

T 3
A assinatura de classificarEstoque (Parte A) é function classificarEstoque(quantidade: number): string — e não function
classificarEstoque(quantidade): string ou function classificarEstoque(quantidade: any): string.
Qual a diferença prática entre declarar o parâmetro como number e deixá-lo sem tipo (ou como any)? O que o
TypeScript avisa se alguém tentar chamar classificarEstoque("cinco")?

R: A diferença é que o TS sabe o tipo de dado que ele vai receber e não vai deixar ele receber uma string por exemplo, já se colocar Any ele poderá receber qualquer tipo de dado, caso tente chamar classificarEstoque("cinco") tendo declarado o parâmetro como number o TypeScript a pontara um erro de Type, agora caso tenha declarado como Any o TypeScript vai aceitar o parâmetro.