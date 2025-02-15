import { NavLink } from 'react-router-dom';
import { UnstyledButton, Stack } from '@mantine/core';

function Navigation() {
  return (
      <Stack>
        <NavLink to="/">
          <UnstyledButton>Accueil</UnstyledButton>
        </NavLink>
        <NavLink to="/notes">
          <UnstyledButton>Notes</UnstyledButton>
        </NavLink>
        <NavLink to="/settings">
          <UnstyledButton>Paramètres</UnstyledButton>
        </NavLink>
      </Stack>
  );
}

export default Navigation;