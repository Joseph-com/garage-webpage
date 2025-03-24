// Login Form Submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simple validation
    if (username === 'admin' && password === 'password') {
      // Hide login page and show dashboard
      document.getElementById('login-page').classList.add('hidden');
      document.getElementById('dashboard-page').classList.remove('hidden');
      document.querySelector('.loader').style.display = 'none';
    } else {
      alert('Invalid username or password');
    }
  });
  
  // Theme Toggle
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('change', function () {
    document.body.setAttribute('data-theme', this.checked ? 'light' : 'dark');
  });
  
  // Simulate Loading
  setTimeout(() => {
    document.querySelector('.loader').style.display = 'none';
  }, 2000);

  // Logout Button
document.getElementById('logout-btn').addEventListener('click', function () {
    // Hide dashboard and show login page
    document.getElementById('dashboard-page').classList.add('hidden');
    document.getElementById('login-page').classList.remove('hidden');
    // Clear input fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  });