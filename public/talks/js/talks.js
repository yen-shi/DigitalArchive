function createPanel(object) {
  ret = '<div id="accordion" class="panel-group">';
  for (var obj in object) {
    ret += getMainPanel(obj)
  }
  ret += '</div>';
  return ret;
}

function getMainPanel(object) {
  ret = `
    <div class="panel-default">
      <div class="panel-heading-custom">
        <h1 class="panel-title-custom">
          <a class="panel-title-text-custom"
             data-toggle="collapse"
             data-parent="#accordion"
             href="#collapseOne">
            ${object['mainTitle']}
          </a>
        </h1>
      </div>
      <div id="collapseOne" class="panel-collapse collapse in">
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
  for (var obj in object) {
    ret += `<h3> ${obj['minorTitle']} </h3>`;
    ret += '<div class="panel-body-text-custom">';
    for (var list in obj['minorList']) {
      ret += getContentPanel(list);
    }
    ret += '<hr class="divider" /></div>';
  }
  return ret;
}

function getContentPanel(object) {
  ret = `
    <h4 class="panel-body-text-title-custom">
      ${object['title']}
      ${getIcons(object['icon'])}
    </h4>
    <p>
      ${object['content']}
    </p>
  `;
  return ret;
}

icon_string = {
  'image': '<span class="glyphicon glyphicon-picture icon" aria-hidden="true"></span>',
  'video': '<span class="glyphicon glyphicon-facetime-video icon" aria-hidden="true"></span>',
  'slide': '<span class="glyphicon glyphicon-picture icon" aria-hidden="true"></span>',
  'website': '<span class="glyphicon glyphicon-facetime-video icon" aria-hidden="true"></span>'
}

function getIcons(nameList) {
  ret = '';
  for (var name in nameList) {
    ret += icon_string[name];
  }
  return ret
}
