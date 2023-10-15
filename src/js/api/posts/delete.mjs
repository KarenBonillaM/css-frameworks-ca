import { API_SOCIAL_URL } from "../constants.mjs";

import { authFetch } from "../authFetch.mjs";

const deleteButton = document.querySelector("#removePostButton");

console.log()

const action = "/posts";
const method = "delete";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const deleteURL = `${API_SOCIAL_URL}${action}/${id}`;

export async function removePost() {
  // event.preventDefault;

  if(!id) {
    throw new Error ("Delete requires a postID");
  }

  const response = await authFetch(deleteURL, {
    method,
  })

  return await response.json()
}


deleteButton.addEventListener("click", removePost);

