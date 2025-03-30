# WeaveNet Hacker – Game Concept Document (v1.0)

## 0. Project Summary

**WeaveNet Hacker** is a 2D hacking simulation game focused on providing an immersive, **simulated Operating System (OS) experience**, inspired by *Grey Hack*. Players interact with the game world through a graphical OS interface containing various tools, including a powerful command-line terminal. The core gameplay involves infiltrating and manipulating procedurally generated networks and systems. A key feature is the integration of **AI-driven procedural content generation** (inspired by *WebSim.AI*) to create dynamic and unique elements like websites, NPC communications, and system data, enhancing realism and replayability. This game is *not* purely terminal-based like *Hacknet* or *BitBurner*; the terminal is a crucial tool within a broader simulated desktop environment.

---

## 1. Game Presentation

*   **Title:** WeaveNet Hacker
*   **Genre:** Hacking Simulation / Immersive Sim
*   **Perspective:** 2D, Top-Down view of a simulated computer desktop/OS.
*   **Core Experience:** Players navigate a persistent, simulated online world through their in-game computer interface. They use graphical tools, file explorers, a web browser, and a command-line terminal to perform reconnaissance, exploitation, and data manipulation on procedurally generated networks and AI-generated web services.
*   **Key Inspirations:** *Grey Hack* (Simulated OS, network infiltration workflow, scripting), *WebSim.AI* (AI-driven procedural content generation).

---

## 2. Core Mechanics

*   **Simulated OS Interface:**
    *   The primary player view is a graphical desktop environment.
    *   Players interact via movable/resizable windows for different applications (Terminal, Browser, File Explorer, Log Viewer, etc.).
    *   Focus on visual representation of the hacking process, not just text output.
    *   **UI Implementation Strategy:** The OS interface will be built using Phaser 3. Windows will be Phaser `Container` objects, managed by a central `WindowManager` class responsible for creation, destruction, layering (depth), and input handling (dragging, clicks). Styling will use Phaser's Graphics, Text, and Image objects. This approach adapts patterns observed in traditional DOM-based UI examples.
*   **Embedded Interactive Terminal:**
    *   A critical tool *within* the simulated OS for executing commands, running scripts, and direct system interaction.
    *   Supports standard commands (navigation, scanning, connection) and custom exploit execution.
    *   Provides detailed text feedback but is visually integrated into the OS shell.
*   **Procedural Network Generation:**
    *   Game world consists of dynamically generated networks with unique IPs, hostnames, vulnerabilities, and interconnections.
    *   Mimics *Grey Hack*'s approach to ensure varied challenges and exploration.
*   **AI-Driven Content Generation (WebSim-Inspired):**
    *   Leverages AI/procedural generation techniques to create dynamic content *within* the simulation:
        *   **Websites/Services:** Target systems host unique websites (HTML/CSS/basic JS) generated based on prompts or system parameters, viewable in the simulated browser.
        *   **NPC Communication:** Emails, chat logs, or documents found on systems can feature AI-generated text for dynamic social engineering or intel gathering.
        *   **Credentials & Data:** Procedurally generated usernames, passwords, file contents, and system configurations.
    *   *Goal:* Reduce repetitive manual content creation, increase immersion and replayability through unique, context-aware generated elements.
*   **Hacking Workflow (Grey Hack Inspired):**
    *   **Reconnaissance:** Scanning networks (port scanning), identifying targets.
    *   **Exploitation:** Using vulnerabilities (simulated exploits, password cracking) to gain access.
    *   **Privilege Escalation:** Gaining higher levels of access on compromised systems.
    *   **Persistence & Stealth:** Maintaining access (backdoors) while avoiding detection (log cleaning, trace evasion).
*   **In-Game Scripting (GreyScript Concept):**
    *   Players can write/use scripts (inspired by *Grey Hack*'s GreyScript) via the terminal to automate tasks, chain exploits, or create custom tools.
    *   Runs within a sandboxed environment, interacting with the simulated OS and network.

---

## 3. Additional Mechanics

*   **Player Progression:** Gaining reputation, currency, new software/exploits, virtual hardware upgrades.
*   **Mission System:** Objectives ranging from data theft and system sabotage to white-hat security tasks.
*   **Trace/Detection System:** Actions leave traces; players must manage logs and network traffic to avoid detection by simulated admins or security systems. Consequences for detection (loss of access, reputation hit, etc.).
*   **Multiplayer (Potential):** Shared world where players can cooperate or compete (hacking each other, collaborating on targets).

---

## 4. Theme & Art Style

*   **Theme:** Minimalist & Functional. Focuses on clean interfaces using a cool color palette (deep blues, purples, cyan) contrasted with lighter shades to evoke calmness and serenity. Highly functional, tool-oriented UI design. (Customization options planned, similar to VS Code themes).
*   **Art Style:** 2D realistic minimalist vector art for UI elements (windows, icons, buttons). Terminal font emphasis within terminal/code editor components. Primary art assets will be AI-generated for consistency and ease of development.
*   **Audio:** No audio planned for initial versions. Future additions may include subtle UI sounds and ambient tracks.

---

## 5. Technical Foundation

*   **Game Engine:** Phaser 3
*   **Build Tool:** Vite
*   **Platform:** Web Browser
*   **Language:** JavaScript

---

## 6. Key Differentiators

*   **Simulated OS Experience:** Focus on immersion through a graphical OS interface, unlike purely terminal-based games.
*   **AI-Powered Procedural Content:** Deep integration of AI to generate unique websites, communications, and data, enhancing realism and dynamic gameplay.
*   **Blend of Simulation and Accessibility:** Aims for the depth of *Grey Hack*'s simulation but potentially streamlined for better approachability.
