// feed items, using placeholder images for dummy-posts

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlaceholderImageUrl(seed) {
  return `https://placekitten.com/${seed}/${seed}`;
}

function addPostThumbnail(title) {
  const seed = getRandomNumber(200, 400); 
  const imageUrl = getPlaceholderImageUrl(seed);

  const postList = document.getElementById('post-list');
  const postThumbnail = document.createElement('div');
  postThumbnail.classList.add('col-md-4', 'post-thumbnail');
  postThumbnail.innerHTML = `
      <div class="card">
          <img src="${imageUrl}" class="card-img-top" alt="plceholder image">
          <div class="card-body">
              <div class="d-flex justify-content-between align-items-center">
                  <h6 class="card-title">${title}</h6>
                  <button class="btn favorite-btn">
                      <i class="fa-regular fa-heart"></i>
                  </button>
              </div>
          </div>
      </div>
  `;
  postList.appendChild(postThumbnail);

  const favoriteBtn = postThumbnail.querySelector('.favorite-btn');
  favoriteBtn.addEventListener('click', function(event) {
    const heartIcon = favoriteBtn.querySelector('i.fa-heart');
    if (heartIcon) {
      heartIcon.classList.toggle('far'); // Toggle empty fave-heart
      heartIcon.classList.toggle('fas'); // Toggle filled fave-heart
    }
  });
}

// example posts, not clickable
addPostThumbnail('Photo of the week');
addPostThumbnail('Highlighted post');
addPostThumbnail('This month\'s treat');
addPostThumbnail('How-to post');
addPostThumbnail('UX/UI tips from a pro');
addPostThumbnail('More posts');
