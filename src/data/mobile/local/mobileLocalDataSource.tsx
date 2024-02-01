import { MobileModel } from "../../../models/mobileModel";
import { mobileResponse } from "../responses/mobileResponse";
import AsyncStorage from '@react-native-async-storage/async-storage';


export class mobileLocalDataSource {
  static async getMobile(): Promise<MobileModel[]> {
    const data =  await AsyncStorage.getItem("DataAPI");
    const result: MobileModel[] = JSON.parse(data as any);
    return result;
  }

  static async saveMobile(data:MobileModel[]): Promise<void> {
    await AsyncStorage.setItem("DataAPI", JSON.stringify(data));
  }


  static async deleteMobile(data2:MobileModel): Promise<void> {
    let result2 = await this.getMobile();
      if(result2.length > 0){
        await this.saveMobile(result2.filter(obj => obj.objectID !== data2.objectID));
    }

 }

}