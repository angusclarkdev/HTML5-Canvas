(function () {
  const canvas = document.querySelector('canvas')
  const container = document.getElementById('container')
  const c = canvas.getContext('2d')

  // set canvas size
  canvas.width = container.clientWidth
  canvas.height = container.clientHeight

  // create rectangles
  c.fillStyle = 'green'
  c.fillRect(100, 100, 100, 100)
  c.fillRect(400, 100, 100, 100)
  c.fillRect(300, 300, 100, 100)

  // draw a line
  c.beginPath()
  c.moveTo(50, 100)
  c.lineTo(200, 300)
  c.stroke()

})()
