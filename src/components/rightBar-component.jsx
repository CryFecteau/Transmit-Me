import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography, List, ListItem, ListItemAvatar, ListItemText, Divider, } from '@mui/material'
import React from 'react'

export const RightBarComponent = () => {
    return (
        <Box flex={2} p={4} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position='fixed'>
                <Typography variant='h6'>Online Friends</Typography>
                <AvatarGroup max={5} sx={{ m: 2, justifyContent: 'start' }}>
                    <Avatar alt='Remy Sharp' src='https://picsum.photos/50' />
                    <Avatar alt='Remy Sharp' src='https://picsum.photos/50' />
                    <Avatar alt='Remy Sharp' src='https://picsum.photos/50' />
                    <Avatar alt='Remy Sharp' src='https://picsum.photos/50' />
                    <Avatar alt='Remy Sharp' src='https://picsum.photos/50' />
                    <Avatar alt='Remy Sharp' src='https://picsum.photos/50' />
                </AvatarGroup>
                <Typography variant='h6'>Latest Photos</Typography>
                <ImageList sx={{ mt: 2, width: '100%', maxWidth: 360 }} cols={3} rowHeight={120} gap={5}>
                    <ImageListItem>
                        <img src='https://picsum.photos/200' alt='' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://picsum.photos/200' alt='' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src='https://picsum.photos/200' alt='' />
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' sx={{ mt: 2, }}>Latest Topics</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}
