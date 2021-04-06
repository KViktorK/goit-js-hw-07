const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const imagesEl = document.querySelector('#gallery');

imagesEl.style.display = 'flex';
imagesEl.style.alignItems = 'center';
imagesEl.style.justifyContent = 'space-between';


for (let image of images) {
  const imageEl = document.createElement('img');
  imageEl.setAttribute('src', image.url)
  imageEl.setAttribute('alt', image.alt)

  const imageItem = document.createElement('li')
  
  imageItem.append(imageEl)
  imagesEl.append(imageItem)
}