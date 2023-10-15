import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const userName = "/Margarita";
const userPostURL = "/posts";

export async function getPostsUser() {
  const getPostsUserURL = `${API_SOCIAL_URL}${action}${userName}${userPostURL}`;

  const response = await authFetch(getPostsUserURL)

  return await response.json()
} 

// export async function getPostUser(id) {
//   // if(!id) {
//   //   throw new Error ("Get requires a postID");
//   // }

//   const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

//   const response = await authFetch(getPostURL)

//   return await response.json()
// } 