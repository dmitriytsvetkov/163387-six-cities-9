import {userData} from '../types/user-data';
import {UserData} from '../const';

export const dropUserData = (): void => {
  localStorage.removeItem(UserData.AvatarUrl);
  localStorage.removeItem(UserData.Email);
  localStorage.removeItem(UserData.Name);
  localStorage.removeItem(UserData.IsPro);
  localStorage.removeItem(UserData.Id);
  localStorage.removeItem(UserData.Token);
};

export const saveUserData = (data: userData): void => {
  localStorage.setItem(UserData.AvatarUrl, data.avatarUrl);
  localStorage.setItem(UserData.Email, data.email);
  localStorage.setItem(UserData.Name, data.name);
  localStorage.setItem(UserData.IsPro, data.isPro);
  localStorage.setItem(UserData.Id, data.id);
  localStorage.setItem(UserData.Token, data.token);
};

export const getUserData = (fieldName:string): string => {
  const data = localStorage.getItem(fieldName);

  return data ?? '';
};
