#  SEMANA 3 Parte C — Decisão

## Cenário 1
> O dashboard usa agruparTicketsAbertosPorFila para decidir, em tempo real, em qual fila colocar mais atendentes agora. Só que a fila "geral" recebe todo ticket que ainda não foi triado manualmente por um humano — na prática, é uma fila-limbo, não uma fila de atendimento de verdade.

> **Isso pode enganar a decisão de onde alocar atendentes? O que você sugeriria mudar — na função, no dado, ou em como o resultado é lido — antes de confiar nesse número?**

R: Sim, pode confundir a decisão fazendo com que atendentes de áreas específicas tenham que fazer a triagem desses tickets. Eu acredito que a melhor solução seja mudar o dado, não permitir que um ticket que não foi lido e classificado por um ser humano ou um bot/IA tenha o status de aberto. Deve ser criado um novo status “aguardando” dessa forma o cliente consegue saber para onde mandar seus atendentes de áreas específicas e para onde mandar os atendentes que farão a triagem daqueles tickets.

---

## Cenário 2
> Um colega "otimiza" ticketsAbertos: em vez de devolver um array novo com filter, ele percorre o array original com forEach e apaga direto os elementos que não são "aberto", pra "economizar memória, já que não precisa de duas listas".

> **Que problema essa mudança pode causar em outro lugar do sistema que também usa essa mesma lista de tickets? Você aceitaria essa "otimização" nesse ponto do código? Por quê?**

R: Se um ticket ainda não está aberto não significa que não tenha importância e que possa ser apagado, isso pode atrapalhar futuramente já que esse ticket não será classificado e não será atendido por um atendente. Não aceitaria esse tipo de “otimização” já que ela não está solucionando um problema e sim criando outro futuramente já que nossos clientes não serão atendidos.

---

## Cenário 3
> Uma função parecida com valorTotalPedidos (soma o valor de uma lista de pedidos com reduce) roda todo fim de mês num relatório automático. Num mês sem nenhum pedido novo (loja nova, ainda sem venda), o relatório quebra com um erro no servidor, na hora de gerar o total.

> **Dado o que você aprendeu essa semana sobre reduce, qual é a causa mais provável desse erro? O que você mudaria no código para evitar isso sem esconder um bug real (ou seja, sem só colocar um try/catch genérico que engole qualquer erro)?**

R: A causa mais provável é que o reduce deu erro por conta de não ter um valor inicial já que o array está vazio, se não informamos ao reduce o valor inicial ele usa o primeiro valor do array e como esse valor não existe ele retorna um erro. A solução seria iniciar o contador do reduce com 0, assim quando a automação rodar e ver que não houve vendas ela retorna o valor total de 0 sem parar o código ou caindo em algum try/catch.

---

## Parte T — Conceitos

## T1
>```typescript
> const precos = [10, 20, 30];
> const comDesconto = precos.map((preco) => {
>  preco * 0.9;
> });
>```

> **O que fica guardado em comDesconto depois desse código rodar? Por quê? (Dica: repare que a arrow function usa chaves { } — o que isso muda em relação a escrever preco => preco * 0.9, sem chaves?)**

R: Um array cheio de undefined, porque não está utilizando o return dentro das chaves, isso acontece porque ao abrir chaves você cria um bloco de código, e com isso a arrow function perde o poder do retorno. Você passa a ser obrigado a escrever a palavra “return”.

---

## T2

> Você tem uma lista de tickets e precisa fazer duas coisas diferentes: (1) pegar só os tickets com status "aberto", sem mudar mais nada neles; (2) transformar cada ticket num texto tipo "Ticket #12 - aberto", mantendo a lista do mesmo tamanho.

> **Qual método (map ou filter) você usaria em cada caso, e por quê usar o outro método no lugar errado daria um resultado estranho (não um erro, um resultado estranho)?**

R: Na primeira opção usaria o método filter, já no segundo usaria o map. O resultado estranho seria usar o map para filtrar os tickets abertos já que o map sempre retorna um novo array com o mesmo tamanho do original e se tentássemos usar o filter para modificar o array ele não conseguiria apenas retornaria o array normal.

---

## T3

> O método reduce aceita um segundo argumento opcional: o valor inicial do acumulador (o mesmo que você já usava manualmente com let total = 0 na Semana 2).

> **O que acontece se você chamar [].reduce((a, b) => a + b) — sem passar valor inicial — numa lista vazia? Por que isso é diferente de somarCarrinho da Semana 2, que devolvia 0 tranquilamente pra lista vazia?**

R: Sem passar o valor inicial o reduce pega o valor do primeiro elemento do array como valor inicial, se a lista estiver vazia ele  retorna um erro. É diferente porque o método reduce permite trabalhar dessas duas formas.
