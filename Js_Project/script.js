//function mensagem(nome){
//alert ("Hei, não clique em mim, "+nome );
//}

function valida(){
    var nome = document.getElementById('nome');
    if (nome.value == ""){
        alert("campo nome não pode estar vazio")
    }
    else{
        alert(nome.value);
    }

   
}

/*function mudaCor(cor){
    var elemento = document.getElementById("mens");
    elemento.style.color = cor;
    elemento.style.fontSize = "30px";
}



/*function soma(a,b){
    console.log(a+b);
}
soma(47,10);


function sub(a,b){
   return a - b;
}
var s = sub(78,3)
console.log(s);



function mult(a,b){
    return a * b;
 }
console.log(mult(3,4));



var mensagem = "Hello World!" ;
alert(mensagem);
var a = 0;
var b = 3;
var c = "Hello";

var lista = ["Cuba", "França", "Brasil", c]
    alert(lista);
    alert(lista[1]);

for(i in lista){
    alert(lista[i]);
}
*/
/*while(a < 3){
    alert(a);
    a++;
} 

for(var i = 0; i < 4; i++){
    alert(i);
} */


/*var soma = a + b;
var sub = a - b;
var mult = a * b;
var div = a / b;

/*alert(a%b);
if (c%2 == 1){
 alert("Numero impar")
}
else if(c%2 == 0){
    alert("Numero par")
}
else{
    alert("Valor inválido")
}*/