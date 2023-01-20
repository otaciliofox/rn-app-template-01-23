import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLocalUser = async (key: string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  if (jsonValue !== null) {
    const data = JSON.parse(jsonValue);
    return data;
  }
  return "";
};

export const save = async (key: string, data: any) => {
  const jsonValue = JSON.stringify(data);
  await AsyncStorage.setItem(key, jsonValue);
};

export const remove = async (key: string) => {
  await AsyncStorage.removeItem(key);
};
