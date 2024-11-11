// const featuredImg = document.getElementById("featured-img");
// const caption = document.querySelector("figcaption");
// const thumbnails = document.querySelectorAll("#thumbnails img");

// thumbnails.forEach((thumbnail) => {
//   thumbnail.addEventListener("click", () => {
//     const fullImage = thumbnail.getAttribute("large-img");
//     const title = thumbnail.getAttribute("title");

//     featuredImg.src = fullImage;
//     featuredImg.alt = title;
//     caption.textContent = title;
//   });
// });

// define images in objects
const images = [
  {
    full: "images/flowers-red-large.jpg",
    thumbnail: "images/flowers-red-small.jpg",
    title: "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany",
  },
  {
    full: "images/flowers-white-large.jpg",
    thumbnail: "images/flowers-white-small.jpg",
    title:
      "Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany",
  },
  {
    full: "images/flowers-yellow-large.jpg",
    thumbnail: "images/flowers-yellow-small.jpg",
    title:
      "Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany",
  },
  {
    full: "images/flowers-pink-large.jpg",
    thumbnail: "images/flowers-pink-small.jpg",
    title: "Market in Münster, North Rhine-Westphalia, Germany",
  },
  {
    full: "images/flowers-purple-large.jpg",
    thumbnail: "images/flowers-purple-small.jpg",
    title: "Sentmaring Park, Münster, North Rhine-Westphalia, Germany",
  },
];

// get elements
const featuredImg = document.getElementById("featured-img");
const caption = document.querySelector("figcaption");
const thumbnailContainer = document.getElementById("thumbnails");

// method for building thumbnail list dynamically
function createThumbnails() {
  images.forEach((image, index) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = image.thumbnail;
    img.alt = image.title;
    img.setAttribute("large-img", image.full);
    img.setAttribute("title", image.title);
    img.classList.add("thumbnail");

    // give the first img "active" class when first loading
    if (index === 0) {
      img.classList.add("active");
    }

    img.addEventListener("click", () => {
      featuredImg.src = image.full;
      featuredImg.alt = image.title;
      caption.textContent = image.title;

      // grey scale setting
      updateActiveThumbnail(img);
    });

    li.appendChild(img);
    thumbnailContainer.appendChild(li);
  });
}

// method for setting grey scale class
function updateActiveThumbnail(selectedThumbnail) {
  // remove "active" class from all thumbnails and set grey scale
  const thumbnails = document.querySelectorAll(".thumbnail");
  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("active");
  });

  // give selected thumbnail "active" class and display with color
  selectedThumbnail.classList.add("active");
}

// initialize thumbnail list
createThumbnails();
