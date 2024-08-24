
// Assuming users.json is in the same directory

function checkCredentials(username, password) {
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return true; // User found
        }
    }
    return false; // User not found
}

// Example usage
const username = "user1";
const password = "password1";
const isAuthenticated = checkCredentials(username, password);

if (isAuthenticated) {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}
