let = nome = window.prompt('Qual o seu nome?');

let = tdbem =window.prompt('Olá, ' +nome +' tudo bem?');

let = n1 = Number.parseFloat(window.prompt('Qual foi o valor da primeira compra?'));//string, Com a adição do Number.parseInt(n) ou Number.parse.Float(n), As strings foram convertidas em numeros.

let = n2 = Number.parseFloat(window.prompt('e da sua segunda compra?'));//string, Com a adição do Number.parseInt(n) ou Number.parse.Float(n), As strings foram convertidas em numeros.

let = s = n1+n2;//somas de strings

window.alert(`O total da sua conta foi ${s} `);

//(number+number) o '+' se lê como adição
//(string+string) o '+' se lê como concatenação
//Para mudar de string -> numero usamos (Number.parseInt(n) ou Number.parse.Float(n) )
//Atualmente basta usarmos (Number(n) )
//Para fazer numero->string usamos ( n.toString ou String.(n) )


document.write(`${nome}  a compra no valor de R$${n1} + R$${n2} deu um valor total de R$${s} reais.`)


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------