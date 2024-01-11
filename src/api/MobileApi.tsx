export class MobileApi {


  static async getMobileApi(){
     const url = `https://hn.algolia.com/api/v1/search_by_date?query=mobile`;
  
      try{
        const response = await fetch(url);
        const result = await response.json();
        return result;
      } catch (error) {
        throw error;
      }
    // await fetch(url)
    //   .then((response) => {
    //     // if (!response.ok) {
    //     //   throw Error(response.statusText);
    //     // }
    //     return response.json()
    //   })
    //   .then((data) => {
    //     setData({
    //       status: ApiStatus.Success,
    //       error: null,
    //       data
    //     });
    //   })
    //   .catch((err: Error) => {
    //     throw err;
    //   });
  
  }

   
  
  

 }


  