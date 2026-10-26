import { StyleSheet as StyleSheetFGA, Text as TextFGA, View as ViewFGA } from "react-native";

export default function FooterFGA() {
  return (
    <ViewFGA style={stylesFooterFGA.footer}>
      <TextFGA style={stylesFooterFGA.text}>© 2025 Student App Project</TextFGA>
    </ViewFGA>
  );
}

const stylesFooterFGA = StyleSheetFGA.create({
  footer: {
    padding: 10,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "#475569",
  },
});
