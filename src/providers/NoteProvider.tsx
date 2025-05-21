"use client";
import React from "react";

type NoteProviderContextType = {
  noteText: string;
  setNoteText: (noteText: string) => void;
};
export const NoteProviderContext = React.createContext<NoteProviderContextType>(
  {
    noteText: "",
    setNoteText: () => {},
  }
);
function NoteProvider({ children }: { children: React.ReactNode }) {
  const [noteText, setNoteText] = React.useState("");
  return (
    <NoteProviderContext.Provider value={{ noteText, setNoteText }}>
      {children}
    </NoteProviderContext.Provider>
  );
}

export default NoteProvider;
