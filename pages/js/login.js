function Login(){ 
    let done=0; 
    let usuario=document.login.usuario.value; 
    let password=document.login.password.value; 
    if (usuario=="USUARIO1" && password=="CONTRASEÑA1") { 
    window.location="TU_PAGINA_WEB.HTML"; 
    } 
    if (usuario=="USUARIO2" && password=="CONTRASEÑA2") { 
    window.location="TU_PAGINA_WEB.HTML"; 
    } 
    if (usuario=="" && password=="") { 
    window.location="errorpopup.html"; 
    } 
} 