import Phaser from 'phaser'

export default class Scene_main extends Phaser.Scene {
    // player?: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
    cursors?: Phaser.Types.Input.Keyboard.CursorKeys;

    ball?: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
    ballSize: number = 100;

    constructor() {
        super("Scene_main");
    }

    preload() {
        //{ frameWidth: this.ballSize, frameHeight: this.ballSize }
        this.load.image("ball", "assets/crystal-ball.svg");
    }

    create() {
        let { width, height } = this.sys.game.canvas;
        // this.ballSize-(this.ballSize/2)
        this.ball = this.physics.add.image(width/2, height/2, "ball");
        this.ball.setCollideWorldBounds(true);

        this.cursors = this.input.keyboard!.createCursorKeys();
    }

    update() {
        this.ball!.setVelocityX(0);
        if(this.cursors!.up.isDown){
            this.ball!.setVelocity(0, -500);
        }
        if(this.cursors!.left.isDown){
            this.ball!.setVelocity(-100, 0);
        }
        if(this.cursors!.right.isDown){
            this.ball!.setVelocity(100, 0);
        }
    }
}