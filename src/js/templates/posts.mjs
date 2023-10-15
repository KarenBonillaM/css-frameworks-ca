import * as templates from "./index.mjs";
import * as postMethods from "../api/posts/index.mjs";

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const container = document.querySelector("#posts");
  templates.renderPostTemplates(posts, container);
}

testTemplate()

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

async function testPostTemplate() {
  const post = await postMethods.getPost(id);
  const container = document.querySelector("#post");
  templates.renderPostTemplate(post, container);
}

testPostTemplate()


