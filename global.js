var map = L.map('map', {
    minZoom: 8,
    maxZoom: 18,
    maxBounds: [
        [-90, -180],
        [90, 180]
    ],
    maxBoundsViscosity: 1.0
}).setView([20, 0], 2);

// Light world map (NOT dark)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: ''
}).addTo(map);

// Your locations with REAL coordinates
const locations = [
    { name: "LSU Health", lat: 29.9511, lng: -90.0715, type: "Academic Health Centre", focus: "Clinical research & education" },
    { name: "StandSure Physiotherapy", lat: 51.5074, lng: -0.1278, type: "Physiotherapy clinic", focus: "Rehabilitation & mobility care" },
    { name: "King Abdulaziz Medical City", lat: 21.4858, lng: 39.1925, type: "Major hospital", focus: "Specialist care & research" },
    { name: "SERI Singapore", lat: 1.2966, lng: 103.7764, type: "Research institute", focus: "Eye science & vision research" },
    { name: "Hallmark Physiotherapy", lat: 1.3521, lng: 103.8198, type: "Physio clinic", focus: "Sports rehab" },
    { name: "Muscle Mastery PNG", lat: -9.4438, lng: 147.1803, type: "Physio clinic", focus: "Recovery & pain management" },
    { name: "Hutt Hospital NZ", lat: -41.2090, lng: 174.9080, type: "Emergency hospital", focus: "Urgent care" }
];

// Add markers
locations.forEach(loc => {
    let marker = L.marker([loc.lat, loc.lng]).addTo(map);

    marker.bindPopup(`
        <b>${loc.name}</b><br>
        ${loc.type}<br>
        ${loc.focus}
    `);
});
