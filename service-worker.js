// service-worker.js

self.addEventListener('fetch', (event) => {
  // Intercept and handle fetch events here
  const url = new URL(event.request.url);

  if (url.pathname === '/data.json') {
    event.respondWith(fetchData(event));
  }
});

self.addEventListener('backgroundfetchsuccess', (event) => {
  event.waitUntil(handleBackgroundFetch(event));
});

async function fetchData(event) {
  // Handle fetch events for 'data.json'
  const fetchOptions = {
    method: 'GET',
  };

  const bgFetch = await event.preloadResponse;

  // If background fetch is available, use it
  if (bgFetch) {
    return bgFetch;
  }

  // Otherwise, perform a regular fetch
  return fetch('data.json', fetchOptions);
}

async function handleBackgroundFetch(event) {
  const bgFetch = await event.registration.match('data-fetch');

  if (!bgFetch) {
    console.error('Background fetch not found.');
    return;
  }

  const responseData = await bgFetch.getResponse();
  const data = await responseData.json();

  // Process the fetched data as needed
  const lastUpdateTimestamp = new Date(data.Infogempa.gempa.DateTime).getTime();

  // Perform actions based on the data (e.g., show notification)
  if (lastUpdateTimestamp > storedTimestamp) {
    showNotification('Earthquake Update', `Magnitude ${data.Infogempa.gempa.Magnitude} earthquake occurred at ${data.Infogempa.gempa.Wilayah}.`);
    storedTimestamp = lastUpdateTimestamp;
  }
}

function showNotification(title, message) {
  self.registration.showNotification(title, {
    body: message,
    icon: 'path/to/icon.png',
  });
}

// Initialize storedTimestamp based on your logic
let storedTimestamp = 0;
