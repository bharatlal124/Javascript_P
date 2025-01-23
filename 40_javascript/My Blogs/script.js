// document.addEventListener('DOMContentLoaded', function () {
const blogData = [
    {
      title: 'First Blog Post',
      date: 'January 1, 2022',
      content: 'this is content of the first blog page.'
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
//Create your function here with the name addBlog which takes a blog object as parameter
//Call each object present in blogData with addBlog.
//If page does not update the changes automatically please refresh


  function addBlog(blog) {
    
    const blogPost = document.createElement('div');
    blogPost.classList.add('blog-post');

    
    const blogHeader = document.createElement('div');
    blogHeader.classList.add('blog-header');

    
    const blogTitle = document.createElement('h2');
    blogTitle.classList.add('blog-title');
    blogTitle.textContent = blog.title;

    
    const blogDate = document.createElement('p');
    blogDate.classList.add('blog-date');
    blogDate.textContent = blog.date;

    
    blogHeader.appendChild(blogTitle);
    blogHeader.appendChild(blogDate);

    
    blogPost.appendChild(blogHeader);

    
    const blogContent = document.createElement('p');
    blogContent.classList.add('blog-content');
    blogContent.textContent = blog.content;

    
    const blogList = document.querySelector('.blog-list');
    blogPost.appendChild(blogContent);
    blogList.appendChild(blogPost);
  }

  
  blogData.forEach(addBlog);
// });