(function() {
  ////////////////////////////////Seriously - QCA3642

  ///////do not modify

  var seriously, // the main object that holds the entire composition
    colorbars, // a wrapper object for our source image
    vignette, // a vignette effect
    target; // a wrapper object for our target canvas

  seriously = new Seriously();


  ///// ACTION - add effects

  colorbars = seriously.source('#colorbars');
  target = seriously.target('#canvas');
  vignette = seriously.effect('vignette');

  vignette.amount = '#vignette-range';


  vignette.source = colorbars;
  target.source = vignette;

  ///////do not modify
  seriously.go();

}());
