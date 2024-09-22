
// Canvas
const canvasGrouping = document.querySelector("canvas.grouping");

// Scene
const sceneGrouping = new THREE.Scene();

const group = new THREE.Group();
sceneGrouping.add(group);

/**
 * Objects
 */
const box1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
// box1.scale.set(0.5, 0.5, 0.5);

group.add(box1);
const box2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x000ff })
);
box2.position.x = 2;
// box2.scale.set(0.5, s0.5, 0.5);

group.add(box2);
const box3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
box3.position.x = -2;

group.add(box3);

/**
 * Sizes
 */
const sizesGrouping = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const cameraGrouping = new THREE.PerspectiveCamera(75, sizesGrouping.width / sizesGrouping.height);
cameraGrouping.position.set(0, 0, 3);
sceneGrouping.add(cameraGrouping);

// cameraGrouping.lookAt(mesh.position);

const axisHelper = new THREE.AxesHelper();
// scene.add(axisHelper);

// console.log(mesh.position.distanceTo(cameraGrouping.position));

/**
 * Renderer
 */
const rendererGrouping = new THREE.WebGLRenderer({
  canvas: canvasGrouping,
});
rendererGrouping.setSize(sizesGrouping.width, sizesGrouping.height);
rendererGrouping.render(sceneGrouping, cameraGrouping);
