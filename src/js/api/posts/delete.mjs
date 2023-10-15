// import { API_SOCIAL_URL } from "../constants.mjs";

// import { authFetch } from "../authFetch.mjs";
// import * as postMethods from "../posts";

// const action = "/posts";
// const method = "delete";

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");


// export async function removePost(id) {

//   if(!id) {
//     throw new Error ("Delete requires a postID");
//   }

//   const deletePostURL = `${API_SOCIAL_URL}${action}/${id}`;

//   const response = await authFetch(deletePostURL, {
//     method,
//   })

//   return await response.json()
// }


