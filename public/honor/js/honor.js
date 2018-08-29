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
  { 'type': 'national', 'content': ['2016', '中央研究院工程科學組第一屆院士']}
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
      line = createElementFromHTML(
        `<p class="honor-list-title honor-list-font"
            onclick="getModal(this.previousElementSibling.innerHTML, this.innerHTML)">
          ${e['content'][1]}
        </p>`);
      honorContent.appendChild(year);
      honorContent.appendChild(line);
    }
  });
}

function choose(type) {
  clearTimeLine();
  createTimeLine(timedata, type);
}

modalContents = {
  '總統科學獎': `<h4 class="modal-text-title">電資學院熱烈慶賀李琳山教授榮獲總統科學獎</h4>
  <iframe class="modal-movie" src="https://www.youtube.com/embed/NulBlWIhfaM?rel=0&amp;start=565" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  <p class="modal-caption">Video 1 - [台灣名人堂] 2015 總統科學獎特輯</p><p class="modal-text">李琳山教授在1979年中美斷交臺灣風雨飄搖之際放棄在美安定優裕之研究環境回國,在當時相當艱困的國內學術條件下打造在臺灣的研究基地,長期鑽研語音訊號之電腦處理三十餘年並開花結果。他的研究在國際學術界被高度肯定,並在諸多國際學術事務中擔任積極角色並有突出貢獻,有效提升臺灣在國際學術界之地位。他在臺大電機系及資訊系任教三十餘年,曾任臺大資訊系主任5年、中研院資訊所所長6年、臺大研發長3年、臺大電機資訊學院院長3年,任內對相關領域之學術教育及典章制度著有貢獻,培育學生無數,遍佈今日國內外學術界、產業界,包括不少領袖人物。李教授在研究上的傑出成就及貢獻略述如下:1. 早期對華語語音及語言處理之開拓性貢獻李教授為華語語音處理極少數拓荒者之一。他針對華語文之特有結構,探討在這些特有結構下更有效處理華語之方法;逐年發展出當時最領先之華語各項技術,建構出基礎技術體系。他針對華語所有單音作了最早最完整的電腦處理分析,也針對華語文句建立了最早最完整的電腦分析文法及剖析器,可分析非常複雜的文句;他首先建立系統化的華語韻律規則並用以合成語音訊號,今日韻律仍是華語語音合</p>
  <img class="modal-images-h" src="/DigitalArchive/public/honor/img/2015_President_1.jpg"></img>
  <p class="modal-caption">Figure 1 - 總統科學獎獎杯</p>
  <img class="modal-images-w" src="/DigitalArchive/public/honor/img/2015_President_2.jpg"></img>
  <p class="modal-caption">Figure 2 - 總統科學獎獎狀</p>`,
  '中央研究院工程科學組第一屆院士': `<h4 class="modal-text-title">慶賀李琳山教授榮任中研院工程組第一屆唯一國內院士</h4>
  <img class="modal-images-w" src="/DigitalArchive/public/honor/img/2016_Academic_Sinica_1.png"></img>
  <p class="modal-caption">Figure 1 - 台大網站首頁校訊</p>
  <p class="modal-text">在七月初的中研院院士會議中，選出了工程科學組第一屆共6位院士。本校電資學院李琳山教授為6人之中唯一長期在國內耕耘獲致肯定者，其他5位當選人均為海外學者。李教授亦為今日本校工程領域專任教授中唯一榮任中研院院士者。電資學院師生聞訊莫不奔走相告額手稱慶，乃在8月1日舉辦慶賀活動。楊校長親臨致賀，並表示電資學院強將如雲，期待未來有更多人獲國內外各項肯定。李嗣涔前校長亦親臨致賀，並提到李琳山教授在研發會主委任內所完成的臺大第一期邁頂計畫書為臺大邁向頂尖大學描繪出最早的基礎藍圖。李琳山教授希望把所有成果及榮譽歸給過去三十七年來電資學院共兩百多位碩博士生，以及教這些學生各種學問使他們能作最好的研究的全體老師，「這項榮譽是大家的，謝謝大家」。</p>
  <p class="modal-text">李教授長期鑽研語音訊號之電腦處理，為華語語音技術之拓荒者及領航人。他在早年國內研究環境極為艱困之時，考慮華語文之特有結構(例如一字一音、四聲及句型)，探討在這些特有結構下有效處理華語之方法，逐年發展出當時最先進之華語各項技術，建構出基礎技術體系，並將所有成果公開發表，公諸於世。他針對華語所有單音作了最早最完整的電腦處理分析，他針對華語文句建立了最早最完整的電腦分析文法及剖析器，首先建立系統化的華語韻律規則並用以合成語音訊號，也首先展示成功的大字彙華語辨識技術；這些都成為今日所有相關技術之基礎。李琳山教授並建構出諸多成功的華語實驗系統，其中多數為全球首見。語文之電腦處理為社會進步重要動力之一，他的努力間接帶動海峽兩岸華語文相關領域之研究，由早期篳路藍縷國際學界無人聞問至今日成為世界主流，華語語音技術並已在主流產品中暢銷全球，如Apple Siri、Google Now、Cortana(Microsoft)等。這些全球華人愛用的產品雖有今日尖端技術(如巨量數據、深層學習、雲端資訊、對話及搜尋技術)之加持，然其華語語音部份之核心架構，事實上均建築於他早年原創的基礎體系上。他一向是國際學術界公認對華語語音技術作出作最大開拓性貢獻的領袖人物。</p>
  <img class="modal-images-h" src="/DigitalArchive/public/honor/img/2016_Academic_Sinica_2.jpeg"></img>
  <p class="modal-caption">Figure 2 - 慶賀會照片</p>
  <p class="modal-text">90年代中期以後，李教授以原有的基礎技術為核心，進一步發展出網路環境下的新一代語音處理基礎技術體系，逐步孕育出今日居全球領先地位之語音資訊搜尋技術，並完成諸多新一代實驗系統，包括完成時為全球所有語言(包括英語)所僅見的線上課程瀏覽器「虛擬教師」等。此時研究成果已超越過去華語的範疇，適用於任何語言。今日上網搜尋文字資訊已是人人日常生活之一環，未來使用智慧型手機上網根據語音搜尋多媒體資訊將是重要方向。他提出了一系列新技術，完全超越過去的「先辨識，再搜尋」的觀念，而直接在聲音上搜尋，大幅提升搜尋效果，為此一領域開拓了新空間，建立了新技術體系。他在這個領域也是今日全球領袖人物之一。</p>
  <img class="modal-images-h" src="/DigitalArchive/public/honor/img/2016_Academic_Sinica_3.jpg"></img>
  <p class="modal-caption">Figure 3 - 演講照片</p>
  <p class="modal-text">李教授在臺大電機系、資訊系任教三十餘年，作育英才無數；今日國內外電機資訊領域產業界、學術界之中堅份子及領袖人物中，有非常多均是他早年門生。他曾任臺大資訊系主任，中研院資訊所所長，臺大研發會主委，臺大電機資訊學院院長。</p>
  <p class="modal-text">李琳山教授在國內資訊電機相關領域發展之關鍵年代，在不同崗位上擔任重要工作，為領袖人物之一，對國內相關領域之發展貢獻卓著。1979中美斷交時李琳山教授率先放棄在美國優越研究環境，回到當年物質條件極為艱困的臺大任教，打造在臺灣的研究環境；並以身作則大力勉勵當時成群赴美留學定居的臺大學生，出國時能「西天取經，志在中土」。日後大批技術人才回國貢獻所學及大批優秀學生在國內工作定居，成為國內電子資訊產業蓬勃發展之一重要基礎，他應屬過程中的諸多幕後推手之一。</p>
  `
};

function getModelTitle(str) {
  return `<div class="modal-title">
      <h3 class="modal-subtitle">
        ${ str }
      </h3>
      <hr class="divider" />
    </div>
    <br>`;
} 

if(typeof(String.prototype.trim) === "undefined")
{
  String.prototype.trim = function() 
  {
    return String(this).replace(/^\s+|\s+$/g, '');
  };
}

function getModal(year, name) {
  modalBody = document.getElementsByClassName('modal-body')[0];
  var title = '&nbsp;&nbsp;' + year.trim() + '&nbsp;' + name;
  modalBody.innerHTML = getModelTitle(title) + //modalContents[name.trim()];
                        (modalContents.hasOwnProperty(name.trim()) ? modalContents[name.trim()] : '');
  $('#biographyModal').modal('show');
}

createTimeLine(timedata, 'all');
