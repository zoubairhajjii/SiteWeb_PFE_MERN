
export const getUserData = async () => {
  try {
    const jsonValue = await localStorage.getItem("user");
  
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export const storeUserData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await localStorage.setItem("user", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  export const LogoutUser = async (value) => {
    try {
   
      await localStorage.removeItem("user");
    } catch (e) {
      console.log(e);
    }
  };