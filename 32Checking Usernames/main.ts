// Array of current users
let current_users = ["Minza", "Ahmed", "Yahya", "Maliha", "ayesha"];

// Array of new users
let new_users = ["Ahsan", "Bano", "Ishaq", "Maliha", "Ayesha"];

// Loop through new_users to check the usernames availability

new_users.forEach(new_one_user =>{

    // Making a condition for username already exists and save in our_condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Making different message usin If-Else statements
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This username ${new_one_user} is available`)
    }
})