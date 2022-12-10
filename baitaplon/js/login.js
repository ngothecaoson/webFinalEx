var div = document.getElementById('navagation','box-submenu');
var display = 0;

function hideShow(){
if(display==1){
    div.style.display='block';
    display = 0;
}else{
    div.style.display='none';
    display=1;
}
}
/*  const button = document.getElementById('btn');
const list = document.getElementById('box-submenu');
 list.style.display = "none";  
 button.addEventListener("click", (event)=>{
    if(list.style.display=="none"){
        list.style.display=="block";
    }else{
        list.style.display=="none";
    }
 }) */