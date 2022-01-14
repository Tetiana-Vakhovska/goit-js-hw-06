const images = [
  {
    src: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
     src: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
     src: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listItem = document.querySelector(".gallery");

const cardListItem = ({ src, alt }) => {
  return `<li class="gallery-list">
        <img
          src="${ src}",
          alt="${alt}",
          width=200px;
          higth=200px;
        />
      </li>`;
};
const cardListItemNew = images.map(cardListItem).join("");

listItem.insertAdjacentHTML("beforeend", cardListItemNew);
console.log(cardListItemNew);
