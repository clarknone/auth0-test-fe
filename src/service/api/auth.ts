import axios from "axios";

export async function sendEmailVerification() {
  return axios.post("/auth/verify/email", {}).catch((e) => {
    throw new Error(e.response?.data?.message || e.message);
  });
}
