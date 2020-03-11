const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();
// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
  {
    routeName: 'josh',
    name: "Josh",
    phone: "555-1212",
    email: "js@gmail.com",
    id: 205
  },
  {
    routeName: 'lysie',
    name: "Lysie",
    phone: "555-1350",
    email: "js@gmail.com",
    id: 650
  },
  
];
 
const waitList = []

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});

app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/view.html"));
});

app.get("/reserve", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/make.html"));
  });

  app.get("/api/reservations", (req, res) => {
    return res.json(reservations);
  });
  
app.get("/api/reservations/:reservation", (req, res) => {
  const reservation = req.params.reservation;
  console.log(reservation);

      let found;

      reservations.forEach(char => {
          if(reservation === char.routeName) {
          found = char;
          return res.json(reserv)
        } 
      });

      res.json(found || { success: false });
    });

app.post("/api/reservations", (req, res) => {
  const newReservation = req.body;
  newReservation.routeName = req.body.name.split(" ").join("").toLowerCase();
  console.log(newReservation);
  if (reservations.length < 5) {
    reservations.push(newReservation);
    res.json(newReservation);
  } else {
  waitlist.push(newReservation);
  }
  res.json(newReservation);
});

app.listen(PORT, () => {
  console.log(`Server is listening port: ${PORT}`);
});

