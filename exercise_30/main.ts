// Q30

let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];

usernames.forEach((username) =>{
    if(username == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }else{
        console.log(`Helllo ${username}, thank you for loggin in again.`);
    }
});