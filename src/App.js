import React from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feedbar from "./components/Feedbar";
import Rightbar from "./components/Rightbar";
import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import Adds from './components/Add';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme ({
    palatte: {
      mode: mode,
    }
  })

  return (
    <ThemeProvider theme= {darkTheme}>
      <Box bgcolor={"background.default"}  color={"text.primary"}>
      <Navbar/>
        <Stack direction="row" spacing={2} justifyContent="space-between">
             <Sidebar/>
             <Feedbar/>
             <Rightbar/>
        </Stack>
        <Adds/>
      </Box>
    </ThemeProvider>
  )
}

export default App