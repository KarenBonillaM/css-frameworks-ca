import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const action = "/posts";
const method = "delete";

const bin = document.querySelector(".trash-can")

export async function removePost(id) {
  if(!id) {
    throw new Error ("Delete requires a postID");
  }

  const deletePostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(deletePostURL, {
    method,
  })

  return await response.json()
} 

bin.addEventListener("onclick", removePost(id));