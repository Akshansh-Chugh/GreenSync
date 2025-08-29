document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // In a real app, you'd verify credentials. Here, we just log the user in.
        
        // Mock Data for Plant Pots
        const potsData = [
            { id: 1, name: 'Living Room Fiddle Leaf', icon: '🌳', temp: 24, moisture: 48, humidity: 55, chartLabels: ['Aug 10', 'Aug 11', 'Aug 12', 'Aug 13', 'Today'], chartMoisture: [55, 52, 53, 49, 48] },
            { id: 2, name: 'Kitchen Basil', icon: '🌿', temp: 22, moisture: 65, humidity: 60, chartLabels: ['Aug 10', 'Aug 11', 'Aug 12', 'Aug 13', 'Today'], chartMoisture: [70, 68, 66, 64, 65] },
            { id: 3, name: 'Bedroom Snake Plant', icon: '🪴', temp: 23, moisture: 35, humidity: 50, chartLabels: ['Aug 10', 'Aug 11', 'Aug 12', 'Aug 13', 'Today'], chartMoisture: [40, 38, 38, 36, 35] }
        ];

        // Use sessionStorage to simulate a user session
        sessionStorage.setItem('loggedIn', 'true');
        sessionStorage.setItem('potsData', JSON.stringify(potsData));

        // Redirect to the main dashboard
        window.location.href = 'my-plants.html';
    });
});