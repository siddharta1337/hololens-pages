


var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

camera.position.z = 4;

var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setClearColor("#FF0000");

renderer.setSize( window.innerWidth, window.innerHeight );


document.body.appendChild( renderer.domElement );

//////////


var textura = new THREE.TextureLoader().load( 'tigre.jpg' );



var cuboGeometrico = new THREE.BoxGeometry(2,3,1);
var materialCubo = new THREE.MeshBasicMaterial( { color:"#FFF" } );
var cubo = new THREE.Mesh( cuboGeometrico , materialCubo);






var conoGeometrico = new THREE.ConeGeometry(1,2,99);
var materialCono = new THREE.MeshBasicMaterial( {  map: textura  } );
var cono = new THREE.Mesh( conoGeometrico, materialCono );

scene.add(cubo)
scene.add( cono );


cono.position.set(2,0,0)

//////////



/// configurar el render
var render = function () {
  requestAnimationFrame( render );


  cubo.rotation.x += 0.01;
  cubo.rotation.y += 0.01;


  cono.rotation.y += 0.5;






  renderer.render(scene, camera);
};


///Invocar render
render();

