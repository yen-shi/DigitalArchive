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

createTimeLine(timedata, 'all');
