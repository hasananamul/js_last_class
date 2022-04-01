class Post {
    constructor() {
        this.user_post_show = document.querySelector('.user_post_show');
    }

    show_post(post) {
        let posts = '';
        post.reverse().map((data, index) => {
            let { id, name, photo, post_content } = data;
            posts += `
                  
                  <div class="card shadow">
                                <div class="card-body">
                                    <div class="mb-3 user_post_items d-flex justify-content-between">
                                        <div class="user_profile_info d-flex align-items-center">
                                            <div class="user_photo">
                                                <img src="${photo}">
                                            </div>
                                            <div class="user_name ms-2">
                                                <h5> ${name} </h5>
                                            </div>
                                        </div>
                                        <div class="more_button"> </div>
                                        <div class="dropdown show">
  <a class="dropdown-toggle" href="#" role="button" id="post_optio" data-bs-toggle="dropdown">
  
  </a>

  <div class="dropdown-menu" aria-labelledby="post_option">
  <a class="dropdown-item " onclick = "edit(i)" href="#">Edit post</a>
  <a class="dropdown-item" href="#">Delete post</a>
  </div>
</div>
                                    </div>
                                    <div class="post_content">
                                        <p>${post_content}
                                        </p>
                                    </div>
                                    <div class="post_image">
                                        <img style="height: 400px;object-fit: cover;" class="w-100" src="${photo}">
                                    </div>
                                </div>
                            </div>
                  
                  `
        })

        this.user_post_show.innerHTML = posts;

    }
}

const post = new Post;
export default post