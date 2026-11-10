
import { StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '../../types/announcement';
import { getUnreadAnnouncements } from '../../services/announcementUtils';

const sampleAnnouncements: Announcement[] = [
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

export default function HomeScreen() {
  const unread = getUnreadAnnouncements(sampleAnnouncements);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>

      <Text>One campus. Connected students.</Text>

      <Text style={styles.welcome}>
        Welcome to the Week 2 project foundation.
      </Text>

      <Text style={styles.count}>
        Unread Announcements: {unread.length}
      </Text>

      <Text style={styles.heading}>
        Campus Announcements
      </Text>

      {sampleAnnouncements.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.announcementTitle}>
            {item.title}
          </Text>

          <Text>{item.category}</Text>

          <Text>
            Status: {item.read ? 'Read' : 'Unread'}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },

  welcome: {
    marginTop: 8,
    marginBottom: 20,
  },

  count: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 16,
  },

  heading: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    alignItems: 'center',
  },

  announcementTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
});
