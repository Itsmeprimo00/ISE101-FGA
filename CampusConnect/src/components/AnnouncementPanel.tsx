import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
];

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);

  const handleToggleRead = (id: string) => {
    setAnnouncements(currentAnnouncements =>
      currentAnnouncements.map(item =>
        item.id === id ? { ...item, read: !item.read } : item,
      ),
    );
  };

  const unreadCount = announcements.filter(item => !item.read).length;

  return (
    <View style={styles.panel}>
      <Text style={styles.heading}>Campus Announcements</Text>
      <Text style={styles.count}>Unread announcements: {unreadCount}</Text>

      {announcements.map(item => (
        <AnnouncementCard
          key={item.id}
          title={item.title}
          category={item.category}
          read={item.read}
          onMarkRead={() => handleToggleRead(item.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    width: '100%',
    marginTop: 24,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    color: '#111827',
  },
  count: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    color: '#374151',
  },
});
