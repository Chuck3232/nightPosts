import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import LanguageIcon from '@material-ui/icons/Language';
import i18next from 'i18next';
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import homeIcon from './images/home-icon.png';
import Footer from './components/Footer/Footer';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={homeIcon} alt="cp77" heigth="60" />
                <Typography className={classes.heading} variant="h3" align="center">Night-Posts</Typography>
                <LanguageIcon/>
                <Button className={classes.lngBtn} size="small" onClick={()=> i18next.changeLanguage('pl') } >PL</Button>
                <Button className={classes.lngBtn} size="small" onClick={()=> i18next.changeLanguage('en') } >En</Button>
            </AppBar>
            <Grow in>
                <Container >
                    <Grid  container  justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid  item xs={12} sm={8}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            <Footer/>           
        </Container>
        
         
    );
}

export default App;