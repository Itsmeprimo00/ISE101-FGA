import { useState as useStateFGA } from "react";
import {
  FlatList as FlatListFGA,
  KeyboardAvoidingView as KeyboardAvoidingViewFGA,
  Platform as PlatformFGA,
  StyleSheet as StyleSheetFGA,
  Text as TextFGA,
  TextInput as TextInputFGA,
  TouchableOpacity as TouchableOpacityFGA,
  View as ViewFGA,
} from "react-native";
import FooterFGA from "../components/Footer";
import HeaderFGA from "../components/Header";
import TaskItemFGA from "../components/TaskItem";

export default function TaskScreenFGA() {
  const [taskFGA, setTaskFGA] = useStateFGA("");
  const [tasksFGA, setTasksFGA] = useStateFGA([
    { idFGA: "sample-1", titleFGA: "Read React docs" },
    { idFGA: "sample-2", titleFGA: "Finish homework" },
    { idFGA: "sample-3", titleFGA: "Buy groceries" },
  ]);

  const addTaskFGA = () => {
    const trimmedTaskFGA = taskFGA.trim();
    if (!trimmedTaskFGA) return;

    setTasksFGA((currentTasksFGA) => [
      ...currentTasksFGA,
      { idFGA: `${Date.now()}`, titleFGA: trimmedTaskFGA },
    ]);
    setTaskFGA("");
  };

  const deleteTaskFGA = (taskIdFGA) => {
    setTasksFGA((currentTasksFGA) =>
      currentTasksFGA.filter((currentTaskFGA) => currentTaskFGA.idFGA !== taskIdFGA),
    );
  };

  return (
    <ViewFGA style={stylesFGA.container}>
      <HeaderFGA />
      <KeyboardAvoidingViewFGA
        behavior={PlatformFGA.OS === "ios" ? "padding" : undefined}
        style={stylesFGA.body}
      >
        <TextFGA style={stylesFGA.sectionLabel}>YOUR LIST</TextFGA>
        <ViewFGA style={stylesFGA.entryRow}>
          <TextInputFGA
            accessibilityLabel="New task"
            onChangeText={setTaskFGA}
            onSubmitEditing={addTaskFGA}
            placeholder="Enter a new task"
            placeholderTextColor="#78857E"
            returnKeyType="done"
            style={stylesFGA.input}
            value={taskFGA}
          />
          <TouchableOpacityFGA
            accessibilityRole="button"
            onPress={addTaskFGA}
            style={stylesFGA.addButton}
          >
            <TextFGA style={stylesFGA.addButtonText}>Add</TextFGA>
          </TouchableOpacityFGA>
        </ViewFGA>
        <FlatListFGA
          contentContainerStyle={stylesFGA.list}
          data={tasksFGA}
          keyExtractor={(itemFGA) => itemFGA.idFGA}
          ListEmptyComponent={
            <TextFGA style={stylesFGA.empty}>Nothing on the list yet.</TextFGA>
          }
          renderItem={({ item: itemFGA }) => (
            <TaskItemFGA
              onDeleteFGA={() => deleteTaskFGA(itemFGA.idFGA)}
              taskFGA={itemFGA.titleFGA}
            />
          )}
        />
      </KeyboardAvoidingViewFGA>
      <FooterFGA />
    </ViewFGA>
  );
}

const stylesFGA = StyleSheetFGA.create({
  container: {
    backgroundColor: "#F5F7F4",
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionLabel: {
    color: "#53685D",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 10,
  },
  entryRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderColor: "#C8D4CC",
    borderRadius: 8,
    borderWidth: 1,
    color: "#18392E",
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  addButton: {
    alignItems: "center",
    backgroundColor: "#153D32",
    borderRadius: 8,
    justifyContent: "center",
    minHeight: 52,
    paddingHorizontal: 18,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  list: {
    paddingTop: 16,
    paddingBottom: 24,
  },
  empty: {
    color: "#65756D",
    fontSize: 15,
    paddingVertical: 24,
    textAlign: "center",
  },
});
