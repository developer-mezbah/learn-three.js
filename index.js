// import three js
const scene = new THREE.Scene(); // It is Whole box

// Box geometry (width, height, depth)
const geometry = new THREE.BoxGeometry(2, 2, 2);
const materil = new THREE.MeshBasicMaterial({ color: "red" }); // box color

const box = new THREE.Mesh(geometry, materil);// combine gemetry and materil
box.position.x = 0.7
box.position.y = -0.6
box.position.z = 1
// box.position.set(x, y, z) 3 line to 1 line
// console.log(box.position.length());
// box.position.normalize()
// box.scale.set(2, .25, 1)
// box.rotation.reorder("ZYX")
box.rotation.y = 2.4

scene.add(box); // add on the scene 

const size = {
  width: 800,
  heigth: 600,
};

// perspective (vieing angle, width / hieght)
// It is scene size
const camera = new THREE.PerspectiveCamera(75, size.width / size.heigth);
camera.position.z = 5; // zoom left to right
// camera.position.x = 2; // move right to left

scene.add(camera);

//rendering
const target = document.querySelector(".wbgl");
const renderer = new THREE.WebGLRenderer({ canvas: target });

renderer.setSize(size.width, size.heigth);
renderer.render(scene, camera);

console.log(Date.now());
