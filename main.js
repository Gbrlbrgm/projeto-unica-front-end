$("#InputEmail1").on("change", function() {
    let email = $(this).val();
    let retorno = ValidarEmail(email);
    if (retorno){
        alert("Email é válido!");
    } else{
        alert("Email é inválido!");
    }


});


function ValidarEmail(email){
    var reg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if (reg.test(String(email))){
        return true;
    } else{
        return false;
    }

}
