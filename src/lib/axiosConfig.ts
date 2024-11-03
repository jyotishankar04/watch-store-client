import { auth } from "@/auth";
import axios from "axios";
import { SessionType } from "./types";

const session: SessionType = await auth();
export const axiosApi = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: {
    "Content-Type": "application/json",
    withCredentials: "true",
    Authorization: "Bearer " + session?.user?.accessToken,
  },
});
