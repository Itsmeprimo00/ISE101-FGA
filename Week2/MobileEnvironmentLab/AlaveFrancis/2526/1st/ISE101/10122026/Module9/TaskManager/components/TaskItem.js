import { StyleSheet as StyleSheetFGA, Text as TextFGA, TouchableOpacity as TouchableOpacityFGA, View as ViewFGA } from "react-native";

export default function TaskItemFGA({ taskFGA, onDeleteFGA }) {
  return (
    <ViewFGA style={stylesFGA.item}>
      <TextFGA style={stylesFGA.text}>{taskFGA.toUpperCase()}</TextFGA>
      <TouchableOpacityFGA
        accessibilityRole="button"
        accessibilityLabel={`Delete ${taskFGA}`}
        onPress={onDeleteFGA}
        style={stylesFGA.deleteButton}
      >
        <TextFGA style={stylesFGA.delete}>Delete</TextFGA>
      </TouchableOpacityFGA>
    </ViewFGA>
  );
}

const stylesFGA = StyleSheetFGA.create({
  item: {
    alignItems: "center",
    backgroundColor: "#DDF3E8",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    padding: 14,
  },
  text: {
    color: "#18392E",
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    marginRight: 12,
  },
  deleteButton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  delete: {
    color: "#A53535",
    fontSize: 14,
    fontWeight: "700",
  },
});
