document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const data = new FormData(form);
    const firstName = data.get('firstName').trim();
    const lastName = data.get('lastName').trim();
    const email = data.get('email').trim();
    const password = data.get('password');
    const repeatPassword = data.get('repeatPassword');
    const address = data.get('address').trim();
    const country = data.get('country');
    const state = data.get('state').trim();
    const city = data.get('city').trim();
    const phone = data.get('phone').trim();

    if (password !== repeatPassword) {
      alert('Passwords do not match!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.email === email)) {
      alert('Email already registered!');
      return;
    }

    const newUser = {
      firstName,
      lastName,
      email,
      password,
      address,
      country,
      state,
      city,
      phone,
      createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('User registered successfully!');
    form.reset();
  });
});
