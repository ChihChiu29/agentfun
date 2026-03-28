const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let player;
let cursors;
let bullets;
let lastFired = 0;
const BULLET_SPEED = 400;
const FIRE_RATE = 200;

const game = new Phaser.Game(config);

function preload() {
    this.load.image('ship', 'https://examples.phaser.io/assets/sprites/player.png');
    this.load.image('bullet', 'https://examples.phaser.io/assets/sprites/laser.png');
}

function create() {
    player = this.physics.add.sprite(400, 550, 'ship').setCollideWorldBounds(true);
    cursors = this.input.keyboard.createCursorKeys();

    bullets = this.physics.add.group({
        classType: Phaser.GameObjects.Image,
        defaultKey: 'bullet',
        maxSize: 10,
        runChildUpdate: true
    });
}

function update(time, delta) {
    if (cursors.left.isDown) {
        player.setVelocityX(-200);
    } else if (cursors.right.isDown) {
        player.setVelocityX(200);
    } else {
        player.setVelocityX(0);
    }

    if (cursors.space.isDown && time > lastFired + FIRE_RATE) {
        const bullet = bullets.get(player.x, player.y - 20);
        if (bullet) {
            bullet.setActive(true);
            bullet.setVisible(true);
            bullet.body.velocity.y = -BULLET_SPEED;
            lastFired = time;
        }
    }

    // Remove bullets that leave the screen
    bullets.children.each(function(b) {
        if (b.active && b.y < 0) {
            b.setActive(false);
            b.setVisible(false);
        }
    });
}
