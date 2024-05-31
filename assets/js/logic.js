// Function to add blog posts to the sidebar
function addBlogPostsToSidebar(blogPosts) {
  // Clears the sidebar first
  const sidebar = document.getElementById('sidebar');
  sidebar.innerHTML = '';
  
  // Loops through the last 8 blog posts
  const startIndex = Math.max(blogPosts.length - 8, 0);
  for (let i = startIndex; i < blogPosts.length; i++) {
    const blogPost = blogPosts[i];

    // Creates a new card element
    const card = document.createElement('div');
    card.classList.add('card');

    // Creates elements for username, title, and timestamp
    const usernameElement = document.createElement('h4');
    usernameElement.textContent = `Author: ${blogPost.username}`;

    const titleElement = document.createElement('h3');
    titleElement.textContent = blogPost.title;

    // Appends elements to the card
    card.appendChild(usernameElement);
    card.appendChild(titleElement);

    // Appends the card to the sidebar
    sidebar.appendChild(card);
    alert('Alert 2')
  }
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault();

  // This grabs the form input values
  const username = document.getElementById('username').value;
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  const timestamp = new Date().toLocaleString(); // Gets the current timestamp

  // This checks if all fields are filled
  if (!username || !title || !content) {
      document.getElementById('message').textContent = 'Please complete all fields.';
      return;
  }

  // This creates a blog post object
  const blogPost = {
      username: username,
      title: title,
      content: content,
      timestamp: timestamp // Adds the timestamp to the blog post
  };

  // Retrieve existing blog posts from localStorage
  let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  // Adds new blog post to the array
  blogPosts.push(blogPost);

  // Saves the updated blog posts array to localStorage
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

  // Adds the new blog post to the sidebar
  addBlogPostsToSidebar(blogPost);

  // Clears the form
  document.getElementById('username').value = '';
  document.getElementById('title').value = '';
  document.getElementById('content').value = '';
}

// Function to toggle between light and dark modes

const handleModeToggle = document.getElementById(
  'toggleMode'
);
handleModeToggle.addEventListener('click', function () {
  let element = document.body;
  element.classList.toggle('dark-mode');
});

// function handleModeToggle.addEventListener('click', function() {
//   const body = document.body;
//   body.classList.toggle('dark-mode');
// }
// )

// Initialization function to set up event listeners
function init() {
  document.getElementById('blogForm').addEventListener('submit', handleFormSubmission);

  //This adds an event listener for mode toggle switch
  // handleModeToggle();

  // This is supposed to retrieve existing blog posts from localStorage
  let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  // This is supposed to add the last 8 blog posts to the sidebar
  addBlogPostsToSidebar(blogPosts);
}

// This calls the init function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  init();
});


// const changeToDarkModeButton = document.getElementById(
//   'changeToDarkModeButton'
// );
// changeToDarkModeButton.addEventListener('click', function () {
//   let element = document.body;
//   element.classList.toggle('darkMode');
// });