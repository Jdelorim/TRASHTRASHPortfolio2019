

document.addEventListener("DOMContentLoaded", () => {
    //google analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-131826143-2');

    let firstTime;
    const myInt = null;
    const myTime = null;

    const tooltiper = document.querySelectorAll('.tooltipped');

    M.Tooltip.init(tooltiper, {});

    const startTrash = () => {
        //console.log("in start");
        firstTime = false;
        //console.log("firstTime:", firstTime);
        setTimeout(() => {
       const myInt = setInterval(myTimer, 1000 / 8);
       const myTime = setTimeout(trashStop, 10000);
        }, 10000);
        
    }
    startTrash();
    
   const myTimer = () => {
        var logo = document.getElementById("trashtrash");
        var bck = document.getElementById("splashTrash");

        (logo.style.color == "black") ? logo.style.color = "white": logo.style.color = "black";
        (bck.style.backgroundColor == "white") ? bck.style.backgroundColor = "black": bck.style.backgroundColor = "white";
        
        //console.log('in strobe');
        
        if (firstTime === true) {
            clearInterval(myInt);
            clearTimeout(myTime);
            trashStop();
        }
    }

     const trashStop = () => {
        var logo = document.getElementById("trashtrash");
        var bck = document.getElementById("splashTrash");
        
        firstTime = true;
        
        logo.style.color = "white";
        bck.style.backgroundColor = "black";

        var x = document.getElementById("jTT");
        x.style.display = "block";
    }
    //3d
    // const scene = new THREE.Scene();
    // let camera  = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight);
    // const renderer = new THREE.WebGLRenderer({antialias: true});
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // $('body').append(renderer.domElement);

    // var jbox = new THREE.BoxGeometry(1.5,1.5,1.5);
    // var jmat = new THREE.MeshBasicMaterial({color: 0xdddddd});
    // var cube = new THREE.Mesh(jbox,jmat);

    // scene.add(cube);
    // camera.position.z = 5;
    // cube.rotation.x = 10;
    // cube.rotation.y = 5;
    // cube.position.z = -5;

    // var animate = () => { 
    //     cube.rotation.x += 0.04;
    //     cube.rotation.y += .05/2;
    //     renderer.render(scene, camera);
    //     requestAnimationFrame(animate);
    // }
    // animate();


});

