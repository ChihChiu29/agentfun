/* global colors, Phaser */

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  loader: {
    baseURL: "https://labs.phaser.io",
    crossOrigin: "anonymous"
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      debugBodyColor: colors.hexColors.blue,
      debugVelocityColor: colors.hexColors.green
    }
  }
};

var keys;
var player;
var text;

function preload() {
  this.load.image("block", "assets/sprites/block.png");
}

function create() {
  keys = this.input.keyboard.addKeys("W,A,S,D");

  // Same:
  // keys = this.input.keyboard.addKeys({ W: 'W', A: 'A', S: 'S', D: 'D' });

  // Named keys:
  // keys = this.input.keyboard.addKeys({ up: 'W', left: 'A', down: 'S', right: 'D' });

  console.log("keys", keys);

  player = this.physics.add.image(200, 150, "block");
  player.setCollideWorldBounds(true);
  
  text = this.add.text(20, 40, '', { fill: colors.cssColors.yellow });
}

function update() {
  player.setVelocity(0);

  if (keys.A.isDown) {
    player.setVelocityX(-300);
  } else if (keys.D.isDown) {
    player.setVelocityX(300);
  }

  if (keys.W.isDown) {
    player.setVelocityY(-300);
  } else if (keys.S.isDown) {
    player.setVelocityY(300);
  }
  
  text.setText(
    Object.entries(keys).map(([name, key]) => `${name}: keyCode=${key.keyCode} isDown=${key.isDown} isUp=${key.isUp} timeDown=${key.timeDown} timeUp=${key.timeUp}`)
  );
}

document.getElementById("version").textContent = "Phaser v" + Phaser.VERSION;

var game = new Phaser.Game(config);
