# Technical Context: Decky Discord Integration

## Core Framework
-   **Decky Loader Plugin System:** The foundation for integrating into the Steam Deck's Gaming Mode UI.

## Frontend Development
-   **React:** The primary library for building the user interface components within the Decky Loader framework.
-   **TypeScript:** For type safety and improved developer experience in the React codebase.
-   **CSS (or CSS-in-JS):** For styling the overlay UI components to match the Steam Deck aesthetic and ensure responsiveness. Standard Decky Loader practices should be followed if available.

## Backend/API Interaction
-   **Discord API/SDK:** Essential for all Discord functionalities. Research needed to determine the best approach:
    -   Official Discord API (REST/Gateway)
    -   Existing JavaScript/TypeScript SDKs (e.g., discord.js) - Need to assess compatibility and feasibility within the Decky/SteamOS environment.
    -   Potential need for a lightweight backend service within the plugin or running separately on the Deck to manage persistent connections (like WebSocket for Gateway) or handle complex API interactions if direct frontend integration is problematic.
-   **Authentication:** Secure handling of Discord user authentication (likely OAuth2 flow) is critical. Need to investigate how Decky plugins typically handle external auth or if a custom solution is required.

## Platform Considerations
-   **SteamOS/Linux:** The plugin must run reliably within this environment.
-   **Decky Loader Environment:** Understanding the specific APIs, limitations, and lifecycle provided by Decky Loader itself.
-   **Performance:** Code must be optimized to minimize CPU/memory usage and avoid impacting game performance. Asynchronous operations are key.
-   **Screen Sharing:** Requires specific integration with SteamOS/Linux screen capture capabilities (e.g., PipeWire, XDG Portals). Feasibility and implementation complexity need investigation.
-   **Voice/Video:** Requires handling audio input/output and potentially video streams within the Decky environment. Compatibility with Discord's WebRTC implementation needs verification.

## Development Tools
-   **Node.js/npm/pnpm/yarn:** For managing dependencies and build processes.
-   **Cursor (AI Coder):** As specified in the project brief, used to assist in code generation, debugging, and implementation.
-   **Git:** For version control.
