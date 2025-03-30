# WeaveNet Hacker - Development Task List

This file tracks the development progress for the WeaveNet Hacker game. Tasks are intended to be sequential where dependencies exist.

## Phase 1: Setup & Core Mechanics

- [x] **Review Project Concept & Research:** Familiarize with `ludo-outline.txt`, `deep-research2.txt`, and `websim-greyhack-analysis`. *(Completed)*
- [x] **Select Game Engine:** Decide on the primary game engine. *(Decision: Phaser)*
- [x] **Set Up Project Environment:**
    - [x] Initialize Phaser project structure.
    - [x] Set up basic HTML/CSS scaffold.
    - [x] Configure build tools (if needed, e.g., Vite, Webpack).
- [ ] **Prototype Core Mechanic 1: Basic OS Shell & Embedded Terminal:**
    - [x] Create Phaser scene for the main OS desktop background.
    - [~] Implement basic WindowManager class and draggable window Containers. (Dragging works, needs refinement/focus)
    - [ ] Build interactive terminal UI *within* the window container.
        - [ ] Input field, command handling, output display, scrollback.
- [ ] **Prototype Core Mechanic 2: Basic Procedural Network Generation:**
    - [ ] Generate simple network elements (e.g., IP addresses, hostnames).
    - [ ] Store/manage generated network data.
    - [ ] Add terminal command(s) to view generated network data.
- [ ] **Prototype Core Mechanic 3: Simulated Browser & Basic Content Generation:**
    - [ ] Create a second UI window container for a simulated browser.
    - [ ] Implement basic AI/procedural function (e.g., placeholder text -> simple HTML).
    - [ ] Display generated HTML content within the simulated browser window.

## Phase 2: Gameplay Loop & Systems

- [ ] **Develop Initial Gameplay Loop:** Connect terminal interaction, procedural generation, and WebSim display.
- [ ] **Implement GreyScript Concept:** Design and prototype a simple in-game scripting capability.
- [ ] **Implement Karma/Reputation System:** Basic tracking and display based on actions.

## Phase 3: Content & Polish

- [ ] Add more complex hacking mechanics (e.g., port scanning, exploits).
- [ ] Expand procedural generation variety.
- [ ] Enhance WebSim generation capabilities.
- [ ] Implement UI/UX improvements.
- [ ] Add sound effects and basic art.

*(Add more tasks as needed)*
