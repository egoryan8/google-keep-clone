import { Card, CardActions, CardContent, styled, Typography } from '@mui/material';
import React from 'react';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { NoteInterface } from './Form';

interface NotePropsInterface {
  note: NoteInterface;
}

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
`;

const Note = ({ note }: NotePropsInterface): JSX.Element => {
  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <ArchiveOutlinedIcon fontSize="small" style={{ marginLeft: 'auto', cursor: 'pointer' }} />
        <DeleteOutlineOutlinedIcon fontSize="small" style={{ cursor: 'pointer' }} />
      </CardActions>
    </StyledCard>
  );
};

export default Note;
