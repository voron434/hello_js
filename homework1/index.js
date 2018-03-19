
const url = 'https://www.reddit.com/top.json'


const splitUpTitles = (jsonResponse) => jsonResponse.data.children.reduce(
    (currentResult, jsonChild) => currentResult.concat(
      [
        {
          "title": jsonChild.data.title,
          "permalink": `https://reddit.com${jsonChild.data.permalink}`,
          "thumbnail": jsonChild.data.thumbnail,
        }
      ]
    ),
    []
  )


const renderPosts = (posts) => posts.forEach(
  (post) => {
    if (post.thumbnail == "default") post.thumbnail = "default-thumb.png"
    document.getElementById('posts').innerHTML += `
      <li class="clearfix">
          <img src="${post.thumbnail}" alt="default thumb" class="thumb">
          <a href="${post.permalink}">
            <h3>${post.title}</h3>
          </a>
      </li>
    `
  }
)


fetch(url)
  .then((response) => response.json())
  .then(splitUpTitles)
  .then(renderPosts)
