var movement = {
    up: false,
    down: false,
    left: false,
    right: false,
    check: false,
    width: 0,
    height: 0,
}
document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 65: // A 37
            movement.left = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            canvas.translate(-5,0);
            break;
        case 87: // W 38
            movement.up = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            canvas.translate(0,5);
            break;
        case 68: // D 39
            movement.right = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            canvas.translate(5,0);
            break;
        case 83: // S 40
            movement.down = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            canvas.translate(0,-5);
            break;
        case 37: // left
            movement.left = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            canvas.translate(-5,0);
            break;
        case 38: // up
            movement.up = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            canvas.translate(0,5);
            break;
        case 39: // right
            movement.right = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            canvas.translate(5,0);
            break;
        case 40: //down
            movement.down = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            canvas.translate(0,-5);
            break;
    }
});
document.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
        case 65: // A
            movement.left = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 87: // W
            movement.up = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 68: // D
            movement.right = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 83: // S 40
            movement.down = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 37:
            movement.left = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 38:
            movement.up = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 39:
            movement.right = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 40:
            movement.down = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
    }
});

var socket = io()


//setInterval(function() {
//  socket.emit('movement', movement);
//}, 1000 / 60);

function movementemit() {
    requestAnimationFrame(movementemit)
    socket.emit('movement', movement);
}

var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');

var w = window.innerWidth
var h = window.innerHeight

canvas.width = w
canvas.height = h

socket.on('state', function(players) {
    
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'black'
    
  for (var id in players) {
    var player = players[id];
    ctx.beginPath();
    ctx.arc(player.x, player.y, 20, 0, 2 * Math.PI);
    ctx.fill()
  }
});


