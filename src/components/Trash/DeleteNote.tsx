import { Card, CardActions, CardContent, styled, Typography } from '@mui/material';
import { useContext } from 'react';
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from '@mui/icons-material';

import { DataContext } from '../../context/DataProvider';
import { NoteInterface } from '../notes/Form';

interface NotePropsInterface {
  note: NoteInterface;
}

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

const DeleteNote = ({ note }: NotePropsInterface): JSX.Element => {
  //@ts-ignore
  const { setNotes, deletedNotes, setDeletedNotes } = useContext(DataContext);

  const restoreNote = (note: NoteInterface) => {
    const updatedNotes = deletedNotes.filter((data: NoteInterface) => data.id !== note.id);
    setDeletedNotes(updatedNotes);
    setNotes((prevArr: NoteInterface[]) => [note, ...prevArr]);
  };

  const deleteNote = (note: NoteInterface) => {
    const updatedNotes = deletedNotes.filter((data: NoteInterface) => data.id !== note.id);
    setDeletedNotes(updatedNotes);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Delete
          fontSize="small"
          style={{ marginLeft: 'auto', cursor: 'pointer' }}
          onClick={() => deleteNote(note)}
        />
        <Restore fontSize="small" style={{ cursor: 'pointer' }} onClick={() => restoreNote(note)} />
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
