// Define an array of clock objects, each with an element ID and a timezone
const clocks = [
  { id: 'clock-ny', city: 'New York', timeZone: 'America/New_York' },
  { id: 'clock-lon', city: 'London', timeZone: 'Europe/London' },
  { id: 'clock-tokyo', city: 'Tokyo', timeZone: 'Asia/Tokyo' },
  { id: 'clock-ca', city: 'California', timeZone: 'America/Los_Angeles' },
  { id: 'clock-ph', city: 'Philippines', timeZone: 'Asia/Manila' },
  { id: 'clock-th', city: 'Thailand', timeZone: 'Asia/Bangkok' }
];

// Function to update all clocks on the page
function updateClocks() {
  // Loop through each clock object in the array
  clocks.forEach(clock => {
    // Get the current date and time
    const now = new Date();
    // Set formatting options for the time string, including the timezone
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, // Use 24-hour format
      timeZone: clock.timeZone // Set the specific timezone
    };
    // Format the current time as a string for the given timezone
    const timeString = now.toLocaleTimeString('en-US', options);
    // Update the corresponding HTML element with the formatted time
    const el = document.getElementById(clock.id);
    if (el) el.textContent = timeString;
  });
}

// Call updateClocks every second to keep the clocks current
setInterval(updateClocks, 1000);
// Initial call to display the clocks immediately on page load
updateClocks();