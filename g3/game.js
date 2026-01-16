const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#000',
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let map;
let player;
let enemies;

function preload() {
    // No need to load any images
}

function create() {
    map = [
        "########",
        "#@     #",
        "#  E   #",
        "#  E   #",
        "########"
    ];

    const tileSize = 32;
    const offsetX = (config.width - map[0].length * tileSize) / 2;
    const offsetY = (config.height - map.length * tileSize) / 2;

    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            const char = map[y][x];
            if (char !== ' ') {
                this.add.text(offsetX + x * tileSize, offsetY + y * tileSize, char, { fontSize: '32px', fill: '#fff' });
            }
        }
    }

    player = {
        hp: 10,
        mp: 5,
        skills: [],
        sprite: this.add.text(offsetX + map[1].indexOf('@') * tileSize, offsetY + 1 * tileSize, '@', { fontSize: '32px', fill: '#fff' }),
        x: map[1].indexOf('@'),
        y: 1
    };

    enemies = [];
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === 'E') {
                const enemy = {
                    hp: 5,
                    mp: 3,
                    skills: [],
                    sprite: this.add.text(offsetX + x * tileSize, offsetY + y * tileSize, 'E', { fontSize: '32px', fill: '#f00' }),
                    x: x,
                    y: y
                };
                enemies.push(enemy);
            }
        }
    }

    // Add WASD controls
    this.input.keyboard.on('keydown_W', () => {
        console.log('W pressed');
        movePlayer(-1, 0);
    });
    this.input.keyboard.on('keydown_S', () => {
        console.log('S pressed');
        movePlayer(1, 0);
    });
    this.input.keyboard.on('keydown_A', () => {
        console.log('A pressed');
        movePlayer(0, -1);
    });
    this.input.keyboard.on('keydown_D', () => {
        console.log('D pressed');
        movePlayer(0, 1);
    });
}

function update() {
    // Keep player centered
    const tileSize = 32;
    const offsetX = (config.width - map[0].length * tileSize) / 2;
    const offsetY = (config.height - map.length * tileSize) / 2;

    player.sprite.setPosition(offsetX + player.x * tileSize, offsetY + player.y * tileSize);

    // Update enemy positions
    enemies.forEach(enemy => {
        enemy.sprite.setPosition(offsetX + enemy.x * tileSize, offsetY + enemy.y * tileSize);
    });
}

function movePlayer(dx, dy) {
    const newX = player.x + dx;
    const newY = player.y + dy;

    if (map[newY] && map[newY][newX] !== '#') {
        player.x = newX;
        player.y = newY;
    }
}
