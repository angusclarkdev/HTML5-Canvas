(function(){

  const canvas = document.querySelector('canvas');
  const container = document.getElementById('container');
  const ctx = canvas.getContext('2d');

  // set canvas size
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;

  // create rectangles
  ctx.fillStyle = 'green';
  ctx.fillRect(410,250,200,40);
  ctx.fillRect(850,100,200,40);

//console.dir(container);
})();
