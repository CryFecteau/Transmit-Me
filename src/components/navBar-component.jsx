import { Mail, Notifications, SettingsInputAntennaRounded } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import { theme } from '../theme';

const ToolBarStyled = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const SearchBarStyled = styled('div')({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
});

const IconsStyled = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
        display: 'flex',
    }
}));

const UserBoxStyled = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    }
});
export const NavBarComponent = () => {
    const [profileOpen, setProfileOpen] = React.useState(false);

    return (
        <AppBar position='sticky'>
            <ToolBarStyled>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Transmit Me</Typography>
                <SettingsInputAntennaRounded sx={{ display: { xs: 'block', sm: 'none' } }} />
                <SearchBarStyled>
                    <InputBase placeholder='Search...' />
                </SearchBarStyled>
                <IconsStyled>
                    <Badge badgeContent={4} color='error'>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color='error'>
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} alt='Remy Sharp' onClick={e => setProfileOpen(true)} src='https://mui.com/static/images/avatar/1.jpg' />
                </IconsStyled>
                <UserBoxStyled>
                    <Avatar sx={{ width: 30, height: 30 }} alt='Remy Sharp' onClick={e => setProfileOpen(true)} src='https://mui.com/static/images/avatar/1.jpg' />
                    <Typography variant='h6'>Remy Sharp</Typography>
                </UserBoxStyled>
            </ToolBarStyled>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={profileOpen}
                onClose={e => setProfileOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}
