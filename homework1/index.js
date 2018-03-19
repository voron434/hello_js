
const url = 'https://www.reddit.com/top.json'


const splitUpTitles = (jsonResponse) => jsonResponse.data.children.reduce(
    (currentResult, jsonChild) => currentResult.concat(
      [
        {
          "title": jsonChild.data.title,
          "permalink": `reddit.com${jsonChild.data.permalink}`,
          "thumbnail": jsonChild.data.thumbnail,
        }
      ]
    ),
    []
  )


const renderPosts = (posts) => posts.forEach(
  (post) => 
)


fetch(url)
  .then((response) => response.json())
  .then(splitUpTitles)
  .then(console.log)
