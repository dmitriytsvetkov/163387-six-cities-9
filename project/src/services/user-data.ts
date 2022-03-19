import {userData} from '../types/user-data';
import {UserData} from '../const';

export const dropUserData = (): void => {
  localStorage.removeItem(UserData.avatarUrl);
  localStorage.removeItem(UserData.email);
  localStorage.removeItem(UserData.name);
  localStorage.removeItem(UserData.isPro);
  localStorage.removeItem(UserData.id);
  localStorage.removeItem(UserData.token);
};

export const saveUserData = (data: userData): void => {
  localStorage.setItem(UserData.avatarUrl, data.avatarUrl);
  localStorage.setItem(UserData.email, data.email);
  localStorage.setItem(UserData.name, data.name);
  localStorage.setItem(UserData.isPro, data.isPro);
  localStorage.setItem(UserData.id, data.id);
  localStorage.setItem(UserData.token, data.token);
};

export const getUserData = (fieldName:string):string => {
  const data = localStorage.getItem(fieldName);

  return data ?? '';
};
