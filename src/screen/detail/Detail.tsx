
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export const DetailScreen = (props: any) => {
  return <WebView source={{ uri: props.route.params.story_url }} style={{ flex: 1 }} />;
}

