import { useParams, useNavigate } from "react-router-dom";
import '../Article/Article.css'
import userIcon from '../../Assets/Icons/user.png'
import calendarIcon from '../../Assets/Icons/calendar.png'
import { useEffect, useState } from "react";
import { Formik } from 'formik';
import * as yup from 'yup';
import userAvatar from '../../Assets/Icons/avatar.jpg'

function Article(props) {
    let { slug } = useParams()
    const [data, setData] = useState([])
    const [comments, setComments] = useState([])
    const [show, setShow] = useState(true)
    const navigate  = useNavigate()

    useEffect(() => {
      ArticleData()
    }, [])

    function getCookie(name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    }

    const ArticleData = () => {
        const csrftoken = getCookie('csrftoken');
        fetch(`http://127.0.0.1:8000/api/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
          }
        })
        .then(response => response.json())
        .then(data => {
            if(data['response'] == "This article does not exists"){
              navigate("/error", {replace: true})
            }
            setData(data)
            ShowComments(data.id)
        })
        .catch(err => alert("Error: ", err.message))
    }

    const BodyHTML = () => {
      return {__html: data.body}
    }

    const ShowComments = (id) => {
      const csrftoken = getCookie('csrftoken');
      fetch(`http://127.0.0.1:8000/api/comments/${id}/all`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        }
      })
      .then(response => response.json())
      .then(data => {
        setComments(data)
      })
      .catch(err => {
        setShow(false)
      })
    }

    let schema = yup.object().shape({
      name: yup.string().required("Name is required").min(3, "Name is too short").max(30, "Name is too long"),
      email: yup.string().email().required("Email is required"),
      message: yup.string().required("Message is required").min(1, "Message is too short")
    })

    return (
      <div className="ArticleContainer">
          <div className="ArticleHeader">
            <h1>{data.title}</h1>
          </div>
          <div className="ArticleInfoDiv">
            <div className="ArticleInfo">
              <img src={userIcon} className="ArticleIcon" alt="User" />
              {/* <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a> */}
              <p>By {data.user}</p>
            </div>
            <div className="ArticleInfo">
              <img src={calendarIcon} className="ArticleIcon" alt="User" />
              {/* <a href="https://www.flaticon.com/free-icons/calendar" title="calendar icons">Calendar icons created by Freepik - Flaticon</a> */}
              <p>{data.created}</p>
            </div>
          </div>
          <div className="ArticleBody" dangerouslySetInnerHTML={BodyHTML()}></div>
          <div className="CommentsContainer">
            <h1>Comments</h1> 
            {show && comments.map((item) => (
              <div className="CommentDiv">
                <div className="CommentImgDiv">
                  <img src={userAvatar} className="CommentImg" alt="Image by rawpixel.com" />
                  {/* <a href="https://www.freepik.com/free-vector/illustration-user-avatar-icon_2606572.htm#query=user%20avatar&position=2&from_view=search&track=ais">Image by rawpixel.com</a> on Freepik */}
                </div>
                <div className="CommentInfoDiv">
                  <div className="CommentInfo"> 
                    <p>{item.name}</p>
                    <p>{item.created}</p>
                  </div>
                  <div className="Comment">
                    <p>{item.message}</p>
                  </div>
                </div>
              </div>
            ))}        
          </div>
          <div className="CreateCommentContainer">
            <div className="CreateCommentheader">
              <h1>Leave a comment</h1>
            </div>
            {data && <Formik
              initialValues={{name: '', email: '', message: ''}}
              validationSchema={schema}
              onSubmit={(values) => {
                const csrftoken = getCookie('csrftoken');
                fetch('http://127.0.0.1:8000/api/comments/create', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'X-CSRFToken': csrftoken,
                      'Accept': 'application/json'
                  },
                  body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    message: values.message,
                    BlogSlug: data.id,
                  }) 
                })
                .then(response => response.json())
                .then(data => {
                  alert("Comment added succesfully! (refresh page)")
                })
                .catch(error => {
                  alert("Error while adding comment")
                })
              }}
            >
              {(props) => (
                <form onSubmit={props.handleSubmit} className="CreateCommentForm">            
                  <input
                    placeholder="Your Name*"
                    value={props.values.name}
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    type="text" 
                    className="CreateCommentInp"
                    name="name"
                    autoComplete="off"
                  />               
                  <input
                    placeholder="Your Email*"
                    value={props.values.email}
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    type="text" 
                    className="CreateCommentInp"
                    name="email"
                    autoComplete="off"
                  />
                  <textarea
                    placeholder="Message*"
                    value={props.values.message}
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    type="text" 
                    className="CreateCommentArea"
                    name="message"
                    autoComplete="off"
                  ></textarea>
                  <button className='CommentBtn' id='CommentBtn' type='submit'>Submit Comment</button>
                  {props.errors.name && props.touched.name && props.errors.name}
                  <br/>
                  {props.errors.email && props.touched.email && props.errors.email}
                  <br/>
                  {props.errors.message && props.touched.message && props.errors.message}
                </form>
              )}
            </Formik>}
          </div>
      </div>
    );
  }
  
export default Article;