class Pokemon {
    constructor(name) {
        this.name = name
    }

    sayHello() {
        console.log('Hello there!')
    }

    sayMessage(message) {
        console.log(message)
    }
}

module.exports = Pokemon