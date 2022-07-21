// Import stylesheets
import './style.css';

// Disable browser context menu
window.oncontextmenu =_=> false;

// Html canvas reference
const canvas = document.getElementById('canvas') as HTMLCanvasElement;

// Import all demos
import CameraFreeDemo from './demos/1_camera_free';
import CameraOrbitDemo from './demos/2_camera_orbit';
import FollowCameraDemo from './demos/3_camera_follow';

// Active demo instance
let demo = null;
// Active demo index 
// let demo_index = -1;
let demo_index = 1; // TEMP ( DEVELOPMENT )

// Put all demos classes into array to make the next button work
let demos = [
  // Camera demos (1,2,3): 
  CameraFreeDemo,CameraOrbitDemo,FollowCameraDemo,

];

// Auto resize babylon engine to fit window size
window.onresize =_=> demo ? demo.resize() : null;

// yes
function displayNextDemo() 
{
  if( ++demo_index > demos.length - 1 ) demo_index = 0;
  demo = new demos[ demo_index ]( canvas );
}

// Activate 'next' button and then display first demo
document.getElementById('next').onclick = displayNextDemo;
document.getElementById('next').ontouchstart = displayNextDemo;
displayNextDemo();