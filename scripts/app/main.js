const [navLoginBtn, navSignupBtn, navLogoutBtn] = [
  document.querySelector('.nav-link-btns .login-btn'),
  document.querySelector('.nav-link-btns .signup-btn'),
  document.querySelector('.nav-link-btns .logout-btn'),
];

// Check if user is logged in
window.isLoggedIn = localStorage.userId ?? 0;
if (window.isLoggedIn !== 0) {
  [navLoginBtn, navSignupBtn].forEach((el) => el?.classList.add('hidden'));
  navLogoutBtn.classList.remove('hidden');
}

// Add event to logout button
navLogoutBtn?.addEventListener('click', () => {
  localStorage.removeItem('userId');
  navLogoutBtn.classList.add('hidden');
  [navLoginBtn, navSignupBtn].forEach((el) => el.classList.remove('hidden'));
  location.reload();
});
