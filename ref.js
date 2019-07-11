
function calcularP(){
    var elemento1=document.querySelector("#a");
    var texto1=elemento1.value;
    var numero1=parseFloat(texto1);

    var elemento2=document.querySelector("#b");
    var texto2=elemento2.value;
    var numero2=parseFloat(texto2);

    var elemento3=document.querySelector("#c");
    var texto3=elemento3.value;
    var numero3=parseFloat(texto3);

    var p =(numero1+numero2+numero3)/2;

    if (numero1 <= 0){
        alert("O número não pode ser zero ou negativo")
    }else{
        var p =(numero1+numero2+numero3)/2;
    }

    if (numero2 <= 0){
        alert("O número não pode ser zero ou negativo")
    }else{
        var p =(numero1+numero2+numero3)/2;
    }

    if (numero3 <= 0){
        alert("O número não pode ser zero ou negativo")
    }else{
        var p =(numero1+numero2+numero3)/2;
    }
      
    var area = Math.sqrt(p*(p-numero1)*(p-numero2)*(p-numero3));
    var elementoResultado=document.querySelector("#area");
    elementoResultado.textContent=area.toFixed(2);

}

function calcularA(){

    var elemento4=document.querySelector("#ba");
    var texto4=elemento4.value;
    var numero4=parseFloat(texto4);

    var elemento5=document.querySelector("#h");
    var texto5=elemento5.value;
    var numero5=parseFloat(texto5);

    if (numero4 <= 0){
        alert("O número não pode ser zero ou negativo")
    }else{
        var area2 = 1/2 * (numero4 * numero5)
    }

    if (numero5 <= 0){
        alert("O número não pode ser zero ou negativo")
    }else{
        var area2 = 1/2 * (numero4 * numero5)
    }
    
    var elementoResultado2=document.querySelector("#area2");
    elementoResultado2.textContent=area2.toFixed(2);
}

function calcularV(){
    var elemento6=document.querySelector("#xa");
    var texto6=elemento6.value;
    var numero6=parseFloat(texto6);

    var elemento7=document.querySelector("#ya");
    var texto7=elemento7.value;
    var numero7=parseFloat(texto7);

    var elemento8=document.querySelector("#xb");
    var texto8=elemento8.value;
    var numero8=parseFloat(texto8);

    var elemento9=document.querySelector("#xb");
    var texto9=elemento9.value;
    var numero9=parseFloat(texto9);

    var elemento10=document.querySelector("#xc");
    var texto10=elemento10.value;
    var numero10=parseFloat(texto10);

    var elemento11=document.querySelector("#yc");
    var texto11=elemento11.value;
    var numero11=parseFloat(texto11);

    var d = (numero6 * numero9 * 1) + (numero7 * 1 * numero10) + (1 * numero8 * numero11) - (numero7 * numero8 * 1) - (numero6 * 1 * numero11) - (1 * numero9 * numero10);
    
    var area3 = Math.abs(d) * 1/2;
    
    var elementoResultado3=document.querySelector("#area3");
    elementoResultado3.textContent=area3.toFixed(1);
}
