// 相簿名稱 + 封面
const albums = {
  '台大電機系': [ ['2017應屆畢業生團拍', '/DigitalArchive/public/education/img/album-1.png'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/album-2.png'],
                  ['2017應屆畢業生團拍', '/DigitalArchive/public/education/img/album-2.png'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/album-1.png'], ],
  '台大資工系': [ ['2017應屆畢業生團拍', '/DigitalArchive/public/education/img/album-1.png'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/album-2.png'],
                  ['2017應屆畢業生團拍', '/DigitalArchive/public/education/img/album-2.png'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/album-1.png'], ],
  '語音處理實驗室': [ ['2017應屆畢業生團拍', '/DigitalArchive/public/education/img/album-1.png'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/album-2.png'],
                  ['2017應屆畢業生團拍', '/DigitalArchive/public/education/img/album-2.png'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/album-1.png'], ],
};

// 照片名稱 + 照片
const album = {
  '2017應屆畢業生團拍': [ ['2017應屆畢業生團拍', '/DigitalArchive/public/education/img/團拍-1.jpg'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/團拍-2.jpg'], ],
  '2017電機系畢業典禮': [ ['2017應屆畢業生團拍', '/DigitalArchive/public/education/img/畢典-1.jpg'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/畢典-2.jpg'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/畢典-3.jpg'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/畢典-4.jpg'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/畢典-5.jpg'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/畢典-6.jpg'],
                  ['2017電機系畢業典禮', '/DigitalArchive/public/education/img/畢典-7.jpg'], ],
}


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
    ret += `<div class="albums col-sm-6 col-xs-12">
        <img class="album-img-center-cropped"
             onclick="getAlbum('${albums[title][i][0]}')"
             src="${albums[title][i][1]}">
        </img>
      </div>`;
  }
  ret += '</div>';
  return ret;
}

function getAlbums(name) {
  mainSection = document.getElementsByClassName('main-section')[0];
  mainSection.style.display = 'none';
  albumSection = document.getElementsByClassName('album-section')[0];
  let content = '';
  content += getHeader(name);
  content += getAlbumsString(name);
  albumSection.innerHTML = content;
  albumSection.style.display = "block"
}

function getAlbumString(title) {
  let ret = `<div class="container album-wrapper">`;
  for(let i = 0; i < album[title].length; i += 1) {
    ret += `<div class="album col-sm-3 col-xs-6">
        <div class="box-50-50">
          <div class="content-50-50">
            <img class="album-img-center-cropped photo"
                 src="${album[title][i][1]}">
            </img>
          </div>
        </div>
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
  content += getAlbumString(name);
  albumSection.innerHTML = content;
  albumSection.style.display = "block"
}

function getStudents() {
  albumSection = document.getElementsByClassName('album-section')[0];
  albumSection.style.display = 'none';
  mainSection = document.getElementsByClassName('main-section')[0];
  mainSection.style.display = 'block';
}
