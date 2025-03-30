import Phaser from 'phaser';

export default class Preloader extends Phaser.Scene {
    constructor() {
        super('preloader');
    }

    preload() {
        // Load assets here (images, sounds, etc.)
        // Example: this.load.image('logo', 'assets/logo.png');
        console.log('Preloader: Preloading assets...');
    }

    create() {
        console.log('Preloader: Assets loaded, starting Game scene...');
        // Once assets are loaded, start the main game scene
        this.scene.start('game');
    }
}
