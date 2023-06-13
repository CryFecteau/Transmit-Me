import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography, List, ListItem, ListItemAvatar, ListItemText, Divider, } from '@mui/material';
import React from 'react';
import desk from '../assets/images/desk.jpg';
import group from '../assets/images/group.jpg';
import eating from '../assets/images/eating.jpg';
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';
import p6 from '../assets/images/p6.jpg';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { theme } from '../theme';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
export const RightBarComponent = () => {
    return (
        <Box flex={2} p={4} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box position='fixed'>
                <Typography variant='h6'>Online Friends</Typography>
                <AvatarGroup max={5} sx={{ m: 2, justifyContent: 'start' }}>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt='Robo Profile Image' src={p1} />
                    </StyledBadge>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt='Robo Profile Image' src={p2} />
                    </StyledBadge>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt='Robo Profile Image' src={p3} />
                    </StyledBadge>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt='Robo Profile Image' src={p4} />
                    </StyledBadge>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt='Robo Profile Image' src={p5} />
                    </StyledBadge>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt='Robo Profile Image' src={p6} />
                    </StyledBadge>
                </AvatarGroup>
                <Typography variant='h6'>Latest Photos</Typography>
                <ImageList sx={{ mt: 2, width: '100%', maxWidth: 360 }} cols={3} rowHeight={120} gap={5}>
                    <ImageListItem>
                        <img src={desk} alt='' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={group} alt='' />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={eating} alt='' />
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' sx={{ mt: 2, }}>Latest Group Topics</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: theme.palette.secondary.main }} aria-label="Zn">Zn</Avatar>
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
                                        Ix C.
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: theme.palette.secondary.main }} aria-label="Xz">Xz</Avatar>
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
                                        to Scoz, Ax, Jia
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: theme.palette.secondary.main }} aria-label="Xr">Xr</Avatar>
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
                                        Sinq A.
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
