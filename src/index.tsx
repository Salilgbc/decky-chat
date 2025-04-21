import { ButtonItem, PanelSection, PanelSectionRow, staticClasses, DialogButton } from "@decky/ui";
import { definePlugin, toaster } from "@decky/api";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";

const ServerList = () => {
  return (
    <PanelSection title="Discord Servers">
      <PanelSectionRow>
        <ButtonItem layout="below" onClick={() => toaster.toast({ title: "Coming Soon", body: "Server list functionality will be implemented" })}>
          Connect to Discord
        </ButtonItem>
      </PanelSectionRow>
    </PanelSection>
  );
};

export default definePlugin(() => {
  console.log("Discord Integration plugin initializing");
  return {
    name: "Discord Integration",
    content: <ServerList />,
    icon: <FaDiscord />,
  };
});