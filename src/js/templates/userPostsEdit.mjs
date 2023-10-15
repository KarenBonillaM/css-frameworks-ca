import * as templatesUser from "./userPostEdit.mjs";
import { getPost } from "../api/posts/read.mjs";

// async function testPostsUserTemplate() {
//   const posts = await getPostsUser();
//   const container = document.querySelector(".postsUserContainer");
//   templatesUser.renderPostsUserTemplates(posts, container);
// }

// testPostsUserTemplate()

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

 async function testPostUserTemplate() {
  const post = await getPost(id);
  const container = document.querySelector("#postUser");
  templatesUser.renderPostUserTemplate(post, container);
}

testPostUserTemplate()