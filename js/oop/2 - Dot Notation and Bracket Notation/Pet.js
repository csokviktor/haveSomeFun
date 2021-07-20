class Pet {
  constructor(animal, age, breed, sound) {
    this.animal = animal;
    this.age = age;
    this.breed = breed;
    this.sound = sound;
  }

  speak() {
    console.log(this.sound);
  }

  get activity() {
    const today = new Date();
    if (8 < today.getHours() <= 20) {
      return "playing";
    } else {
      return "sleeping";
    }
  }


  set owner(name){
      this._owner = name;
  }

  get owner(){
      return this._owner;
  }
}

class Owner{
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    set phone(phone){
        const phoneNumNorm = phone.replace(/[^0-9]/g, '');
        this._phone = phoneNumNorm;
    }

    get phone(){
        return this._phone;
    }
}

const ernie = new Pet("dog", 1, "pug", "woof");
const veria = new Pet("dog", 8, "border collie", "woofwoof");
veria.speak();
veria.owner = new Owner('Sanyika', 'Corvin');
veria.owner.phone = '06301625446';

console.log(veria.owner.phone)