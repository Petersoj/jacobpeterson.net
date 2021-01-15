import * as THREE from 'three';
import $ from 'jquery';

$(window).on('load', function(){
    $('#container').animate({ opacity: 1 }, 2500);
    addFadeInAndEaseDelay('#name', 2000, 3000);
    addFadeInAndEaseDelay('#link-github', 3000, 3000);
    addFadeInAndEaseDelay('#link-instagram', 4000, 3000);
    addFadeInAndEaseDelay('#link-linkedin', 5000, 3000);
});

function addFadeInAndEaseDelay(jquerySelector, delayMillis, fadeInMillis) {
    setTimeout(function() {
        $(jquerySelector).animate({ opacity: 1 }, fadeInMillis).addClass('ease-animation');
    }, delayMillis);
}

// START Not my code! Credit: https://richardmattka.com

let container;
let camera, scene, renderer;
let uniforms, material;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let clock = new THREE.Clock();

init();
animate();

function init() {
    container = document.getElementById('container');
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000000);
    camera.position.z = 1;
    scene = new THREE.Scene();

    uniforms = {
        iGlobalTime: { type: "f", value: 0.0 },
        audio1: { type: "f", value: 0.0 },
        iResolution: { type: "v2", value: new THREE.Vector2() },
    };

    material = new THREE.ShaderMaterial( {
        uniforms: uniforms,
        vertexShader: document.getElementById('vertexShader').textContent,
        fragmentShader: document.getElementById('fragmentShader').textContent
    });

    let geometry = new THREE.PlaneGeometry(1, 1);
    let mesh = new THREE.Mesh( geometry, material );
    mesh.scale.x = window.innerWidth;
    mesh.scale.y = window.innerHeight;

    scene.add(mesh);

    renderer = new THREE.WebGLRenderer();
    container.appendChild(renderer.domElement);
    uniforms.iResolution.value.x = window.innerWidth;
    uniforms.iResolution.value.y = window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame( animate );
    render();
}

function render() {
    uniforms.iGlobalTime.value += clock.getDelta() * 0.5;
    renderer.render(scene, camera);
}

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

    uniforms.iResolution.value.x = window.innerWidth;
    uniforms.iResolution.value.y = window.innerHeight;
}

// END Not my code! Credit: https://richardmattka.com