import { Box, Stack } from '@mui/material';
import { FeedComponent } from './components/feed-component';
import { RightBarComponent } from './components/rightBar-component';
import { SideBarComponent } from './components/sideBar-component';
import './App.css';
import { NavBarComponent } from './components/navBar-component';

function App() {
  return (
    <Box>
      <NavBarComponent />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <SideBarComponent />
        <FeedComponent />
        <RightBarComponent />
      </Stack>
    </Box>
  );
}

export default App;
