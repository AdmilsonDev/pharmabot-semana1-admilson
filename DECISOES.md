#  PARTE C - Análise de Cenários

---

## Cenário 1
> Um contato manda a mensagem: *"O remédio que vocês entregaram é diferente do que a receita pedia, isso é urgente, preciso de ajuda agora"*. Pelas regras desta atividade, essa mensagem tem palavra da categoria "urgente" ("urgente") e também teria batido em "reclamacao" se não fosse a prioridade. A categoria final é "urgente".
> 
> **O que pode dar errado se o time tratar toda mensagem "urgente" com a mesma pressa, sem diferenciar os motivos? O que você faria diferente no desenho dessa classificação, e por quê?**


Acredito que acarretaria em uma sobrecarga de mensagens urgentes, fazendo com que alguns cenários que são mais urgentes ou mais críticos ficassem atrás de outros não tão urgentes, igual na fila de um hospital mesmo tendo dois casos urgentes o pior deles terá preferência sobre o outro. O que eu faria de diferente seria acrescentar uma subcategoria classificando esse tipo de urgência, por exemplo se for erro de pagamento ele vai ser mais urgente do que um erro do motoboy ao entregar o remédio ou um erro de miligramas.

---

## Cenário 2
> Você percebe que boa parte das mensagens reais dos clientes não bate em nenhuma palavra-chave da lista e cai em "outro" — por exemplo, perguntas sobre preço, ou sobre um produto específico pelo nome.
> 
> **Isso é um problema para o negócio? Se você tivesse que escolher só mais uma categoria para adicionar nesta lista, qual seria e por quê — pensando no volume de mensagens e no impacto para o cliente que fica sem resposta certa?**


Sim é um problema para o negócio, eu criaria uma categoria de vendas onde adicionaria palavras chaves que remetem a vendas por exemplo: “preço”, “qual valor”,” valor”, “pix”, “desconto” e também adicionaria dentro dessa categoria palavras chaves sobre tipo de remédios como “dor de cabeça”, “estômago”, “gripe”, “genérico” e etc. Acho que colocar uma categoria com os nomes específicos dos remédios não seria muito bom pelo fato da alta quantidade e pelo fato do usuário talvez não saber escrever corretamente o nome de um medicamento.

---

##  Cenário 3
> Um colega sugere resolver a Parte B com uma sequência de 20 ou mais `if` comparando a mensagem inteira contra frases prontas (*"oi, tudo bem?"*, *"bom dia, vocês entregam hoje?"*...) em vez de procurar palavras-chave dentro do texto.
> 
> **Essa solução passaria nos exemplos da tabela? O que ela não vai conseguir classificar direito quando chegar uma mensagem real de um cliente, fora da tabela de exemplos?**


Essa lógica passaria nos exemplos da tabela porque ela foi feita justamente para passar por ela, dando o resultado de acordo com uma entrada específica o problema nessa lógica é que o usuário não vai usar as mesmas frases ou sequência de palavras e quando isso acontecer ela vai falhar porque estava esperando uma entrada especificamente igual ao que ela tem na categoria. Ao não comparar palavras-chaves essa lógica não acertaria frases diferentes das que estão no If else e também não conseguiria fazer a distinção da categoria e escolher a que tem prioridade.
<br><br>

#  PARTE T - Conceitos de TypeScript

---

##  T 1
> ```typescript
> let quantidade = 5
> quantidade = "cinco"
> ```
> **Esse código compila em TypeScript? Se não compila, por quê? Se compilasse (como compilaria em JavaScript puro), o que poderia dar errado mais adiante no programa por causa dessa troca de tipo?**

Ele não compilaria porque está associando uma string a um number, mesmo sem ter declaro a variável como number o TS já entende que é um number ai quando você muda o tipo dela para string isso gera um erro de type. O JS como não é uma linguagem fortimente tipada ela permite fazer isso, porém isso pode levar a bugs futuros e erros ao rodar a aplicação.

---

##  T 2
> Na Parte B, a categoria "urgente" é verificada antes da categoria "saudacao" na ordem de prioridade.
> 
> **Por que essa ordem importa? Dê um exemplo de mensagem em que o resultado de `classificarMensagem` mudaria se a ordem fosse invertida (saudacao verificada antes de urgente).**

