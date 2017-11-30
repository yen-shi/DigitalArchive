document.getElementById("navMenu").innerHTML =
  '<div class="container-fluid">'+
    '<div class="navbar-header">'+
      '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">'+
        '<span class="icon-bar" style="background-color: #515356"></span>'+
        '<span class="icon-bar" style="background-color: #515356"></span>'+
        '<span class="icon-bar" style="background-color: #515356"></span>'+                     
      '</button>'+
      '<a class="navbar-brand" href="/static/homepage">Lin-Shan Lee</a>'+
    '</div>'+
    '<div class="navbar-collapse collapse" id="myNavbar">'+
      '<ul class="nav navbar-nav">'+
        '<li><a href="/static/about"><span id="navbar-chinese">關於</span><br>About</a></li>'+
        '<li><a href="/static/education"><span id="navbar-chinese">教學篇</span><br>Education</a></li>'+
        '<li><a href="/static/research"><span id="navbar-chinese">研究篇</span><br>Research</a></li>'+
        '<li><a href="/static/admin"><span id="navbar-chinese">行政事務篇</span><br>Administration</a></li>'+
        '<li><a href="/static/internation"><span id="navbar-chinese">國際事務篇</span><br>Internation</a></li>'+
        '<li><a href="/static/honor"><span id="navbar-chinese">榮譽篇</span><br>Honor</a></li>'+
        '<li><a href="/static/talks"><span id="navbar-chinese">演說篇</span></span><br>Talks</a></li>'+
        '<li><a href="/static/personal"><span id="navbar-chinese">個人篇</span><br>Personal</a></li>'+
      '</ul>'+
    '</div>'+
  '</div>';
