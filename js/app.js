document.addEventListener('DOMContentLoaded', () => {
    fetchUserData();
    fetchRevenueData();
    fetchMonthlyRevenueData();
});

function fetchUserData() {
    fetch('../php/user.php')
        .then(response => response.json())
        .then(data => {
            const usersTable = document.getElementById('usersTable').getElementsByTagName('tbody')[0];
            data.forEach(user => {
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
        .catch(error => console.error('Error fetching user data:', error));
}

function fetchRevenueData() {
    fetch('../php/revenue.php')
        .then(response => response.json())
        .then(data => {
            const revenueTable = document.getElementById('revenueTable').getElementsByTagName('tbody')[0];
            data.forEach(entry => {
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
        .catch(error => console.error('Error fetching revenue data:', error));
}

function fetchMonthlyRevenueData() {
    fetch('../php/monthly_revenue.php')
        .then(response => response.json())
        .then(data => {
            const monthlyRevenueTable = document.getElementById('monthlyRevenueTable').getElementsByTagName('tbody')[0];
            data.forEach(entry => {
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
        .catch(error => console.error('Error fetching monthly revenue data:', error));
}

function logout() {
    // Implement logout functionality
    alert('Logging out...');
    window.location.href = 'login.html';
}
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

showSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});


function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');

    menu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}