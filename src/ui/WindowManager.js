import Phaser from 'phaser';

/**
 * Manages UI windows (Phaser Containers) within a scene.
 * Handles creation, depth sorting, focus, and basic dragging.
 */
export default class WindowManager {
    constructor(scene) {
        /** @type {Phaser.Scene} */
        this.scene = scene;
        /** @type {Phaser.GameObjects.Container[]} */
        this.windows = [];
        /** @type {Phaser.GameObjects.Container | null} */
        this.activeWindow = null;

        console.log('WindowManager initialized.');
    }

    // --- Basic Window Management ---

    /**
     * Creates a new window container.
     * @param {object} config - Window configuration.
     * @param {string} config.title - The title displayed in the title bar.
     * @param {number} config.x - Initial x position.
     * @param {number} config.y - Initial y position.
     * @param {number} config.width - Window width.
     * @param {number} config.height - Window height.
     * @param {string} [config.contentComponent] - Optional identifier for content type.
     * @returns {Phaser.GameObjects.Container | null}
     */
    createWindow(config) {
        console.log('WindowManager: Creating window:', config.title);

        const { x, y, width, height, title } = config;
        const titleBarHeight = 30;
        const windowDepth = this.getNextHighestDepth();

        // --- Create Container ---
        const container = this.scene.add.container(x, y);
        container.setSize(width, height);
        container.setDepth(windowDepth);
        container.setData('config', config); // Store config for later use

        // --- Window Background ---
        // Use a slightly lighter shade than the desktop for contrast
        const background = this.scene.add.graphics();
        background.fillStyle(0x1a1a3a, 0.9); // Dark blue-grey, slightly transparent
        background.fillRect(0, 0, width, height);
        background.lineStyle(1, 0x5a5a7a, 1);
        background.strokeRect(0.5, 0.5, width - 1, height - 1);
        container.add(background);

        // --- Title Bar ---
        const titleBar = this.scene.add.graphics();
        titleBar.fillStyle(0x3a3a5a, 1); // Medium grey-blue
        titleBar.fillRect(0, 0, width, titleBarHeight);
        container.add(titleBar);

        // --- Title Text ---
        const titleText = this.scene.add.text(
            10, // Padding from left
            titleBarHeight / 2,
            title,
            { fontSize: '16px', color: '#ffffff', fontStyle: 'bold' }
        );
        titleText.setOrigin(0, 0.5);
        container.add(titleText);

        // --- Placeholder Buttons (Implement later) ---
        const closeButton = this.scene.add.graphics();
        closeButton.fillStyle(0xff0000, 1);
        closeButton.fillRect(width - 25, 5, 20, 20);
        container.add(closeButton);

        // --- Interactivity ---
        // Make the entire container interactive for clicking and dragging
        container.setInteractive(new Phaser.Geom.Rectangle(0, 0, width, height), Phaser.Geom.Rectangle.Contains);
        this.scene.input.setDraggable(container); // Make the container itself draggable

        container.on('pointerdown', (pointer) => {
             // Only bring to front on pointer down, don't prevent drag start
            console.log(`Container Pointer Down on '${title}'`);
            this.bringToFront(container);
        });

        container.on('drag', (pointer, dragX, dragY) => {
            // Note: dragX/dragY are relative to the start of the drag on the *zone*
            // We need to move the *container* based on the pointer's movement
            console.log(`Dragging: pointer.id=${pointer.id}, velocity=(${pointer.velocity.x}, ${pointer.velocity.y}), zoom=${this.scene.cameras.main.zoom}`);
            // Ensure zoom is not zero to avoid division issues
            const zoom = this.scene.cameras.main.zoom || 1;
            container.x += pointer.velocity.x / zoom; 
            container.y += pointer.velocity.y / zoom;
            console.log(`New Container Pos: (${container.x}, ${container.y})`);
        });

        // --- Add content area (placeholder for now) ---
        const contentArea = this.scene.add.graphics();
        contentArea.fillStyle(0x050515, 1); // Very dark blue for content area
        contentArea.fillRect(5, titleBarHeight + 5, width - 10, height - titleBarHeight - 10);
        container.add(contentArea);
        container.setData('contentArea', contentArea); // Reference for adding content later

        // --- Final Steps ---
        this.windows.push(container);
        this.bringToFront(container); // Set initial focus

        console.log(`Window '${title}' created at depth ${windowDepth}`);
        return container;
    }

    destroyWindow(windowContainer) {
        console.log(`WindowManager: Destroying window '${windowContainer?.getData('config')?.title}'`);
        const index = this.windows.indexOf(windowContainer);
        if (index > -1) {
            this.windows.splice(index, 1);
        }

        // Check if it was the active window
        if (this.activeWindow === windowContainer) {
            this.activeWindow = this.windows.length > 0 ? this.windows[this.windows.length - 1] : null;
            if (this.activeWindow) {
                // Bring the new top-most window visually/logically to front
                this.bringToFront(this.activeWindow); 
            }
        }

        windowContainer.destroy(); // Destroy the container and all its children
    }

    bringToFront(windowContainer) {
        if (!windowContainer || this.activeWindow === windowContainer) return; // Don't process if already active
        
        const currentActive = this.activeWindow;
        const targetConfig = windowContainer.getData('config');
        
        console.log(`WindowManager: Bringing '${targetConfig?.title}' to front.`);

        // Find current highest depth
        let maxDepth = 0;
        this.windows.forEach(win => {
            if (win.depth > maxDepth) {
                maxDepth = win.depth;
            }
        });
        const topDepth = maxDepth + 1;

        // Set target window depth
        windowContainer.setDepth(topDepth);

        this.activeWindow = windowContainer;

        // Update visual state (example: simple alpha change)
        if (currentActive) {
            currentActive.setAlpha(0.9); // Make previous active slightly transparent
        }
        windowContainer.setAlpha(1.0); // Make new active opaque

        // Reorder the array for logical consistency (optional but good practice)
        this.windows = this.windows.filter(win => win !== windowContainer);
        this.windows.push(windowContainer);
    }

    // --- Helper Methods ---

    getNextHighestDepth() {
        let maxDepth = 0;
        this.windows.forEach(win => {
            if (win.depth > maxDepth) {
                maxDepth = win.depth;
            }
        });
        // Start depth at 1, desktop is 0
        return Math.max(1, maxDepth + 1);
    }
}
