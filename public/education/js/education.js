const albums = {
  '台大電機系': [ '/DigitalArchive/public/education/img/album-1.png',
                  '/DigitalArchive/public/education/img/album-2.png',
                  '/DigitalArchive/public/education/img/album-2.png',
                  '/DigitalArchive/public/education/img/album-1.png', ],
  '台大資工系': [ '/DigitalArchive/public/education/img/album-1.png',
                  '/DigitalArchive/public/education/img/album-2.png',
                  '/DigitalArchive/public/education/img/album-2.png',
                  '/DigitalArchive/public/education/img/album-1.png', ],
  '語音處理實驗室': [ '/DigitalArchive/public/education/img/album-1.png',
                  '/DigitalArchive/public/education/img/album-2.png',
                  '/DigitalArchive/public/education/img/album-2.png',
                  '/DigitalArchive/public/education/img/album-1.png', ]
};

function getHeader(title) {
  return `<div class="col-xs-12 albums-header">
      <div class="header-wrapper">
        <div class="upper-line"></div>
        <h1 class="header-text">${title}</h1>
      </div>
    </div>`;
}

function getAlbumsString(title) {
  let ret = `<div class="container album-wrapper">`;
  for(let i = 0; i < albums[title].length; i += 1) {
    ret += `<div class="album col-sm-6 col-xs-12">
        <img class="album-img-center-cropped"
             src="${albums[title][i]}">
        </img>
      </div>`;
  }
  ret += '</div>';
  return ret;
}

function getAlbum(name) {
  mainSection = document.getElementsByClassName('main-section')[0];
  mainSection.style.display = 'none';
  albumSection = document.getElementsByClassName('album-section')[0];
  let content = '';
  content += getHeader(name);
  content += getAlbumsString(name);
  albumSection.innerHTML = content;
}
