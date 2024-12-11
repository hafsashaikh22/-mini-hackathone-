
// // Signup and Login Simulation
// let isSignedUp = false;

// // Signup Button Click Event
// document.getElementById('signup_btn').addEventListener('click', function () {
//   const email = document.getElementById('signup_email').value.trim();
//   const password = document.getElementById('signup_password').value.trim();

//   if (email && password) {
//     isSignedUp = true;
//     Swal.fire({
//       icon: 'success',
//       title: 'Signup Successful',
//       text: 'You can now log in.',
//       confirmButtonText: 'Great!'
//     });
//   } else {
//     Swal.fire({
//       icon: 'warning',
//       title: 'Incomplete Fields',
//       text: 'Please fill in both email and password to sign up.',
//       confirmButtonText: 'Okay'
//     });
//   }
// });

// // Login Button Click Event
// document.getElementById('signin_btn').addEventListener('click', function () {
//   const email = document.getElementById('signin_email').value.trim();
//   const password = document.getElementById('signin_password').value.trim();

//   if (!isSignedUp) {
//     Swal.fire({
//       icon: 'error',
//       title: 'Not Signed Up',
//       text: 'Please sign up before logging in.',
//       confirmButtonText: 'Sign Up'
//     });
//   } else if (!email || !password) {
//     Swal.fire({
//       icon: 'warning',
//       title: 'Empty Fields',
//       text: 'Please fill in both email and password to log in.',
//       confirmButtonText: 'Okay'
//     });
//   } else {
//     Swal.fire({
//       icon: 'success',
//       title: 'Login Successful',
//       text: `Welcome back, ${email}!`,
//       confirmButtonText: 'Continue'
//     });
//     document.getElementById('user_email').innerText = `Logged in as: ${email}`;
//     document.getElementById('auth_container').style.display = 'none';
//     document.getElementById('user_container').style.display = 'block';
//   }
// });

// // Logout Button Click Event
// document.getElementById('logout_btn').addEventListener('click', function () {
//   isSignedUp = false;
//   document.getElementById('auth_container').style.display = 'flex';
//   document.getElementById('user_container').style.display = 'none';
//   Swal.fire({
//     icon: 'info',
//     title: 'Logged Out',
//     text: 'You have been logged out successfully.',
//     confirmButtonText: 'Okay'
//   });
// });




// Check if user is already signed up
let isSignedUp = localStorage.getItem('isSignedUp') === 'true';

// Signup Button Click Event
document.getElementById('signup_btn').addEventListener('click', function () {
  if (isSignedUp) {
    Swal.fire({
      icon: 'info',
      title: 'Already Signed Up',
      text: 'You are already signed up. Please log in.',
      confirmButtonText: 'Okay'
    });
    return;
  }

  const email = document.getElementById('signup_email').value.trim();
  const password = document.getElementById('signup_password').value.trim();

  if (email && password) {
    isSignedUp = true;
    localStorage.setItem('isSignedUp', 'true'); // Save signup status
    localStorage.setItem('email', email); // Optionally save email for reference
    Swal.fire({
      icon: 'success',
      title: 'Signup Successful',
      text: 'You can now log in.',
      confirmButtonText: 'Great!'
    });
  } else {
    Swal.fire({
      icon: 'warning',
      title: 'Incomplete Fields',
      text: 'Please fill in both email and password to sign up.',
      confirmButtonText: 'Okay'
    });
  }
});

// Login Button Click Event
document.getElementById('signin_btn').addEventListener('click', function () {
  const email = document.getElementById('signin_email').value.trim();
  const password = document.getElementById('signin_password').value.trim();

  if (!isSignedUp) {
    Swal.fire({
      icon: 'error',
      title: 'Not Signed Up',
      text: 'Please sign up before logging in.',
      confirmButtonText: 'Sign Up'
    });
  } else if (!email || !password) {
    Swal.fire({
      icon: 'warning',
      title: 'Empty Fields',
      text: 'Please fill in both email and password to log in.',
      confirmButtonText: 'Okay'
    });
  } else {
    Swal.fire({
      icon: 'success',
      title: 'Login Successful',
      text: `Welcome back, ${email}!`,
      confirmButtonText: 'Continue'
    });
    document.getElementById('user_email').innerText = `Logged in as: ${email}`;
    document.getElementById('auth_container').style.display = 'none';
    document.getElementById('user_container').style.display = 'block';
  }
});

// Logout Button Click Event
document.getElementById('logout_btn').addEventListener('click', function () {
  document.getElementById('auth_container').style.display = 'flex';
  document.getElementById('user_container').style.display = 'none';
  Swal.fire({
    icon: 'info',
    title: 'Logged Out',
    text: 'You have been logged out successfully.',
    confirmButtonText: 'Okay'
  });
});





//////////////////////////





// Highlight Active Link
document.querySelectorAll('.nav-link').forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active'); // Add 'active' class to the current page link
    }
  });
  
  // Toggle Mobile Menu
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle 'show' class to display/hide menu
  });
  




  // Show the post creation form
function showPostForm() {
  document.getElementById("post-form").style.display = "block";
}

// Hide the post creation form
function hidePostForm() {
  document.getElementById("post-form").style.display = "none";
}

// Add a new post
function addPost() {
  const title = document.getElementById("postTitle").value.trim();
  const category = document.getElementById("postCategory").value.trim();
  const content = document.getElementById("postContent").value.trim();

  if (!title || !category || !content) {
    alert("Please fill in all fields.");
    return;
  }

  // Create a new blog post element
  const newPost = document.createElement("div");
  newPost.classList.add("blog-post");
  newPost.setAttribute("data-category", category);
  newPost.innerHTML = `
    <h3>${title}</h3>
    <p>Category: ${category}</p>
    <p>${content}</p>
  `;

  // Add the new post to the blog container
  document.getElementById("blog-container").appendChild(newPost);

  // Clear the form fields and hide the form
  document.getElementById("postTitle").value = "";
  document.getElementById("postCategory").value = "";
  document.getElementById("postContent").value = "";
  hidePostForm();
}
