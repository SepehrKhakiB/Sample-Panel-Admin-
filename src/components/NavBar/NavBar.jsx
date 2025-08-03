import React from 'react';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useDarkMode from '../../useDarkMode';
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import "./NavBar.css"

const NavBar = () => {

    const { theme, toggleTheme, tokens } = useDarkMode()

    const iconButtonStyle = {
        color: tokens.text,
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
        }
    };

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            <Box
                display="flex"
                backgroundColor={tokens.box}
                borderRadius="3px"
                marginRight="1rem"
            >
                <InputBase
                    sx={{
                        ml: 2,
                        flex: 1,
                        color: tokens.text,
                        "& .MuiInputBase-input": {
                            padding: "8px",
                            "&::placeholder": {
                                color: tokens.text
                            }
                        }
                    }}
                    placeholder="Search"
                />
                <IconButton sx={{
                    color: tokens.text,
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" }
                }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            <div className='box-icone-nav'>
                <IconButton sx={iconButtonStyle} onClick={toggleTheme}>
                    {theme === "dark" ? (
                        <LightModeOutlinedIcon />
                    ) : (
                        <DarkModeOutlinedIcon />
                    )}
                </IconButton>
                <IconButton sx={iconButtonStyle} >
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton sx={iconButtonStyle}  >
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton sx={iconButtonStyle} >
                    <PersonIcon />
                </IconButton>
            </div>
        </Box>
    );
}

export default NavBar;