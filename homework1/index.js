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


const renderPosts = (posts) => {
  document.getElementById('posts').innerHTML = ""
  posts.forEach(
    (post) => {
      if (post.thumbnail == "default" ||
          post.thumbnail == "nsfw" ||
          post.thumbnail == "self") {
        post.thumbnail = "default-thumb.png"
      }
      document.getElementById('posts').innerHTML += `
          <li class="clearfix">
              <img src="${post.thumbnail}" onerror="this.src='default-thumb.png'" alt="default thumb" class="thumb">
              <a href="${post.permalink}">
                <h3>${post.title}</h3>
              </a>
          </li>`
    }
  )
}


const main = () => fetch(url)
    .then((response) => response.json())
    .then(splitUpTitles)
    .then(renderPosts)


main()
setInterval( main, 10000 )
