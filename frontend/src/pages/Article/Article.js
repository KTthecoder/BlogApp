import { useParams } from "react-router-dom";
import '../Article/Article.css'
import userIcon from '../../Assets/Icons/user.png'
import calendarIcon from '../../Assets/Icons/calendar.png'
import reactImage from '../../Assets/Images/react-logo.png'
import { useEffect, useState } from "react";
import { Form, Formik } from 'formik';
import * as yup from 'yup';

function Article(props) {
    let { slug } = useParams()
    const [data, setData] = useState([])
    const [comments, setComments] = useState([])
    const [show, setShow] = useState(true)

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
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
          }
        })
        .then(response => response.json())
        .then(data => {
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
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
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
          <div className="ArticleBody" dangerouslySetInnerHTML={BodyHTML()}>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend rutrum purus a elementum. Proin ac orci quam. Donec ullamcorper tempus felis in ultricies. Cras mattis condimentum ante, sit amet mollis dolor. Proin in euismod nisl. Quisque vel arcu bibendum, luctus tellus eu, ultricies elit. Mauris volutpat eros eros, sed lobortis est aliquam a. Fusce nulla erat, elementum ac diam sit amet, euismod fringilla quam. Donec lacus metus, porttitor vitae pellentesque sed, malesuada in nisi.</p>
            <img src={reactImage} alt="react icon" className="ArticleImage" />
            <p>Suspendisse dignissim mattis mi. Integer eget mi vel neque pretium auctor eget et ex. Phasellus eleifend orci at leo convallis auctor. Cras fringilla nisi felis, eu gravida magna iaculis ac. Quisque vel mauris id ipsum vehicula mollis sit amet vitae arcu. Praesent vel augue id ex porta feugiat et et justo. Fusce tincidunt diam at arcu convallis tempus. Proin id hendrerit felis.</p>
            <h2>How to create React Native project using Expo</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend rutrum purus a elementum. Proin ac orci quam. Donec ullamcorper tempus felis in ultricies. Cras mattis condimentum ante, sit amet mollis dolor. Proin in euismod nisl. Quisque vel arcu bibendum, luctus tellus eu, ultricies elit. Mauris volutpat eros eros, sed lobortis est aliquam a. Fusce nulla erat, elementum ac diam sit amet, euismod fringilla quam. Donec lacus metus, porttitor vitae pellentesque sed, malesuada in nisi.</p>
            <p>Suspendisse dignissim mattis mi. Integer eget mi vel neque pretium auctor eget et ex. Phasellus eleifend orci at leo convallis auctor. Cras fringilla nisi felis, eu gravida magna iaculis ac. Quisque vel mauris id ipsum vehicula mollis sit amet vitae arcu. Praesent vel augue id ex porta feugiat et et justo. Fusce tincidunt diam at arcu convallis tempus. Proin id hendrerit felis.</p>
            <img src={reactImage} alt="react icon" className="ArticleImage" />
            <h2>How to create React Native project using Expo</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend rutrum purus a elementum. Proin ac orci quam. Donec ullamcorper tempus felis in ultricies. Cras mattis condimentum ante, sit amet mollis dolor. Proin in euismod nisl. Quisque vel arcu bibendum, luctus tellus eu, ultricies elit. Mauris volutpat eros eros, sed lobortis est aliquam a. Fusce nulla erat, elementum ac diam sit amet, euismod fringilla quam. Donec lacus metus, porttitor vitae pellentesque sed, malesuada in nisi.</p>
            <p>Suspendisse dignissim mattis mi. Integer eget mi vel neque pretium auctor eget et ex. Phasellus eleifend orci at leo convallis auctor. Cras fringilla nisi felis, eu gravida magna iaculis ac. Quisque vel mauris id ipsum vehicula mollis sit amet vitae arcu. Praesent vel augue id ex porta feugiat et et justo. Fusce tincidunt diam at arcu convallis tempus. Proin id hendrerit felis.</p> */}
          </div>
          <div className="CommentsContainer">
            <h1>Comments</h1> 
            {show && comments.map((item) => (
              <div className="CommentDiv">
                <div className="CommentImgDiv">
                  <img src={reactImage} className="CommentImg" alt="Profile photo" />
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
                  />               
                  <input
                    placeholder="Your Email*"
                    value={props.values.email}
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                    type="text" 
                    className="CreateCommentInp"
                    name="email"
                  />
                  <textarea
                     placeholder="Message*"
                     value={props.values.message}
                     onBlur={props.handleBlur}
                     onChange={props.handleChange}
                     type="text" 
                     className="CreateCommentArea"
                     name="message"
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