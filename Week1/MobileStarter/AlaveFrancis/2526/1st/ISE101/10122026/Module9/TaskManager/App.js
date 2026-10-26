import {
  StyleSheet as StyleSheetFGA,
  Text as TextFGA,
  View as ViewFGA,
} from "react-native";

export default function AppFGA() {
  return (
    <ViewFGA style={stylesFGA.container}>
      <TextFGA style={stylesFGA.title}>Hello, I'm Francis Alave!</TextFGA>
      <TextFGA style={stylesFGA.subtitle}>BSIS 3A</TextFGA>
    </ViewFGA>
  );
}

const stylesFGA = StyleSheetFGA.create({
  container: {
    alignItems: "center",
    backgroundColor: "#EAF4FF",
    flex: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    color: "#153D32",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    color: "#555555",
    fontSize: 18,
  },
});
