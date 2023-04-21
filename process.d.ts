declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    NEXTAUTH_SECRET: string;
    CLIENT_URL: string;
    // Any next-auth keys can be added here
  }
}
