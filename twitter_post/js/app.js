// criar post
const inputTwitter = document.querySelector("#input-twitter");

const btnAdd = document.querySelector("#btn-add");

const twitterBox = document.querySelector(".tweetBox");

const postTwitter = document.querySelector("#post-twitter");

btnAdd.onclick = function (e) {
  e.preventDefault();

  const newPost = `
  <div class="post">
        <div class="post__avatar">
          <img
            src="src/images/maleProfile.png"
            alt=""
          />
        </div>

        <div class="post__body">
          <div class="post__header">
            <div class="post__headerText">
              <h3>
                DessimA
                <span class="post__headerSpecial"
                  ><span class="material-icons post__badge"> verified </span>@DessimA</span>
                </h3>
            </div>
            <div class="post__headerDescription">
              <p>${inputTwitter.value}</p>
            </div>
          </div>
          
          <div class="post__footer">
            <span class="material-icons"> repeat </span>
            <span class="material-icons"> favorite_border </span>
            <span class="material-icons"> publish </span>
          </div>
        </div>
      </div>
  `;
  postTwitter.insertAdjacentHTML("afterbegin", newPost);
  inputTwitter.value = "";
};
