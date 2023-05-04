import { Box } from "@mui/material";
import Post from "./Post";
import React from 'react'

function Feedbar() {
  return (
    <Box flex="4" p={2}>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </Box>
  )
}

export default Feedbar