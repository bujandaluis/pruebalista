import { mobileDataSource } from "../../data/mobile/mobileDataSource";
import { MobileModel } from "../../models/mobileModel";

export class getMobileUserCase {
    static async getMobileApi(): Promise<MobileModel[]>{
        let result: MobileModel[];
        result = await mobileDataSource.getMobileApi();
        return result;
    }



    static async getMobile(): Promise<MobileModel[]> {
        const result = await mobileDataSource.getMobile()
        return result
    }

    static async saveMobile(data:MobileModel[]): Promise<void> {
        await mobileDataSource.saveMobile(data);
    }

    static async deleteMobile(data2:MobileModel): Promise<void> {
        await mobileDataSource.deleteMobile(data2);
    }

}