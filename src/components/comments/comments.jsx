import React from 'react';
import "./comments.css"
import { Box } from '@mui/material';
import { Commentsdata } from '../../../data/db';
import SummaryComments from '../SummaryComments/SummaryComments';
import CommentIcon from '@mui/icons-material/Comment';

const Comments = () => {
    return (
        <Box width="25%" color="var(--text)">
            <p className='Comments-title'><CommentIcon /><span>نظرات کاربران</span></p>
            <Box
                display="flex"
                gap="10px"
                flexDirection="column"
                marginTop="10px"
                className="purchases-list-container"
            >
                {Commentsdata.map((data, index) => (
                    <SummaryComments {...data} key={index} />
                ))}
            </Box>
        </Box>
    );
}

export default Comments;
