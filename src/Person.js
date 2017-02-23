class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    let say = document.createElement('p');
    say.textContent = "Hi, my name is " + this.name;
    return say;
  }
}

export {Person}