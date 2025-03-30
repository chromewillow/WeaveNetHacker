import Phaser from 'phaser';
import WindowManager from '../ui/WindowManager'; 

export default class Game extends Phaser.Scene {
    constructor() {
        super('game');
        /** @type {WindowManager | null} */
        this.windowManager = null; 
    }

    create() {
        console.log('Game: Scene created!');

        // Set a background color for the desktop
        // Using a deep blue/purple tone as discussed for the theme
        this.cameras.main.setBackgroundColor('#0a0a2a'); 

        // Initialize the WindowManager for this scene
        this.windowManager = new WindowManager(this);

        // --- Create a test window ---
        this.windowManager.createWindow({ 
            title: 'Test Window', 
            x: 100, 
            y: 100, 
            width: 400, 
            height: 300 
        });
        
        this.windowManager.createWindow({ 
            title: 'Another Window', 
            x: 250, 
            y: 200, 
            width: 300, 
            height: 200 
        });
        // ---------------------------------------------------------------------

        // --- Global Input Debug ---
        this.input.on('pointerdown', (pointer) => {
            console.log(`Global Pointer Down at: (${pointer.worldX}, ${pointer.worldY})`);
        });
        // --------------------------
    }

    update(time, delta) {
        // Game loop logic (runs continuously)
        // Potential future use: update window animations or effects
    }
}
