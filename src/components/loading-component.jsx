import { Box, Paper, Button } from '@mui/material';
import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';

const style = {
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgb(25,118,210)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const style2 = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '50vw',
    height: 'auto',
    padding: '2rem',
};

const style3 = {
    padding: '.5rem',
};

export const LoadingComponent = () => {
    const [open, setOpen] = React.useState(true);
    const [progress, setProgress] = React.useState(0);
    const [isLoading, setIsLoading] = React.useState(true);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(timer);
                    setIsLoading(false);
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 250);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Paper sx={style2} elevation={24}>
                        <Box sx={style3}>
                            <Typography variant="h5" component="div">
                                Welcome to Transmite Me!
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                React/MUI Application
                            </Typography>
                            <Typography sx={{ marginTop: '1rem', marginBottom: '.5rem' }} variant="body2">
                                This is a mock social media site created to showcase React and Material UI. Please note that this is a purely design-focused demonstration, and the application has limited functional features. Thank you for visting!
                            </Typography>
                            <Typography sx={{ marginBottom: '1.5rem', fontSize: 14 }} color="text.secondary">
                                - Crystal Fecteau
                            </Typography>
                            <LinearProgress color="primary" variant="determinate" value={progress} />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button id='enterBtn' color="primary" onClick={handleClose} variant="contained" disabled={isLoading}>{isLoading ? 'Loading...' : 'Enter'}</Button>
                        </Box>
                    </Paper>
                </Box>
            </Modal >
        </div >
    )
}
