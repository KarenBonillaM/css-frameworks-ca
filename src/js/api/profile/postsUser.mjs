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
