import React, { useCallback, useEffect, useState } from 'react'
import { MobileApi } from '../../api/MobileApi';
import { MobileModel } from "../../models/MobileModel";
import AsyncStorage from '@react-native-async-storage/async-storage';

 const HomeViewModel = () => {
    const [mobiles, setMobiles] = useState<MobileModel[]>();

    useEffect(() => {
        (async () => {
          await loadMobile();
        })();
      }, []);

      const [refreshing, setRefreshing] = useState(false);

      const onRefresh = useCallback(async () => {
        setRefreshing(true);
        
        //await AsyncStorage.clear();
        await loadMobile();
    
        setRefreshing(false);
      }, []);

    const loadMobile = async () => {

        const data = await AsyncStorage.getItem("DataAPI");

        const mobilesArray:MobileModel[] = [];

        if(data){
            const response = JSON.parse(data);

            for await (const mobile of response) {
                if(mobile != null){
                    mobilesArray.push({
                        objectID: mobile.objectID,
                        story_title: mobile.story_title || mobile.title,
                        author: mobile.author,
                        created_at: mobile.created_at,
                        story_url: mobile.story_url
                    })
                }
            }

        }else{
            const response = await MobileApi.getMobileApi();
            for await (const mobile of response.hits) {
                
                mobilesArray.push({
                    objectID: mobile.objectID,
                    story_title: mobile.story_title || mobile.title,
                    author: mobile.author,
                    created_at: mobile.created_at,
                    story_url: mobile.story_url
                })
            }
        }
        setMobiles(mobilesArray);
        await AsyncStorage.setItem("DataAPI", JSON.stringify(mobilesArray));

        
    }



    return {
        mobiles,
        onRefresh,
        refreshing,
        loadMobile
    }
}

export default HomeViewModel;
