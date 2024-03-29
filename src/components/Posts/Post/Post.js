import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { animateScroll as scroll } from 'react-scroll'
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const{t}=useTranslation();



    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button          
                   onClick={function(){ setCurrentId(post._id);scroll.scrollToTop();} }>
                    {t('Edit')}
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="secondary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    {t('Like')} &nbsp;
                    {post.likeCount}
                </Button>
                <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    {t('Delete')}
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;