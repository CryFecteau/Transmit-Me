import { BookmarkAdd, BookmarkAddOutlined, Favorite, FavoriteBorder, MoreVert, ShareOutlined, ShareRounded } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

export const PostComponent = () => {
    return (
        <Card sx={{ marginBottom: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">R</Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="10%"
                image="https://picsum.photos/500"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook together with
                    your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="share">
                    <Checkbox icon={<ShareOutlined />} checkedIcon={<ShareRounded />} />
                </IconButton>
                <IconButton aria-label="bookmark">
                    <Checkbox icon={<BookmarkAddOutlined />} checkedIcon={<BookmarkAdd />} />
                </IconButton>
                <IconButton aria-label="like">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'pink' }} />} />
                </IconButton>
            </CardActions>
        </Card>
    )
}
