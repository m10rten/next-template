import type { SessionUser } from "@/types";

declare module "next-auth" {
  export interface Session {
    user: SessionUser;
  }

  export interface DefaultSession {
    user: SessionUser;
  }
}
