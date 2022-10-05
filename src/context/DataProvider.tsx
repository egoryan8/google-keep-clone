import { createContext, useState } from 'react';
import { NoteInterface } from '../components/notes/Form';

interface DataContextInterface {
  notes: NoteInterface[];
  setNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>;
  archiveNotes: NoteInterface[];
  setArchiveNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>;
  deletedNotes: NoteInterface[];
  setDeletedNotes: React.Dispatch<React.SetStateAction<NoteInterface[]>>;
}

interface DataProviderInterface {
  children: JSX.Element;
}

export const DataContext = createContext<DataContextInterface | null>(null);

export const DataProvider = ({ children }: DataProviderInterface): JSX.Element => {
  const [notes, setNotes] = useState<NoteInterface[]>([]);
  const [archiveNotes, setArchiveNotes] = useState<NoteInterface[]>([]);
  const [deletedNotes, setDeletedNotes] = useState<NoteInterface[]>([]);

  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        setArchiveNotes,
        deletedNotes,
        setDeletedNotes,
      }}>
      {children}
    </DataContext.Provider>
  );
};
