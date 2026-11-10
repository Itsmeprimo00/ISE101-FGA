import { Pressable, StyleSheet, Text, View } from 'react-native';

type AnnouncementCardProps = {
  title: string;
  category: string;
  read: boolean;
  onMarkRead: () => void;
};

export default function AnnouncementCard({
  title,
  category,
  read,
  onMarkRead,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>Category: {category}</Text>
      <Text style={[styles.status, read ? styles.readStatus : styles.unreadStatus]}>
        Status: {read ? 'Read' : 'Unread'}
      </Text>
      <Pressable onPress={onMarkRead} style={styles.button}>
        <Text style={styles.buttonText}>{read ? 'Mark as unread' : 'Mark as read'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    color: '#1F2937',
  },
  category: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 6,
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
  },
  readStatus: {
    color: '#0F766E',
  },
  unreadStatus: {
    color: '#B45309',
  },
  button: {
    alignSelf: 'flex-start',
    backgroundColor: '#2563EB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});
