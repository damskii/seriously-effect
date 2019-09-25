(function() {
  ////////////////////////////////Seriously - QCA3642

  ///////do not modify

  var seriously, // the main object that holds the entire composition
    colorbars, // a wrapper object for our source image
    vignette, // a vignette effect
    target; // a wrapper object for our target canvas

  seriously = new Seriously();


 ////////////////////// ACTION - enter the video URL
 var videoName =
   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

 var video = document.createElement('video');
 video.src = videoName
 video.width =  window.innerWidth;
 video.height = window.innerHeight;

 ///////do not modify
 var canvas = document.createElement("canvas");
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 canvas.style.position = "absolute";
 document.body.scrollTop = 0; // <-- pull the page back up to the top
 document.body.style.overflow = "hidden";
 document.body.style.top = 0;
 document.body.style.left = 0;
 document.body.style.margin = 0;
 document.body.style.border = "none";
 document.body.appendChild(canvas);




  ///// ACTION - add effects

  colorbars = seriously.source(video);
  target = seriously.target(canvas);
  vignette = seriously.effect('vignette');

  vignette.amount = '#vignette-range';


  vignette.source = colorbars;
  target.source = vignette;

  ///////do not modify
  seriously.go();

}());
