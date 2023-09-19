'use strict'

{
　// ---SP用メニューボタン
  const button = document.getElementById('menu-button');
  const overlay = document.querySelector('.overlay');

  button.addEventListener('click', () => {
    if (button.classList.contains('active')) { // activeクラスが付与されている場合
      button.classList.remove('active'); // activeクラスを除去
      overlay.classList.remove('show');
    } else {
      button.classList.add('active'); // activeクラスを付与
      overlay.classList.add('show');
    }
  });
	
	// ---SP用オーバーレイメニュー
	const contact = document.querySelector('.ol-contact');
	const access = document.querySelector('.ol-access');
	
	contact.addEventListener('click', () => {
    if (button.classList.contains('active')) { // activeクラスが付与されている場合
      button.classList.remove('active'); // activeクラスを除去
      overlay.classList.remove('show');
    } else {
      button.classList.add('active'); // activeクラスを付与
      overlay.classList.add('show');
    }
  });
	
	access.addEventListener('click', () => {
    if (button.classList.contains('active')) { // activeクラスが付与されている場合
      button.classList.remove('active'); // activeクラスを除去
      overlay.classList.remove('show');
    } else {
      button.classList.add('active'); // activeクラスを付与
      overlay.classList.add('show');
    }
  });

  // ---カレンダー用共通項目
  const today = new Date();

  let year;
  let month;
  let dayoff;

  function getCalendarHead() {
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay();

    for (let i = 0; i < n; i++) {
      // 30
      // 29, 30
      // 28, 29, 30
      dates.unshift({
        date: d - i,
        isToday: false,
        isDisabled: true,
      });
    }

    return dates;
  }

  function getCalendarBody() {
    const dates = []; // date: 日付, day: 曜日
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }

    if (year === today.getFullYear() && month === today.getMonth()) {
      dates[today.getDate() - 1].isToday = true;
    }

    return dates;
  }

  function getCalendarTail() {
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();

    for (let i = 1; i < 7 - lastDay; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
      });
    }

    return dates;
  }

    // ---カレンダー（１０月）
  year = Number(document.querySelector('.oct-year-month').getAttribute('data-year'));
  month = Number(document.querySelector('.oct-year-month').getAttribute('data-month'));
  dayoff = [
    Number(document.querySelector('.oct-dayoff').getAttribute('data-off1')),
    Number(document.querySelector('.oct-dayoff').getAttribute('data-off2')),
    Number(document.querySelector('.oct-dayoff').getAttribute('data-off3')),
    Number(document.querySelector('.oct-dayoff').getAttribute('data-off4'))
  ];

  function clearCalendar10() {
    const tbody = document.querySelector('.oct-calender');

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }

  function renderTitle10() {
    const title = `${year}/${String(month + 1).padStart(2, '0')}`;
    document.querySelector('.oct-title').textContent = title;
  }

  function renderWeeks10() {
    const dates = [
      ...getCalendarHead(),
      ...getCalendarBody(),
      ...getCalendarTail(),
    ];
    const weeks = [];
    const weeksCount = dates.length / 7;

    for (let i = 0; i < weeksCount; i++) {
      weeks.push(dates.splice(0, 7));
    }

    weeks.forEach(week => {
      const tr = document.createElement('tr');
      week.forEach(date => {
        const td = document.createElement('td');

        td.textContent = date.date;

        // 店休日の場合は背景色を変更
        for (let i = 0; i < dayoff.length; i++) {
          if (date.date === dayoff[i]) {
            td.classList.add('dayoff');
          }
        }

        if (date.isToday) {
          td.classList.add('today');
        }
        if (date.isDisabled) {
          td.classList.add('disabled');
          td.classList.remove('dayoff');
        }    
      
        tr.appendChild(td);
      });
      document.querySelector('.oct-calender').appendChild(tr);
    });
  }

  function createCalendar10() {
    clearCalendar10();
    renderTitle10();
    renderWeeks10();
  }

  // カレンダー呼び出し処理
  createCalendar10();

  // ---カレンダー（９月）
  year = Number(document.querySelector('.sep-year-month').getAttribute('data-year'));
  month = Number(document.querySelector('.sep-year-month').getAttribute('data-month'));
  dayoff = [
    Number(document.querySelector('.sep-dayoff').getAttribute('data-off1')),
    Number(document.querySelector('.sep-dayoff').getAttribute('data-off2')),
    Number(document.querySelector('.sep-dayoff').getAttribute('data-off3'))
  ];

  function clearCalendar9() {
    const tbody = document.querySelector('.sep-calender');

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }

  function renderTitle9() {
    const title = `${year}/${String(month + 1).padStart(2, '0')}`;
    document.querySelector('.sep-title').textContent = title;
  }

  function renderWeeks9() {
    const dates = [
      ...getCalendarHead(),
      ...getCalendarBody(),
      ...getCalendarTail(),
    ];
    const weeks = [];
    const weeksCount = dates.length / 7;

    for (let i = 0; i < weeksCount; i++) {
      weeks.push(dates.splice(0, 7));
    }

    weeks.forEach(week => {
      const tr = document.createElement('tr');
      week.forEach(date => {
        const td = document.createElement('td');

        td.textContent = date.date;

        // 店休日の場合は背景色を変更
        for (let i = 0; i < dayoff.length; i++) {
          if (date.date === dayoff[i]) {
            td.classList.add('dayoff');
          }
        }

        if (date.isToday) {
          td.classList.add('today');
        }
        if (date.isDisabled) {
          td.classList.add('disabled');
          td.classList.remove('dayoff');
        }        
      
        tr.appendChild(td);
      });
      document.querySelector('.sep-calender').appendChild(tr);
    });
  }

  function createCalendar9() {
    clearCalendar9();
    renderTitle9();
    renderWeeks9();
  }

  // カレンダー呼び出し処理
  createCalendar9();
	
}
