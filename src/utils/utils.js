const imagesCheck = (link) => new Promise((resolve, reject) => {
  const image = new Image();
  image.src = link;
  image.onload = () => resolve(link);
  image.onerror = () => reject(new Error('ошибка ссылки'));
});

export default imagesCheck;
