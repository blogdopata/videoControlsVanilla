const $video = document.querySelector('video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');

const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');


//console.log($video);

console.log($play);
console.log($pause);


$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);


function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;

}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;

}



$backward.addEventListener('click', handlebackBackward);

$forward.addEventListener('click', handleForward);

function handlebackBackward() {
  $video.currentTime -= 10;

  console.log("tiempo de mi video", $video.currentTime)

}

function handleForward() {
  $video.currentTime += 10;

  console.log("tiempo de mi video", $video.currentTime)

}
/* para actualizar el Range */




const $progress = document.querySelector("#progress");


$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);


function handleLoaded() {
  $progress.max = $video.duration;
  console.log($video.duration)
}

function handleTimeUpdate(){
  $progress.value = $video.currentTime;
  console.log("tiempo actual " ,  $video.currentTime)


}

$progress.addEventListener('input', handleInput );

function handleInput(){

  $progress.currentTime = $video.value;
  console.log($progress.value)

}