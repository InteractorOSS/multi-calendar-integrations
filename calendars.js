// Array of month names for display in the calendar header
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Mock events containing date strings (YYYY-MM-DD) and titles
const events = [
  { date: '2025-08-05', title: 'Team Standup' },
  { date: '2025-08-10', title: 'Project Deadline' },
  { date: '2025-08-15', title: 'Client Meeting' },
  { date: '2025-08-20', title: 'Product Launch' },
  { date: '2025-09-01', title: 'Kickoff Workshop' }
];

// Current date object for highlighting "today"
let today = new Date();
// Index of the month currently being displayed (0 = January)
let currentMonth = today.getMonth();
// Year currently being displayed
let currentYear = today.getFullYear();
// Holds the previously selected date cell DOM element
let selectedCell = null;

// References to DOM elements for updating content
const monthYear = document.getElementById('month-year');        // Header text element
const datesDiv = document.getElementById('dates');             // Container for date cells
const prevBtn = document.getElementById('prev');               // Button to go to previous month
const nextBtn = document.getElementById('next');               // Button to go to next month
const eventList = document.getElementById('event-list');       // Sidebar list of events

/**
 * Converts year, month, day integers into a YYYY-MM-DD formatted string.
 * @param {number} year - Full year (e.g., 2025)
 * @param {number} month - Month index (0-based)
 * @param {number} day - Day of month
 * @returns {string} Formatted date string
 */
function formatDate(year, month, day) {
  const mm = String(month + 1).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
}

/**
 * Renders the calendar grid for the given month and year.
 * Highlights today's date and marks days with events.
 * @param {number} month - Month index to render
 * @param {number} year - Year to render
 */
function renderCalendar(month, year) {
  // Clear existing dates
  datesDiv.innerHTML = '';
  // Update header text
  monthYear.textContent = `${monthNames[month]} ${year}`;

  // Determine starting day of week and number of days in month
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create blank cells for days before the 1st
  for (let i = 0; i < firstDay; i++) {
    datesDiv.appendChild(document.createElement('div'));
  }

  // Create a cell for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dateCell = document.createElement('div');
    dateCell.classList.add('date-cell');
    const cellDate = formatDate(year, month, day);

    // Span for the day number
    const numSpan = document.createElement('span');
    numSpan.textContent = day;

    // Highlight "today" with a special class
    if (cellDate === formatDate(today.getFullYear(), today.getMonth(), today.getDate())) {
      dateCell.classList.add('today');
      numSpan.classList.add('today-circle');
    }
    dateCell.appendChild(numSpan);

    // Mark days that have events
    const dayEvents = events.filter(ev => ev.date === cellDate);
    if (dayEvents.length) {
      dateCell.classList.add('has-event');
      dateCell.title = dayEvents.map(ev => ev.title).join(', ');
    }

    // Click handler to select date cell and show events
    dateCell.addEventListener('click', () => {
      if (selectedCell) selectedCell.classList.remove('selected');
      dateCell.classList.add('selected');
      selectedCell = dateCell;
      showEvents(cellDate);
    });

    datesDiv.appendChild(dateCell);
  }
}

/**
 * Displays events for the provided date in the sidebar.
 * @param {string} date - Date string in YYYY-MM-DD format
 */
function showEvents(date) {
  // Filter events matching the date
  const dayEvents = events.filter(ev => ev.date === date);
  // Update event list header
  eventList.innerHTML = `<h3>Events on ${date}</h3>`;
  if (dayEvents.length) {
    // Append each event as a list item
    dayEvents.forEach(ev => {
      const div = document.createElement('div');
      div.classList.add('event-item');
      div.textContent = ev.title;
      eventList.appendChild(div);
    });
  } else {
    // No events message
    eventList.innerHTML += '<p>No events for this date.</p>';
  }
}

// Navigate to previous month
prevBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) { currentMonth = 11; currentYear--; }
  renderCalendar(currentMonth, currentYear);
  if (selectedCell) selectedCell.classList.remove('selected');
  selectedCell = null;
  eventList.innerHTML = '<h3>Events</h3><p>Select a date to view events.</p>';
});

// Navigate to next month
nextBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  renderCalendar(currentMonth, currentYear);
  if (selectedCell) selectedCell.classList.remove('selected');
  selectedCell = null;
  eventList.innerHTML = '<h3>Events</h3><p>Select a date to view events.</p>';
});

// Initial render of the calendar
renderCalendar(currentMonth, currentYear);