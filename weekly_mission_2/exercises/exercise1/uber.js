const profile = {
  name: "Usereño",
  lastname: "Laster",
  phoneNumber: "+522354845255",
  email: "uslas.r@gmail.com",
  password: "ajkahdkasjhdbashgv",
  image: "image.png",
  getFullName: function () {
    return `${this.name} ${this.lastname}`;
  },
};

console.log("Nombre del usuario: " + profile.getFullName());
console.log("correo: " + profile.email);

const travel = {
  passenger: "Usereño Laster",
  driver: "David Sanchez",
  departure: {longitude:"-99.20201165720125", latitude:"20.242049218106956"},
  destination: [],
  date: new Date('2021-12-17T03:24:00'),
  travelTime: 199,
  price: 299,
  getDriver: function () {
    return this.driver;
  },
  addDestination: function (destination) {
    this.destination.push(destination)
  },
};

console.log("Nombre del pasajero:" + travel.passenger);
console.log("Conductor: " + travel.getDriver());
console.log(travel.destination);
travel.addDestination({longitude:"-99.2107135", latitude:"20.225131"});
console.log(travel.destination);