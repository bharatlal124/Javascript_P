// Complete the createUserObjects function
// Do not alter the starter Code
const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];

function createUserObjects(ids, names, images) {
    // Implement your function here
    const userObjects = ids.map((id, index) => ({
        id,
        name: names[index],
        image: images[index]
    }));

    return userObjects;
}

// Example usage:
const result = createUserObjects(ids, names, images);
console.log(result);
