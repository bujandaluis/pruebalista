import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export const DetailScreen = (props: any) => {
  return props.route.params.storyUrl ? (
    <WebView
      startInLoadingState={true}
      source={{ uri: props.route.params.storyUrl }}
    />
  ) : (
    <View>
      <Text style={styles.unavailableText}>
        Este post NO esta disponible 😞
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  unavailableText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    padding: 40,
  },
  spinner: {
    zIndex: 999,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
