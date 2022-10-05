import React from 'react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LightBulb = styled(LightbulbOutlinedIcon)`
  font-size: 120px;
  color: #f5f5f5;
`;

const Text = styled(Typography)`
  color: #80868b;
  font-size: 1.375rem;
  line-height: 1.75rem;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
`;

const EmptyNotes = () => {
  return (
    <Container>
      <LightBulb />
      <Text>Здесь будут ваши заметки.</Text>
    </Container>
  );
};

export default EmptyNotes;