Essa ordem importa porque assim evitamos de fazer buscas desnecessárias, a maior prioridade é 1 se foi encontrado uma palavra dentro dessa categoria não tem necessidade de fazer a busca nos outros arrays. No caso de inverter a lógica, o meu código teria que mudar para ter um resultado satisfatório porque ele busca a palavra e retorna a categoria, se na mensagem tivesse uma saudação e depois uma urgência o sistema classificaria como saudação ai nessa caso eu teria colocar uma validação para escolher a prioridade entre as categorias encontradas.

---

##  T 3
> A assinatura de `classificarEstoque` (Parte A) é `function classificarEstoque(quantidade: number): string` — e não `function classificarEstoque(quantidade): string` ou `function classificarEstoque(quantidade: any): string`.
> 
> **Qual a diferença prática entre declarar o parâmetro como `number` e deixá-lo sem tipo (ou como `any`)? O que o TypeScript avisa se alguém tentar chamar `classificarEstoque("cinco")`?**


A diferença é que o TS sabe o tipo de dado que ele vai receber e não vai deixar ele receber uma string por exemplo, já se colocar Any ele poderá receber qualquer tipo de dado, caso tente chamar classificarEstoque("cinco") tendo declarado o parâmetro como number o TypeScript a pontara um erro de Type, agora caso tenha declarado como Any o TypeScript vai aceitar o parâmetro.

-----

#  SEMANA 2 Parte C — Decisão

## Cenário 1
> Um gerente pede um relatório de "total gasto este mês" por cliente, somando o carrinho de todos os tickets fechados no mês. Para deixar o relatório mais rápido, ele sugere que o loop pare assim que a soma passar de R$ 500,00, "porque depois disso já sabemos que é um bom cliente, não precisa somar o resto".
> 
> **Você concorda com essa otimização? Que erro ela introduz no relatório final, e o que você diria pro gerente sobre essa troca entre velocidade e corretude?**

R: Não concordo, essa lógica faz com que o relatório tenha dados imprecisos dos clientes, afetando futuras decisões ou pesquisas, caso ele queira o maior consumidor ele teria que realizar outra busca somando todos novamente. Eu diria ao gerente que a lógica de parar antes para ter mais velocidade acredito que só vale a pena para um grande número de clientes, mas ainda assim não acredito que seja a melhor opção.

## Cenário 2
> contarMensagensPorPeriodo classifica cada mensagem usando horaRecebida, que vem do servidor em UTC. A farmácia fica em São Paulo (UTC-3). O time de operações quer usar a contagem de mensagens "à noite" para decidir se vale a pena contratar um atendente para o turno noturno. Uma mensagem enviada às 23h no horário de São Paulo chega ao servidor marcada como 2h (UTC) do dia seguinte.
> 
> **Isso muda a decisão do time de operações? O que acontece com essa mensagem específica na contagem por período, e o que você faria antes de confiar nesses números para decidir contratar alguém **

R: Sim, muda a decisão, pois ela vai cair na categoria “madrugada” e não na de “noite”, fazendo com que eles não saibam o real fluxo de cliente nesse horário. Eu faria a conversão para o horário (UTC-3) antes de manipular a variável, garantindo a certeza do horário que o cliente mandou a mensagem. 

## Cenário 3
> O time de marketing quer usar maiorCompra para identificar automaticamente o "cliente VIP do mês" de cada farmácia e mandar um cupom especial pra essa pessoa.
> 
> **Que situação real faria maiorCompra apontar o cliente errado como VIP? Você usaria essa função sozinha para tomar essa decisão, ou mudaria alguma coisa? Não precisa escrever código novo, só explicar a ideia.**
R: Ela é uma função bem simples, apenas buscar o maior valor em uma lista de compras, acredito que ela possa indicar o cliente errado caso ele utilize de algum cupom de desconto fazendo o valor final ser menor porém ele foi o maior consumidor, outro exemplo é valores iguais a função sempre vai retornar o último cliente com o aquele valor especifico. Não usaria ela sozinha, faria uma função que leia os dados do PDV do cliente para encontrar o cliente que mais consumiu ao longo do mês somando todas as compras daquele indivíduo, como a farmácia tem muita recorrência acho que a melhor maneira de encontrar o VIP é pegando o valor total das compras e não apenas a maior compra do mês. No caso de valores iguais eu desconsiderados cupons de desconto para saber quem foi o maior consumidor para desempatar, caso eles não tenham utilizado nenhum cupom eu retornaria a lista dos cliente VIPs.
