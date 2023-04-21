import AuthContext from "@/providers/AuthContext";
import SessionContextProvider from "@/providers/SessionContext";
import "@/styles/global.scss";
import "@/styles/normalize.scss";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "NextJs Template",
  description: "Template for NextJs projects",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  // eslint-disable-next-line no-console
  console.log("session", session);

  return (
    <html lang="en">
      <head />
      <body>
        <AuthContext>
          <SessionContextProvider session={session}>
            {children}
          </SessionContextProvider>
        </AuthContext>
      </body>
    </html>
  );
}
