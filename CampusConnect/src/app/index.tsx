
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>CC</Text>
          </View>

          <Text style={styles.headerTitle}>CAMPUS CONNECT</Text>
          <Text style={styles.headerSubtitle}>
            STUDENT COMMUNITY PLATFORM
          </Text>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <View style={styles.badge}>
            <View style={styles.statusDot} />
            <Text style={styles.badgeText}>WELCOME TO CAMPUS CONNECT</Text>
          </View>

          <Text style={styles.title}>
            One campus.{"\n"}
            <Text style={styles.highlight}>Connected students.</Text>
          </Text>

          <Text style={styles.description}>
            Your campus, your community, your connection.
            Campus Connect aims to bring students together
            through one convenient mobile application.
          </Text>
        </View>

        {/* Main Card */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>OUR PURPOSE</Text>

          <Text style={styles.cardTitle}>
            Stay connected with your campus.
          </Text>

          <Text style={styles.cardDescription}>
            Access useful student information, stay updated
            with campus activities, and explore features
            designed to make student life easier.
          </Text>

          <View style={styles.divider} />

          <Text style={styles.featuresTitle}>WHAT'S COMING</Text>

          <View style={styles.featureRow}>
            <View style={styles.featureNumber}>
              <Text style={styles.numberText}>01</Text>
            </View>
            <View style={styles.featureInfo}>
              <Text style={styles.featureName}>Student Dashboard</Text>
              <Text style={styles.featureDescription}>
                A central place for student information.
              </Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <View style={styles.featureNumber}>
              <Text style={styles.numberText}>02</Text>
            </View>
            <View style={styles.featureInfo}>
              <Text style={styles.featureName}>Campus Updates</Text>
              <Text style={styles.featureDescription}>
                Stay informed about campus activities.
              </Text>
            </View>
          </View>

          <View style={styles.featureRow}>
            <View style={styles.featureNumber}>
              <Text style={styles.numberText}>03</Text>
            </View>
            <View style={styles.featureInfo}>
              <Text style={styles.featureName}>Student Services</Text>
              <Text style={styles.featureDescription}>
                Convenient access to useful student features.
              </Text>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>CAMPUS CONNECT</Text>
          <Text style={styles.footerText}>
            Built with React Native and Expo
          </Text>
          <Text style={styles.footerVersion}>ISE101 • MOBILE PROGRAMMING • WEEK 1</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FC',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 25,
    paddingBottom: 30,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 45,
  },
  logo: {
    width: 62,
    height: 62,
    borderRadius: 19,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 4,
  },
  logoText: {
    fontSize: 23,
    fontWeight: '900',
    color: '#1769AA',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#103D68',
  },
  headerSubtitle: {
    fontSize: 9,
    letterSpacing: 2,
    color: '#8292A8',
    marginTop: 5,
  },
  welcomeSection: {
    width: '100%',
    maxWidth: 480,
    marginBottom: 30,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#E2EDFA',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 20,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 5,
    backgroundColor: '#1769AA',
    marginRight: 8,
  },
  badgeText: {
    fontSize: 9,
    fontWeight: '800',
    color: '#1769AA',
    letterSpacing: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    lineHeight: 44,
    color: '#103D68',
    letterSpacing: -1,
  },
  highlight: {
    color: '#2783C5',
  },
  description: {
    fontSize: 14,
    lineHeight: 23,
    color: '#718096',
    marginTop: 17,
    maxWidth: 430,
  },
  card: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 22,
    elevation: 3,
  },
  cardLabel: {
    color: '#2783C5',
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#103D68',
    lineHeight: 30,
  },
  cardDescription: {
    fontSize: 13,
    lineHeight: 21,
    color: '#718096',
    marginTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#E9EEF5',
    marginVertical: 23,
  },
  featuresTitle: {
    fontSize: 10,
    fontWeight: '900',
    color: '#8292A8',
    letterSpacing: 1.5,
    marginBottom: 18,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 19,
  },
  featureNumber: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#EAF3FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  numberText: {
    fontSize: 13,
    fontWeight: '900',
    color: '#1769AA',
  },
  featureInfo: {
    flex: 1,
  },
  featureName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#103D68',
  },
  featureDescription: {
    fontSize: 11,
    color: '#8292A8',
    marginTop: 4,
    lineHeight: 17,
  },
  footer: {
    alignItems: 'center',
    marginTop: 30,
  },
  footerTitle: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#103D68',
  },
  footerText: {
    fontSize: 11,
    color: '#8292A8',
    marginTop: 6,
  },
  footerVersion: {
    fontSize: 9,
    color: '#A0AFC0',
    marginTop: 12,
    letterSpacing: 1,
    textAlign: 'center',
  },
});
