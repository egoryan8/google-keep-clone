import { Card, CardActions, CardContent, styled, Typography } from '@mui/material';
import { useContext } from 'react';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

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

const ArchiveNote = ({ note }: NotePropsInterface): JSX.Element => {
  //@ts-ignore
  const { notes, setNotes, archiveNotes, setArchiveNotes, setDeletedNotes } =
    useContext(DataContext);

  const unarchiveNote = (note: NoteInterface) => {
    const updatedNotes = archiveNotes.filter((data: NoteInterface) => data.id !== note.id);
    setArchiveNotes(updatedNotes);
    setNotes((prevArr: NoteInterface[]) => [note, ...prevArr]);
  };

  const deleteNote = (note: NoteInterface) => {
    const updatedNotes = archiveNotes.filter((data: NoteInterface) => data.id !== note.id);
    setArchiveNotes(updatedNotes);
    setDeletedNotes((prevArr: NoteInterface[]) => [note, ...prevArr]);
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <UnarchiveOutlinedIcon
          fontSize="small"
          style={{ marginLeft: 'auto', cursor: 'pointer' }}
          onClick={() => unarchiveNote(note)}
        />
        <DeleteOutlineOutlinedIcon
          fontSize="small"
          style={{ cursor: 'pointer' }}
          onClick={() => deleteNote(note)}
        />
      </CardActions>
    </StyledCard>
  );
};

export default ArchiveNote;
