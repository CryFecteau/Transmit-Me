// import { Button } from '@mui/material';
// import { Add, Settings } from '@mui/icons-material/Delete';
import { Box, Stack } from '@mui/material';
import { FeedComponent } from './components/feed-component';
import { RightBarComponent } from './components/rightBar-component';
import { SideBarComponent } from './components/sideBar-component';
import './App.css';

function App() {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>
        <SideBarComponent />
        <FeedComponent />
        <RightBarComponent />
      </Stack>
    </Box>
  );
}

export default App;
