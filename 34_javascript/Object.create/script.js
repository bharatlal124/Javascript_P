// Instructions:
// 1. Implement the updateProfile function to update the user profile using Object.assign.
// 2. Implement the freezeProfile function to freeze the user profile using Object.freeze.

function updateProfile(user, updates) {
   
    return Object.assign({}, user, updates);
}

function freezeProfile(user) {
    
    return Object.freeze(user);
}

const userProfile = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com"
};

const updates = {
    age: 26,
    email: "john.doe.updated@example.com"
};


const updatedProfile = updateProfile(userProfile, updates);
console.log("Updated Profile:", updatedProfile);


const frozenProfile = freezeProfile(updatedProfile);

console.log("Frozen Profile:", frozenProfile);
