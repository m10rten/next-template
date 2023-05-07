import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    // Add your providers here
  ],
  callbacks: {
    // Add your callbacks here
    // eg: signIn, session, jwt, etc
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
