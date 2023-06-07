import { Box } from '@mui/material'
import React from 'react'
import { PostComponent } from './post-component'

export const FeedComponent = () => {
    return (
        <Box flex={4} p={2}>
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
            <PostComponent />
        </Box>
    )
}
