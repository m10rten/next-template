export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/admin"], // add any other routes you want to protect with login
};
