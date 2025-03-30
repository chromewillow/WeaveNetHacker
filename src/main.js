import Phaser from 'phaser';
import Preloader from './scenes/Preloader';
import Game from './scenes/Game';

const config = {
    type: Phaser.AUTO, // AUTO detects WebGL or Canvas automatically
    width: 800,
    height: 600,
    parent: 'phaser-game', // ID of the div to contain the game canvas
    backgroundColor: '#000000',
    scale: {
        mode: Phaser.Scale.FIT, // Scale the game to fit the container
        autoCenter: Phaser.Scale.CENTER_BOTH // Center the game horizontally and vertically
    },
    scene: [Preloader, Game] // List of scenes, Preloader runs first
};

const game = new Phaser.Game(config);

export default game;
