// Canvas
const canvasBA = document.querySelector("canvas.basic-animation");

// scene
const sceneBA = new THREE.Scene();

// Object
const geometryBA = new THREE.BoxGeometry(1, 1, 1);
const materialBA = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const meshBA = new THREE.Mesh(geometryBA, materialBA);
sceneBA.add(meshBA);

// Sizes
const sizesBA = {
  width: 800,
  height: 600,
};

// camera
const cameraBA = new THREE.PerspectiveCamera(75, sizesBA.width / sizesBA.height);
cameraBA.position.z = 3;
sceneBA.add(cameraBA);

// renderer
const rendererBA = new THREE.WebGLRenderer({
  canvas: canvasBA,
});

rendererBA.setSize(sizesBA.width, sizesBA.height);

let clockBA = new THREE.Clock();

const tick = () => {
    const elapsedTime = clockBA.getElapsedTime();
    cameraBA.position.y = Math.sin(elapsedTime)
    cameraBA.position.x = Math.cos(elapsedTime)
    cameraBA.lookAt(meshBA.position)

    rendererBA.render(sceneBA, cameraBA);
    window.requestAnimationFrame(tick)
}
tick()
