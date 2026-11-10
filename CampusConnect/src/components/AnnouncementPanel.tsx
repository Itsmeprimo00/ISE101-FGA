import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '../../types/announcement';
import AnnouncementCard from './AnnouncementCard';

const initialAnnouncements: Announcement[] = [
  {
    id: 'a1',
    title: 'Enrollment reminders',
    category: 'Academic',
    read: false,
  },
  {
    id: 'a2',
    title: 'Campus orientation',
    category: 'Events',
    read: true,
  },
  {
    id: 'a3',
    title: 'Library schedule',
    category: 'Notice',
    read: false,
  },
  {
    id: 'a4',
    title: 'Student wellness workshop registration now open for the fall semester',
    category: 'Notice',
    read: false,
  },
];

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);

  const unreadCount = useMemo(
    () => announcements.filter(item => !item.read).length,
    [announcements],
  );

  const handleToggleRead = (id: string) => {
    setAnnouncements(currentAnnouncements =>
      currentAnnouncements.map(item =>
        item.id === id ? { ...item, read: !item.read } : item,
      ),
    );
  };

  return (
    <View style={styles.panel}>
      <FlatList
        data={announcements}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <AnnouncementCard
            title={item.title}
            category={item.category}
            read={item.read}
            onMarkRead={() => handleToggleRead(item.id)}
          />
        )}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.heading}>Campus Announcements</Text>
            <Text style={styles.count}>Unread announcements: {unreadCount}</Text>
          </View>
        }
        ListHeaderComponentStyle={styles.headerStyle}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    width: '100%',
    maxWidth: 640,
    marginTop: 24,
  },
  header: {
    marginBottom: 12,
  },
  headerStyle: {
    width: '100%',
  },
  listContent: {
    paddingBottom: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  count: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
  },
});
