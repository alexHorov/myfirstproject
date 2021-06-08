let offset = 0; //смещение от левого края
const sliderLine = document.querySelector(".slider__bottom");
const _newsService = newService();

document.querySelector(".btn_next").addEventListener("click", () => {
  offset = offset + 290; //offset +=  290;
  if (offset > 870) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".btn_prev").addEventListener("click", () => {
  offset = offset - 290; //offset -=  290;
  if (offset < 0) {
    offset = 870;
  }
  sliderLine.style.left = -offset + "px";
});


function fillNews() {
  const newsList = _newsService.getNewsList();
  const first = newsList[0];

  

  let elTeplate = `
  <div class="row-item">
  <div class="box-img">
    <a href="#"><img src="${first.picture}" alt="Картинка" /> </a>
    <div class="box-img_link">
      <a class="${getNewsType(first.type)}" href="#">${first.block}</a>
    </div>
  </div>
  <div class="box-text">
    <h2>
      <a href="#">${first.title}</a>
    </h2>
    <p><a href=""> ${first.autor}</a></p>
    <span>${first.descr}</span>
  </div>
</div>

`;
const parsed= domParser(elTeplate);
const newsBlock=document.querySelector('.new-auto-filled');
const listNode=parsed.querySelector("div");
newsBlock.appendChild(listNode);



  // const rowItem = document.createElement("div");
  // rowItem.classList.add("row-item");

  // const boxImg = document.createElement("div");
  // boxImg.classList.add("box-img");

  // const aPicture = document.createElement("a");

  // const imgPicture = document.createElement("img");
  // imgPicture.src = first.picture;

  // aPicture.appendChild(imgPicture);

  // const boxImgLink = document.createElement("div");
  // boxImg.classList.add("box-img_link");
  // const aBoxImgLink = document.createElement("a");
  // aBoxImgLink.classList.add(getNewsType(first.type));

  // boxImgLink.appendChild(aBoxImgLink);

  // boxImg.appendChild(aPicture);
  // boxImg.appendChild(boxImgLink);

 
  // const text = document.createTextNode( "Mybutton" )

  // rowItem.appendChild(boxImg);
  // rowItem.appendChild(text);
  // const newsBlock = document.getElementsByClassName("new-auto-filled")[0];
  // newsBlock.appendChild(rowItem);
}

function domParser(string) {
  const parser = new DOMParser();
  return parser.parseFromString(string, "text/html");
}

fillNews();

function getNewsType(type) {
  switch (type) {
    case "news":
      return "post";

    case "blog":
      return "blog";

    case "feature":
      return "feature";

    case "view":
      return "view";
  }
}
