import { StyleSheet as StyleSheetFGA, Text as TextFGA, View as ViewFGA } from "react-native";
import FooterFGA from "../components/Footer";
import HeaderFGA from "../components/Header";
import WelcomeMessageFGA from "../components/WelcomeMessage";

export default function HomeScreenFGA() {
  return (
    <ViewFGA style={stylesHomeScreenFGA.container}>
      <HeaderFGA />
      <ViewFGA style={stylesHomeScreenFGA.body}>
        <WelcomeMessageFGA />
        <TextFGA style={stylesHomeScreenFGA.text}>Welcome to your first screen!</TextFGA>
        <TextFGA style={stylesHomeScreenFGA.text}>
          This is built using JSX and reusable components.
        </TextFGA>
      </ViewFGA>
      <FooterFGA />
    </ViewFGA>
  );
}

const stylesHomeScreenFGA = StyleSheetFGA.create({
  container: {
    flex: 1,
    backgroundColor: "#fff4e6",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  text: {
    color: "#365314",
    fontSize: 16,
    marginVertical: 5,
    textAlign: "center",
  },
});
