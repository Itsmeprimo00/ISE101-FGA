import { StyleSheet as StyleSheetFGA, Text as TextFGA, View as ViewFGA } from "react-native";

export default function HeaderFGA() {
  return (
    <ViewFGA style={stylesHeaderFGA.header}>
      <TextFGA style={stylesHeaderFGA.title}>Student Task &amp; Blog App</TextFGA>
    </ViewFGA>
  );
}

const stylesHeaderFGA = StyleSheetFGA.create({
  header: {
    padding: 20,
    backgroundColor: "#c2410c",
    alignItems: "center",
  },
  title: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
