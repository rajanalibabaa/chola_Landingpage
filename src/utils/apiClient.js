import axios from "axios"

export const GetApiCall = async(url, params = {},token) => {

  // console.log("token :",token)

    const res = await axios.get(url,{
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      params
    });

    if(!res){
        throw new Error("Error in API Call")
    }
    return res;
}

export const PostApiCall = async (url, payload = {}, token = '',withCredentials) => {
  try {
    const res = await axios.post(url, payload, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : '',
      },
      withCredentials: withCredentials === true? true : false
    });

    return res.data; 
  } catch (error) {
    console.error('POST API Error:', error.response || error.message);
    throw new Error(error.response?.data?.message || 'Error in POST API Call');
  }
};
