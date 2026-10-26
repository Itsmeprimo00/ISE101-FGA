import { StyleSheet as StyleSheetFGA, Text as TextFGA, View as ViewFGA } from "react-native";

export default function HeaderFGA() {
  return (
    <ViewFGA style={stylesFGA.header}>
      <TextFGA style={stylesFGA.kicker}>ISE101 / WEEK 03</TextFGA>
      <TextFGA style={stylesFGA.title}>Task Manager</TextFGA>
    </ViewFGA>
  );
}

const stylesFGA = StyleSheetFGA.create({
  header: {
    backgroundColor: "#153D32",
    paddingHorizontal: 22,
    paddingTop: 58,
    paddingBottom: 24,
  },
  kicker: {
    color: "#A9D5BD",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginTop: 8,
  },
});
