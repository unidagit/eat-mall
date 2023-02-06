import axios from "axios";
const BASE_URL = "http://localhost:9000";

export const getStores = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/stores`);
    return res.data;
  } catch (error) {
    return error.message;
  }
};

export const getStoresInfo = async (selectId) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/stores/${selectId}`);
    return data;
  } catch (error) {
    return error.message;
  }
};
