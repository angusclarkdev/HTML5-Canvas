(function(){

  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');

  // set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // create rectangle
  ctx.fillRect(50,50,100,100);
})();
