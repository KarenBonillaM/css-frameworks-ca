import * as templatesUser from "./userPostEdit.mjs";
import { getPostsUser } from "../api/profile/postsUser.mjs";

// async function testPostsUserTemplate() {
//   const posts = await getPostsUser();
//   const container = document.querySelector(".postsUserContainer");
//   templatesUser.renderPostsUserTemplates(posts, container);
// }

// testPostsUserTemplate()

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");


console.log(id)
 async function testPostUserTemplate() {
  const post = await getPostsUser(id);
  console.log(post)
  const container = document.querySelector("#postUser");
  templatesUser.renderPostUserTemplate(post, container);
}

testPostUserTemplate()