// const searchContainer = document.querySelector("#search-container");
const search = document.querySelector("#search");
// const searchButton = document.querySelector("#search-button");
const postsContainer = document.querySelector(".postsContainer")

// console.log(postsContainer);

  search.onkeyup = function() {
    const searchBox = document.querySelector("#search").value.toLowerCase();
      const post = document.querySelectorAll(".post")
      const postTitle = postsContainer.getElementsByTagName("h2");
    
    
    
      for(let i = 0; i < postTitle.length; i++) {
        let match = post[i].getElementsByTagName("h2")[0];
    
        if(match) {
          let textValue = match.textContent || match.innerHTML
    
          if(textValue.toLowerCase().indexOf(searchBox) > -1) {
            post[i].style.display = "";
          } else {
            post[i].style.display = "none";
          }
        }
      }
    }



// export function setSearchFormListener() {
//   const searchBox = document.querySelector("#search-item").value.toLowerCase();
//   const post = document.querySelectorAll(".post")
//   const postTitle = postsContainer.getElementsByTagName("h2");



//   for(let i = 0; i < postTitle.length; i++) {
//     let match = post[i].getElementsByTagName("h2")[0];

//     if(match) {
//       let textValue = match.textContent || match.innerHTML

//       if(textValue.toLowerCase().indexOf(searchBox) > -1) {
//         post[i].style.display = "";
//       } else {
//         post[i].style.display = "none";
//       }
//     }
//   }
// }

// searchContainer.addEventListener("submit", setSearchFormListener);