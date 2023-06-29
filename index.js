// Event class
class Event {
  constructor(name, date, time, location, category, tickets, imageSrc) {
    this.name = name;
    this.date = new Date(date);
    this.time = time;
    this.location = location;
    this.category = category;
    this.tickets = tickets;
    this.imageSrc = imageSrc;
  }

  render() {
    // Create a div element with the class 'event-card'
    const eventCard = document.createElement('div');
    eventCard.className = 'event-card';

    const imageElement = document.createElement('img');
    imageElement.src = this.imageSrc;
    eventCard.appendChild(imageElement);

    const nameElement = document.createElement('h2');
    nameElement.textContent = this.name;
    eventCard.appendChild(nameElement);

    // Create a paragraph element for the date and set its text content
    // format date using `this.date.toDateString()`

    const dateElement = document.createElement('p');
    dateElement.textContent = `Date: ${this.date.toDateString()}`;
    eventCard.appendChild(dateElement);

    const timeElement = document.createElement('p');
    timeElement.textContent = `Time: ${this.time}`;
    eventCard.appendChild(timeElement);

    const locationElement = document.createElement('p');
    locationElement.textContent = `Location: ${this.location}`;
    eventCard.appendChild(locationElement);

    const categoryElement = document.createElement('p');
    categoryElement.textContent = `Category: ${this.category}`;
    eventCard.appendChild(categoryElement);

    const ticketsElement = document.createElement('p');
    ticketsElement.textContent = `Tickets availabe: ${this.tickets}`;
    eventCard.appendChild(ticketsElement);

    // Return the event card element
    return eventCard;
  }
}

// Create some events instances
const events = [
  new Event('BTS Live Concert', '2023-08-15', '10:00:00', 'New York, NY', 'Band', 1000, 'https://m.sakshipost.com/sites/default/files/article_images/2022/08/29/bts-1661754908.jpg'),
  new Event('Coldplay Live Concert', '2023-07-30', '10:00:00', 'Madison Square Garden, New York, NY', 'Band', 1000, 'https://i.scdn.co/image/ab6761610000e5eb989ed05e1f0570cc4726c2d3'),
  new Event('Taylor Swift World Tour', '2023-09-12', '20:00:00', 'Los Angeles, CA', 'Solo Artist', 2000, 'https://www.billboard.com/wp-content/uploads/2023/06/taylor-swift-live-may-2023-b-r-billboard-1548.jpg?w=942&h=623&crop=1'),
  new Event('Ed Sheeran in Concert', '2023-10-05', '18:30:00', 'London, UK', 'Solo Artist', 1200, 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/05/08/16835686875455.jpg'),
  new Event('Beyoncé Formation Tour', '2023-02-09', '19:00:00', 'Houston, TX', 'Solo Artist', 1800, 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Beyonc%C3%A9_-_Tottenham_Hotspur_Stadium_-_1st_June_2023_%2825_of_118%29_%2852946287590%29_%28center_cropped%29.jpg'),
  new Event('Imagine Dragons Live Show', '2023-02-02', '21:00:00', 'Las Vegas, NV', 'Band', 1000, 'https://www.billboard.com/wp-content/uploads/2022/12/imagine-dragons-Press-Photo-Credit-Eric-Ray-Davidson-2022-billboard-1548.jpg'),
  new Event('Bruno Mars World Tour', '2023-01-15', '20:30:00', 'Miami, FL', 'Solo Artist', 1500, 'https://cdns-images.dzcdn.net/images/artist/7f3c0956357c326b2db2cf436f1dc8c5/500x500.jpg'),
  new Event('Maroon 5 Concert', '2023-01-10', '19:00:00', 'San Francisco, CA', 'Band', 1800, 'https://media.npr.org/assets/music/news/2010/09/maroon-e9cb8c5b25b4d1f3e68aa26e6a0ce51cf2ae59d8-s1100-c50.jpg')
];

// Function to render the events
function renderEvents(eventsToRender, categoryFilter = 'all') {
  const eventListElement = document.getElementById('event-list');
  eventListElement.innerHTML = '';

  // Sort the events by date in ascending order
  eventsToRender.sort((a, b) => a.date.getTime() - b.date.getTime());

  eventsToRender.forEach(event => {
    // Apply category filter if it is not set to 'all'
    if (categoryFilter === 'all' || event.category === categoryFilter) {
      const eventCard = event.render();
      eventListElement.appendChild(eventCard);
    }
  });
}


// Function to handle search event
function handleSearch() {
  const searchInput = document.getElementById('search-input');
  const searchTerm = searchInput.value.toLowerCase();

  const categoryFilter = document.getElementById('category-filter').value;

  const filteredEvents = events.filter(event => {
    const eventName = event.name.toLowerCase();
    return eventName.includes(searchTerm);
  });

  renderEvents(filteredEvents, categoryFilter);
}


// Event listener for search input
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', handleSearch);

const categoryFilter = document.getElementById('category-filter');
categoryFilter.addEventListener('change', handleSearch);


// Call the renderEvents function to display the events initially
renderEvents(events);





// Ticket class
class Ticket {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

// User class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
