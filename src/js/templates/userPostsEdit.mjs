import * as templatesUser from "./userPostEdit.mjs";
import { getPost } from "../api/posts/read.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

 async function testPostUserTemplate() {
  const post = await getPost(id);

  console.log(post)
  const container = document.querySelector("#postUser");
  templatesUser.renderPostUserTemplate(post, container);
}

testPostUserTemplate()