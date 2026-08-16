#  SEMANA 2 Parte C — Decisão

## Cenário 1
> Um gerente pede um relatório de "total gasto este mês" por cliente, somando o carrinho de todos os tickets fechados no mês. Para deixar o relatório mais rápido, ele sugere que o loop pare assim que a soma passar de R$ 500,00, "porque depois disso já sabemos que é um bom cliente, não precisa somar o resto".
> 
> **Você concorda com essa otimização? Que erro ela introduz no relatório final, e o que você diria pro gerente sobre essa troca entre velocidade e corretude?**

R: Não concordo, essa lógica faz com que o relatório tenha dados imprecisos dos clientes, afetando futuras decisões ou pesquisas, caso ele queira o maior consumidor ele teria que realizar outra busca somando todos novamente. Eu diria ao gerente que a lógica de parar antes para ter mais velocidade acredito que só vale a pena para um grande número de clientes, mas ainda assim não acredito que seja a melhor opção.

---

## Cenário 2
> contarMensagensPorPeriodo classifica cada mensagem usando horaRecebida, que vem do servidor em UTC. A farmácia fica em São Paulo (UTC-3). O time de operações quer usar a contagem de mensagens "à noite" para decidir se vale a pena contratar um atendente para o turno noturno. Uma mensagem enviada às 23h no horário de São Paulo chega ao servidor marcada como 2h (UTC) do dia seguinte.
> 
> **Isso muda a decisão do time de operações? O que acontece com essa mensagem específica na contagem por período, e o que você faria antes de confiar nesses números para decidir contratar alguém **

R: Sim, muda a decisão, pois ela vai cair na categoria “madrugada” e não na de “noite”, fazendo com que eles não saibam o real fluxo de cliente nesse horário. Eu faria a conversão para o horário (UTC-3) antes de manipular a variável, garantindo a certeza do horário que o cliente mandou a mensagem. 

---

## Cenário 3
> O time de marketing quer usar maiorCompra para identificar automaticamente o "cliente VIP do mês" de cada farmácia e mandar um cupom especial pra essa pessoa.
> 
> **Que situação real faria maiorCompra apontar o cliente errado como VIP? Você usaria essa função sozinha para tomar essa decisão, ou mudaria alguma coisa? Não precisa escrever código novo, só explicar a ideia.**
R: Ela é uma função bem simples, apenas buscar o maior valor em uma lista de compras, acredito que ela possa indicar o cliente errado caso ele utilize de algum cupom de desconto fazendo o valor final ser menor porém ele foi o maior consumidor, outro exemplo é valores iguais a função sempre vai retornar o último cliente com o aquele valor especifico. Não usaria ela sozinha, faria uma função que leia os dados do PDV do cliente para encontrar o cliente que mais consumiu ao longo do mês somando todas as compras daquele indivíduo, como a farmácia tem muita recorrência acho que a melhor maneira de encontrar o VIP é pegando o valor total das compras e não apenas a maior compra do mês. No caso de valores iguais eu desconsiderados cupons de desconto para saber quem foi o maior consumidor para desempatar, caso eles não tenham utilizado nenhum cupom eu retornaria a lista dos cliente VIPs.

---

##  T 1
> ```typescript
> let total = 0;
> const precos = [10, 20, 30];
> for (let i = 0; i <= precos.length; i++) {
>  total += precos[i];
>}
> ```
> **Qual o valor final de total depois desse loop rodar? Por quê? (Dica: pense no que precos[3] vale, já que o array só tem os índices 0, 1 e 2.)**

R: O resultado é NaN, porque na condição está informando que o loop deve percorrer enquanto o “i” for menor e igual ao tamanho do array então ele vai percorrer pelos index 0, 1, 2, e 3 e como o index 3 não tem nada atribuído a ele dá NaN.

##  T 2

> Imagine que alguém implementou maiorCompra (Parte A) assim: começa com let maior = 0; e depois compara cada valor da lista contra maior.

> **Se a lista de compras fosse [-50, -20, -10] (por exemplo, valores de estorno), que resultado esse código daria, e por que estaria errado? Por que o valor inicial do acumulador importa tanto quanto a conta em si?**

R: O resultado seria 0 e estaria errado, porque nessa lista o maior valor é o -10. Iniciando a variável com 0 faz com que o código espere um número positivo e sempre que os primeiros números forem negativos eles serão meio que ignorados.

---

##  T 3

>Um loop for roda um número de vezes que dá pra calcular antes de começar (por exemplo, percorrer um array já existente). Já um loop while roda enquanto uma condição for verdadeira, sem saber de antemão quantas vezes vai repetir.

> **Dê um exemplo, no contexto do Pharmachatbot, de uma situação em que faria mais sentido usar while do que for (por exemplo, continuar processando mensagens de uma fila até ela esvaziar). Por que for não se encaixa bem nesse caso?**

R: Usar o while faz mais sentido porque a fila não é estática, não sabemos se o cliente vai receber 1 ou 100 mensagens nos próximos minutos então o while garante que o sistema continuará consumindo e respondendo os clientes até que a fila esteja completamente zerada. Já o “for” necessita de saber o tamanho da fila previamente para poder percorrer o loop. 

