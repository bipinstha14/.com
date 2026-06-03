const locations = [
{
    name: "LSU Health",
    country: "USA",
    location: "New Orleans, USA",
    type: "Academic health centre / medical institution",
    focus: "Healthcare education, clinical research, and medical services",
    x: "28%",
    y: "45%"
},
{
    name: "StandSure Physiotherapy",
    country: "UK",
    location: "United Kingdom",
    type: "Physiotherapy clinic",
    focus: "Musculoskeletal treatment, rehabilitation, and mobility care",
    x: "48%",
    y: "30%"
},
{
    name: "King Abdulaziz Medical City",
    country: "Saudi Arabia",
    location: "Jeddah, Saudi Arabia",
    type: "Major hospital / medical city",
    focus: "Advanced hospital care, specialist treatments, and research",
    x: "55%",
    y: "48%"
},
{
    name: "Singapore Eye Research Institute (SERI)",
    country: "Singapore",
    location: "Singapore",
    type: "Eye research institute",
    focus: "Ophthalmology research, vision science, and clinical studies",
    x: "72%",
    y: "55%"
},
{
    name: "Hallmark Physiotherapy",
    country: "Singapore",
    location: "Singapore",
    type: "Physiotherapy clinic",
    focus: "Rehabilitation, sports injury treatment, and physical therapy",
    x: "72%",
    y: "58%"
},
{
    name: "Muscle Mastery Physiotherapy",
    country: "PNG",
    location: "Port Moresby, Papua New Guinea",
    type: "Physiotherapy & massage clinic",
    focus: "Pain management, recovery, and physical rehabilitation",
    x: "78%",
    y: "70%"
},
{
    name: "Hutt Hospital Emergency Department",
    country: "NZ",
    location: "Lower Hutt, New Zealand",
    type: "Public hospital emergency department",
    focus: "Emergency care, acute medical treatment, urgent response",
    x: "85%",
    y: "75%"
}
];
const map = document.getElementById("map");

locations.forEach((item) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.style.left = item.x;
    dot.style.top = item.y;

    dot.addEventListener("click", () => {
        document.getElementById("title").innerText = item.name;
        document.getElementById("type").innerText = item.type;
        document.getElementById("focus").innerText = item.focus;

        document.getElementById("panel").classList.add("active");
    });

    map.appendChild(dot);
});
