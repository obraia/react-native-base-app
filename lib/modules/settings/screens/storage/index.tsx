import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DownloadSolid, HistorySolid, MobileSolid, SyncSolid } from "../../components/icons";
import { Item } from "../../components/item";
import { Group } from "../../components/group";
import { Switch } from "../../../../shared/components/switch";
import { DataInfo } from "../../components/dataInfo";
import { RootState } from "../../../../store";
import { clearCache, clearSearchHistory, getStorageSize, toggleAutoDownload, toggleSync } from "../../reducers/storage";
import { Modal } from "../../../../shared/components/modal";
import { Container, Text } from "./styles";

const Storage = () => {
  const [clearAllDataConfirmModal, setClearAllDataConfirmModal] = useState(false);

  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.theme);
  const { autoDownload, sync, cache } = useSelector((state: RootState) => state.storage);

  const toggleClearAllDataConfirmModal = () => {
    setClearAllDataConfirmModal(!clearAllDataConfirmModal);
  };

  const confirmClearAllData = () => {
    dispatch(clearCache());
    toggleClearAllDataConfirmModal();
  };

  useEffect(() => {
    dispatch(getStorageSize())
  }, [])

  const items = [
    {
      title: "Automatic download",
      icon: DownloadSolid,
      action: () => Switch({ value: autoDownload, color: theme.colors.primary, ml: true }),
      onPress: () => dispatch(toggleAutoDownload()),
      color: theme.colors.primary
    },
    {
      title: 'Backup and Sync',
      icon: SyncSolid,
      action: () => Switch({ value: sync, color: theme.colors.primary, ml: true }),
      onPress: () => dispatch(toggleSync()),
      color: theme.colors.primary
    },
    {
      title: 'Clear search history',
      icon: HistorySolid,
      onPress: () => dispatch(clearSearchHistory()),
      color: theme.colors.primary
    },
    {
      title: 'Clear all data',
      icon: MobileSolid,
      onPress: toggleClearAllDataConfirmModal,
      color: theme.colors.error
    },
  ];

  return (
    <Container>
      <DataInfo
        size={cache.size}
        unity={cache.unity}
        color={theme.colors.primary} />

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

      {clearAllDataConfirmModal && (
        <Modal
          animationType="fade"
          toggle={toggleClearAllDataConfirmModal}
          isVisible={clearAllDataConfirmModal}
          buttonsDirection="row"
          buttons={[
            {
              title: 'Cancel',
              type: 'error',
              outline: true,
              onPress: toggleClearAllDataConfirmModal
            },
            {
              title: 'Confirm',
              type: 'primary',
              onPress: confirmClearAllData
            },
          ]}>
          <Text>
            Are you sure you want to clear all data?
          </Text>
        </Modal>
      )}
    </Container>
  );
}

export { Storage }