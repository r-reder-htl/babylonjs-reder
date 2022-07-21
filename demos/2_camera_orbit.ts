import Demo from './demo';
const B = BABYLON;
const V3 = B.Vector3;
const T = B.Tools;

export default class DemoSubclass extends Demo
{
  constructor( canvas:HTMLCanvasElement ) 
  {
    let info = "<b>ArcRotateCamera</b>: Touch down and drag to rotate camera, mouse wheel to zoom";
    super( canvas, info );

    this.addGround();
    this.addLight();

    let box = B.Mesh.CreateBox('box1',4, this.scene );
    box.position.y = 2;

    // Rotation around x-axis (rad)
    let alpha = T.ToRadians( 30 );
    // Rotation around y-axis (rad)
    let beta = T.ToRadians( 65 );
    // Distance between the target point the camera is going to be orbiting
    let radius = 30;
    // Orbit center 
    let target = V3.Zero();

    let camera = new B.ArcRotateCamera(
      'camera1', 
      alpha, 
      beta, 
      radius,
      target, 
      this.scene );

    camera.attachControl(canvas, true);
  }
}