let codigoPostal = prompt("Digita el codigo postal");
let bandera = false;

while(!bandera){
    if(codigoPostal == null){
        break;
    }
    if(codigoPostal.length===5 && /^\d+$/.test(codigoPostal)){
        alert("el codigo postal es correcto");
        bandera = true;
    }else{
        alert("El codigo postal ingresado no es valido",);
        codigoPostal= prompt("Digita un codigo postal valido");
    }
}