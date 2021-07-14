let config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

let game = new Phaser.Game(config)
let time = 0
let i = 0.1

function preload() {
    this.load.image("background_one", "assets/BackgroundOne.png")
    this.load.spritesheet("snowy_landscape", "assets/SnowyLandscape.png", {frameWidth: 2048, frameHeight: 2048})
    this.load.spritesheet("pink_lantern", "assets/PinkLantern.png", {frameWidth: 1024, frameHeight: 1024})
}

function create() {
    backgroundOne = this.add.sprite(window.innerWidth / 2, window.innerHeight / 2, "background_one")
    backgroundOne.displayWidth = window.innerWidth
    backgroundOne.displayHeight = window.innerHeight
    var snowConfig = {
        key: "snow",
        frames: this.anims.generateFrameNumbers("snowy_landscape", {start: 4, end: 4}),
        frameRate: 1,
        repeat: -1
    }
    this.anims.create(snowConfig)
    snowyLandscape = this.add.sprite(400, 400, "snowy_landscape").play("snow")
    snowyLandscape.setScale(0.3)
    var pinkConfig = {
        key: "pink_blink",
        frames: this.anims.generateFrameNumbers("pink_lantern", {start: 0, end: 1}),
        frameRate: 4,
        repeat: -1
    }
    this.anims.create(pinkConfig)
    this.pinkLantern = this.add.sprite(200, 200, "pink_lantern").play("pink_blink")
    this.pinkLantern.setScale(0.1)
}

function update() {
    time += i
    this.pinkLantern.y = 200 + Math.sin(time / 5) * 50
}