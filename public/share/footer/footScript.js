function contactComponent(iconName, content) {
  component =
    '<div class="col-xs-12 col-sm-4">' +
      '<div class="footer-contact">' +
        '<div class="footer-icon">' +
          '<span class="glyphicon ' + iconName + '" aria-hidden="true"></span>' +
        '</div>' +
        '<div class="footer-text">' +
          content +
        '</div>' +
      '</div>' +
    '</div>';
  return component;
}

document.getElementById("footerMenu").innerHTML =
  '<div class="container-fluid">' +
    '<div class="row">' +
      contactComponent('glyphicon-earphone',
                       '<span style="font-size:18px">+886 (2) 2363-5251 ext. 521</span>') +
      contactComponent('glyphicon-envelope',
                       '<span style="font-size:18px"><a id="footer-email" href="mailto:lslee@cc.ee.ntu.edu.tw">lslee@cc.ee.ntu.edu.tw</a></span>') +
      contactComponent('glyphicon-home', 
                       '<span>台北市大安區羅斯福路四段 1 號</span>' + '<br>' +
                       '<span style="font-size:12px">No. 1, Sec. 4, Roosevelt Rd., Taipei 10617 Taiwan (R.O.C.)</span>') +
    '</div>'+
  '</div>';
