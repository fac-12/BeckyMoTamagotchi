import { token } from "../../token";

const API_BASE = "https://api.github.com";
export const getUserData = username => {
  return fetch(`${API_BASE}/users/${username}?access_token=${token}`)
    .then(res => {
      if (res.status !== 200) {
        console.log("Something went wrong with the request");
      }
      return res.json();
    })
    .catch(err => {
      throw new Error("Fetching failed");
    });
};
