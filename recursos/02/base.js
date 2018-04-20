


function render(objetoWgl, escena) {

  objetoWgl.clear(objetoWgl.COLOR_BUFFER_BIT);

  objetoWgl.useProgram(escena.program);

  objetoWgl.bindBuffer(objetoWgl.ARRAY_BUFFER, escena.object.vertexBuffer);

  objetoWgl.drawArrays(
    escena.object.primitiveType, 0,
    escena.object.vertexCount);

  objetoWgl.bindBuffer(objetoWgl.ARRAY_BUFFER, null);

  objetoWgl.useProgram(null);

  requestAnimationFrame(function () {
    render(objetoWgl, escena);
  });

}

function crearPrograma(objetoWgl, shaderSpecs) {
  var programa = objetoWgl.createProgram();
  for (var i = 0; i < shaderSpecs.length; i++) {


    var spec = shaderSpecs[i];
    var shader = objetoWgl.createShader(spec.type);
    var source = document.getElementById(spec.container).text;
    objetoWgl.shaderSource(shader, source);
    objetoWgl.compileShader(shader);
    if (!objetoWgl.getShaderParameter(shader, objetoWgl.COMPILE_STATUS)) {
      throw objetoWgl.getShaderInfoLog(shader);
    }
    objetoWgl.attachShader(programa, shader);
    objetoWgl.deleteShader(shader);



  }
  objetoWgl.linkProgram(programa);
  if (!objetoWgl.getProgramParameter(programa, objetoWgl.LINK_STATUS)) {
    throw objetoWgl.getProgramInfoLog(programa);
  }
  return programa;
}


function inicio() {


  var surface = document.getElementById('misCanvas');

  var objetoWgl = surface.getContext('webgl');

  objetoWgl.viewport(0,0,surface.width,surface.height);

  objetoWgl.clearColor(1.0, 0.0, 0.0, 1.0);


  var programa = crearPrograma(
    objetoWgl,
    [{container: 'vertex-shader', type: objetoWgl.VERTEX_SHADER},
     {container: 'fragment-shader', type: objetoWgl.FRAGMENT_SHADER}]
  );

  var squareVertices = [
    +0.75, +0.75,
    -0.75, +0.75,
    +0.75, -0.75,
    -0.75, -0.75
  ];


  objetoWgl.useProgram(programa);


  var cuadrado = {
    vertexCount: 4,
    primitiveType: objetoWgl.TRIANGLE_STRIP
  };


  var vertexBuffer = objetoWgl.createBuffer();
  objetoWgl.bindBuffer(objetoWgl.ARRAY_BUFFER, vertexBuffer);


  programa.positionAttribute = objetoWgl.getAttribLocation(programa, 'pos');
  

  objetoWgl.enableVertexAttribArray(programa.positionAttribute);


  objetoWgl.vertexAttribPointer(
    programa.positionAttribute, 2, objetoWgl.FLOAT, false, 0, 0
  );


  objetoWgl.bufferData(
    objetoWgl.ARRAY_BUFFER,
    new Float32Array(squareVertices),
    objetoWgl.STATIC_DRAW
  );

  objetoWgl.bindBuffer(objetoWgl.ARRAY_BUFFER, null);


  objetoWgl.useProgram(null);


  cuadrado.vertexBuffer = vertexBuffer;


  var scene = {
    program: programa,
    object: cuadrado,
  };


  requestAnimationFrame(function() {
    render(objetoWgl, scene);
  });



}


inicio();
