import { mobileResponse } from "../responses/mobileResponse";

export class mobileRemoteDataSource {
  static async getMobileApi(): Promise<mobileResponse[]> {
    try {
      const response = await fetch(
        `https://hn.algolia.com/api/v1/search_by_date?query=mobile`
      );
      const result = await response.json();
      return result.hits;
    } catch (error) {
      throw error;
    }
  }
}
