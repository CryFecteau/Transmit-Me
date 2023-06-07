import { AccountBoxRounded, ArticleRounded, CottageRounded, Diversity1Rounded, Diversity2Rounded, NightsStayRounded, SettingsSuggestRounded, StoreRounded } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Switch from '@mui/material/Switch';
import React from 'react';

export const SideBarComponent = () => {
    return (
        <Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box sx={{ position: 'fixed' }}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <CottageRounded />
                            </ListItemIcon>
                            <ListItemText primary='Homepage' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <AccountBoxRounded />
                            </ListItemIcon>
                            <ListItemText primary='Profile' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <Diversity1Rounded />
                            </ListItemIcon>
                            <ListItemText primary='Friends' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <ArticleRounded />
                            </ListItemIcon>
                            <ListItemText primary='Pages' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <Diversity2Rounded />
                            </ListItemIcon>
                            <ListItemText primary='Communities' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <StoreRounded />
                            </ListItemIcon>
                            <ListItemText primary='Marketplace' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <SettingsSuggestRounded />
                            </ListItemIcon>
                            <ListItemText primary='Settings' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href='#home'>
                            <ListItemIcon>
                                <NightsStayRounded />
                            </ListItemIcon>
                            <Switch sx={{ right: 10 }} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}
