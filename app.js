//Cargar Datos
const loadData = () => {
    fetch('descriptionPosts.json')
        .then(response => response.json())
        .then(posts => {
            //Capturar el contenedor de los posts
            const $conteinerPosts = document.querySelector('#conteinerPost')

            //Crear los posts
            posts.forEach(post => {

                const $title = document.createElement('h3')
                $title.classList.add('post_title')
                $title.textContent  = post.title
                
                const $description = document.createElement('p')
                $description.classList.add('post_parraf')
                $description.textContent = post.description

                const $button = document.createElement('a')
                $button.classList.add('post_button')
                $button.textContent = 'Leer Post'
                $button.addEventListener('click', () => {
                    location.href = `filePosts/post.html?namePost=${post.title}`
                })
                
                const $post = document.createElement('div')
                $post.classList.add('post')

                $post.appendChild($title)
                $post.appendChild($description)
                $post.appendChild($button)

                $conteinerPosts.appendChild($post)
            })
            
        })
}

const loadLastPost = () => {
    fetch('descriptionPosts.json')
    .then(response => response.json())
    .then(posts => {
        const lastPost = (posts.length) - 1
        const $title = document.createElement('h3')
        $title.classList.add('post_title')
        $title.textContent  = posts[lastPost].title

        const $description = document.createElement('p')
        $description.classList.add('post_parraf')
        $description.textContent = posts[lastPost].description

        const $button = document.createElement('a')
        $button.classList.add('post_button')
        $button.textContent = 'Leer Post'
        $button.addEventListener('click', () => {
            location.href = `filePosts/post.html?namePost=${posts[lastPost].title}`
        })
                
        const $post = document.createElement('div')
        $post.classList.add('post')

        $post.appendChild($title)
        $post.appendChild($description)
        $post.appendChild($button)


        const sectionLastPost = document.querySelector('#sectionLastPost')
        sectionLastPost.appendChild($post)
    })
}

/* EVENTOS */
document.addEventListener('DOMContentLoaded', () => {
    loadData()
    loadLastPost()
})
