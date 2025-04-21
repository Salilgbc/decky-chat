# System Patterns: Decky Discord Integration

## High-Level Architecture

```mermaid
graph TD
    subgraph Steam Deck Gaming Mode
        Game[Running Game]
        DeckyUI[Decky Loader UI (QAM)]
        PluginOverlay[Discord Plugin Overlay (React)]
    end

    subgraph Plugin Backend/Service (within Decky Plugin or separate process)
        DiscordAPI[Discord API/Gateway Interaction]
        AuthState[Authentication State Management]
        ScreenShare[Screen Sharing Logic (PipeWire/Portal)]
        VoiceVideo[Voice/Video Session Management (WebRTC?)]
    end

    Discord[Discord Servers]

    DeckyUI -- Toggles --> PluginOverlay
    PluginOverlay -- Renders --> DeckyUI
    PluginOverlay -- Sends Actions --> DiscordAPI
    PluginOverlay -- Needs Auth Info --> AuthState
    PluginOverlay -- Initiates/Controls --> ScreenShare
    PluginOverlay -- Initiates/Controls --> VoiceVideo

    DiscordAPI -- Communicates --> Discord
    AuthState -- Handles Auth Flow --> Discord
    ScreenShare -- Captures Screen --> SteamOS
    VoiceVideo -- Handles Media --> SteamOS
    VoiceVideo -- Communicates --> Discord

    %% Potentially, the backend service components might interact more directly
    %% DiscordAPI <--> AuthState
    %% DiscordAPI <--> VoiceVideo
    %% DiscordAPI <--> ScreenShare
```

## Key Architectural Components

1.  **Frontend Overlay (React Component):**
    *   Runs within the Decky Loader's frontend environment.
    *   Responsible for rendering the UI (server list, channel list, chat view, call controls).
    *   Captures user input and translates it into actions.
    *   Communicates with the backend service/API layer for data and actions.
    *   Displays real-time updates received from the backend (new messages, call status, etc.).

2.  **Backend Service / API Layer:**
    *   Handles direct communication with the Discord API (REST calls) and Gateway (WebSocket). This might be integrated directly into the plugin's backend logic or potentially run as a separate background process on the Deck for stability and persistence.
    *   Manages the Discord connection state.
    *   Processes actions from the frontend (e.g., send message, join voice channel).
    *   Receives real-time events from Discord (new messages, user join/leave voice) and pushes updates to the frontend overlay.
    *   Manages authentication state (storing tokens securely).
    *   Contains the logic for more complex features like screen sharing and voice/video integration, interfacing with SteamOS capabilities.

## Design Patterns & Considerations

-   **Component-Based UI:** Leverage React's component model for a modular and maintainable frontend.
-   **State Management:** Utilize React state management (e.g., `useState`, `useReducer`, potentially Zustand or Jotai if complexity grows) to handle UI state and data fetched from Discord.
-   **Asynchronous Operations:** Extensive use of `async/await` for handling API calls and other I/O-bound operations to keep the UI responsive.
-   **Event-Driven Architecture:** The interaction between the frontend, backend, and Discord Gateway will be heavily event-driven (e.g., receiving messages, user status updates).
-   **Separation of Concerns:** Keep UI logic separate from Discord API interaction logic and platform-specific integrations (like screen sharing).
-   **Error Handling:** Implement robust error handling for API calls, connection issues, and platform integration failures. Provide clear feedback to the user.
-   **Security:** Prioritize secure handling of authentication tokens and user data. Avoid storing sensitive information insecurely.
