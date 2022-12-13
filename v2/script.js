const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
     user(username: "mblessed") {
         numPosts
         publication {
           posts(page: 0) {
             title
             coverImage
           }
         } 
       }
    }
`;

gql(GET_USER_ARTICLES, { page: 0 }).then((result) => {
  const articles = result.data.user.publication.posts;
  let container = document.createElement("div");

  articles.forEach((article) => {
    let title = document.createElement("h2");
    title.innerText = article.title;

    let brief = document.createElement("p");
    brief.innerText = article.brief;

    let link = document.createElement("a");
    link.innerText = "Read more...";
    link.href = `https://catalins.tech/${article.slug}`;

    container.appendChild(title);
    container.appendChild(brief);
    container.appendChild(link);
  });

  document.querySelector(".app").appendChild(container);
});
