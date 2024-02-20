let nit = prompt("Digita el NIT");
let bandera = false;

while(!bandera){
    if(nit == null){
        break;
    }
    if(nit.length===9 && /^\d+$/.test(nit)){
        alert("el NIT es correcto");
        bandera = true;
    }else{
        alert("El NIT ingresado no es valido",);
        nit= prompt("Digita un número de NIT valido");
    }
}