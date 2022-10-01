import { AppBar, IconButton, Menu, styled, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';

const logo =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png';

interface HeaderBarProps {
  open: boolean;
  handleDrawer?: () => void;
}

export const Header = styled(AppBar)<HeaderBarProps>(() => ({
  zIndex: 1201,
  backgroundColor: '#fff',
  height: '70px',
  boxShadow: 'inset 0 -1px 0 0 #dadce0',
}));

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
  margin-left: 15px;
`;

const HeaderBar = ({ open, handleDrawer }: HeaderBarProps): JSX.Element => {
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          edge="start"
          sx={{
            marginRight: '20px',
          }}>
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="Keep Google Logo" style={{ width: 30 }} />
        <Heading>Keep</Heading>
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;
