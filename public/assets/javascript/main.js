
const maininit = () => {
    console.log('hiii');
    //globals
    let r = '255';
    let g = '255';
    let b = '255';
    const scene = new THREE.Scene();
    let camera  = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);
  
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    
   // document.getElementById("jCanvas").appendChild( renderer.domElement );
   document.body.appendChild( renderer.domElement ); 

    const onWindowResize = () => {
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    }
    window.addEventListener( 'resize', onWindowResize, false );
    
    const geo = new THREE.PlaneBufferGeometry( .1, .1, 1);
    const jbox = new THREE.BoxBufferGeometry(1.5,1.5,1.5);
    const mat = new THREE.MeshBasicMaterial( {
        
        side: THREE.FrontSide 
    });

    class jPlane {
        constructor(x,y){
            this.p = new THREE.Mesh(geo, mat),
            this.p.position.x = x, 
            this.p.position.y = y
        }
    }
    const map =(value,  min1,  max1,  min2,  max2)=> {
        return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
    }
    // const twoDarr = (cols, rows) => {
    //     const arr = new Array(cols);
    //     for(let i=0;i<arr.length;i++) {
    //         arr[i] = new Array(rows);
    //     }
    //     return arr;
    // } 
    var ph = [];
    
    var count = 100;
    var step = 1;
    for(var i = 0 ;i <= count;i+=step) {
        
        var x = map(i,0,count,-5,5);
        
        for(var j =0; j<=count;j+=step) {
           
            var y = map(j,0,count,-5,5);
            ph.push(new jPlane(x,y));
            scene.add(ph[i*j].p);
        }
    }
    
    

    const plane = new THREE.Mesh(geo,mat);
    scene.add(plane);

    var dirLight = new THREE.DirectionalLight('rgb(255,255,255)',1,50);
    scene.add(dirLight);
    plane.position.set(0,0,0);
    camera.position.set(0,0,3);

    const render = () => {
        renderer.render(scene, camera);
    }
    const update = () =>{
        mat.color.setHSL(1,1,0.5);
        render();
        requestAnimationFrame(update);
    }
    update();
}
if(window.location.pathname === '/') {
    maininit();
}
