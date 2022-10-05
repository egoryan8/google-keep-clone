import React, { useContext } from 'react';
import { Box, Grid, styled } from '@mui/material';

import Form, { NoteInterface } from './Form';
import Note from './Note';
import { DataContext } from '../../context/DataProvider';
import EmptyNotes from './EmptyNotes';

const DrawerHeader = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = (): JSX.Element => {
  //@ts-ignore
  const { notes } = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form />
        {notes.length > 0 ? (
          <Grid container style={{ marginTop: 16 }}>
            {notes.map((note: NoteInterface) => (
              <Grid item key={note.id}>
                <Note note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
