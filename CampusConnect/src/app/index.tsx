
import { Image, StyleSheet, Text, View } from 'react-native';

import ActionButton from '../components/ActionButton';
import AnnouncementPanel from '../components/AnnouncementPanel';
import SectionHeading from '../components/SectionHeading';

const bannerUri =
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <SectionHeading
          title="Campus Connect"
          subtitle="Your campus updates, events, and reminders in one place."
        />

        <Image
          source={{ uri: bannerUri }}
          style={styles.banner}
          accessibilityLabel="Campus Connect banner"
        />

        <Text style={styles.intro}>
          Stay informed about academic updates, student events, and essential campus notices.
        </Text>

        <ActionButton label="View all announcements" onPress={() => undefined} />

        <AnnouncementPanel />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 640,
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 32,
  },
  banner: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 14,
    backgroundColor: '#D1D5DB',
  },
  intro: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
    marginBottom: 18,
  },
});
