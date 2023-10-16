import NetworkUtils from './networkUtil';


const executeGetRequest= async (requestName,requestHeader=null)=>{
    let url='https://app.continuakids.com/login'
    let header={
        'Content-Type':'application/json'
    };
    if(requestHeader){
        header={...header,...requestHeader}
    }
    const controller=new AbortController();
    const id=setTimeout(()=>controller.abort(),10000)

    try{
        const isConnected = await NetworkUtils.isNetworkAvailable();
        if(isConnected){
            let response = await fetch(url,{
                method:'GET',
                headers:header,
                signal:controller.signal
            })
            clearTimeout(id);
            console.log('response - ', response)
            let responseJson= await processResponse(response)
            console.log('response in json format - ',responseJson)

        }else{
            Alert.alert('No Internet', 'Please connect to your internet')
        }
    }catch(e){
console.log('error caught - ', e)
    }
}
const executePostRequest = async (
    requestName,
    requestHeader = null,
    body = {},
  ) => {
    // let url = 'https://app-api.continuakids.com/' +requestName;
    let url = 'https://127.0.0.1:5034/' +requestName;
    console.log('url- ', url);
    let header = {
      'Content-Type': 'application/json',
    };
    if (requestHeader) {
      header = {...header, ...requestHeader};
    }
    console.log('header- ', header);
    console.log('body- ', body);
  
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 10000);
  
    try {
      const isConnected = await NetworkUtils.isNetworkAvailable();
      if (isConnected) {
        console.log('hello guys')
        let response = await fetch(url, {
          method: 'POST',
          headers: header,
          body: JSON.stringify(body),
          signal: controller.signal,
        });
        console.log('hi guys')
        clearTimeout(id);
  
        console.log('response - ', response);
        let responseJson = await processResponse(response);
        console.log('response in json format - ', responseJson);
  
        return responseJson;
      } else {
        Alert.alert('Internet Error', 'Network Connection failed');
      }
    } catch (e) {
      console.log('error caught - ', e);
      // return {responseCode: 1, responseJson: {err: 'Network request failed'}};
    }
  };
 export async function processResponse(response){
  console.log('hello', response)
    const  responseCode=response.status;
    let responseJson=null;
    if(responseCode==200){
        responseJson=response.json();
    }else if( responseCode == 403){
        // await removeData('userData');
        responseJson={
            err:'Token is expired'
        }
    }
    return Promise.all([responseCode, responseJson]).then(res => ({
        responseCode: res[0],
        responseJson: res[1],
    }));
 }
 
 export {
    executeGetRequest,
    executePostRequest
 }