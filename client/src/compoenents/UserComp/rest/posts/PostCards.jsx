import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AvatarImage from '../../Nav/Avatar';
import {useSelector,useDispatch} from 'react-redux'
import { fetchUserPostFun } from '../../../../actions/postsActions';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCards() {
    const posts=useSelector((state)=>state.post.posts)
    const dispatch=useDispatch()
    const userId=useSelector((state)=>state.post.user._id)
  const [expanded, setExpanded] = React.useState(false);
  const userFullname=useSelector((state)=>state.post.user);
  console.log('posts',posts)
  React.useEffect(()=>{
    if(userId){
   fetchUserPostFun(userId,dispatch);

    }
},[dispatch,userId])
const formattedDate =(date)=> new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const elementStyle = {
    backgroundColor: 'rgba(205, 209, 228, 0.5)',
    padding: '10px',
    borderRadius: '5px',
  };
function handleLikesFun(e,postId){
    console.log('like clicked',postId)
}
  return (
    <div>

    {posts.map((post)=>(

<Card class='m-5 border border-info-subtle ' style={elementStyle} >
<CardHeader
  avatar={
   <AvatarImage userFullname={userFullname}/>
  }
  action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title={userFullname.userName}
  subheader={formattedDate(post.postTime)}
/>

<CardContent>
  <Typography variant="body2" color="text.secondary">
{post.content}
  </Typography>
</CardContent>
<CardActions disableSpacing>
  <IconButton aria-label="Likes">
    <FavoriteIcon onClick={(e)=>handleLikesFun(e,post._id)} />
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
  <ExpandMore
    expand={expanded}
    onClick={handleExpandClick}
    aria-expanded={expanded}
    aria-label="show Comments"
  >
    <ExpandMoreIcon />
  </ExpandMore>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
    
    
  {post.comments.length > 0 && (
        <div>
          <Typography paragraph>Comments:</Typography>
          <Typography paragraph>
            {post.comments.map((comment) => (
              <p key={comment._id}>{comment.comment}</p>
            ))}
          </Typography>
        </div>
      )}
  
  </CardContent>
</Collapse>
</Card>
    ))}
   
   </div>
  );
}