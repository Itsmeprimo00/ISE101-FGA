
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  SafeAreaView,
} from "react-native";

export default function HomeScreen() {
  const [showTip, setShowTip] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [showFact, setShowFact] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>
          ISE101 • WEEK 1
        </Text>

        <Text style={styles.title}>
          Welcome to Mobile Programming!
        </Text>

        <Text style={styles.subtitle}>
          Learn how to build mobile applications
          using React Native and Expo.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            📱 About ISE101
          </Text>
          <Text style={styles.cardText}>
            ISE101 introduces the fundamentals of
            mobile app development, user interfaces,
            and interactive application features.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            ⚙️ Technology Stack
          </Text>
          <Text style={styles.cardText}>
            React Native — creates the mobile UI.
          </Text>
          <Text style={styles.cardText}>
            TypeScript — adds type checking to JavaScript.
          </Text>
          <Text style={styles.cardText}>
            Expo — simplifies development and testing.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            🤖 About Android
          </Text>
          <Text style={styles.cardText}>
            Android is a mobile operating system.
            Developers can build Android apps with
            React Native and test them on a device
            or emulator.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            💡 Learning Tip
          </Text>

          {showTip && (
            <Text style={styles.tipText}>
              Practice every day, test your app
              frequently, and read error messages
              carefully to find bugs.
            </Text>
          )}

          <Pressable
            style={styles.primaryButton}
            onPress={() => setShowTip(true)}
            accessibilityRole="button"
            accessibilityLabel="Show learning tip"
          >
            <Text style={styles.buttonText}>
              Show Learning Tip
            </Text>
          </Pressable>

          <Pressable
            style={styles.secondaryButton}
            onPress={() => setShowTip(false)}
            accessibilityRole="button"
            accessibilityLabel="Hide learning tip"
          >
            <Text style={styles.buttonText}>
              Hide Learning Tip
            </Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            👆 Tap Counter
          </Text>

          <Text style={styles.counter}>
            {tapCount}
          </Text>

          <Pressable
            style={styles.primaryButton}
            onPress={() => setTapCount(tapCount + 1)}
            accessibilityRole="button"
            accessibilityLabel="Count taps"
          >
            <Text style={styles.buttonText}>
              Count Taps
            </Text>
          </Pressable>

          <Pressable
            style={styles.secondaryButton}
            onPress={() => setTapCount(0)}
            accessibilityRole="button"
            accessibilityLabel="Reset tap counter"
          >
            <Text style={styles.buttonText}>
              Reset Counter
            </Text>
          </Pressable>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            📚 Mobile Fact
          </Text>

          {showFact && (
            <Text style={styles.cardText}>
              React Native lets developers create
              Android and iOS applications using
              a shared codebase, although some
              platform-specific code may be needed.
            </Text>
          )}

          <Pressable
            style={styles.primaryButton}
            onPress={() => setShowFact(!showFact)}
            accessibilityRole="button"
            accessibilityLabel={
              showFact ? "Hide mobile fact" : "Show mobile fact"
            }
          >
            <Text style={styles.buttonText}>
              {showFact ? "Hide Fact" : "Show Fact"}
            </Text>
          </Pressable>
        </View>

        <Text style={styles.footer}>
          ISE101 • Mobile Programming • Week 1
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  container: {
    padding: 20,
    paddingBottom: 35,
  },
  eyebrow: {
    color: "#2563eb",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#16325c",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#526174",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#16325c",
    marginBottom: 12,
  },
  cardText: {
    fontSize: 15,
    color: "#455468",
    lineHeight: 23,
    marginBottom: 5,
  },
  tipText: {
    fontSize: 15,
    lineHeight: 23,
    color: "#166534",
    backgroundColor: "#dcfce7",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  counter: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2563eb",
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  secondaryButton: {
    backgroundColor: "#64748b",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 15,
  },
  footer: {
    textAlign: "center",
    color: "#64748b",
    fontSize: 12,
    marginTop: 8,
  },
});
