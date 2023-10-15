export function postTemplateA(postData) {
  return `<div class="post" id=${postData.id}>${postData.title}</div>`
}

export function postTemplateB(postData) {
  const post = document.createElement("a");
  post.setAttribute("href", `/post/index.html?id=${postData.id}`)
  post.classList.add("post");
  post.classList.add("row");
  post.classList.add("my-5");
  post.classList.add("py-3");
  post.classList.add("card");
  post.classList.add("bg-secondary");
  post.classList.add("align-items-center");

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post-title");
  postTitle.innerText = postData.title;
  
  post.append(postTitle)

  if(postData.media) {
    const img = document.createElement('img');
    img.classList.add("postImg");
    img.classList.add("img-thumbnail");
    img.classList.add("border-0");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img)
  }

  if(!postData.media === true) {
    post.style.display = "none";
  }

  if(postData.body) {
    const body = document.createElement("p");
    body.classList.add("mt-4");
    body.innerText = postData.body;
    post.append(body)
  }

  
  return post;
}

export function postTemplateC(postData) {
  const post = document.createElement("div");
  post.setAttribute("href", `/post/index.html?id=${postData.id}`)
  post.classList.add("post");
  post.classList.add("row");
  post.classList.add("my-5");
  post.classList.add("py-3");
  post.classList.add("card");
  post.classList.add("bg-secondary");
  post.classList.add("align-items-center");

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post-title");
  postTitle.innerText = postData.title;
  
  post.append(postTitle)

  if(postData.media) {
    const img = document.createElement('img');
    img.classList.add("postImg");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img)
  }

  if(!postData.media === true) {
    post.style.display = "none";
  }

  if(postData.body) {
    const body = document.createElement("p");
    body.innerText = postData.body;
    post.append(body)
  }

  
  return post;
}


export function renderPostTemplate(postData, parent) {
  parent.append(postTemplateC(postData))
}

export function renderPostTemplates(postDataList, parent) {
  parent.append(...postDataList.map(postTemplateB))
}

