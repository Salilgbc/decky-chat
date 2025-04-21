# Active Context: Decky Discord Integration - Initial Setup

## Current Focus
The immediate goal is to set up the basic structure for the Decky Loader plugin project. This involves creating the necessary configuration files, directory structure, and initial boilerplate code required for a Decky plugin.

## Recent Changes
- Initial Memory Bank documentation created (`projectbrief.md`, `productContext.md`, `techContext.md`, `systemPatterns.md`).

## Next Steps (High-Level Plan)
1.  **Initialize Project:** Use the standard Decky plugin template or generator (if one exists) or manually create the required files (`package.json`, `tsconfig.json`, Decky manifest file, etc.).
2.  **Basic Plugin Structure:** Create the main plugin entry point (`index.tsx` or similar), a basic React component for the overlay, and necessary backend setup files.
3.  **Verify Build:** Ensure the basic plugin structure can be built successfully using the Decky development tools/scripts.
4.  **Basic Load Test:** (Optional but recommended) Attempt to load the empty plugin onto a Steam Deck (or emulator if available) to confirm Decky Loader recognizes it.

## Active Decisions & Considerations
-   Need to confirm the standard/recommended way to initialize a new Decky Loader plugin project. Searching Decky Loader documentation or community resources might be necessary.
-   Decide on a package manager (npm, yarn, pnpm).
-   Establish basic linting and formatting rules (e.g., ESLint, Prettier).
