import * as React from 'react';
import { Card, CardContent, Typography, Box, Stack } from '@mui/material/';




const IndexCardHorizon = ({ icon, title, subtitle, description }) => {
    return (
        <Card sx={styles.cardContainer}>
            <Box sx={styles.imageContainer}>
                <img height='45' width='45' src={`/icons/${icon}.svg`}></img>
            </Box>

            <CardContent>
                    <Typography gutterBottom color='primary' variant="h6" component="div">
                        {title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {subtitle}
                    </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default IndexCardHorizon

const styles = {
    imageContainer: {
        mt: 5,
        borderRadius: 80,
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'top',
    },
    cardContainer: {
        background: 'white',
        display: 'flex',
        flex: 1,
        borderRadius: '20px',
        boxShadow: '0 3px 7px #D4E4FF',
        p: 1,
        backgroundColor: "#E4EEFF"
    },
};