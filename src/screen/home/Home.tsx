
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, RefreshControl, Button } from 'react-native';
import * as React from 'react'

import useViewModel from './HomeViewModel';
import styles from './HomeStyles'
import Item from '../../components/Item'

export const HomeScreen = () => {

  const { mobiles,onRefresh,refreshing, loadMobile } = useViewModel();

   return(
      <SafeAreaView>
        <FlatList
        data={mobiles}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(mob) => String(mob.objectID)}
        renderItem={({item}) => <Item data={item} loadMobile={loadMobile} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      </SafeAreaView>
               
  );
}

