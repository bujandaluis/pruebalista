import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from '../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Swipeable from 'react-native-gesture-handler/Swipeable';

  const Item = ({
    data,
    goToDetail,
    RightActions,
    timeAgo
}: any) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <Swipeable renderRightActions={() => RightActions(data)} >
      <TouchableOpacity onPress={() => goToDetail(data)}
        style={styles.touchableOpacity}>
        <Text style={styles.text1}>{data.storyTitle}</Text>
        <Text style={styles.text2}>{data.author} - {timeAgo(data.createdAt)}</Text>
      </TouchableOpacity>
   </Swipeable>
  )
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 14
  },
  text2: {
    fontSize: 11, 
    marginTop: 10
  },
  touchableOpacity:{
    backgroundColor: '#d6d6d6',
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
});

     
  export default Item;