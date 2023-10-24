document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById("posts-container");

    // Function to fetch and display new posts
    function fetchAndDisplayPosts() {
        // Fetch new posts from the server or API
        fetch("https://api.example.com/posts")
            .then(response => response.json())
            .then(posts => {
                // Clear existing posts from the container
                postsContainer.innerHTML = "";

                // Create HTML for each new post and append it to the container
                posts.forEach(post => {
                    const postElement = document.createElement("div");
                    postElement.classList.add("post");
                    postElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.content}</p>
                    `;
                    postsContainer.appendChild(postElement);
                });
            })
            .catch(error => console.error(error));
    }

    // Call the function to fetch and display posts
    fetchAndDisplayPosts();
});
