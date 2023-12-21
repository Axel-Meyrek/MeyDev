const urlParams = new URLSearchParams(location.search)
const namePost = urlParams.get('namePost')


fetch(`fileMd/${namePost}.md`)
.then(response => response.text())
.then(data => {
    const converter = new showdown.Converter()
    const post = converter.makeHtml(data)
    const  $article = document.querySelector('.article')
    $article.innerHTML = post
    })
