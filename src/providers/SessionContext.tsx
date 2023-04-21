"use client";
import { Session } from "next-auth";
import React from "react";

export const SessionContext = React.createContext<Session | null>(null);

export default function SessionContextProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session | null;
}) {
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}
