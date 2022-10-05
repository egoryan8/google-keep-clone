import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const NavList = (): JSX.Element => {
  const navList = [
    { id: 1, name: 'Заметки', icon: <LightbulbOutlinedIcon /> },
    {
      id: 2,
      name: 'Архив',
      icon: <ArchiveOutlinedIcon />,
    },
    {
      id: 3,
      name: 'Корзина',
      icon: <DeleteOutlinedIcon />,
    },
  ];
  return (
    <List>
      {navList.map((list) => (
        <ListItem button key={list.id}>
          <ListItemIcon>{list.icon}</ListItemIcon>
          <ListItemText primary={list.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
