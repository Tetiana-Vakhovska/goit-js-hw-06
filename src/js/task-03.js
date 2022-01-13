const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallery = document.querySelector(".gallery");
const galleryItem = (items) => {
  return items.map((item) => {
    const galleryItemLi = document.createElement("li");
    const galleryItemImg = document.createElement("Img");
    gallery.append(galleryItemImg);
    galleryItemImg.url = item.url;
    galleryItemImg.alt = item.alt;
    galleryItemImg.color = red;
    galleryItemImg.width = 60;
    return galleryItemImg;
  });
};

insertAdjacentHTML("beforeend", 'gallery');

