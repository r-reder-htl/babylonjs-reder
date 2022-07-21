import Demo from './demo';
const B = BABYLON;
const V3 = B.Vector3;
const T = B.Tools;

export default class DemoSubclass extends Demo
{
  box;

  constructor( canvas:HTMLCanvasElement ) 
  {
    super( canvas, "<b>FollowCamera</b>: the box is animated in engine loop, and camera automatically follows" );
    // info = ;

    this.addGround();
    this.addLight();

    this.box = B.Mesh.CreateBox('box1',1, this.scene );
    this.box.position.y = 0.5;
    this.box.position.x = 5;
    this.box.rotation.y = T.ToRadians( -25 );

    let camera = new B.FollowCamera( 
      "camera1", 
      V3.Zero(),
      this.scene,
      this.box
    );

    // camera distance from target
    camera.radius = 15;
    // drone point of view
    camera.heightOffset = 6;

    camera.attachControl(canvas, true);
  }

  onUpdate( ) 
  {
    super.onUpdate();

    this.box.rotation.y += 0.04;
    this.box.position.x += Math.cos( this.box.rotation.y )  * 0.1;
    this.box.position.z += Math.sin( this.box.rotation.y )  * 0.1;

  }
}