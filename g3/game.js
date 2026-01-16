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
        sprite: this.add.text(offsetX + map[1].indexOf('@') * tileSize, offsetY + 1 * tileSize, '@', { fontSize: '32px', fill: '#fff' })
    };

    enemies = [];
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === 'E') {
                const enemy = {
                    hp: 5,
                    mp: 3,
                    skills: [],
                    sprite: this.add.text(offsetX + x * tileSize, offsetY + y * tileSize, 'E', { fontSize: '32px', fill: '#f00' })
                };
                enemies.push(enemy);
            }
        }
    }
}

function update() {
    // Add player movement and enemy behavior here
}
