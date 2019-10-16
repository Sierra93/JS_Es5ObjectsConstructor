// Конструктор в es5
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log("hello" + this.name);
    }
}
// Добавляем новую функцию в объект User
User.prototype.exit = function (name) {
    console.log("Пользователь " + this.name + " ушел");
}
let ivan = new User("Ivan", 23);
let alex = new User("Alex", 28);
console.log(ivan);
console.log(alex);
ivan.exit();