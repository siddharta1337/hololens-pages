 

  inicio();

 function inicio(){


    const canvas = document.querySelector("#misCanvas");

    const objetoWebGL = canvas.getContext("webgl");



  // muestra una alerta si no funciona
  if (!objetoWebGL) {
    alert("No tienes soporte webGL");
    return;
  }

  /// define color de fondo
  objetoWebGL.clearColor( 1.0 , 1.0 , 0.0, 1.0 );

  /// asignar color
  objetoWebGL.clear( objetoWebGL.COLOR_BUFFER_BIT )

 }