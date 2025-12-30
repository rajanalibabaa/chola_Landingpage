  export const  handleApiResponse = (response, successMessage) => {
    const status =  response?.data?.statuscode 
    const message = response?.data?.message || successMessage;

    if (status === 200 || status === 201) {
      console.log("API Success Response:", status, message); // Debug
      showSnackbar(  message || "Operation successful", "success");

      return true;
    } else {
      console.log("API Error Response:", status, message); // Debug
      showSnackbar(message|| "Something went wrong", "error");
      return false;
    }
  };
