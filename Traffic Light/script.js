function stop(){
    document.getElementById("stopBulb").style.backgroundColor="Red";
    document.getElementById("readyBulb").style.backgroundColor="#4b5069";
    document.getElementById("goBulb").style.backgroundColor="#4b5069"; 

    document.getElementById("stopLight").style.backgroundColor="Red";
    document.getElementById("readyLight").style.backgroundColor="#1f1d41";
    document.getElementById("goLight").style.backgroundColor="#1f1d41";

    document.getElementById("heading").style.color="Red";

}
function ready()
{
    document.getElementById("readyBulb").style.backgroundColor="#f7c948";
    document.getElementById("stopBulb").style.backgroundColor="#4b5069";
    document.getElementById("goBulb").style.backgroundColor="#4b5069";

    document.getElementById("stopLight").style.backgroundColor="#1f1d41";
    document.getElementById("readyLight").style.backgroundColor="#f7c948";
    document.getElementById("goLight").style.backgroundColor="#1f1d41";
    document.getElementById("heading").style.color="#f7c948";
}
function go()
{
    document.getElementById("goBulb").style.backgroundColor="#199473";
    document.getElementById("stopBulb").style.backgroundColor="#4b5069";
    document.getElementById("readyBulb").style.backgroundColor="#4b5069";

    document.getElementById("stopLight").style.backgroundColor="#1f1d41";
    document.getElementById("readyLight").style.backgroundColor="#1f1d41";
    document.getElementById("goLight").style.backgroundColor="#199473";

    document.getElementById("heading").style.color="#199473";
   
}