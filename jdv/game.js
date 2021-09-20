const player1 = "X";
const player2 = "O";
var playTime = player1;
var gameOver = false;

atualizaMostrador();
inicializarEspacos();

function atualizaMostrador(){
    if (gameOver) {return;}

    if (playTime == player1) {

        var player = document.querySelectorAll("div#mostrador img") [0];
        player.setAttribute("src", "https://img1.gratispng.com/20180320/zfe/kisspng-red-x-x-mark-computer-icons-clip-art-red-x-png-5ab19105d9ebc7.5641284615215864378926.jpg");

    } else{

        var player = document.querySelectorAll("div#mostrador img") [0];
        player.setAttribute("src", "https://img2.gratispng.com/20180406/lqe/kisspng-letter-case-o-english-alphabet-clip-art-letter-s-5ac7f0237ab010.8890163915230525795025.jpg");
    }
}


function inicializarEspacos(){
    
    var espacos = document.getElementsByClassName("espaco");
    for (var i = 0; i < espacos.length; i++) {
        
        espacos[i].addEventListener("click", function (){

            if (gameOver) {return;}

            if(this.getElementsByTagName("img").length == 0){

                if (playTime == player1) {

                    this.innerHTML = "<img src='https://img1.gratispng.com/20180320/zfe/kisspng-red-x-x-mark-computer-icons-clip-art-red-x-png-5ab19105d9ebc7.5641284615215864378926.jpg'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;
                    
                }else{

                    this.innerHTML = "<img src='https://img2.gratispng.com/20180406/lqe/kisspng-letter-case-o-english-alphabet-clip-art-letter-s-5ac7f0237ab010.8890163915230525795025.jpg'>";
                    this.setAttribute("jogada", player2); 
                    playTime = player1;

                }
                atualizaMostrador();
                verificadorVencedor();
                
            }

        }
        

        );
    } 
}

async function verificadorVencedor(){

var a1 = document.getElementById("a1").getAttribute("jogada");
var a2 = document.getElementById("a2").getAttribute("jogada");
var a3 = document.getElementById("a3").getAttribute("jogada");

var b1 = document.getElementById("b1").getAttribute("jogada");
var b2 = document.getElementById("b2").getAttribute("jogada");
var b3 = document.getElementById("b3").getAttribute("jogada");

var c1 = document.getElementById("c1").getAttribute("jogada");
var c2 = document.getElementById("c2").getAttribute("jogada");
var c3 = document.getElementById("c3").getAttribute("jogada");

var vencedor = "";

if((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 ==a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")) {

    vencedor = a1;

}else if ((b2 == b1 && b2 == b3 && b2 !="") || (b2 == a2 && b2 == c2 && b2 !="") || (b2 == a3 && b2 == c1 && b2 !=""))
{

    vencedor = b2;

}else if (((c3 == c2 &&  c3==c1) || (c3 == a3 && c3 == b3)) && c3 !="")

{

    vencedor = c3;

}

if (vencedor !="") {
    gameOver = true;

    await sleep(50);

    alert (" O Ganhador foi o: '" + vencedor + "'");
}

}



function sleep(ms){

     return new Promise(resolve => setTimeout(resolve, ms));
    
       
    
}


function resetGame(){
    
    gameOver = false;
    
    clearFields();
    atualizaMostrador();
      inicializarEspacos();
      
  }
  
  function clearFields(){
      document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    
    document.getElementById("a1").setAttribute("jogada", "");
    document.getElementById("a2").setAttribute("jogada", "");
    document.getElementById("a3").setAttribute("jogada", "");
    
    document.getElementById("b1").setAttribute("jogada", "");
    document.getElementById("b2").setAttribute("jogada", "");
    document.getElementById("b3").setAttribute("jogada", "");
    
    document.getElementById("c1").setAttribute("jogada", "");
    document.getElementById("c2").setAttribute("jogada", "");
    document.getElementById("c3").setAttribute("jogada", "");
  };