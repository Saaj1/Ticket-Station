// Event class
class Event {
  constructor(name, date, time, location, category, tickets) {
    this.name = name;
    this.date = new Date(date);
    this.time = time;
    this.location = location;
    this.category = category;
    this.tickets = tickets;
  }
}

//create some events
const event1 = new Event('BTS Live Concert', '30-07-2023', '10:00:00', 'New York, NY', 'Band', 1000);
const event2 = new Event('Coldplay Live Concert', '2023-07-30', 'Madison Square Garden, New York, NY', 'Band', 1000);
const event3 = new Event('Taylor Swift World Tour', '2023-08-15', 'Staples Center, Los Angeles, CA', 'Solo Artist', 800);
const event4 = new Event('Ed Sheeran in Concert', '2023-09-05', 'Wembley Stadium, London, UK', 'Solo Artist', 1200);
const event5 = new Event('Beyoncé Formation Tour', '2023-09-20', 'Mercedes-Benz Superdome, New Orleans, LA', 'Solo Artist', 1500);
const event6 = new Event('Imagine Dragons Live Show', '2023-10-10', 'Red Rocks Amphitheatre, Denver, CO', 'Band', 900);
const event7 = new Event('Bruno Mars World Tour', '2023-10-25', 'Barclays Center, Brooklyn, NY', 'Solo Artist', 1000);
const event8 = new Event('Maroon 5 Concert', '2023-11-05', 'The O2 Arena, London, UK', 'Band', 1100);
const event9 = new Event('Adele Live Performance', '2023-11-20', 'The SSE Arena, Wembley, UK', 'Solo Artist', 800);
const event10 = new Event('One Direction Reunion Show', '2023-12-10', 'MetLife Stadium, East Rutherford, NJ', 'Band', 1300);

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
