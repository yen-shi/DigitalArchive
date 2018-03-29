const data = [
  {
    "mainTitle": "得獎致詞 &nbsp; Acceptance Speeches",
    "mainList": [
      {
        "minorTitle": "得獎致詞 (待處理)",
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
        "minorTitle": "科普 (待處理)",
        "minorList": [
          {
            "title": "跨領域餐會開場致詞-芝麻開門-語音技術的前世今生",
            "icon": ["image", "video", "slide", "website"],
            "content": "content"
          },
          {
            "title": "科學月刊 李琳山：很多中文語音輸入產品都用到我的研究成果，但我沒賺到任何錢",
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
        "minorTitle": "研究或生涯回顧 (待處理)",
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
        "minorTitle": "信號與人生",
        "minorList":
        [
          {
            "title": "2016/06/24 信號與人生",
            "icon": ["image", "video", "slide", "website"],
            "content": "content"
          },
          {
            "title": "2013/06/10 信號與人生",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          },
          {
            "title": "2008/XX/XX 信號與人生",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          },
          {
            "title": "2006/XX/XX 信號與人生",
            "icon": ["image", "video", "slide", "website"],
            "content": "content2"
          },
          {
            "title": "2005/10/01 信號與人生",
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
        "minorTitle": "婚禮致詞 (待處理)",
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
    ret += `<h3> ${object[i]['minorTitle']} </h3>`;
    ret += `<hr class="divider" />`;
    for (let j = 0; j < object[i]['minorList'].length; j++) {
      ret += getContentPanel(object[i]['minorList'][j]);
    }
  }
  return ret;
}

function getContentPanel(object) {
  ret = `
    <div class="panel-body-text-custom">
      <h4 class="panel-body-text-title-custom">
        ${object['title']}
        ${getIcons(object['icon'])}
      </h4>
      <p>
        ${object['content']}
      </p>
      <hr class="divider" />
    </div>
  `;
  return ret;
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
