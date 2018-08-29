const data = [
  {
    "mainTitle": "得獎致詞 &nbsp; Acceptance Speeches",
    "mainList": [
      {
        "minorTitle": "得獎致詞小標",
        "minorList": [
          {
            "title": "text",
            "icon": ["image", "video", "slide", "website", "audio"],
            "content": "content"
          },
          {
            "title": "text2",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          }
        ]
      }
    ]
  },
  {
    "mainTitle": "科普 &nbsp; Popular Science",
    "mainList": [
      {
        "minorTitle": "科普小標",
        "minorList": [
          {
            "title": "跨領域餐會開場致詞-芝麻開門-語音技術的前世今生",
            "icon": ["image", "video", "slide", "website"],
            "content": "content"
          },
          {
            "title": "科學月刊 李琳山：很多中文語音輸入產品都用到我的研究成果",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          }
        ]
      } 
    ]
  },
  {
    "mainTitle": "研究或生涯回顧 &nbsp; Research and Career Review",
    "mainList": [
      {
        "minorTitle": "研究或生涯回顧小標",
        "minorList": [
          {
            "title": "text",
            "icon": ["image", "video", "slide", "website"],
            "content": "content"
          },
          {
            "title": "text2",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          }
        ]
      } 
    ]
  },
  {
    "mainTitle": "專題演講 &nbsp; Speeches",
    "mainList": [
      {
        "minorTitle": "國際會議演講",
        "minorList":
        [
          {
            "title": "Spoken Content Retrieval - Lattices and Beyond",
            "icon": ["image", "video", "slide", "website"],
            "content": "content"
          },
          {
            "title": "text2",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          }
        ]
      } 
    ]
  },
  {
    "mainTitle": "綜合性 &nbsp; Others",
    "mainList": [
      {
        "minorTitle": "學海無涯",
        "minorList": [
          {
            "title": "學海無涯（待補）",
            "icon": ["image", "video", "slide", "website"],
            "content": "content"
          }
        ]
      },
      {
        "minorTitle": "信號與人生",
        "minorList":
        [
          {
            "title": "2016.06.24 信號與人生",
            "icon": ["image", "video", "slide", "website"],
            "content": "content"
          },
          {
            "title": "2013.06.10 信號與人生",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          },
          {
            "title": "2008.XX.XX 信號與人生",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          },
          {
            "title": "2006.XX.XX 信號與人生",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          },
          {
            "title": "2005.10.01 信號與人生",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          }
        ]
      },
      {
        "minorTitle": "媒體訪問",
        "minorList": [
          {
            "title": "2017/02/13 自由時報 星期專訪",
            "icon": ["image", "video", "slide", "website"],
            "content": "content"
          },
          {
            "title": "2016/08/17 輕舟已過萬重山",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          }
        ]
      }
    ]
  },
  {
    "mainTitle": "婚禮致詞 &nbsp; Wedding Speeches",
    "mainList": [
      {
        "minorTitle": "婚禮致詞小標",
        "minorList": [
          {
            "title": "2016.01.09 盧彥廷 王雅婷婚禮致詞",
            "icon": ["image", "video", "slide", "website"],
            "content": "content"
          },
          {
            "title": "text2",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          }
        ]
      } 
    ]
  }
];

createPanel(data);

function createPanel(object) {
  ret = '';
  for (let i = 0; i < object.length; i++) {
    ret += getMainPanel(object[i])
  }
  accordion = document.getElementById('accordion');
  accordion.innerHTML = ret;
}

function hashCode(s) {
  var h = 0, l = s.length, i = 0;
  if ( l > 0 )
    while (i < l)
      h = (h << 5) - h + s.charCodeAt(i++) | 0;
  return h < 0 ? -h : h;
};

function getMainPanel(object) {
  obj_id = hashCode(JSON.stringify(object));
  console.log(obj_id)
  ret = `
    <div class="panel-default">
      <div class="panel-heading-custom">
        <h1 class="panel-title-custom">
          <a class="panel-title-text-custom"
             data-toggle="collapse"
             data-parent="#accordion"
             href="#${obj_id}">
            ${object['mainTitle']}
          </a>
        </h1>
      </div>
      <div id="${obj_id}" class="panel-collapse collapse">
        <div class="panel-body">
          ${getSubPanel(object['mainList'])}
        </div>
      </div>
    </div>
  `;
  return ret;
}

