import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap, { Circ } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSelector } from 'react-redux';


const Carousel = ({ items }) => {
  const containerRef = useRef();
  const timelineRef = useRef(null);
  let camera, scene, renderer, box, controls;
  let obj = [];
  const selectedIndex = useSelector((state) => state.selectedIndex);
  useEffect(() => {
    init();
    setGsap();
  }, []);

  useEffect(() => {
  const scrollLength = window.innerHeight * ( window.innerHeight / document.body.offsetHeight )
    if (selectedIndex < 9) {
      window.scrollTo({
        top: scrollLength * ((selectedIndex) / 7),
      });
    } else {
      window.scrollTo({
        top: scrollLength * (selectedIndex / 15),
      });
    
      if (selectedIndex === 14) {
        window.scrollTo({
          top: scrollLength,
        });
      }
    }

  },[selectedIndex])

  

  const init = () => {
    let container;
    container = containerRef.current;
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 1000);
    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);
    scene.fog = new THREE.FogExp2( 0x000000, .006 )


    const geometry = new THREE.BoxGeometry(30, 20, 0.2);

    for (let x = 0; x < 15; x++) {
      const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(require(`assets/images/releas_${x + 1}.png`)),
      });
      box = new THREE.Mesh(geometry, material);
      scene.add(box);
      obj.push(box);
      if( x < 9 ) {
        obj[ x ].position.z = 20 * x
        obj[ x ].rotation.y = -0.25 * x
        obj[ x ].position.x = x * -15
      } else {
        obj[ x ].position.z = obj[ 8 ].position.z
        obj[ x ].rotation.y = obj[ 8 ].rotation.y - 0.17 * ( x - 8 )
        obj[ x ].position.x = x * ( -8 - x )
      }

    }

    camera.position.set(-5, 10.5, -50);

    // Use OrbitControls from three instead of Vue-specific controls

    
    controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableZoom = false;
    controls.update();

    animate();

    window.addEventListener('resize', resize);
  };

  const animate = () => {
    const clock = new THREE.Clock();
    
    const render = () => {
      const t = clock.getElapsedTime();
      const positions = box.geometry.attributes.position.array;

      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
      
        const waveX1 = 0.1;
        const waveX2 = 3 * Math.sin(x * 1.5 + t / 2);
        const waveY1 = 2;
      
        positions[i + 2] = waveX1 + waveX2 + waveY1;
      }
      
      box.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    render();
  };

  const resize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  const initGsap = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger:'.App',
          pin:true,
          scrub:6,
          toggleActions: 'restart none reverse none',
        }
      });
      
        tl.to( camera.position, {
          z: 100,
          x: -50,
          ease: 'none',
          duration: 2,
        } )
        .fromTo( '.main-desc', {
          yPercent: 0,
        }, {
          yPercent: -500,
          duration: 1,
        }, '-=1' )
        .fromTo( '.desc-a', {
          yPercent: 400,
        }, {
          yPercent: 0,
          duration: .9
        }, '-=0.9' )
        .to( camera.position, {
          x: -150,
          z: 120,
          duration: 2,
          ease: Circ.easeOut
        } )
        .to( '.desc-a', {
          yPercent: -500,
          duration: .9,
        }, '-=1.9' )
        .fromTo( '.desc-b', {
          yPercent: 300,
        }, {
          yPercent: 0,
          duration: .9
        }, '-=2' )
        .to( '.desc-b', {
          yPercent: -300,
          duration: .9,
        }, '-=0.9' )
        .fromTo( '.desc-c', {
          yPercent: 300,
        }, {
          yPercent: 0,
          duration: 2
        }, '-=1.9' )
        .to( camera.position, {
          x: -200,
          duration: 2,
        } )
        .to( '.desc-c', {
          yPercent: -200,
          duration: 2,
        }, '-=0.9' )
        .fromTo( '.desc-d', {
          yPercent: 200,
        }, {
          yPercent: 0,
          duration: .9
        }, '-=1.9' )
        .to( '.desc-d', {
          yPercent: -200,
          duration: .9,
        }, '-=.9' )
        .fromTo( '.desc-e', {
          yPercent: 250
        }, {
          duration: .9,
          yPercent: 0
        }, '-=0.9' )
  };

  const initMGsap = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger:'.App',
        pin:true,
        scrub:6,
        toggleActions: 'restart none reverse none',
      }
    });
    tl.to( camera.position, {
      z: 100,
      x: -50,
      ease: 'none',
      duration: 2,
    } )
    .fromTo( '.main-desc', {
      yPercent: 0,
    }, {
      yPercent: -500,
      duration: 1,
    }, '-=1' )
    .fromTo( '.desc-a', {
      yPercent: 400,
    }, {
      yPercent: 0,
      duration: .9
    }, '-=0.9' )
    .to( camera.position, {
      x: -150,
      z: 120,
      duration: 2,
      ease: Circ.easeOut
    } )
    .to( '.desc-a', {
      yPercent: -500,
      duration: .9,
    }, '-=1.9' )
    .fromTo( '.desc-b', {
      yPercent: 300,
    }, {
      yPercent: 0,
      duration: .9
    }, '-=2' )
    .to( '.desc-b', {
      yPercent: -400,
      duration: .9,
    }, '-=0.9' )
    .fromTo( '.desc-c', {
      yPercent: 300,
    }, {
      yPercent: 0,
      duration: 2
    }, '-=1.9' )
    .to( camera.position, {
      x: -200,
      duration: 2,
    } )
    .to( '.desc-c', {
      yPercent: -400,
      duration: 2,
    }, '-=0.9' )
    .fromTo( '.desc-d', {
      yPercent: 300,
    }, {
      yPercent: -10,
      duration: 1
    }, '-=1.9' )
    .to( '.desc-d', {
      yPercent: -400,
      duration: 1,
    }, '-=.9' )
    .fromTo( '.desc-e', {
      yPercent: 500
    }, {
      duration: .9,
      yPercent: -10
    }, '-=0.9' )
    .to(camera.position, {
      x : -240,
      duration: 1
    }, '-=1')
  };

  const setGsap = () => {
    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia();

    media.add('(min-width: 1025px)', () => {
      initGsap();
    })
      .add('(max-width: 1024px)', () => {
        camera.position.set(-5, 10.5, -50);
        initMGsap();
      });

      ScrollTrigger.refresh();
  };

  return (
  <div className="carousel" ref={containerRef}>
    
  </div>
  );
};

export default Carousel;
