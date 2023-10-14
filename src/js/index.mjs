import router from "./router.mjs";

router();

// import * as listeners from "./handlers/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";

// const path = location.pathname;

// if (path === '/profile/login/index.html') {
//   listeners.setLoginFormListener()
// } else if (path === '/profile/register/index.html') {
//   listeners.setRegisterFormListener()
// } else if (path === '/post/create/index.html') {
//   listeners.setCreatePostFormListener()
// } else if (path === '/post/edit/index.html') {
//   listeners.setUpdatePostListener()
// } else if (path === '/profile/edit/index.html') { listeners.setUpdateProfileListener()
// }

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

