import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AvatarImage from '../../Nav/Avatar';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import {useSelector} from 'react-redux'
import { RestfulRequestFun } from '../../../../utils/Axios';
import { fetchUserPostFun } from '../../../../actions/postsActions';
import {useDispatch} from 'react-redux'
export function PostCreationModal(props) {
  const dispatch=useDispatch()
    const userId=useSelector((state)=>state.post.user._id)
    const [postCreationForm,setPostCreationForm]=useState({
        postContent:"",
        userId:userId
    });

    function  handelSharePost(e){
        e.preventDefault()
      RestfulRequestFun.createPostRequest(postCreationForm).then((data)=>{
    if(data){
      window.alert('posted!')
      fetchUserPostFun(userId,dispatch)
      postCreationForm.postContent="";
      props.onHide()

    }
      })
        

    }
    function setValueTextArea(e){
        setPostCreationForm((prev)=>({...prev,postContent:e.target.value}))

    }
    return (
      <Modal
        show={props.show}
        onHide={props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header >
          <Modal.Title id="contained-modal-title-vcenter">
            <div class='d-flex ' style={{fontSize:"14px",position:'relative', left:'220px'}}>
              <p style={{margin:'20px'}}>{props.userFullname.userName.toUpperCase()}</p>

                <AvatarImage userFullname={props.userFullname} />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Share your thought' value={postCreationForm.postContent} onChange={(e)=>setValueTextArea(e)}></textarea>

         
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handelSharePost}  >Share</Button>

        </Modal.Footer>
      </Modal>
    );
  }
  