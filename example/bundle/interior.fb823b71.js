var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire5b70;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire5b70=a);var r=a("ilwiq"),i=a("RPVlj"),o=a("7lx9d"),s=a("5Rd1x"),l=a("4CEV9"),d=a("cVdfP"),m=a("891vQ"),u=a("kp7Te"),c=a("jiuw3");let p,w,h,g,f,b,v;const x={environmentIntensity:0,environmentRotation:0,emissiveIntensity:100,bounces:20,samplesPerFrame:1,resolutionScale:1/window.devicePixelRatio,filterGlossyFactor:.25,tiles:2};window.location.hash.includes("transmission")&&(x.material1.metalness=0,x.material1.roughness=.05,x.material1.transmission=1,x.material1.color="#ffffff",x.bounces=10);function y(){const e=window.innerWidth,t=window.innerHeight,n=x.resolutionScale,a=window.devicePixelRatio;g.target.setSize(e*n*a,t*n*a),g.reset(),p.setSize(e,t),p.setPixelRatio(window.devicePixelRatio*n),f.aspect=e/t,f.updateProjectionMatrix()}function F(){h.materials.forEach((e=>{e.emissiveIntensity=x.emissiveIntensity})),g.reset()}function C(){requestAnimationFrame(C),g.material.materials.updateFrom(h.materials,h.textures),g.material.filterGlossyFactor=x.filterGlossyFactor,g.material.environmentIntensity=x.environmentIntensity,g.material.environmentBlur=.35,g.material.bounces=x.bounces,f.updateMatrixWorld();for(let e=0,t=x.samplesPerFrame;e<t;e++)g.update();p.autoClear=!1,b.render(p),p.autoClear=!0,v.innerText=`Samples: ${Math.floor(g.samples)}`}window.innerWidth/window.innerHeight<.65&&(x.bounces=Math.min(x.bounces,10),x.resolutionScale*=.5,x.tiles=3),async function(){p=new r.WebGLRenderer({antialias:!0}),p.toneMapping=r.ACESFilmicToneMapping,document.body.appendChild(p.domElement),f=new r.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.025,500),f.position.set(.4,.6,2.65),g=new l.PathTracingRenderer(p),g.camera=f,g.material=new l.PhysicalPathTracingMaterial,g.tiles.set(x.tiles,x.tiles),b=new i.FullScreenQuad(new r.MeshBasicMaterial({map:g.target.texture})),w=new s.OrbitControls(f,p.domElement),w.target.set(-.15,.33,-.08),f.lookAt(w.target),w.addEventListener("change",(()=>{g.reset()})),w.update(),v=document.getElementById("samples");const e=new Promise((e=>{(new m.RGBELoader).load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/royal_esplanade_1k.hdr",(t=>{g.material.envMapInfo.updateFrom(t),e()}))})),t=new d.PathTracingSceneWorker,n=(new o.GLTFLoader).setMeshoptDecoder(u.MeshoptDecoder).loadAsync("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/pathtracing-bathroom/modernbathroom.glb").then((e=>{const n=new r.Group;n.add(e.scene);const a=new r.Box3;a.setFromObject(e.scene),n.updateMatrixWorld();const i=new r.Vector3;return a.getCenter(i),e.scene.position.addScaledVector(i,-.5),n.updateMatrixWorld(),t.generate(n)})).then((e=>{h=e;const{bvh:n,textures:a,materials:r}=e,i=n.geometry,o=g.material;o.bvh.updateFrom(n),o.normalAttribute.updateFrom(i.attributes.normal),o.tangentAttribute.updateFrom(i.attributes.tangent),o.uvAttribute.updateFrom(i.attributes.uv),o.materialIndexAttribute.updateFrom(i.attributes.materialIndex),o.textures.setTextures(p,2048,2048,a),o.materials.updateFrom(r,a),t.dispose()}));await Promise.all([n,e]),window.CAMERA=f,window.CONTROLS=w,document.getElementById("loading").remove(),y(),window.addEventListener("resize",y);const a=new c.GUI;a.add(x,"tiles",1,4,1).onChange((e=>{g.tiles.set(e,e)})),a.add(x,"samplesPerFrame",1,10,1),a.add(x,"filterGlossyFactor",0,1).onChange((()=>{g.reset()})),a.add(x,"environmentIntensity",0,25).onChange((()=>{g.reset()})),a.add(x,"environmentRotation",0,40).onChange((e=>{g.material.environmentRotation.setFromMatrix4((new r.Matrix4).makeRotationY(e)),g.reset()})),a.add(x,"emissiveIntensity",0,300).onChange(F),a.add(x,"bounces",1,30,1).onChange((()=>{g.reset()})),a.add(x,"resolutionScale",.1,1).onChange((()=>{y()})),F(),C()}();
//# sourceMappingURL=interior.fb823b71.js.map
