var movement = {
    up: false,
    down: false,
    left: false,
    right: false,
    stop: false,
    check: false,
    width: 0,
    height: 0,
    start: false
}
document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 65 || 37: // A
            movement.left = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 87 || 38: // W
            movement.up = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 68 || 39: // D
            movement.right = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 83 || 40: // S
            movement.down = true;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 32:
            movement.stop = true
            movement.check = true;
            movement.width = w;
            movement.height = h;
        case 13:
            movement.start = true;
    }
});
document.addEventListener('keyup', function(event) {
    switch (event.keyCode) {
        case 65 || 37: // A
            movement.left = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 87 || 38: // W
            movement.up = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 68 || 39: // D
            movement.right = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 83 || 40: // S
            movement.down = false;
            movement.check = true;
            movement.width = w;
            movement.height = h;
            break;
        case 32:
            movement.stop = false;
            movement.check = false;
            movement.width = 0;
            movement.height = 0;
            break;
        case 13:
            movement.start = false;
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
movementemit()

socket.emit('new player');

var canvas = document.getElementById('mainCanvas');
var ctx = canvas.getContext('2d');

var w = window.innerWidth
var h = window.innerHeight

canvas.width = w
canvas.height = h

ctx.fillStyle = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

socket.on('state', function(players) {
    
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'black'
    
  for (var id in players) {
    var player = players[id];
    ctx.beginPath();
    ctx.arc(player.x, player.y, 5, 0, 2 * Math.PI);
    ctx.fill();
  }
});

ctx.font = "30px Arial";
ctx.strokeText("Controls: WASD keys to move, SPACE key to stop movement.",w/2,h);
