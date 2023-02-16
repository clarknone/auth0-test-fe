import { IUserProfile } from "@/interface/profile";
import axios from "axios";

export async function getUserProfile() {
  const storageKey = "profile";
  const storage: IUserProfile = getStorage(storageKey);
  if (storage.fullname) {
    return storage;
  } else {
    return axios
      .get("/auth/profile")
      .then((res) => {
        setStorage(storageKey, res.data);
        return res.data as IUserProfile;
      })
      .catch((e) => {
        throw new Error(e.message);
      });
  }
}
export async function updateUserProfile(data: IUserProfile) {
  const storageKey = "profile";
  return axios
    .put("/auth/profile", data)
    .then((res) => {
      setStorage(storageKey, res.data);
      return res.data as IUserProfile;
    })
    .catch((e) => {
      throw new Error(e.message);
    });
}

function getStorage(key: string) {
  return JSON.parse(sessionStorage.getItem(key) || "{}");
}

function setStorage(key: string, data: any) {
  const value = JSON.stringify(data);
  sessionStorage.setItem(key, value);
}
