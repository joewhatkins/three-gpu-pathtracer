var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},n=e.parcelRequire5b70;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return a[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,a){t[e]=a},e.parcelRequire5b70=n);var r=n("ilwiq"),i=n("RPVlj"),o=n("7lx9d"),s=n("5Rd1x"),l=n("4CEV9"),m=n("cVdfP"),d=n("891vQ"),c=n("kp7Te"),u=n("jiuw3");let g,h,p,C,v,w,y,f,b,M;const S={material1:{color:"#ffc766",emissive:"#000000",emissiveIntensity:1,roughness:.1,metalness:.8,ior:1.495,transmission:0,opacity:1,matte:!1},material2:{color:"#db7157",emissive:"#000000",emissiveIntensity:1,roughness:.8,metalness:.1,transmission:0,ior:1.495,opacity:1,matte:!1},material3:{color:"#000000",roughness:.01,metalness:.05,matte:!1},multipleImportanceSampling:!0,stableNoise:!1,environmentIntensity:3,environmentRotation:0,environmentBlur:0,backgroundBlur:.05,bounces:5,samplesPerFrame:1,acesToneMapping:!0,resolutionScale:1/window.devicePixelRatio,transparentTraversals:20,filterGlossyFactor:.5,tiles:1};window.location.hash.includes("transmission")&&(S.material1.metalness=0,S.material1.roughness=.05,S.material1.transmission=1,S.material1.color="#ffffff",S.bounces=10);function x(){const e=window.innerWidth,a=window.innerHeight,t=S.resolutionScale,n=window.devicePixelRatio;C.target.setSize(e*t*n,a*t*n),C.reset(),g.setSize(e,a),g.setPixelRatio(window.devicePixelRatio*t),v.aspect=e/a,v.updateProjectionMatrix()}function F(){C.reset()}function R(){const e=b.generate(f,S.environmentBlur);C.material.envMapInfo.updateFrom(e),C.reset()}function T(){requestAnimationFrame(T);const e=y[0];e.color.set(S.material1.color).convertSRGBToLinear(),e.emissive.set(S.material1.emissive).convertSRGBToLinear(),e.emissiveIntensity=S.material1.emissiveIntensity,e.metalness=S.material1.metalness,e.roughness=S.material1.roughness,e.transmission=S.material1.transmission,e.ior=S.material1.ior,e.opacity=S.material1.opacity;const a=y[1];a.color.set(S.material2.color).convertSRGBToLinear(),a.emissive.set(S.material2.emissive).convertSRGBToLinear(),a.emissiveIntensity=S.material2.emissiveIntensity,a.metalness=S.material2.metalness,a.roughness=S.material2.roughness,a.transmission=S.material2.transmission,a.ior=S.material2.ior,a.opacity=S.material2.opacity;const t=y[2];t.color.set(S.material3.color).convertSRGBToLinear(),t.metalness=S.material3.metalness,t.roughness=S.material3.roughness,C.material.materials.updateFrom(p.materials,p.textures),C.material.materials.setMatte(0,S.material1.matte),C.material.materials.setMatte(1,S.material2.matte),C.material.materials.setMatte(2,S.material3.matte),C.material.filterGlossyFactor=S.filterGlossyFactor,C.material.environmentIntensity=S.environmentIntensity,C.material.backgroundBlur=S.backgroundBlur,C.material.bounces=S.bounces,C.material.physicalCamera.updateFrom(v),v.updateMatrixWorld();for(let e=0,a=S.samplesPerFrame;e<a;e++)C.update();g.autoClear=!1,w.render(g),g.autoClear=!0,M.innerText=`Samples: ${Math.floor(C.samples)}`}window.innerWidth/window.innerHeight<.65&&(S.bounces=Math.max(S.bounces,6),S.resolutionScale*=.5,S.tiles=2,S.multipleImportanceSampling=!1,S.environmentBlur=.35),async function(){g=new r.WebGLRenderer({antialias:!0}),g.toneMapping=r.ACESFilmicToneMapping,document.body.appendChild(g.domElement),v=new l.PhysicalCamera(75,window.innerWidth/window.innerHeight,.025,500),v.position.set(-4,2,3),C=new l.PathTracingRenderer(g),C.camera=v,C.material=new l.PhysicalPathTracingMaterial,C.material.setDefine("TRANSPARENT_TRAVERSALS",S.transparentTraversals),C.material.setDefine("USE_MIS",Number(S.multipleImportanceSampling)),C.tiles.set(S.tiles,S.tiles),w=new i.FullScreenQuad(new r.MeshBasicMaterial({map:C.target.texture})),h=new s.OrbitControls(v,g.domElement),h.addEventListener("change",(()=>{C.reset()})),M=document.getElementById("samples"),b=new l.BlurredEnvMapGenerator(g);const e=new Promise((e=>{(new d.RGBELoader).load("https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/royal_esplanade_1k.hdr",(a=>{f=a,R(),e()}))})),a=new m.PathTracingSceneWorker,t=(new o.GLTFLoader).setMeshoptDecoder(c.MeshoptDecoder).loadAsync("https://raw.githubusercontent.com/gkjohnson/3d-demo-data/main/models/material-balls/material_ball_v2.glb").then((e=>{const t=new r.Group;e.scene.scale.setScalar(.01),e.scene.updateMatrixWorld(),t.add(e.scene);const n=new r.Box3;n.setFromObject(e.scene);const i=new r.Mesh(new r.CylinderBufferGeometry(3,3,.05,200),new r.MeshStandardMaterial({color:16777215,roughness:0,metalness:.25}));i.geometry=i.geometry.toNonIndexed(),i.geometry.clearGroups(),i.position.y=n.min.y-.03,t.add(i);const o=new r.MeshStandardMaterial,s=new r.MeshStandardMaterial;return e.scene.traverse((e=>{e.geometry&&e.geometry.computeVertexNormals(),"Sphere_1"===e.name?e.material=s:e.material=o,"subsphere_1"===e.name&&(e.material=s)})),y=[o,s,i.material],a.generate(t)})).then((e=>{p=e;const{bvh:t,textures:n,materials:r}=e,i=t.geometry,o=C.material;o.bvh.updateFrom(t),o.normalAttribute.updateFrom(i.attributes.normal),o.tangentAttribute.updateFrom(i.attributes.tangent),o.uvAttribute.updateFrom(i.attributes.uv),o.materialIndexAttribute.updateFrom(i.attributes.materialIndex),o.textures.setTextures(g,2048,2048,n),o.materials.updateFrom(r,n),a.dispose()}));await Promise.all([t,e]),document.getElementById("loading").remove(),x(),window.addEventListener("resize",x);const n=new u.GUI,I=n.addFolder("Path Tracing");I.add(S,"acesToneMapping").onChange((e=>{g.toneMapping=e?r.ACESFilmicToneMapping:r.NoToneMapping,w.material.needsUpdate=!0})),I.add(S,"stableNoise").onChange((e=>{C.stableNoise=e})),I.add(S,"multipleImportanceSampling").onChange((e=>{C.material.setDefine("USE_MIS",Number(e)),C.reset()})),I.add(S,"tiles",1,4,1).onChange((e=>{C.tiles.set(e,e)})),I.add(S,"samplesPerFrame",1,10,1),I.add(S,"filterGlossyFactor",0,1).onChange((()=>{C.reset()})),I.add(S,"environmentIntensity",0,10).onChange((()=>{C.reset()})),I.add(S,"environmentRotation",0,40).onChange((e=>{C.material.environmentRotation.setFromMatrix4((new r.Matrix4).makeRotationY(e)),C.reset()})),I.add(S,"environmentBlur",0,1).onChange((()=>{R()})),I.add(S,"backgroundBlur",0,1).onChange((()=>{C.reset()})),I.add(S,"bounces",1,30,1).onChange((()=>{C.reset()})),I.add(S,"transparentTraversals",0,40,1).onChange((e=>{C.material.setDefine("TRANSPARENT_TRAVERSALS",e),C.reset()})),I.add(S,"resolutionScale",.1,1).onChange((()=>{x()}));const B=n.addFolder("Camera");B.add(v,"focusDistance",1,100).onChange(F),B.add(v,"apertureBlades",0,10,1).onChange((function(e){v.apertureBlades=0===e?0:Math.max(e,3),this.updateDisplay(),F()})),B.add(v,"apertureRotation",0,12.5).onChange(F),B.add(v,"anamorphicRatio",.1,10).onChange(F),B.add(v,"bokehSize",0,50).onChange(F).listen(),B.add(v,"fStop",.3,20).onChange(F).listen(),B.add(v,"fov",25,100).onChange((()=>{v.updateProjectionMatrix(),F()})).listen();const P=n.addFolder("Shell Material");P.addColor(S.material1,"color").onChange(F),P.addColor(S.material1,"emissive").onChange(F),P.add(S.material1,"emissiveIntensity",0,50,.01).onChange(F),P.add(S.material1,"roughness",0,1).onChange(F),P.add(S.material1,"metalness",0,1).onChange(F),P.add(S.material1,"opacity",0,1).onChange(F),P.add(S.material1,"transmission",0,1).onChange(F),P.add(S.material1,"ior",.9,3).onChange(F),P.add(S.material1,"matte").onChange(F),P.close();const E=n.addFolder("Ball Material");E.addColor(S.material2,"color").onChange(F),E.addColor(S.material2,"emissive").onChange(F),E.add(S.material2,"emissiveIntensity",0,50,.01).onChange(F),E.add(S.material2,"roughness",0,1).onChange(F),E.add(S.material2,"metalness",0,1).onChange(F),E.add(S.material2,"opacity",0,1).onChange(F),E.add(S.material2,"transmission",0,1).onChange(F),E.add(S.material2,"ior",.9,3).onChange(F),E.add(S.material2,"matte").onChange(F),E.close();const G=n.addFolder("Floor Material");G.addColor(S.material3,"color").onChange(F),G.add(S.material3,"roughness",0,1).onChange(F),G.add(S.material3,"metalness",0,1).onChange(F),G.add(S.material3,"matte").onChange(F),G.close(),T()}();
//# sourceMappingURL=materialBall.2d30a0c5.js.map
