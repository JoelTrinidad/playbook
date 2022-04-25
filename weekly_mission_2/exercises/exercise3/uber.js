class Profile {
  constructor(name, lastname, phoneNumber, email){
    this.name = name;
    this.lastname = lastname;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = "ajkahdkasjhdbashgv";
    this.image = "image.png";
  }
   getFullName () {
    return `${this.name} ${this.lastname}`;
  }
};

const profile = new Profile("Usereño", "Laster", "+522354845255", "uslas.r@gmail.com");
console.log("Nombre del usuario: " + profile.getFullName());
console.log("correo: " + profile.email);

class Travel {
  constructor(passenger, driver){
    this.passenger = passenger;
    this.driver = driver;
    this.departure = {longitude:"-99.20201165720125", latitude:"20.242049218106956"};
    this.destination = [];
    this.date = new Date('2021-12-17T03:24:00')
    this.travelTime = 199;
    this.price = 299;
  }
  getDriver () {
    return this.driver;
  }
  addDestination (destination) {
    this.destination.push(destination)
  }
};

const travel = new Travel("Usereño Laster", "David Sanchez")
console.log("Nombre del pasajero:" + travel.passenger);
console.log("Conductor: " + travel.getDriver());
console.log(travel.destination);
travel.addDestination({longitude:"-99.2107135", latitude:"20.225131"});
console.log(travel.destination);