

(function() {
  var zoom = document.getElementById( 'zoom' ),
      Zw = zoom.offsetWidth,
      Zh = zoom.offsetHeight,
      img = document.getElementById( 'display' ),
      revealed = document.getElementById('zoomed');
      
  
  var timeout, ratio, Ix, Iy;

  function activate () {
    document.body.classList.add( 'active' );
  }
  
  function deactivate() {
    document.body.classList.remove( 'active' );
  }
  
  function updateMagnifier( x, y ) {
    zoom.style.top = ( y ) + 'px';
    zoom.style.left = ( x ) + 'px';
    zoom.style.backgroundPosition = (( Ix - x ) * ratio + Zw / 2 ) + 'px ' + (( Iy - y ) * ratio + Zh / 2 ) + 'px';
  }
  
  function onLoad () {
    ratio = img.naturalWidth / img.width;
    zoom.style.backgroundImage = 'url(' + revealed.src + ')';
    Ix = img.offsetLeft;
    Iy = img.offsetTop;
  }
  
  function onMousemove( e ) {
    clearTimeout( timeout );
    activate();
    updateMagnifier( e.x, e.y );
    timeout = setTimeout( deactivate, 2500 );
  }
  
  function onMouseleave () {
    deactivate();
  }

  img.addEventListener( 'load', onLoad );
  img.addEventListener( 'mousemove', onMousemove );
  img.addEventListener( 'mouseleave', onMouseleave );

})();