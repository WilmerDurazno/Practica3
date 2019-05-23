var num = 1;
function adelante() {
    num++;
    if (num>10) 
        num=1;
        var foto=document.getElementById("free");
        foto.src="../PracticaGaleria/img/free"+num+".jpg";    
    
}
function atras() {
    num--;
    if (num<1) 
        num=10;
        var foto=document.getElementById("free");
        foto.src="../PracticaGaleria/img/free"+num+".jpg";  
          
}
function rand(n){
     return(Math.floor(Math.random() * n + 1 ));
}
var imagenes=new Array(

    ['../PracticaGaleria/img/free1.jpg'],
    ['../PracticaGaleria/img/free2.jpg'],
    ['../PracticaGaleria/img/free3.jpg'],
    ['../PracticaGaleria/img/free4.jpg'],
    ['../PracticaGaleria/img/free5.jpg'],
    ['../PracticaGaleria/img/free6.jpg'],
    ['../PracticaGaleria/img/free7.jpg'],
    ['../PracticaGaleria/img/free8.jpg'],
    ['../PracticaGaleria/img/free9.jpg'],
    ['../PracticaGaleria/img/free10.jpg']  
);

function rotar()
{
    document.getElementById("free").src=imagenes[rand(6)-1];
}
function ini()
{
    rotar();
    setInterval(rotar,3000);
}