const starsSmall = document.getElementById('starsSmall');
const starsMedium = document.getElementById('starsMedium');
const starsLarge = document.getElementById('starsLarge');
const shootingStars = document.getElementById('shootingStars');
const orbitRings = Array.from(document.querySelectorAll('.orbit-ring'));

const planets = [
    { el: document.getElementById('planet-vip1'), sizeBase: 0.90, orbitDuration: 140, selfSpin: 34, floatAmplitude: 2.5, floatDuration: 7.4, pulseDuration: 8.8, startAngle: -18, arcStart: 20, ringSpeed: 108, desktopRadius: 170, tabletRadius: 150, mobileRadius: 84, desktopSize: 86, tabletSize: 70, mobileSize: 50 },
    { el: document.getElementById('planet-vip2'), sizeBase: 0.95, orbitDuration: 176, selfSpin: 40, floatAmplitude: 3.0, floatDuration: 8.1, pulseDuration: 9.8, startAngle: 42, arcStart: 120, ringSpeed: 144, desktopRadius: 225, tabletRadius: 195, mobileRadius: 118, desktopSize: 94, tabletSize: 78, mobileSize: 56 },
    { el: document.getElementById('planet-vip3'), sizeBase: 1.00, orbitDuration: 218, selfSpin: 46, floatAmplitude: 3.6, floatDuration: 8.8, pulseDuration: 10.7, startAngle: 98, arcStart: 210, ringSpeed: 174, desktopRadius: 280, tabletRadius: 240, mobileRadius: 150, desktopSize: 102, tabletSize: 86, mobileSize: 62 },
    { el: document.getElementById('planet-vip4'), sizeBase: 1.05, orbitDuration: 264, selfSpin: 52, floatAmplitude: 4.0, floatDuration: 9.5, pulseDuration: 11.6, startAngle: 154, arcStart: 310, ringSpeed: 208, desktopRadius: 340, tabletRadius: 285, mobileRadius: 180, desktopSize: 110, tabletSize: 94, mobileSize: 68 },
    { el: document.getElementById('planet-vip5'), sizeBase: 1.08, orbitDuration: 318, selfSpin: 60, floatAmplitude: 4.2, floatDuration: 10.1, pulseDuration: 12.6, startAngle: 210, arcStart: 60, ringSpeed: 246, desktopRadius: 395, tabletRadius: 330, mobileRadius: 208, desktopSize: 118, tabletSize: 102, mobileSize: 74 },
    { el: document.getElementById('planet-vip6'), sizeBase: 1.12, orbitDuration: 388, selfSpin: 72, floatAmplitude: 4.6, floatDuration: 11.2, pulseDuration: 13.8, startAngle: 286, arcStart: 170, ringSpeed: 286, desktopRadius: 460, tabletRadius: 375, mobileRadius: 234, desktopSize: 126, tabletSize: 110, mobileSize: 80 },
    { el: document.getElementById('planet-vip7'), sizeBase: 1.18, orbitDuration: 470, selfSpin: 84, floatAmplitude: 5.0, floatDuration: 12.6, pulseDuration: 15.2, startAngle: 332, arcStart: 255, ringSpeed: 332, desktopRadius: 520, tabletRadius: 420, mobileRadius: 258, desktopSize: 136, tabletSize: 118, mobileSize: 86 }
];

function createStars(container, count, minDuration, maxDuration) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${(Math.random() * (maxDuration - minDuration) + minDuration).toFixed(2)}s`;
        star.style.animationDelay = `${(Math.random() * 8).toFixed(2)}s`;
        frag.appendChild(star);
    }
    container.appendChild(frag);
}

function createShootingStar(config) {
    const meteor = document.createElement('span');
    meteor.className = 'shooting-star';
    meteor.style.left = config.left;
    meteor.style.top = config.top;
    meteor.style.setProperty('--delay', config.delay);
    meteor.style.setProperty('--duration', config.duration);
    meteor.style.setProperty('--angle', config.angle);
    meteor.style.setProperty('--size', config.size);
    shootingStars.appendChild(meteor);
}

createStars(starsSmall, 140, 3.2, 7.8);
createStars(starsMedium, 58, 4.4, 8.8);
createStars(starsLarge, 20, 5.2, 10.2);

[
    { left: '84%', top: '12%', delay: '1s',  duration: '11s', angle: '-29deg', size: '150px' },
    { left: '76%', top: '18%', delay: '8s',  duration: '13s', angle: '-31deg', size: '130px' },
    { left: '90%', top: '24%', delay: '16s', duration: '12s', angle: '-27deg', size: '145px' }
].forEach(createShootingStar);

function getMode() {
    const w = window.innerWidth;
    if (w <= 600) return 'mobile';
    if (w <= 1100) return 'tablet';
    return 'desktop';
}

function getRadius(planet) {
    const mode = getMode();
    if (mode === 'mobile') return planet.mobileRadius;
    if (mode === 'tablet') return planet.tabletRadius;
    return planet.desktopRadius;
}

function getPlanetSize(planet) {
    const mode = getMode();
    if (mode === 'mobile') return planet.mobileSize;
    if (mode === 'tablet') return planet.tabletSize;
    return planet.desktopSize;
}

function applyRingLayout() {
    planets.forEach((planet, index) => {
        const ring = orbitRings[index];
        if (!ring) return;
        const radius = getRadius(planet);
        const size = radius * 2;
        ring.style.width = `${size}px`;
        ring.style.height = `${size}px`;
        ring.style.setProperty('--arc-start', `${planet.arcStart}deg`);
        ring.style.setProperty('--ring-speed', `${planet.ringSpeed}s`);
    });
}

function animatePlanets(time) {
    const t = time / 1000;

    planets.forEach((planet) => {
        if (!planet.el) return;

        const radius = getRadius(planet);
        const angle = (planet.startAngle * Math.PI / 180) + ((t / planet.orbitDuration) * Math.PI * 2);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const baseSize = getPlanetSize(planet);
        const depth = (y / radius + 1) / 2;
        const scale = planet.sizeBase * (0.84 + depth * 0.18);
        const z = Math.round(20 + depth * 80);

        const lightX = 50 + ((-x / radius) * 28);
        const lightY = 50 + ((-y / radius) * 28);
        const shadowX = 50 + ((x / radius) * 24);
        const shadowY = 50 + ((y / radius) * 24);

        planet.el.style.width = `${baseSize}px`;
        planet.el.style.height = `${baseSize}px`;
        planet.el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale.toFixed(3)})`;
        planet.el.style.zIndex = `${z}`;
        planet.el.style.setProperty('--light-x', `${lightX.toFixed(2)}%`);
        planet.el.style.setProperty('--light-y', `${lightY.toFixed(2)}%`);
        planet.el.style.setProperty('--shadow-x', `${shadowX.toFixed(2)}%`);
        planet.el.style.setProperty('--shadow-y', `${shadowY.toFixed(2)}%`);
        planet.el.style.setProperty('--float-amplitude', `${planet.floatAmplitude}px`);
        planet.el.style.setProperty('--float-duration', `${planet.floatDuration}s`);
        planet.el.style.setProperty('--pulse-duration', `${planet.pulseDuration}s`);
        planet.el.style.setProperty('--spin-duration', `${planet.selfSpin}s`);
        planet.el.style.setProperty('--pulse-min', getMode() === 'mobile' ? '.99' : '');
        planet.el.style.setProperty('--pulse-max', getMode() === 'mobile' ? '1.04' : '');
    });

    requestAnimationFrame(animatePlanets);
}

applyRingLayout();
requestAnimationFrame(animatePlanets);
window.addEventListener('resize', applyRingLayout);
