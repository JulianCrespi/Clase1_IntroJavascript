function calcular() {

    // Definir Variables
    const cantidad = document.querySelector("#cantidad").value;
    const color = document.querySelector("#color").value;
    const precio = document.querySelector("#precio").innerHTML;

    // Imprimir variables en la consola
    console.info("Cantidad: ", cantidad);
    console.info("Color: ", color);
    console.info("Precio: ", precio);


    //Hacer calculo de variables
    document.querySelector("#resumen_total").innerHTML = cantidad * precio;
    document.querySelector("#resumen_cantidad").innerHTML = cantidad;
    document.querySelector("#resumen_color").style.backgroundColor = color;
}