//cdn 

import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/three.min.js';
import Stats from 'https://cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js';
import Tone from 'https://cdnjs.cloudflare.com/ajax/libs/tone/13.0.1/Tone.min.js';
import OrbitControls from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r83/controls/OrbitControls.min.js';




var IW = {
    version: '0.0.1',
    camera: null,
    scene: null,
    container: null,
    controls: null,
    feedback: null,
    clock: null,
    stats: null,
    init: function() {
        // three.js init scene  
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.set(0, 0, 1000);
        this.scene.add(this.camera);
        // init renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setClearColor(0x000000, 1.0);
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;
        // init container
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
        this.container.appendChild(this.renderer.domElement);
        // init controls
        this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.controls.addEventListener('change', this.render);
        // init clock

        // init tone.js
        this.sound = new Tone();
        this.sound.toMaster();
        // init stats
        this.stats = new Stats();




    }




}


IW.feedback = {
    init: function() {
    },
    update: function() {
    },
    show: function() {
    },
    hide: function() {
    },
    active: false,
    submitted: false
}