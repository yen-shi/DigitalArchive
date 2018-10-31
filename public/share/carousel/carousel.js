function getCarousel(imgList) {
  let lis = '';
  for(let i = 0; i < imgList.length; i += 1) {
    if (i == 0)
      lis += '<li data-target="#bs-carousel" data-slide-to="0" class="active"></li>';
    else
      lis += `<li data-target="#bs-carousel" data-slide-to="${ i }"></li>`;
  }

  let imgs = '';
  let MAX_WIDTH = 1600, MAX_HIGHT = 750;
  for(let i = 0; i < imgList.length; i += 1) {
    if (i == 0)
      imgs += `<div class="item slides active carousel-item">
                <img style="max-width: ${MAX_WIDTH}px; max-height: ${MAX_HIGHT}px; width: auto; height: auto;" data-u="image" src="${ imgList[i] }" />
              </div>`
    else
      imgs += `<div class="item slides carousel-item">
                <img style="max-width: ${MAX_WIDTH}px; max-height: ${MAX_HIGHT}px; width: auto; height: auto;" data-u="image" src="${ imgList[i] }" />
              </div>`
  }

  return `<div class="carousel fade-carousel slide carousel-fade" data-ride="carousel" data-interval="5000" id="bs-carousel">
    <ol class="carousel-indicators">
      ${ lis }
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      ${ imgs }
    </div>
  </div>`;
}
