import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import { FeedComponent } from './components/feed-component';
import { RightBarComponent } from './components/rightBar-component';
import { SideBarComponent } from './components/sideBar-component';
import './App.css';
import { NavBarComponent } from './components/navBar-component';
import { AddPostComponent } from './components/addPost-component';
import React from 'react'
import { LoadingComponent } from './components/loading-component';
function App() {
  const [currentMode, setCurrentMode] = React.useState('light');

  const darkMode = createTheme({
    palette: {
      mode: currentMode,
    },
  });

  return (
    <>
      <LoadingComponent />
      <ThemeProvider theme={darkMode}>
        <Box bgcolor={'background.default'} color={'text.primary'} >
          <NavBarComponent />
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <SideBarComponent setMode={setCurrentMode} mode={currentMode} />
            <FeedComponent />
            <RightBarComponent />
          </Stack>
          <AddPostComponent />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
