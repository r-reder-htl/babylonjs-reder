import Demo from './demo';
const B = BABYLON;
const V3 = B.Vector3;

export default class DemoSubclass extends Demo {
  constructor(canvas: HTMLCanvasElement) {
    let info =
      '<b>FreeCamera</b>: Touch down and drag camera, use WASD keys to move';
    super(canvas, info);

    this.addGround();
    this.addLight();

    let box = B.Mesh.CreateBox('box1', 3, this.scene);
    box.position.y = 2;

    let camera = new B.FreeCamera('camera1', new V3(-19, 10, -15), this.scene);
    camera.setTarget(V3.Zero());
    camera.attachControl(canvas, true);
    camera.keysUp.push(88); // W x88
    camera.keysDown.push(83); // S
    camera.keysLeft.push(65); // A
    camera.keysRight.push(68); // D
  }
}
