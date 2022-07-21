import Demo from './demo';
const B = BABYLON;
const V3 = B.Vector3;

export default class DemoSubclass extends Demo
{
  constructor( canvas:HTMLCanvasElement ) 
  {
    super( canvas, 'info text goes here' );
  }
}