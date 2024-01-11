import { View, Text, TouchableOpacity, TouchableHighlight, PanResponder, Button, Dimensions } from 'react-native';
import { MobileModel } from "../models/MobileModel";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DetailScreen } from '../screen/detail/Detail';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import { useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

  const Item = ({
    data,
    loadMobile,
}: any) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const goToDetail = () => {
    navigation.navigate('DetailScreen',data);
  };

  const goToDelete = async () => {
    let result:string | null = await AsyncStorage.getItem("DataAPI");
    if(result == null){
      result = '';
    }else{
      let obj: MobileModel[] = JSON.parse(result);

      const _find = obj.find(e => e.objectID === data.objectID);
      const _findIndex = obj.findIndex(e => e.objectID === data.objectID);

      if (_findIndex > -1) {
        delete obj[_findIndex];
      }

      await AsyncStorage.setItem("DataAPI", JSON.stringify(obj));
      await loadMobile();
    }

  };

  const timeAgo = (prevDate:string) => {
    const diff = Number(new Date()) - Number(new Date(prevDate));
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const day2 = hour * 48;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
        case diff < minute:
            const seconds = Math.round(diff / 1000);
             return `${seconds} s`
        case diff < hour:
            return Math.round(diff / minute) + ' m';
        case diff < day:
            return Math.round(diff / hour) + ' h';
        case diff < month:
          if(diff < day2)
            return "yesterday";
        default:
          return new Date(prevDate).toString();

          // case diff < month:
          //       return Math.round(diff / day) + ' days ago';
          //   case diff < year:
          //       return Math.round(diff / month) + ' months ago';
          //   case diff > year:
          //       return Math.round(diff / year) + ' years ago';
          //   default:
          //       return "";
    }
};




  const RightActions = () => { 
    return (
        <TouchableOpacity onPress={goToDelete} 
          style={{
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "center",
            borderRadius:10,
            marginRight:16,
            marginVertical: 8
            }}>
              <View style={{
                paddingHorizontal:10
              }}>
                <Text style={{color:'white', fontSize: 14, fontWeight:'bold'}} >Delete</Text>
              </View>
        </TouchableOpacity>
      ) 
    }
  
  return (

    <Swipeable renderRightActions={RightActions} >
      <TouchableOpacity onPress={goToDetail}
        style={{
          backgroundColor: '#d6d6d6',
          borderRadius: 10,
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
        }}>
        <Text style={{fontSize: 14}}>{data.story_title}</Text>
        <Text style={{fontSize: 11, marginTop: 10}}>{data.author} - {timeAgo(data.created_at.toString())}</Text>
      </TouchableOpacity>
   </Swipeable>

  )
}
     
  export default Item;