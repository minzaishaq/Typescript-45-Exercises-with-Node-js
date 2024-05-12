// Making a funtion
function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`)
}

// Calling a function with by-default values
make_shirt();

// Calling a function now with by-default message
make_shirt("Medium")

// Calling a funtion now with Small size and Different print message
make_shirt("Small", "I am a Programmer")