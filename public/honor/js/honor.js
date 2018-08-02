timedata = [
  { 'type': 'year', 'content': '1980' },
  { 'type': 'national', 'content': ['1983', '中國工程師學會 優秀青年工程師獎']},
  { 'type': 'national', 'content': ['1983', '中國工程師學會 優秀青年工程師獎']},
  { 'type': 'national', 'content': ['1984', '中華民國第二十二屆十大傑出青年']},
  { 'type': 'national', 'content': ['1986', '中華民國青年獎章']},
  { 'type': 'national', 'content': ['1987', '教育部教學特優教授獎']},
  { 'type': 'year', 'content': '1990' },
  { 'type': 'national', 'content': ['1991', '中國工程師學會 傑出工程教授獎']},
  { 'type': 'national', 'content': ['1991', '中國工程師學會 電機工程獎章']},
  { 'type': 'national', 'content': ['1993', '第三十七屆教育部工科學術獎']},
  { 'type': 'global', 'content': ['1993', 'Institute of Electrical and Electronics Engineers (IEEE) Fellow']},
  { 'type': 'global', 'content': ['1995', 'Distinguished Lecturer, IEEE Computer Society']},
  { 'type': 'national', 'content': ['1998', '資訊榮譽獎章']},
  { 'type': 'national', 'content': ['1999', '國科會特約研究員']},
  { 'type': 'year', 'content': '2000' },
  { 'type': 'national', 'content': ['2002', '傑出人才基金會傑出人才講座']},
  { 'type': 'national', 'content': ['2003', '國科會技術轉移績優人員']},
  { 'type': 'national', 'content': ['2007', '第八屆教育部國家講座主持人']},
  { 'type': 'global', 'content': ['2007', 'Distinguished Lecturer, IEEE Signal Processing Society']},
  { 'type': 'year', 'content': '2010' },
  { 'type': 'global', 'content': ['2010', 'International Speech Communication Association (ISCA) Fellow']},
  { 'type': 'global', 'content': ['2011', 'Meritorious Service Award, IEEE Signal Processing Society']},
  { 'type': 'national', 'content': ['2013', '台灣大學服務傑出獎']},
  { 'type': 'global', 'content': ['2014', 'Exemplary Global Service Award, IEEE Communication Society']},
  { 'type': 'national', 'content': ['2015', '總統科學獎']},
  { 'type': 'national', 'content': ['2016', '中研院工程科學組第一屆院士']}
];

const createElementFromHTML = (htmlString) => {
  let div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes
  return div.firstChild;
}

honorContent = document.getElementsByClassName('honor-container')[0];
function clearTimeLine() {
  while (honorContent.firstChild) {
    honorContent.removeChild(honorContent.firstChild);
  }
}
function createTimeLine(arr, type) {
  arr.forEach((e) => {
    if (e['type'] == 'year') {
      honorContent.appendChild(
        createElementFromHTML(`<h3 class="honor-year"><span>${e['content']}</span></h3>`)
      );
    }
    else if (type == 'all' || e['type'] == type) {
      year = createElementFromHTML(`<p class="honor-list-year honor-list-font honor-list-${e['type']}">${e['content'][0]}</p>`);
      line = createElementFromHTML(`<p class="honor-list-title honor-list-font">${e['content'][1]}</p>`);
      honorContent.appendChild(year);
      honorContent.appendChild(line);
    }
  });
}

function choose(type) {
  clearTimeLine();
  createTimeLine(timedata, type);
}

function getModal(dom) {
  // console.log('Click from: ', dom);
  // console.log('Click from: ', dom.previousElementSibling);
  // console.log('Click from: ', dom.innerHTML);
  // Use dom id to request content of modal
  modalBody = document.getElementsByClassName('modal-body')[0];
  
  modalBody.innerHTML = 
    `<div class="modal-title">
      <h2 class="modal-subtitle">
        ${ dom.previousElementSibling.innerHTML }
      </h2>
      <hr class="divider" />
    </div>
    <br>
    <iframe class="modal-movie" src="https://www.youtube.com/embed/NulBlWIhfaM?rel=0&amp;start=565" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    <p class="modal-caption">Video 1 - [台灣名人堂] 2015 總統科學獎特輯</p>
    <p class="modal-text">
    李琳山教授在1979年中美斷交臺灣風雨飄搖之際放棄在美安定優裕之研究環境回國,在當時相當艱困的國內學術條件下打造在臺灣的研究基地,長期鑽研語音訊號之電腦處理三十餘年並開花結果。他的研究在國際學術界被高度肯定,並在諸多國際學術事務中擔任積極角色並有突出貢獻,有效提升臺灣在國際學術界之地位。他在臺大電機系及資訊系任教三十餘年,曾任臺大資訊系主任5年、中研院資訊所所長6年、臺大研發長3年、臺大電機資訊學院院長3年,任內對相關領域之學術教育及典章制度著有貢獻,培育學生無數,遍佈今日國內外學術界、產業界,包括不少領袖人物。李教授在研究上的傑出成就及貢獻略述如下:1. 早期對華語語音及語言處理之開拓性貢獻李教授為華語語音處理極少數拓荒者之一。他針對華語文之特有結構,探討在這些特有結構下更有效處理華語之方法;逐年發展出當時最領先之華語各項技術,建構出基礎技術體系。他針對華語所有單音作了最早最完整的電腦處理分析,也針對華語文句建立了最早最完整的電腦分析文法及剖析器,可分析非常複雜的文句;他首先建立系統化的華語韻律規則並用以合成語音訊號,今日韻律仍是華語語音合
    </p>
    <img class="modal-images" src="/Digital_Archive/public/honor/img/2015_President_1.jpg"></img>
    <p class="modal-caption">Figure 1 - 總統科學獎獎杯</p>
    <img class="modal-images" src="/Digital_Archive/public/honor/img/2015_President_2.jpg"></img>
    <p class="modal-caption">Figure 1 - 總統科學獎獎狀</p>
    `;
  $('#biographyModal').modal('show');
}

createTimeLine(timedata, 'all');
