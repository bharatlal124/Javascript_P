function main(){
    class User {
    #name;
    #email;
    #password;
    #posts;
    constructor(name, email, password) {
      this.#name = name;
      this.#email = email;
      this.#password = password;
      this.#posts = [];
    }
  
    get name() {
      return this.#name;
    }
  
    set name(name) {
      this.#name = name;
    }
  
    get email() {
      return this.#email;
    }
  
    set email(email) {
      this.#email = email;
    }
  
    get password() {
      return this.#password;
    }
  
    set password(password) {
      this.#password = password;
    }
  
    addPost(post) {
      this.#posts.push(post);
    }
  
    deletePost(post) {
      const index = this.#posts.indexOf(post);
      if (index !== -1) {
        this.#posts.splice(index, 1);
      }
    }
    displayPosts() {
      console.log(`Posts by ${this.#name}:`);
      this.#posts.forEach((post) => {
        console.log(`- ${post.title}`);
      });
    }
  }
  
  class Post extends User {
    #title;
    #content;
    #date;
    #likeCount;
    constructor(name, email, password, title, content, date) {
      super(name, email, password);
      this.#title = title;
      this.#content = content;
      this.#date = date;
      this.#likeCount = 0;
    }
  
    get title() {
      return this.#title;
    }
  
    set title(title) {
      this.#title = title;
    }
  
    get content() {
      return this.#content;
    }
  
    set content(content) {
      this.#content = content;
    }
  
    get date() {
      return this.#date;
    }
  
    set date(date) {
      this.#date = date;
    }
  
    get likeCount() {
      return this.#likeCount;
    }
  
    addLike() {
      this.#likeCount++;
    }
  
    displayDetails() {
      console.log(`Owner: ${this.name}`);
      console.log(`Title: ${this.#title}`);
      console.log(`Content: ${this.#content}`);
      console.log(`Date: ${this.#date}`);
      console.log(`Likes: ${this.#likeCount}`);
    }
  }
  const user1 = new User("John", "john@example.com", "password123");
  const post1 = new Post(
    "John",
    "john@example.com",
    "password123",
    "My first post",
    "Lorem ipsum dolor sit amet",
    "2021-01-01"
  );
  const post2 = new Post(
    "John",
    "john@example.com",
    "password123",
    "My second post",
    "Consectetur adipiscing elit",
    "2021-01-02"
  );
  
  user1.addPost(post1);
  user1.addPost(post2);
  
  post1.addLike();
  post1.addLike();
  
  user1.displayPosts();
  // Output:
  // Posts by John:
  // - My first post
  // - My second post
  
  post1.displayDetails();
  // Output:
  // Owner: John
  // Title: My first post
  // Content: Loremipsum dolor sit amet
  // Date: 2021-01-01
  // Likes: 2
  return {User,Post}
}
main();










// // Do not alter the starter code.
// function main() {
//   // Create your class "User" here with all the properties and methods
//   class User {
//     constructor(name, email, password) {
//       this._name = name;
//       this._email = email;
//       this._password = password;
//       this._posts = [];
//     }

//     get name() {
//       return this._name;
//     }

//     set name(value) {
//       this._name = value;
//     }

//     get email() {
//       return this._email;
//     }

//     set email(value) {
//       this._email = value;
//     }

//     get password() {
//       return this._password;
//     }

//     set password(value) {
//       this._password = value;
//     }

//     addPost(post) {
//       this._posts.push(post);
//     }

//     deletePost(post) {
//       const index = this._posts.indexOf(post);
//       if (index !== -1) {
//         this._posts.splice(index, 1);
//       }
//     }

//     displayPosts() {
//       console.log(`Posts by ${this._name}:`);
//       for (const post of this._posts) {
//         console.log(`- ${post.title}`);
//       }
//     }
//   }

//   // Create your class "Post" here inheriting the User class with all the properties and methods as mentioned
//   class Post extends User {
//     constructor(ownerName, ownerEmail, ownerPassword, title, content, date) {
//       super(ownerName, ownerEmail, ownerPassword);
//       this._title = title;
//       this._content = content;
//       this._date = date;
//       this._likeCount = 0;
//     }

//     get title() {
//       return this._title;
//     }

//     set title(value) {
//       this._title = value;
//     }

//     get content() {
//       return this._content;
//     }

//     set content(value) {
//       this._content = value;
//     }

//     get date() {
//       return this._date;
//     }

//     set date(value) {
//       this._date = value;
//     }

//     addLike() {
//       this._likeCount++;
//     }

//     displayDetails() {
//       console.log(`Owner: ${this.name}`);
//       console.log(`Title: ${this._title}`);
//       console.log(`Content: ${this._content}`);
//       console.log(`Date: ${this._date}`);
//       console.log(`Likes: ${this._likeCount}`);
//     }
//   }

//   const user1 = new User("John", "john@example.com", "password123");
//   const post1 = new Post(
//     "John",
//     "john@example.com",
//     "password123",
//     "My first post",
//     "Lorem ipsum dolor sit amet",
//     "2021-01-01"
//   );
//   const post2 = new Post(
//     "John",
//     "john@example.com",
//     "password123",
//     "My second post",
//     "Consectetur adipiscing elit",
//     "2021-01-02"
//   );

//   user1.addPost(post1);
//   user1.addPost(post2);

//   post1.addLike();
//   post1.addLike();

//   user1.displayPosts();
//   // Output:
//   // Posts by John:
//   // - My first post
//   // - My second post

//   post1.displayDetails();
//   // Output:
//   // Owner: John
//   // Title: My first post
//   // Content: Lorem ipsum dolor sit amet
//   // Date: 2021-01-01
//   // Likes: 2

//   return { User, Post };
// }
// main();
