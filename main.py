import os
import decky
import asyncio
import json
from typing import Optional, Dict, Any

class Plugin:
    discord_client: Optional[Dict[str, Any]] = None
    settings_dir: str = ""
    
    async def _initialize_settings(self):
        self.settings_dir = os.path.join(decky.DECKY_SETTINGS_DIR, "decky-discord")
        os.makedirs(self.settings_dir, exist_ok=True)
        
        settings_path = os.path.join(self.settings_dir, "settings.json")
        if not os.path.exists(settings_path):
            default_settings = {
                "token": None,
                "auto_connect": False,
                "last_channel": None,
                "last_server": None
            }
            with open(settings_path, 'w') as f:
                json.dump(default_settings, f)

    async def _main(self):
        self.loop = asyncio.get_event_loop()
        await self._initialize_settings()
        decky.logger.info("Discord Integration plugin initialized")

    async def _unload(self):
        decky.logger.info("Discord Integration plugin unloaded")

    async def _uninstall(self):
        decky.logger.info("Discord Integration plugin uninstalled")
