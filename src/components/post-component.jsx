import { BookmarkAdd, BookmarkAddOutlined, Favorite, FavoriteBorder, MoreVert, ShareOutlined, ShareRounded } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import React from 'react';
import { theme } from '../theme';
import beach from '../assets/images/beach.jpg';
import cafe from '../assets/images/cafe.jpg';
import dining from '../assets/images/dining.jpg';
import family from '../assets/images/family.jpg';
import home from '../assets/images/home.jpg';
import meeting from '../assets/images/meeting.jpg';
export const PostComponent = () => {
    return (
        <>
            <Card sx={{ marginBottom: 5, boxShadow: 12 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: theme.palette.secondary.main }} aria-label="Zn">Zn</Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="New Drink!"
                    subheader="July 14, 5016"
                />
                <CardMedia
                    component="img"
                    image={cafe}
                    alt="Cafe Zip"
                    sx={{ aspectRatio: '16/12' }}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Cafe Zip is now serving the new Zipaccino! We are so excited to finally share this new drink with you all. It is a mix of our famous Zapaccino and our new Zipaccino. We hope you enjoy it!
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
            <Card sx={{ marginBottom: 5, boxShadow: 12 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: theme.palette.secondary.main }} aria-label="Yb">Yb</Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Amazing Service"
                    subheader="July 14, 5016"
                />
                <CardMedia
                    component="img"
                    image={dining}
                    alt="Yb vacation"
                    sx={{ aspectRatio: '16/12' }}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Stubled upon this place while on vacation. The service was amazing and the food was even better. I would highly recommend this place to anyone looking for a great meal.
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
            <Card sx={{ marginBottom: 5, boxShadow: 12 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: theme.palette.secondary.main }} aria-label="Xc">Xc</Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Family Renunion"
                    subheader="July 14, 5016"
                />
                <CardMedia
                    component="img"
                    image={family}
                    alt="Family Reunion"
                    sx={{ aspectRatio: '16/12' }}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Cinz Family Reunion was a success! We had a great time and the food was amazing. Cant wait to come back next year!
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
            <Card sx={{ marginBottom: 5, boxShadow: 12 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: theme.palette.secondary.main }} aria-label="Rz">Rz</Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Some R&R"
                    subheader="July 14, 5016"
                />
                <CardMedia
                    component="img"
                    image={home}
                    alt="Home Sweet Home"
                    sx={{ aspectRatio: '16/12' }}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Today just feels like a perfect day to relax and enjoy the weather. I think I will head over to Cafe Zip and grab a drink and a bite to eat.
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
            <Card sx={{ marginBottom: 5, boxShadow: 12 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: theme.palette.secondary.main }} aria-label="Qz">Qz</Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Big Meeting"
                    subheader="July 14, 5016"
                />
                <CardMedia
                    component="img"
                    image={meeting}
                    alt="Big Meeting"
                    sx={{ aspectRatio: '16/12' }}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Things are finally comming together for our big merger. I think I will take the team out for a nice lunch to celebrate.
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
            <Card sx={{ marginBottom: 5, boxShadow: 12 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: theme.palette.secondary.main }} aria-label="Ty">Ty</Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Vaction Time!"
                    subheader="July 14, 5016"
                />
                <CardMedia
                    component="img"
                    image={beach}
                    alt="Vacation Time"
                    sx={{ aspectRatio: '16/12' }}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Today is the day! I am finally on vacation. The beach is so beautiful and the weather is perfect.
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
        </>
    )
}
