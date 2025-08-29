document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is logged in by checking sessionStorage
    if (sessionStorage.getItem('loggedIn') !== 'true') {
        window.location.href = 'login.html';
        return; // Stop the script if not logged in
    }

    // Get the ID from the URL
    const params = new URLSearchParams(window.location.search);
    const potId = parseInt(params.get('id')); // Make sure to get 'id'

    // Get the full dataset from sessionStorage
    const potsData = JSON.parse(sessionStorage.getItem('potsData'));
    
    // Find the specific pot using the ID from the URL
    const pot = potsData.find(p => p.id === potId);

    // If no pot is found (e.g., bad ID), show an error
    if (!pot) {
        document.getElementById('pot-detail-name').textContent = 'Plant not found!';
        return;
    }

    // --- If a pot is found, populate the page ---
    document.getElementById('pot-detail-name').textContent = pot.name;
    document.getElementById('temp').textContent = `${pot.temp}°C`;
    document.getElementById('moisture').textContent = `${pot.moisture}%`;
    document.getElementById('humidity').textContent = `${pot.humidity}%`;

    const waterPumpBtn = document.getElementById('water-pump-btn');
    waterPumpBtn.addEventListener('click', () => {
        alert(`Water pump for '${pot.name}' has been activated!`);
    });

    // Initialize the Chart
    const ctx = document.getElementById('sensorChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: pot.chartLabels,
            datasets: [{
                label: 'Soil Moisture (%)',
                data: pot.chartMoisture,
                borderColor: '#1E90FF',
                fill: true,
                tension: 0.3
            }]
        }
    });
});