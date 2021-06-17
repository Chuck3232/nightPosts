import React from 'react';
import { Grid, Container } from '@material-ui/core';


import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container} >
            <Grid >
                Karol Pikora Pwi
            </Grid>
        </Container>
    )

}
export default Footer;