class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.followers} followers`,
    );
  }
}

// для проверки
const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo();