function getSubPanel(object) {
  ret = '';
  for (let i = 0; i < object.length; i++) {
    ret += `<h3 class="minor-title"> ${object[i]['minorTitle']} </h3>`;
    ret += `<hr class="divider" />`;
    for (let j = 0; j < object[i]['minorList'].length; j++) {
      ret += getContentPanel(object[i]['minorList'][j]);
    }
  }
  return ret;
}

function getContentPanel(object) {
  ret = `
    <div class="panel-body-text-custom" onclick="getModal(this)">
      <h4 class="panel-body-text-title-custom content-title">
        ${object['title']}
        ${getIcons(object['icon'])}
      </h4>
      <p class="content-text">
        ${object['content']}
      </p>
      <hr class="divider" />
    </div>
  `;
  return ret;
}

function getModal(dom) {
  console.log('Click from: ', dom);
  console.log('Click from: ', dom.innerHTML);
  // Use dom id to request content of modal
  modalBody = document.getElementsByClassName('modal-body')[0];
  
  modalBody.innerHTML = 
    `<div class="modal-title">
      <h4 class="modal-subtitle">
        ${dom.children[0].innerHTML}
      </h4>
      <p>
        ${dom.children[1].innerHTML}
      </p>
      <hr class="divider" />
    </div>
    <br>
    <iframe class="modal-movie" src="https://www.youtube.com/embed/NulBlWIhfaM?rel=0&amp;start=565" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <p class="modal-caption">Video 1 - [台灣名人堂] 2015 總統科學獎特輯</p>
    <p class="modal-text">
    李琳山教授在1979年中美斷交臺灣風雨飄搖之際放棄在美安定優裕之研究環境回國,在當時相當艱困的國內學術條件下打造在臺灣的研究基地,長期鑽研語音訊號之電腦處理三十餘年並開花結果。他的研究在國際學術界被高度肯定,並在諸多國際學術事務中擔任積極角色並有突出貢獻,有效提升臺灣在國際學術界之地位。他在臺大電機系及資訊系任教三十餘年,曾任臺大資訊系主任5年、中研院資訊所所長6年、臺大研發長3年、臺大電機資訊學院院長3年,任內對相關領域之學術教育及典章制度著有貢獻,培育學生無數,遍佈今日國內外學術界、產業界,包括不少領袖人物。李教授在研究上的傑出成就及貢獻略述如下:1. 早期對華語語音及語言處理之開拓性貢獻李教授為華語語音處理極少數拓荒者之一。他針對華語文之特有結構,探討在這些特有結構下更有效處理華語之方法;逐年發展出當時最領先之華語各項技術,建構出基礎技術體系。他針對華語所有單音作了最早最完整的電腦處理分析,也針對華語文句建立了最早最完整的電腦分析文法及剖析器,可分析非常複雜的文句;他首先建立系統化的華語韻律規則並用以合成語音訊號,今日韻律仍是華語語音合
    </p>
    <iframe class="modal-slides" src="/DigitalArchive/public/talks/data/pdf/slides_example.pdf"></iframe>
    <p class="modal-caption">Slide 1 - 無涯學海渡扁舟</p>
    <p class="modal-text">
    李琳山教授在1979年<a target="_blank" href="http://speech.ee.ntu.edu.tw/courses.html">網站點這邊</a>中美斷交臺灣風雨飄搖之際放棄在美安定優裕之研究環境回國,在當時相當艱困的國內學術條件下打造在臺灣的研究基地,長期鑽研語音訊號之電腦處理三十餘年並開花結果。他的研究在國際學術界被高度肯定,並在諸多國際學術事務中擔任積極角色並有突出貢獻,有效提升臺灣在國際學術界之地位。他在臺大電機系及資訊系任教三十餘年,曾任臺大資訊系主任5年、中研院資訊所所長6年、臺大研發長3年、臺大電機資訊學院院長3年,任內對相關領域之學術教育及典章制度著有貢獻,培育學生無數,遍佈今日國內外學術界、產業界,包括不少領袖人物。李教授在研究上的傑出成就及貢獻略述如下:1. 早期對華語語音及語言處理之開拓性貢獻李教授為華語語音處理極少數拓荒者之一。他針對華語文之特有結構,探討在這些特有結構下更有效處理華語之方法;逐年發展出當時最領先之華語各項技術,建構出基礎技術體系。他針對華語所有單音作了最早最完整的電腦處理分析,也針對華語文句建立了最早最完整的電腦分析文法及剖析器,可分析非常複雜的文句;他首先建立系統化的華語韻律規則並用以合成語音訊號,今日韻律仍是華語語音合
    </p>
    <p class="modal-cite">
    "我是被引用的一段話，特別被強調的那種，我是被引用的一段話，特別被強調的那種。"
    </p>
    <p class="modal-text">
    李琳山教授在1979年中美斷交臺灣風雨飄搖之際放棄在美安定優裕之研究環境回國,在當時相當艱困的國內學術條件下打造在臺灣的研究基地,長期鑽研語音訊號之電腦處理三十餘年並開花結果。他的研究在國際學術界被高度肯定,並在諸多國際學術事務中擔任積極角色並有突出貢獻,有效提升臺灣在國際學術界之地位。他在臺大電機系及資訊系任教三十餘年,曾任臺大資訊系主任5年、中研院資訊所所長6年、臺大研發長3年、臺大電機資訊學院院長3年,任內對相關領域之學術教育及典章制度著有貢獻,培育學生無數,遍佈今日國內外學術界、產業界,包括不少領袖人物。李教授在研究上的傑出成就及貢獻略述如下:1. 早期對華語語音及語言處理之開拓性貢獻李教授為華語語音處理極少數拓荒者之一。他針對華語文之特有結構,探討在這些特有結構下更有效處理華語之方法;逐年發展出當時最領先之華語各項技術,建構出基礎技術體系。他針對華語所有單音作了最早最完整的電腦處理分析,也針對華語文句建立了最早最完整的電腦分析文法及剖析器,可分析非常複雜的文句;他首先建立系統化的華語韻律規則並用以合成語音訊號,今日韻律仍是華語語音合
    </p>
    <img class="modal-images-w" src="/DigitalArchive/public/talks/data/pdf/images_example.jpg"></img>
    <p class="modal-caption">Figure 1 - 電機之夜師生合影</p>
    <p class="modal-text">
    李琳山教授在1979年中美斷交臺灣風雨飄搖之際放棄在美安定優裕之研究環境回國,在當時相當艱困的國內學術條件下打造在臺灣的研究基地,長期鑽研語音訊號之電腦處理三十餘年並開花結果。他的研究在國際學術界被高度肯定,並在諸多國際學術事務中擔任積極角色並有突出貢獻,有效提升臺灣在國際學術界之地位。他在臺大電機系及資訊系任教三十餘年,曾任臺大資訊系主任5年、中研院資訊所所長6年、臺大研發長3年、臺大電機資訊學院院長3年,任內對相關領域之學術教育及典章制度著有貢獻,培育學生無數,遍佈今日國內外學術界、產業界,包括不少領袖人物。李教授在研究上的傑出成就及貢獻略述如下:1. 早期對華語語音及語言處理之開拓性貢獻李教授為華語語音處理極少數拓荒者之一。他針對華語文之特有結構,探討在這些特有結構下更有效處理華語之方法;逐年發展出當時最領先之華語各項技術,建構出基礎技術體系。他針對華語所有單音作了最早最完整的電腦處理分析,也針對華語文句建立了最早最完整的電腦分析文法及剖析器,可分析非常複雜的文句;他首先建立系統化的華語韻律規則並用以合成語音訊號,今日韻律仍是華語語音合
    </p>`;
  $('#biographyModal').modal('show');
}

function getIcons(nameList) {
  var icon_string = {
    'image': '<span class="glyphicon glyphicon-picture icon" aria-hidden="true"></span>',
    'audio': '<span class="glyphicon glyphicon-headphones icon" aria-hidden="true"></span>',
    'video': '<span class="glyphicon glyphicon-facetime-video icon" aria-hidden="true"></span>',
    'slide': '<span class="glyphicon glyphicon-blackboard icon" aria-hidden="true"></span>',
    'website': '<span class="glyphicon glyphicon-globe icon" aria-hidden="true"></span>'
  };
  ret = '';
  for (let i = 0; i < nameList.length; i++) {
    // console.log(nameList[i]);
    // console.log(icon_string[nameList[i]]);
    ret += icon_string[nameList[i]];
  }
  return ret
}
