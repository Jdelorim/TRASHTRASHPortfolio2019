
    
    const scene = new THREE.Scene();
    let camera  = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild( renderer.domElement ); 

    const onWindowResize = () => {
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
    window.addEventListener( 'resize', onWindowResize, false );

    const jbox = new THREE.BoxGeometry(1.5,1.5,1.5);
    const jmat = new THREE.MeshBasicMaterial({color: 'rgb(255,255,255)'});
    const cube = new THREE.Mesh(jbox,jmat);

    scene.add(cube);
    camera.position.z = 5;
    cube.rotation.x = 10;
    cube.rotation.y = 5;
    cube.position.z = -5;

    const animate = () => { 
        cube.rotation.x += 0.04;
        cube.rotation.y += .05/2;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();



