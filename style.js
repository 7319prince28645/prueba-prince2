const nombre= document.getElementById("user");
const contraseña= document.getElementById("password");
const form= document.getElementById("form");
const parrafo= document.getElementById("warnings");

form.addEventListener("submit", e=>{
    
    let warnings= "";
    let entrar= false;
    parrafo.innerHTML="";
    if(nombre.value.length < 6 ){
        e.preventDefault();
        warnings += `El nombre no es valido <br>`;
        entrar= true;
        
    }
    if(contraseña.value.length< 8){
        e.preventDefault();
        warnings += `La contraseña no es valido <br>`
        entrar= true;
        
    }

    if(entrar){
        e.preventDefault();
        parrafo.innerHTML= warnings;
        
    }
    else{
        
        parrafo.innerHTML= "Ingresando";
        
    }
})