import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AvatarImage from '../../Nav/Avatar';
import {useSelector,useDispatch} from 'react-redux'
import { addCommentFun, fetchUserPostFun } from '../../../../actions/postsActions';
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
const[commentVal,setCommentValu]=React.useState({comment:""})
    const initialExpandedState = posts.reduce((acc, post) => {
        acc[post._id] = false;
        return acc;
      }, {});
      
    const dispatch=useDispatch()
    const userId=useSelector((state)=>state.post.user._id)
  const [expanded, setExpanded] = React.useState(initialExpandedState);
  const userFullname=useSelector((state)=>state.post.user);
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
  
  const handleExpandClick = (postId) => {
    setExpanded((prevExpanded) => ({
        ...prevExpanded,
        [postId]: !prevExpanded[postId],
      }));
};
  const elementStyle = {
    backgroundColor: 'rgba(205, 209, 228, 0.5)',
    borderRadius: '5px',
  };
function handleLikesFun(e,postId){
    console.log('like clicked',postId)
}
function handelEnter(e,postId){
    console.log('comment',commentVal)
    if(e.key==='Enter'){
        
if(addCommentFun(postId,commentVal,{userId},dispatch)){
    window.alert('comment addedd successfuly')
commentVal.comment="";

}
    }
}
  return (
  
  
  <div> 

    {posts.map((post)=>(

<Card class=' border border-2 ' style={{margin:'20px', backgroundColor: 'rgba(205, 209, 228, 0.5)',
    borderRadius: '5px'}} >
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
      expand={expanded[post._id]}
      onClick={() => handleExpandClick(post._id)}
      aria-expanded={expanded[post._id]}
      aria-label="show Comments"
    >
    <ExpandMoreIcon />
  </ExpandMore>
</CardActions>
<Collapse in={expanded[post._id]} timeout="auto" unmountOnExit>

  <CardContent>
    

  {post.comments.length > 0 && (
    <div class="p-3  rounded bg-light bg-opacity-10 border border-primary border-start-0 rounded-end">

<Typography paragraph class="h7 pb-2 mb-4  border-bottom border-primary">Comments:</Typography>
          <Typography paragraph>
            {post.comments.map((comment) => (
              <p key={comment._id}>{comment.comment}</p>
            ))}
          </Typography>

        </div>
      )}

<TextField fullWidth label="Add comment" id="fullWidth" value={commentVal.comment} style={{marginTop:'10px'}} onKeyPress={(e)=>handelEnter(e,post._id)} onChange={(e)=>setCommentValu((prev)=>({...prev,comment:e.target.value}))}/>
  </CardContent>
</Collapse>
</Card>
    ))}
   
   </div>
  );
}