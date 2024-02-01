import React, { useCallback, useEffect, useState,  } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMobileUserCase } from '../../../domain/mobile/getMobileUserCase';
import { TouchableOpacity, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { MobileModel } from '../../../models/mobileModel';
import HomeStyles from './HomeStyles';

 const HomeViewModel = () => {
   const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
   
    const [mobiles, setMobiles] = useState<MobileModel[]>([]);

    useEffect(() => {
        (async () => {
          await loadMobile();
        })();
      }, []);

      const [refreshing, setRefreshing] = useState(false);

      const onRefresh = useCallback(async () => {
        setRefreshing(true);
        
        await AsyncStorage.clear();
        await loadMobile();
    
        setRefreshing(false);
      }, []);

    const loadMobile = async () => {

        const data = await getMobileUserCase.getMobile();
        let mobilesArray:MobileModel[] = [];
        if(data){
          mobilesArray = data;
        }else{
          mobilesArray = await getMobileUserCase.getMobileApi();
          await getMobileUserCase.saveMobile(mobilesArray);
        }
         setMobiles(mobilesArray);
    }

    
    const goToDetail = (data:MobileModel) => {
         navigation.navigate('DetailScreen',data);
    };
  
    const goToDelete = async (data:MobileModel) => {
      await getMobileUserCase.deleteMobile(data);
        await loadMobile();
      }
  
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
            return new Date(prevDate);
      }
  };
  
  
    const RightActions = (data:MobileModel) => { 
      return (
          <TouchableOpacity onPress={() => goToDelete(data)} 
            style={HomeStyles.touchableOpacity}>
                <View style={{
                  paddingHorizontal:10
                }}>
                  <Text style={HomeStyles.text1} >Delete</Text>
                </View>
          </TouchableOpacity>
        ) 
      }

    return {
        mobiles,
        onRefresh,
        refreshing,
        goToDetail,
        RightActions,
        timeAgo
    }
}

export default HomeViewModel;
