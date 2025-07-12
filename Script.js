// Clock
function updateClock() {
  const now = new Date();
  const clockEl = document.getElementById('clock');
  clockEl.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Calendar
function generateCalendar() {
  const calendarEl = document.getElementById('calendar');
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let html = `<h2>${now.toLocaleString('default', { month: 'long' })} ${year}</h2>`;
  html += '<table><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';

  for (let i = 0; i < firstDay; i++) {
    html += '<td></td>';
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday = day === today ? 'today' : '';
    html += `<td class="${isToday}">${day}</td>`;
    if ((day + firstDay) % 7 === 0) html += '</tr><tr>';
  }

  html += '</tr></table>';
  calendarEl.innerHTML = html;
}
generateCalendar();

// Weather
async function loadWeather() {
  const weatherEl = document.getElementById('weather');
  try {
    const response = await fetch('https://wttr.in/?format=%l:+%c+%t');
    const weatherText = await response.text();
    weatherEl.textContent = weatherText;
  } catch (e) {
    weatherEl.textContent = 'Weather data unavailable.';
  }
}
loadWeather();
