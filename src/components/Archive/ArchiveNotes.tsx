import React, { useContext } from 'react';
import { Box, Grid, styled } from '@mui/material';

import ArchiveNote from './ArchiveNote';
import { DataContext } from '../../context/DataProvider';
import EmptyArchive from './EmptyArchive';
import { NoteInterface } from '../notes/Form';

const ArchiveNotes = (): JSX.Element => {
  //@ts-ignore
  const { archiveNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex', width: '100%', marginTop: '10vh' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {archiveNotes.length > 0 ? (
          <Grid container style={{ marginTop: 16 }}>
            {archiveNotes.map((note: NoteInterface) => (
              <Grid item key={note.id}>
                <ArchiveNote note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyArchive />
        )}
      </Box>
    </Box>
  );
};

export default ArchiveNotes;
