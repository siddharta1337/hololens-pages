


var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

camera.position.z = 4;

var renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setClearColor("#FF0000");

renderer.setSize( window.innerWidth, window.innerHeight );


document.body.appendChild( renderer.domElement );

/// configurar el render
var render = function () {
  requestAnimationFrame( render );
  renderer.render(scene, camera);
};


///Invocar render
render();

