import {
  ButtonItem,
  PanelSection,
  PanelSectionRow,
  staticClasses,
  DialogButton
} from "@decky/ui";
import {
  definePlugin,
  toaster
} from "@decky/api"
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";

// Basic component to display server/channel list
const ServerList = () => {
  return (
    <PanelSection title="Discord Servers">
      <PanelSectionRow>
        {/* Placeholder for server list */}
        <ButtonItem
          layout="below"
          onClick={() => toaster.toast({
            title: "Coming Soon",
            body: "Server list functionality will be implemented"
          })}
        >
          Connect to Discord
        </ButtonItem>
      </PanelSectionRow>
    </PanelSection>
  );
};

// Basic component for voice controls
const VoiceControls = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isDeafened, setIsDeafened] = useState(false);

  return (
    <PanelSection title="Voice Controls">
      <PanelSectionRow>
        <div style={{ display: "flex", gap: "10px" }}>
          <DialogButton
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? "Unmute" : "Mute"}
          </DialogButton>
          <DialogButton
            onClick={() => setIsDeafened(!isDeafened)}
          >
            {isDeafened ? "Undeafen" : "Deafen"}
          </DialogButton>
        </div>
      </PanelSectionRow>
    </PanelSection>
  );
};

// Main content component
function Content() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <>
      <PanelSection title="Discord Status">
        <PanelSectionRow>
          <ButtonItem
            layout="below"
            onClick={() => {
              setIsConnected(!isConnected);
              toaster.toast({
                title: "Discord Integration",
                body: isConnected ? "Disconnecting..." : "Connecting...",
              });
            }}
          >
            {isConnected ? "Disconnect from Discord" : "Connect to Discord"}
          </ButtonItem>
        </PanelSectionRow>
      </PanelSection>

      {isConnected && (
        <>
          <ServerList />
          <VoiceControls />
          
          <PanelSection title="Screen Share">
            <PanelSectionRow>
              <ButtonItem
                layout="below"
                onClick={() => toaster.toast({
                  title: "Coming Soon",
                  body: "Screen sharing functionality will be implemented"
                })}
              >
                Start Screen Share
              </ButtonItem>
            </PanelSectionRow>
          </PanelSection>
        </>
      )}
    </>
  );
}

export default definePlugin(() => {
  console.log("Discord Integration plugin initializing");

  return {
    name: "Discord Integration",
    titleView: (
      <div className={staticClasses.Title}>
        Discord Integration
      </div>
    ),
    content: <Content />,
    icon: <FaDiscord />,
    onDismount() {
      console.log("Discord Integration plugin unloading");
      // Cleanup code will be added here
    },
  };
});
