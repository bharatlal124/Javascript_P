//complete the addBlog function to add moveup, movedown and delete button. 
function addBlog(blog) {
      const blogList = document.querySelector('.blog-list');
      
        
      const newBox = document.createElement('div');
      newBox.classList.add('blog-box');

      const newBlogPost = document.createElement('div');
      newBlogPost.classList.add('blog-post');
        newBox.appendChild(newBlogPost);
        

      const newBlogHeader = document.createElement('div');
      newBlogHeader.classList.add('blog-header');
      newBlogPost.appendChild(newBlogHeader);

      const newBlogTitle = document.createElement('h2');
      newBlogTitle.classList.add('blog-title');
      newBlogTitle.textContent = blog.title;
      newBlogHeader.appendChild(newBlogTitle);

      const newBlogDate = document.createElement('p');
      newBlogDate.classList.add('blog-date');
      newBlogDate.textContent = blog.date;
      newBlogHeader.appendChild(newBlogDate);

      const newBlogContent = document.createElement('p');
      newBlogContent.classList.add('blog-content');
      newBlogContent.textContent = blog.content;
      newBlogPost.appendChild(newBlogContent);

    // create a new div with className blog-buttons and append it to newBox
   const blogButtons = document.createElement('div');
  blogButtons.classList.add('blog-buttons');
  newBox.appendChild(blogButtons);
    

    //Create moveup button with class blog-button and move-up
    //Add event listerner to moveup button
    const moveUpButton = document.createElement('button');
  moveUpButton.classList.add('blog-button', 'move-up');
  moveUpButton.textContent = 'Move Up';
  moveUpButton.addEventListener('click', () => moveBlogItem(newBox, 'up'));
  blogButtons.appendChild(moveUpButton);

    //Create movedown button with class blog-button and move-down
    //Add event listerner to movedown button
    const moveDownButton = document.createElement('button');
  moveDownButton.classList.add('blog-button', 'move-down');
  moveDownButton.textContent = 'Move Down';
  moveDownButton.addEventListener('click', () => moveBlogItem(newBox, 'down'));
  blogButtons.appendChild(moveDownButton);


    //Create delete button with class blog-button and delete
    //Add event listerner to delete button
    const deleteButton = document.createElement('button');
  deleteButton.classList.add('blog-button', 'delete');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => deleteBlogItem(newBox));
  blogButtons.appendChild(deleteButton);


      blogList.appendChild(newBox);

    // Add event listeners to the buttons
}

function moveBlogItem(blogItem, direction) {
  const blogList = document.querySelector('.blog-list');
  const index = Array.from(blogList.children).indexOf(blogItem);

  if (direction === 'up' && index > 0) {
    blogList.insertBefore(blogItem, blogList.children[index - 1]);
  } else if (direction === 'down' && index < blogList.children.length - 1) {
    blogList.insertBefore(blogItem, blogList.children[index + 2]);
  }
}

// Function to delete the blog ite
function deleteBlogItem(blogItem) {
  const blogList = document.querySelector('.blog-list');
  blogList.removeChild(blogItem);
}

const blogData = [
{
  title: 'First Blog Post',
  date: 'January 1, 2022',
  content: 'This is the content of the first blog post.'
},
{
  title: 'Second Blog Post',
  date: 'February 1, 2022',
  content: 'This is the content of the second blog post.'
},
{
  title: 'Third Blog Post',
  date: 'March 1, 2022',
  content: 'This is the content of the third blog post.'
}
];

blogData.forEach(blog => addBlog(blog)); // Automatically call the function for each blog in the array