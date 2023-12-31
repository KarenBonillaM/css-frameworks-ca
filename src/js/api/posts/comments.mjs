import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
// import { getPost } from "./read.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");

export async function commentPost(postId, commentBody) {

  if(!postId) {
    console.error("postId is null or undefined");
    return;
  }

  const endPoint = "/posts/";
  const method = "POST";
  const action = "/comment";
  const commentsURL = `${API_SOCIAL_URL}${endPoint}${postId}${action}`;

  const postData = {
    body: commentBody
  }

  try {
    const response = await authFetch(commentsURL, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    })

    if(!response.ok) {
      throw new Error(`Error when comment on post: ${response.status}` )
    }
    

    const commentData = await response.json();

    alert("Comment has been created successfully")

    console.log(commentData);
    return commentData;
    // return await response.json()
  } catch(error) {
    console.error("Error when commenting on post", error.message);
    throw error;
  }
}

// commentPost(9832, "hola")

export function setCommentOnPostFormListener() {
  const commentForm = document.querySelector(".form-write-a-comment");

  if(commentForm) {
    commentForm.addEventListener("submit", async event => {
      event.preventDefault();

      try {
        const form = event.target;
        const formData = new FormData(form);
        const comment = Object.fromEntries(formData.entries());
         
          //Send it to the API
          commentPost(postId, comment); 
      }
      
    //Update the URL without triggering a page reload
       catch(error) {
        console.error("Error creating new comment", error);
      }
    }) 
  }
}

// const commentForm = document.querySelector(".form-write-a-comment");
// const commentInput = document.getElementById("comment-body");


setCommentOnPostFormListener();

// function createNewComment(newComment) {
   
//   const newCommentBody = document.createElement("p");
//   newCommentBody.classList.add("new-comment");
//   newCommentBody.innerText = newComment.body;

//   console.log(newCommentBody)
  
// }