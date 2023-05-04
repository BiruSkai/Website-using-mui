
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography} from '@mui/material';
import React from 'react';
import {Add as AddIcon, EmojiEmotions, Person, VideoCall, Image as ImageIcon, DateRange} from "@mui/icons-material";
import { useState } from 'react';
import styled from '@emotion/styled';

const StyledModal = styled(Modal) ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})

const UserBox = styled(Box) ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px"
})

function Add() {
  const [open, setOpen] = useState(false);
  return (
    <>
        <Tooltip 
        title="Delete" 
        sx={{position:"fixed" ,bottom:20, left:{xs:"calc(50% - 25px)" ,md:30}}}
        onClick={e=>setOpen(true)}>
        <Fab color="primary" aria-label="add">
          <AddIcon/>
        </Fab>
        </Tooltip>
        <StyledModal
          open={open}
          onClose={e=>setOpen(false)}
          aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box width={400} height={280} bgcolor={"background.default"}  color={"text.primary"} borderRadius={5} p={3}>
          <Typography variant="h6" textAlign="center" color="grey">
          Create Post
          </Typography> 
          <UserBox>
            <Avatar
              src="https://material-ui.com/static/images/avatar/2.jpg"
              sx={{width:30, height:30}}
            />
            <Typography fontWeight={500} variant="span">Travis</Typography>
          </UserBox>
          <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="What's in your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mt={2} mb={2}>
          <EmojiEmotions color="primary"/>
          <ImageIcon color="secondary"/>
          <VideoCall color="success"/>
          <Person color="error"/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
          <Button >Post</Button>
          <Button sx={{width:"100px"}}><DateRange/></Button>
        </ButtonGroup>
        </Box>
        </StyledModal>
    </>
  )
}

export default Add