import { Box, Stack } from '@mui/material';
import { FeedComponent } from './components/feed-component';
import { RightBarComponent } from './components/rightBar-component';
import { SideBarComponent } from './components/sideBar-component';
import './App.css';
import { NavBarComponent } from './components/navBar-component';
import { AddPostComponent } from './components/addPost-component';

function App() {
  return (
    <Box>
      <NavBarComponent />
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <SideBarComponent />
        <FeedComponent />
        <RightBarComponent />
      </Stack>
      <AddPostComponent />
    </Box>
  );
}

export default App;
