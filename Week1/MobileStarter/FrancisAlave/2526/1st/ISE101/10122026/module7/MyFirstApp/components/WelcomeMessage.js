import { StyleSheet as StyleSheetFGA, Text as TextFGA, View as ViewFGA } from "react-native";

export default function WelcomeMessageFGA() {
  return (
    <ViewFGA style={stylesWelcomeMessageFGA.container}>
      <TextFGA style={stylesWelcomeMessageFGA.title}>Hello, Francis Alave!</TextFGA>
      <TextFGA style={stylesWelcomeMessageFGA.section}>BSIS Section 3A</TextFGA>
    </ViewFGA>
  );
}

const stylesWelcomeMessageFGA = StyleSheetFGA.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    color: "#7c2d12",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  section: {
    color: "#365314",
    fontSize: 16,
  },
});
