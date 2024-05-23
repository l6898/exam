let fechaHoy = document.getElementById('fechaHoy');

let fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth()
let anio = fecha.getFullYear()
let diaSe = fecha.getDay()
let ndate = fecha.toLocaleString();

 switch(diaSe){
    case 0:
         diaSe ="Domingo"
         break;
    case 1:
         diaSe = "lunes"
         break;
    case 2:
         diaSe= "martes"
         break;
    case 3:
         diaSe ="miercoles"
         break;
    case 4:
        diaSe = "jueves"
        break;
    case 5:
        diaSe = "viernes"
        break;
    case 6:
        diaSe = "sabado"
        break;
    case 7:
        diaSe = "error"
        break;
    

} 


 alert (  dia + "/"+ (mes+1) + "/"+ anio +"Hoy es"+ diaSe ); 







const nombre = document.getElementById('usuario')
const password = document.getElementById('password')
const email = document.getElementById('email')
const acepto = document.getElementById('acepto')
const btn = document.getElementById('btn')
const form = document.getElementById('form')


form.addEventListener("submit", e=> {
    e.preventDefault()
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(nombre.value.length<4){
        alert ("tu nombre debe tener mas de 4caracteres")
    }
    if(!regexEmail.test(email.value)){
        alert("el email no es válido")

    }
} )


/*  btn.addEventListener("click", isChecked());  */
function isChecked(){
    if (document.getElementById('acepto').Checked){
        document.getElementById('text').textContent = "acepta los terminos y condiciones";
    }
    else{
        document.getElementById('text').textContent = " haz aceptado los terminos y condiciones para continuar";
    }
} 

/* cambio de imagen */
function setNewImage(){
    document.getElementById('img1').src = "img/friends.jpg" 

}
function setOldImage(){
    document.getElementById('img1').src = "img/alone.jpg" 

}

