// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('nav-fixed');
    } else {
        header.classList.remove('nav-fixed');
    }
}

// Navbar menu
const navBtn = document.querySelector('#nav-btn');
const navMenu = document.querySelector('#nav-menu');
navBtn.addEventListener('click', function() {
    navBtn.classList.toggle('nav-active');
    navMenu.classList.toggle('hidden');
})

// Dropdown
const dropdownDefaultButton = document.querySelector('#dropdownDefaultButton');
const dropdownMenu = document.querySelector('#dropdown');
let lastOpened = null;

dropdownDefaultButton.addEventListener('click', function() {
    dropdownMenu.classList.toggle('hidden');
});

// Tabs
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach (tab => {
    tab.addEventListener('click', () => {
        let tabTarget = tab.getAttribute('aria-controls');
        panels.forEach (panel => {
            let panelId = panel.getAttribute('id');
            if (tabTarget === panelId) {
                panel.classList.remove('invisible', 'opacity-0');
                panel.classList.add('visible', 'opacity-100');
            } else {
                panel.classList.add('invisible', 'opacity-0');
            }
        });
    });
});

// For map
// Where you want to render the map.
var element = document.getElementById('osm-map');

// Height has to be set. You can do this in CSS too.
element.style = 'height:500px;';

// Create Leaflet map on map element.
var map = L.map(element);

// Add OSM tile layer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Target's GPS coordinates.
var target = L.latLng('-5.3643552', '105.2413564');

// Set map's center to target with zoom 14.
map.setView(target, 16);

// Place a marker on the same location.
L.marker(target).addTo(map);