// Creates Scene and Camera.
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Adds renderer to de DOM.
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Creates the Cylinder. 
var geometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );
var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

// Camera away form the cylinder.
camera.position.z = 30;

// Rendering.
function render() {
    requestAnimationFrame( render );

    cylinder.rotation.x += 0.02;
    cylinder.rotation.z += 0.02;

    renderer.render( scene, camera );
}

render();