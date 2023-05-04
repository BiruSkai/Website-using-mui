import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import {Mail, Notifications, Pets} from '@mui/icons-material';
import {borderRadius} from "@mui/system";
import React from 'react'
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent:"space-between"
})

const Search = styled("div")(({theme}) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width:"40%"
}));

const Icons = styled("Box")(({theme}) => ({
        display: "none", alignItems: "center", gap:"20px",
        [theme.breakpoints.up("sm")]: {display: "flex"}
}));

const UserBox = styled("Box")(({theme}) => ({
        display: "flex", alignItems: "center", gap:"10px",
        [theme.breakpoints.up("sm")]: {display: "none"}
}));

function NavBar() {
        const [open, setOpen] = useState(false);

  return (
        <AppBar position="sticky">
                <StyledToolbar>
                        <Typography variant="h6" sx={{ display: {xs:"none", sm:"block"}}}>
                        NavBar
                        </Typography>
                        <Pets sx={{ display: {xs:"block", sm:"none"} }}/>
                        <Search><InputBase placeholder="search"/>Search</Search>
                        <Icons onClick={e=>setOpen(true)}>
                                <Badge badgeContent={4} color="error">
                                        <Mail />
                                </Badge>  
                                <Badge badgeContent={4} color="error">
                                        <Notifications />
                                </Badge> 
                                <Avatar sx={{width:30, height:30}} src="https://www.pexels.com/photo/photo-of-fox-sitting-on-ground-2295744/"/>
                        </Icons>
                        <UserBox onClick={e=>setOpen(true)}>
                                <Avatar sx={{width:30, height:30}} src="https://www.pexels.com/photo/photo-of-fox-sitting-on-ground-2295744/"/>
                                <Typography>Aurora</Typography>
                        </UserBox>
                </StyledToolbar>
                <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        
                        open={open}
                        onClose={e=>setOpen(false)}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                >
                        <MenuItem >Profile</MenuItem>
                        <MenuItem >My account</MenuItem>
                        <MenuItem >Logout</MenuItem>
                </Menu>
        </AppBar>
  )
}

export default NavBar