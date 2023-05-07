import { z } from "zod";

// }
const env = z.object({
  NEXT_PUBLIC_API_URL: z.string().nonempty(),
  NEXTAUTH_SECRET: z.string().nonempty(),
  CLIENT_URL: z.string().nonempty(),
  // Any next-auth keys can be added here
});

export const e = env.parse(process.env);

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface ProcessEnv extends z.infer<typeof env> {}
  }
}
