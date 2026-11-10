
import { StyleSheet, Text, View } from 'react-native';

import AnnouncementPanel from '../components/AnnouncementPanel';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text style={styles.subtitle}>One campus. Connected students.</Text>
      <Text style={styles.welcome}>Welcome to the Week 3 project foundation.</Text>

      <AnnouncementPanel />
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
    color: '#111827',
  },
  subtitle: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 8,
  },
  welcome: {
    marginBottom: 8,
    color: '#4B5563',
  },
});
