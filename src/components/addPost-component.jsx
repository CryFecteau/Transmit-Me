import styled from '@emotion/styled'
import { AddPhotoAlternateRounded, AddReactionRounded, GroupAddRounded, VideoCallRounded } from '@mui/icons-material'
import { Avatar, Box, Button, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'

const ModalStyled = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const UserBoxStyled = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '15px',
});

export const AddPostComponent = () => {
    const [modelOpen, setModelOpen] = React.useState(false)

    return (
        <>
            <Tooltip
                onClick={() => setModelOpen(true)}
                title='Add Post'
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    left: { xs: 'calc(50% - 25px)', md: 30 },
                }}
            >
                <Fab color='primary' aria-label='add post' >
                    <AddReactionRounded />
                </Fab>
            </Tooltip>
            <ModalStyled
                open={modelOpen}
                onClose={() => setModelOpen(false)}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
            >
                <Box
                    width={400}
                    height={350}
                    p={3}
                    borderRadius={5}
                    bgcolor={'background.default'}
                    color={'text.primary'}
                >
                    <Typography variant='h6' textAlign={'center'}>Create New Post</Typography>
                    <UserBoxStyled>
                        <Avatar sx={{ width: 30, height: 30 }} alt='Remy Sharp' src='https://picsum.photos/50' />
                        <Typography variant='span'>Remy Sharp</Typography>
                    </UserBoxStyled>
                    <TextField
                        sx={{ width: '100%', mt: 2 }}
                        id='outlined-multiline-static'
                        label="What's on your mind?"
                        multiline
                        rows={5}
                        variant='outlined'
                    />
                    <Stack direction='row' gap={1} mt={2}>
                        <AddReactionRounded color='primary' />
                        <AddPhotoAlternateRounded color='primary' />
                        <VideoCallRounded color='primary' />
                        <GroupAddRounded color='primary' />
                    </Stack>
                    <Stack direction='row' gap={1} mt={4} justifyContent={'flex-end'}>
                        <Button variant='outlined' onClick={() => setModelOpen(false)} >Cancel</Button>
                        <Button variant='contained' onClick={() => setModelOpen(false)}>Post</Button>
                    </Stack>
                </Box>
            </ModalStyled >
        </>
    )
}
