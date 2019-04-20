var random_images_array =
[
  'images/inspireme1.jpg',
  'images/inspireme2.jpg',
  'images/inspireme3.jpg',
  'images/inspireme4.jpg',
  'images/inspireme5.jpg',
  'images/inspireme6.jpg',
  'images/inspireme7.jpg',
  'images/inspireme8.jpg',
  'images/inspireme9.jpg',
  'images/inspireme10.jpg',
  'images/inspireme11.jpg',
  'images/inspireme12.jpg',
  'images/inspireme13.jpg',
  'images/inspireme14.jpg',
  'images/inspireme15.jpg',
  'images/inspireme16.jpg',
  'images/inspireme17.jpg',
  'images/inspireme18.jpg',
  'images/inspireme19.jpg',
  'images/inspireme20.jpg',
  'images/inspireme21.jpg',
  'images/inspireme22.jpg',
  'images/inspireme23.jpg',
  'images/inspireme24.jpg',
  'images/inspireme25.jpg'
]

function newImage() {
  var randomImageNumber = Math.floor(Math.random() * (random_images_array.length));
  document.getElementById('imageDisplay').src = random_images_array[randomImageNumber];
}
