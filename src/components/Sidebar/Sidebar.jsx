import React, { useState } from 'react';
import "./Sidebar.css"
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import PortraitRoundedIcon from '@mui/icons-material/PortraitRounded';
import InventoryRoundedIcon from '@mui/icons-material/InventoryRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import useDarkMode from '../../useDarkMode';
import { Box } from '@mui/material';

const Sidebar = () => {
    const [isOpen, setisOpen] = useState(true)
    const [selectedItem, setSelectedItem] = useState(0);

    const handleItemClick = (index) => {
        setSelectedItem(index);
    };



    return (
        <Box className={`Sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className='Sidebar-title' onClick={() => setisOpen(!isOpen)}>
                <h1 className=''>ADMIN</h1>
                <span className='Sidebar-title-icon'><MenuIcon /></span>
            </div>
            <div className='user-profile'>
                <img src="/userimg/me.webp" alt="" />
                <p className='name-user'>sepehr khaki</p>
                <span className='User-Options'>manager</span>
            </div>
            <div className='Sidebar-Menu'>
                <ul className='Sidebar-Menu-ul'>
                    <li
                        className={selectedItem === 0 ? 'selected' : ''}
                        onClick={() => handleItemClick(0)}
                    >
                        <HomeOutlinedIcon />
                        <span className='text-Sidebar-Menu'>صفحه اصلی</span>
                    </li>
                    <h6>data</h6>
                    <li
                        className={selectedItem === 1 ? 'selected' : ''}
                        onClick={() => handleItemClick(1)}
                    >
                        <SupervisedUserCircleRoundedIcon />
                        <span className='text-Sidebar-Menu'>تیم مدیریت</span>
                    </li>
                    <li
                        className={selectedItem === 2 ? 'selected' : ''}
                        onClick={() => handleItemClick(2)}
                    >
                        <PortraitRoundedIcon />
                        <span className='text-Sidebar-Menu'>لیست کاربران</span>
                    </li>
                    <li
                        className={selectedItem === 3 ? 'selected' : ''}
                        onClick={() => handleItemClick(3)}
                    >
                        <InventoryRoundedIcon />
                        <span className='text-Sidebar-Menu'>لیست خرید ها</span>
                    </li>
                    <h6>Pages</h6>
                    <li
                        className={selectedItem === 4 ? 'selected' : ''}
                        onClick={() => handleItemClick(4)}
                    >
                        <AccountCircleRoundedIcon />
                        <span className='text-Sidebar-Menu'>پروفایل</span>
                    </li>
                </ul>
            </div>
        </Box>
    );
}

export default Sidebar; 
