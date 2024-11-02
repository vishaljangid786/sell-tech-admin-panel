document.addEventListener("DOMContentLoaded", () => {
  // Fetch user data when the document is loaded
  fetchUserData();
  // Fetch revenue data when the document is loaded
  fetchRevenueData();
  // Fetch monthly revenue data when the document is loaded
  fetchMonthlyRevenueData();
});

// Function to fetch user data
function fetchUserData() {
  fetch("../php/user.php")
    .then((response) => response.json())
    .then((data) => {
      // Get the users table element
      const usersTable = document
        .getElementById("usersTable")
        .getElementsByTagName("tbody")[0];
      // Loop through each user in the data and add a row to the table
      data.forEach((user) => {
        const row = usersTable.insertRow();
        row.innerHTML = `
                    <td class="py-2 text-center">${user.id}</td>
                    <td class="py-2 text-center">${user.username}</td>
                    <td class="py-2 text-center">${user.email}</td>
                    <td class="py-2 text-center">${user.total_coins}</td>
                    <td class="py-2 text-center">${user.best_score}</td>
                    <td class="py-2 text-center">${user.refer_code}</td>
                    <td class="py-2 text-center">
                        <button class="bg-yellow-500 text-white px-2 rounded">Edit</button>
                        <button class="bg-red-500 text-white px-2 rounded">Delete</button>
                    </td>
                `;
      });
    })
    .catch((error) => console.error("Error fetching user data:", error));
}

// Function to fetch revenue data
function fetchRevenueData() {
  fetch("../php/revenue.php")
    .then((response) => response.json())
    .then((data) => {
      // Get the revenue table element
      const revenueTable = document
        .getElementById("revenueTable")
        .getElementsByTagName("tbody")[0];
      // Loop through each revenue entry in the data and add a row to the table
      data.forEach((entry) => {
        const row = revenueTable.insertRow();
        row.innerHTML = `
                    <td class="py-2 text-center">${entry.id}</td>
                    <td class="py-2 text-center">${entry.username}</td>
                    <td class="py-2 text-center">${entry.email}</td>
                    <td class="py-2 text-center">${entry.product_id}</td>
                    <td class="py-2 text-center">${entry.amount}</td>
                    <td class="py-2 text-center">${entry.purchase_date}</td>
                    <td class="py-2 text-center">
                        <button class="bg-yellow-500 text-white px-2 rounded">Edit</button>
                        <button class="bg-red-500 text-white px-2 rounded">Delete</button>
                    </td>
                `;
      });
    })
    .catch((error) => console.error("Error fetching revenue data:", error));
}

// Function to fetch monthly revenue data
function fetchMonthlyRevenueData() {
  fetch("../php/monthly_revenue.php")
    .then((response) => response.json())
    .then((data) => {
      // Get the monthly revenue table element
      const monthlyRevenueTable = document
        .getElementById("monthlyRevenueTable")
        .getElementsByTagName("tbody")[0];
      // Loop through each monthly revenue entry in the data and add a row to the table
      data.forEach((entry) => {
        const row = monthlyRevenueTable.insertRow();
        row.innerHTML = `
                    <td class="py-2 text-center">${entry.month}</td>
                    <td class="py-2 text-center">${entry.revenue}</td>
                    <td class="py-2 text-center">
                        <button class="bg-yellow-500 text-white px-2 rounded">Edit</button>
                        <button class="bg-red-500 text-white px-2 rounded">Delete</button>
                    </td>
                `;
      });
    })
    .catch((error) =>
      console.error("Error fetching monthly revenue data:", error)
    );
}

// Function to handle logout
function logout() {
  // Implement logout functionality
  alert("Logging out...");
  window.location.href = "login.html";
}
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showSignup = document.getElementById("showSignup");
const showLogin = document.getElementById("showLogin");

// Event listener to show signup form
showSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
});

// Event listener to show login form
showLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
});

// Function to toggle the mobile menu
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");

  menu.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

// Function to toggle the form between login and signup
function toggleForm() {
  const isLogin = document.getElementById("form-toggle").checked;
  const formTitle = document.getElementById("form-title");
  const formButton = document.getElementById("form-button");
  const linkText = document.getElementById("toggle-link");
  const nameField = document.getElementById("name-field");

  if (isLogin) {
    formTitle.textContent = "Login";
    formButton.textContent = "Sign In";
    linkText.textContent = "Create account";
    nameField.classList.add("hidden");
  } else {
    formTitle.textContent = "Sign Up";
    formButton.textContent = "Register";
    linkText.textContent = "Already have an account?";
    nameField.classList.remove("hidden");
  }
}
