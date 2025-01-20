function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data));
}

/**  
 * 1. get the container element where you want to add the new elements
 * 2. create child element
 * 3. set innerText on innerHTML
 * 4. appenchild
*/


function displayPost(posts) {
    const postContainer = document.getElementById('postContainer');
    for (const post of posts) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post-bg')
        postDiv.innerHTML = `
            <h4>User - ${post.userId}</h4>
            <h>Post : ${post.title}</h5>
            <p>post Description : ${post.body}</p>
        `;
        postContainer.appendChild(postDiv)
    }
}

loadPost()

