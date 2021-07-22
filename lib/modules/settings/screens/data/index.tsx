import React, { useState } from "react";
import { DownloadSolid, HistorySolid, MobileSolid, SyncSolid } from "../../components/icons";
import { Item } from "../../components/item";
import { Group } from "../../components/group";
import { Container } from "./styles";
import { Switch } from "../../../../shared/components/switch";
import { DataInfo } from "../../components/dataInfo";

const Data = () => {
  const [autoDownload, setAutoDownload] = useState(false);
  const [cloudSync, setCloudSync] = useState(false);

  const items = [
    {
      title: "Automatic download",
      icon: DownloadSolid,
      action: () => Switch({ value: autoDownload, color: '#FF7300', ml: true }),
      onPress: () => setAutoDownload(!autoDownload),
      color: "#FF7300"
    },
    {
      title: "Backup and Sync",
      icon: SyncSolid,
      action: () => Switch({ value: cloudSync, color: "#FF7300", ml: true }),
      onPress: () => setCloudSync(!cloudSync),
      color: "#FF7300"
    },
    {
      title: "Clear search history",
      icon: HistorySolid,
      onPress: () => { },
      color: "#FF7300"
    },
    {
      title: "Clear all data",
      icon: MobileSolid,
      onPress: () => { },
      color: "#FF7300"
    },
  ];

  return (
    <Container>
      <DataInfo size={35} unity={'MB'} />

      <Group mt>
        {items.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            icon={item.icon}
            action={item.action}
            color={item.color}
            border={index !== 0}
            onPress={item.onPress} />
        ))}
      </Group>
    </Container>
  );
}

export { Data }