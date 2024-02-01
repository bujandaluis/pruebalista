import { MobileModel } from "../../models/mobileModel";
import { mobileLocalDataSource } from "./local/mobileLocalDataSource";
import { mobileRemoteDataSource } from "./remote/mobileRemoteDataSource";

export class mobileDataSource {
  static async getMobileApi(): Promise<MobileModel[]> {
    const result = await mobileRemoteDataSource.getMobileApi().then((value) => {
      return value.map((mobile) => ({
        author: mobile.author,
        createdAt: mobile.created_at,
        objectID: mobile.objectID,
        storyTitle: mobile.story_title,
        storyUrl: mobile.story_url,
      }));
    });
    return result;
  }

  static async getMobile(): Promise<MobileModel[]> {
    const result = await mobileLocalDataSource.getMobile();
    return result;
  }

  static async saveMobile(data: MobileModel[]): Promise<void> {
    await mobileLocalDataSource.saveMobile(data);
  }

  static async deleteMobile(data2: MobileModel): Promise<void> {
    await mobileLocalDataSource.deleteMobile(data2);
  }
}
