import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DownloadSolid, HistorySolid, MobileSolid, SyncSolid } from "../../components/icons";
import { Item } from "../../components/item";
import { Group } from "../../components/group";
import { Switch } from "../../../../shared/components/switch";
import { DataInfo } from "../../components/dataInfo";
import { RootState } from "../../../../store";
import { Container } from "./styles";
import { clearCache, clearSearchHistory, getStorageSize, toggleAutoDownload, toggleSync } from "../../reducers/storage";

const Storage = () => {

  const dispatch = useDispatch();
  const { autoDownload, sync, cache } = useSelector((state: RootState) => state.storage);

  useEffect(() => {
    dispatch(getStorageSize())
  }, [])

  const items = [
    {
      title: "Automatic download",
      icon: DownloadSolid,
      action: () => Switch({ value: autoDownload, color: '#FF7300', ml: true }),
      onPress: () => dispatch(toggleAutoDownload()),
      color: "#FF7300"
    },
    {
      title: "Backup and Sync",
      icon: SyncSolid,
      action: () => Switch({ value: sync, color: "#FF7300", ml: true }),
      onPress: () => dispatch(toggleSync()),
      color: "#FF7300"
    },
    {
      title: "Clear search history",
      icon: HistorySolid,
      onPress: () => dispatch(clearSearchHistory()),
      color: "#FF7300"
    },
    {
      title: "Clear all data",
      icon: MobileSolid,
      onPress: () => dispatch(clearCache()),
      color: "#FF7300"
    },
  ];

  return (
    <Container>
      <DataInfo size={cache.size} unity={cache.unity} />

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

export { Storage }