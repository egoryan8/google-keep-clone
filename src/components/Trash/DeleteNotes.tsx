import { useContext } from 'react';
import { Box, Grid } from '@mui/material';

import DeleteNote from './DeleteNote';
import EmptyTrash from './EmptyTrash';
import { NoteInterface } from '../notes/Form';
import { DataContext } from '../../context/DataProvider';

const DeleteNotes = (): JSX.Element => {
  //@ts-ignore
  const { deletedNotes } = useContext(DataContext);

  return (
    <Box sx={{ display: 'flex', width: '100%', marginTop: '10vh' }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {deletedNotes.length > 0 ? (
          <Grid container style={{ marginTop: 16 }}>
            {deletedNotes.map((note: NoteInterface) => (
              <Grid item key={note.id}>
                <DeleteNote note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyTrash />
        )}
      </Box>
    </Box>
  );
};

export default DeleteNotes;
