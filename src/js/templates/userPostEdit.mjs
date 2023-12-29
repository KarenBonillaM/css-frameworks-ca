export function postTemplateE(postData) {
  const titleDetailsPage = document.querySelector(".post-details-page-title");
  titleDetailsPage.innerText = `${postData.title}`;

  const userIconLink = document.querySelector(".user-icon-link");
  userIconLink.href = `/profile/index.html?name=${postData.author.name}`

  const post = document.createElement("div");
  // post.setAttribute("href", `/post/edit/index.html?id=${postData.id}`)
  post.classList.add("post");
  post.classList.add("row");
  post.classList.add("my-5");
  post.classList.add("p-3");
  post.classList.add("card");
  post.classList.add("bg-secondary");
  post.classList.add("align-items-center");

  const postHeader = document.createElement("div");
  postHeader.classList.add("post-header");
  postHeader.classList.add("d-flex");
  postHeader.classList.add("align-items-center");
  postHeader.classList.add("py-3");

  post.append(postHeader);


  const postAuthorInfoContainer = document.createElement("div");
  postAuthorInfoContainer.classList.add("d-flex");
  postAuthorInfoContainer.classList.add("col-4");
  postAuthorInfoContainer.classList.add("align-items-center");

  postHeader.append(postAuthorInfoContainer);

  if(postData.author && postData.author.name) {

    const postAuthorName = postData.author.name;

    const authorImgContainer = document.createElement("span");
    authorImgContainer.classList.add("userimage");

    postAuthorInfoContainer.append(authorImgContainer);

    const postAuthorAvatar = postData.author.avatar;

    const authorAvatar = document.createElement("img");
    authorAvatar.classList.add("img-fluid");
    authorAvatar.classList.add("post-img");
    authorAvatar.alt = postAuthorName;
    authorAvatar.src = postAuthorAvatar;

    if(!postData.author.avatar) {
      authorAvatar.src = "/images/profile-picture.jpg"
    }

    authorImgContainer.append(authorAvatar);

    const authorNameContainer = document.createElement("span");
    authorNameContainer.classList.add("username");
    authorNameContainer.classList.add("fs-6");
    authorNameContainer.classList.add("ps-2");
    authorNameContainer.classList.add("pe-2");
    authorNameContainer.classList.add("fw-medium");
    authorNameContainer.innerText = postAuthorName;

    postAuthorInfoContainer.append(authorNameContainer);
  }

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post-title");
  postTitle.innerText = postData.title;
  
  postHeader.append(postTitle)

  if(postData.media) {
    const img = document.createElement('img');
    img.classList.add("postImg");
    img.classList.add("img-thumbnail");
    img.classList.add("border-0");
    img.classList.add("bg-secondary");
    img.src = postData.media;
    img.alt = `Image from ${postData.title}`;
    post.append(img)
  }

  if(!postData.media === true) {
    post.style.display = "none";
  }

  if(postData.body) {
    const body = document.createElement("p");
    body.classList.add("mt-4")
    body.innerText = postData.body;
    post.append(body)
  }

  // const updatePostContainer = document.createElement("div");
  // updatePostContainer.classList.add("updatePostContainer");
  // updatePostContainer.classList.add("row")
  // updatePostContainer.classList.add("align-items-center")
  // updatePostContainer.classList.add("pt-2")

  // post.append(updatePostContainer); 

  const detailsPostContainer = document.createElement("div");
  detailsPostContainer.classList.add("post-details-container");
  detailsPostContainer.classList.add("d-flex");
  detailsPostContainer.classList.add("justify-content-around");

  post.append(detailsPostContainer);

  const commentsCount = document.createElement("div");
  commentsCount.innerText =`Comments ${postData._count.comments}`;

  detailsPostContainer.append(commentsCount);

  const reactionsCount = document.createElement("div");
  reactionsCount.innerText =`Reactions ${postData._count.reactions}`;

  detailsPostContainer.append(reactionsCount)
  

  // const updateButtonLink = document.createElement("a");
  // updateButtonLink.setAttribute("href", `/post/edit/index.html?id=${postData.id}`);
  // updateButtonLink.classList.add("col")

  // updatePostContainer.append(updateButtonLink)

  
  return post;
}

export function renderPostUserTemplate(postData, parent) {
  parent.append(postTemplateE(postData))
}
