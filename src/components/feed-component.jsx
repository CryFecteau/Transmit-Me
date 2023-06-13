import { PostComponent } from './post-component';
import { AddPhotoAlternateRounded, AddReactionRounded, GroupAddRounded, VideoCallRounded } from '@mui/icons-material';
import { Box, Button, Stack, TextField, } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

export const FeedComponent = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flex: 4 }}>
            <Box
                p={3}
                borderRadius={5}
                bgcolor={'background.default'}
                color={'text.primary'}
                sx={{
                    display: 'none',
                    '@media (min-width: 600px)': {
                        display: 'block',
                    },
                }}
            >
                <TextField
                    sx={{ width: '100%', mt: 2 }}
                    id='outlined-multiline-static'
                    label="What's on your mind?"
                    multiline
                    rows={5}
                    variant='outlined'
                />
                <Stack direction="row" gap={1} mt={2} justifyContent="flex-end">
                    <AddReactionRounded color="primary" sx={{ cursor: 'pointer' }} />
                    <AddPhotoAlternateRounded color="primary" sx={{ cursor: 'pointer' }} />
                    <VideoCallRounded color="primary" sx={{ cursor: 'pointer' }} />
                    <GroupAddRounded color="primary" sx={{ cursor: 'pointer' }} />
                    <Button variant="contained" size="small" endIcon={<SendIcon />} sx={{ marginLeft: 'auto' }}>
                        Post
                    </Button>
                </Stack>
            </Box>
            {/* <Box flex={4} p={2}>
                <PostComponent />
                <PostComponent />
                <PostComponent />
                <PostComponent />
                <PostComponent />
            </Box> */}
            <Box p={2}>
                <PostComponent />
            </Box>
        </Box>
    )
}
