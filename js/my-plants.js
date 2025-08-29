document.addEventListener('DOMContentLoaded', () => {
    // Check if user is logged in
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }

    const potsData = JSON.parse(sessionStorage.getItem('potsData'));
    const potListContainer = document.getElementById('pot-list');

    if (!potsData || !potListContainer) {
        potListContainer.innerHTML = "<p>Couldn't load plant data.</p>";
        return;
    }

    potsData.forEach(pot => {
        const potLink = document.createElement('a');
        potLink.href = `pot-detail.html?id=${pot.id}`;
        potLink.className = 'pot-card';
        potLink.innerHTML = `
            <div class="pot-card-icon">${pot.icon}</div>
            <h3>${pot.name}</h3>
        `;
        potListContainer.appendChild(potLink);
    });
});