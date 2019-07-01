const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('customEvent', (num1, num2) => {
    console.log('event triggered');
    console.log(num1 + num2);
});

eventEmitter.emit('customEvent', 1, 2);

class Person extends EventEmitter{
    constructor(name){
        //allows us to use 'this' within the class
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}

//gary is also an instance of the EventEmitter class because Person extends EventEmitter
let gary = new Person('Gary');

gary.on('name', () => console.log('my name is ' + gary.name));
gary.emit('name');