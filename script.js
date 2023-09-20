const blogs = ["one", "two", "three", "four", "five", "six"]
const recentBlogPosts = document.getElementById("recent-blog-posts")
const viewMore = document.getElementById("view-more")
const siteLogo = document.getElementById("site-logo")



function renderBlog() {
    for (let i=0; i < blogs.length; i++) {
        recentBlogPosts.innerHTML += 
        `<div class="blog-post" id="blog-${blogs[i]}">
            <img src="https://source.unsplash.com/random/720x480/?coding&${i}">
            <p class="date">September 19, 2023</p>
            <h3>Blog ${blogs[i]}</h3>
            <p>I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
        </div>`
    }
}


renderBlog()

siteLogo.addEventListener("click", function() {
    location.href = "index.html"
})

if (viewMore) {
    viewMore.addEventListener("click", function() {
        document.getElementById("blog-four").style.display = "block"
        document.getElementById("blog-five").style.display = "block"
        document.getElementById("blog-six").style.display = "block"
        viewMore.style.display = "none"
    })
    }


document.getElementById("copyright").innerHTML = `&copy ${new Date().getFullYear()}`