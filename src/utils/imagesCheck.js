const imagesCheck = (link) => new Promise((resolve, reject) => {
  const image = new Image();
  image.src = `https://api.nomoreparties.co${link}`;
  image.onload = () => resolve();
  image.onerror = () => reject(new Error('ошибка ссылки'));
});

export default imagesCheck;
