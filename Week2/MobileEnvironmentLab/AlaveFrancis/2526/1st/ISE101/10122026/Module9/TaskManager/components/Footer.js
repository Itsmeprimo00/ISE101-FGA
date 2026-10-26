import { StyleSheet as StyleSheetFGA, Text as TextFGA, View as ViewFGA } from "react-native";

export default function FooterFGA() {
  return (
    <ViewFGA style={stylesFGA.footer}>
      <TextFGA style={stylesFGA.text}>ISE101  /  COMPONENTS & STATE</TextFGA>
    </ViewFGA>
  );
}

const stylesFGA = StyleSheetFGA.create({
  footer: {
    borderTopColor: "#DCE5DF",
    borderTopWidth: StyleSheetFGA.hairlineWidth,
    paddingHorizontal: 22,
    paddingVertical: 16,
  },
  text: {
    color: "#65756D",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
});
