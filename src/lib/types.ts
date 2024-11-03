import { Session } from "next-auth";

export interface SessionType extends Session {
  user: {
    id: string;
    accessToken: string;
    name: string;
    email: string;
    image: string;
    role: string;
  };
  expires: string;
}
