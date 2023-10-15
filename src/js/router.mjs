import * as listeners from "./handlers/index.mjs";

export default function router() {
  const path = location.pathname;

  switch (path) {
    case '/profile/login/index.html':
      listeners.setLoginFormListener()
      return;
    case '/profile/register/':
      listeners.setRegisterFormListener()
      return;
    case '/posts/index.html':
      listeners.setCreatePostFormListener()
      return;
    case '/post/edit/index.html':
      listeners.setUpdatePostListener()
      return;
    case '/profile/edit/index.html':
      listeners.setUpdateProfileListener()
      return;
    case '/profile/index.html':
      listeners.setPostsUserTemplateListener()
      return;
}
}

