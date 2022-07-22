import { useParams } from "react-router-dom";
import '../Article/Article.css'
import userIcon from '../../Assets/Icons/user.png'
import calendarIcon from '../../Assets/Icons/calendar.png'
import reactImage from '../../Assets/Images/react-logo.png'
import { useEffect, useState } from "react";

function Article(props) {
    let { slug } = useParams()
    const [data, setData] = useState([])

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
            console.log("Data: ", data)
            setData(data)
        })
        .catch(err => alert("Error: ", err))
    }

    const BodyHTML = () => {
      return {__html: data.body}
    }

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
            <div className="CommentDiv">
              <div className="CommentImgDiv">
                <img src={reactImage} className="CommentImg" alt="Profile photo" />
              </div>
              <div className="CommentInfoDiv">
                <div className="CommentInfo"> 
                  <p>Ksawery Tkaczyk</p>
                  <p>September 11, 2022</p>
                </div>
                <div className="Comment">
                  <p>Lunc ultrices nisl luctus finibus blandit. Ut dolor augue, aliquam sit amet velit et, laoreet commodo felis. Curabitur at placerat tellus. Mauris sit amet justo a libero pulvinar accumsan. Donec rutrum imperdiet ex a pharetra. </p>
                </div>
              </div>
            </div>
            <div className="CommentDiv">
              <div className="CommentImgDiv">
                <img src={reactImage} className="CommentImg" alt="Profile photo" />
              </div>
              <div className="CommentInfoDiv">
                <div className="CommentInfo"> 
                  <p>Ksawery Tkaczyk</p>
                  <p>September 11, 2022</p>
                </div>
                <div className="Comment">
                  <p>Lunc ultrices nisl luctus finibus blandit. Ut dolor augue, aliquam sit amet velit et, laoreet commodo felis. Curabitur at placerat tellus. Mauris sit amet justo a libero pulvinar accumsan. Donec rutrum imperdiet ex a pharetra. </p>
                </div>
              </div>
            </div>
            <div className="CommentDiv">
              <div className="CommentImgDiv">
                <img src={reactImage} className="CommentImg" alt="Profile photo" />
              </div>
              <div className="CommentInfoDiv">
                <div className="CommentInfo"> 
                  <p>Ksawery Tkaczyk</p>
                  <p>September 11, 2022</p>
                </div>
                <div className="Comment">
                  <p>Lunc ultrices nisl luctus finibus blandit. Ut dolor augue, aliquam sit amet velit et, laoreet commodo felis. Curabitur at placerat tellus. Mauris sit amet justo a libero pulvinar accumsan. Donec rutrum imperdiet ex a pharetra. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="CreateCommentContainer">
            <div className="CreateCommentheader">
              <h1>Leave a comment</h1>
            </div>
            <form className="CreateCommentForm">
              <input type="text" className="CreateCommentInp" id="CommentName" placeholder="Your Name*" />
              <input type="text" className="CreateCommentInp" id="CommentEmail" placeholder="Your Email*" />
              <textarea rows="4" cols="50" placeholder='Message*' className='CreateCommentArea' id='CommentMessage'></textarea>
              <button className='CommentBtn' id='CommentBtn' type='submit'>Submit Comment</button>
            </form>
          </div>
      </div>
    );
  }
  
export default Article;