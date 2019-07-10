function getDaysOfMonth(year, month) {
  var date = new Date(year, month, 0);
  return date.getDate();
}

function getWeekOfDays(...rest) {
  if(rest.length !== 3) throw new Error('param is not engou');
  var date = new Date(rest.join('-'));
  return date.getDay();
}

function getDaysOfPreMonth(year, month) {
  var date;
  if (month === 1) {
    date = new Date( year-1, 12, 0 );
  } else if (month === 12) {
    date = new Date( year+1, 1, 0);
  } else {
    date = new Date(year, month-1, 0);
  }
  return date.getDate();
}
function renderContent(year, month, day) {
  var preBlank = getWeekOfDays(year, month, 1);
      preBlank = preBlank === 0 ? 7 : preBlank;
      
  var lastMthDays = getDaysOfPreMonth(year, month);
  var lastStart = lastMthDays - preBlank;
  var days = getDaysOfMonth(year, month);
  var lastBlank = Math.abs( (preBlank + days) %7 -7);
  if(lastBlank !== 7) {
    lastBlank = Math.ceil( (days+preBlank)/7 ) === 6 ? lastBlank : lastBlank + 7;
  }
  var str = '';
  for(var i=0; i<preBlank; i++) {
    ++lastStart;
    str += '<span data-type="preMonth" data-month="'+month+'" data-day="'+(lastStart)+'" class="not-current-mth">'+(lastStart)+'</span>';
  }

  for(var i=0; i<days; i++) {
    if (day === (i+1)) {
      str += '<span id="current'+(i+1)+'" data-type="current" data-day="'+(i+1)+'" class="current-day">'+(i+1)+'</span>';
    } else {
      str += '<span id="current'+(i+1)+'" data-type="current" data-day="'+(i+1)+'" class="active-day">'+(i+1)+'</span>';
    }
  }

  for(var i=0; i<lastBlank; i++) {
    str += '<span data-type="nextMonth" data-month="'+month+'" data-day="'+(i+1)+'" class="not-current-mth">'+(i+1)+'</span>';
  }

  return str;
}