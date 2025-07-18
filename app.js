// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful with scope: ', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed: ', error);
            });
    });
}

// --- YOUR SCENARIOS GO HERE ---
// Each scenario now has a title, subtitle, description, and considerations.
const scenarios = [
    {
        title: "Widespread Cyberattack",
        subtitle: "Loss of Internet and Cellular Service",
        description: "A coordinated cyberattack has disabled major internet service providers and cellular networks across the nation. There is no ETA for service restoration. Banking, communication, and many information systems are offline. You are at home when you realize all digital communications have ceased.",
        considerations: `1. Cash Reserves: Digital payments and ATMs are non-functional. Assess your immediate supply of physical cash.\n2. Information Source: Your primary source for news will be a battery-powered or hand-crank AM/FM radio.\n3. Local Communication: Establish a rally point or check-in plan with nearby family or neighbors.\n4. Grid-Down Power: Without smart grid management, local power outages may become more frequent. Prepare backup lighting and power.\n5. Water & Food: Assume supply chain disruptions. Inventory your non-perishable food and stored water.`
    },
    {
        title: "Chemical Spill",
        subtitle: "Shelter-in-Place Order Issued",
        description: "A train has derailed two kilometers from your location, releasing a cloud of industrial ammonia. Emergency services have issued a mandatory shelter-in-place order for your area via broadcast alerts. You can hear sirens in the distance, and a faint chemical smell is noticeable in the air.",
        considerations: `1. Seal the Home: Go to an interior room with the fewest windows. Close all windows and doors. Use plastic sheeting and duct tape to seal all vents, outlets, and gaps around doors/windows.\n2. Turn Off HVAC: Immediately turn off all heating, ventilation, and air conditioning systems that draw in outside air.\n3. "Go-Kit": Bring your emergency 'go-kit' into your sealed room in case the order changes to an evacuation.\n4. Information Monitoring: Keep a radio on for instructions from authorities. Do not leave until the all-clear is given.\n5. Contamination: If you believe you have been exposed, remove outer clothing layers and seal them in a plastic bag.`
    },
    {
        title: "Major Earthquake",
        subtitle: "Magnitude 7.1",
        description: "Violent shaking has just stopped after lasting for approximately 45 seconds. The power is out, and you can hear car alarms and breaking glass outside. Your home has sustained visible structural damage, but is still standing. Aftershocks are a near certainty.",
        considerations: `1. Assess Injuries: Check yourself and others for injuries immediately. Administer first aid as needed.\n2. Gas & Water Lines: If you smell gas or suspect a leak, shut off the main gas valve. Shut off the main water supply to conserve water in your hot water tank and prevent contaminated water from entering.\n3. Evacuate if Unsafe: If you see major structural damage (e.g., collapsed walls, shifting foundation), evacuate to a clear area away from buildings and power lines.\n4. Aftershocks: Drop, Cover, and Hold On during aftershocks. Stay away from windows and heavy furniture.\n5. Communication Plan: Attempt to use your pre-established out-of-province contact to relay your status. Do not use the phone for non-emergencies.`
    }
];

// DOM Element References
const generateBtn = document.getElementById('generate-btn');
const scenarioTitleEl = document.getElementById('scenario-title');
const scenarioSubtitleEl = document.getElementById('scenario-subtitle'); // New element
const scenarioTextEl = document.getElementById('scenario-text');
const considerationsBtn = document.getElementById('considerations-btn');
const considerationsTextEl = document.getElementById('considerations-text');

let currentConsiderations = '';

// Event Listener for the Generate Button
generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * scenarios.length);
    const selectedScenario = scenarios[randomIndex];

    // Display the scenario title, subtitle, and description
    scenarioTitleEl.textContent = selectedScenario.title;
    scenarioSubtitleEl.textContent = selectedScenario.subtitle; // Populate subtitle
    scenarioTextEl.textContent = selectedScenario.description;   // Populate description

    // Store considerations and prepare the button
    currentConsiderations = selectedScenario.considerations;
    considerationsTextEl.classList.add('hidden');
    considerationsTextEl.textContent = '';
    considerationsBtn.classList.remove('hidden');
    considerationsBtn.textContent = 'Show Key Considerations';
});

// Event Listener for the Considerations Button
considerationsBtn.addEventListener('click', () => {
    const isHidden = considerationsTextEl.classList.contains('hidden');

    if (isHidden) {
        considerationsTextEl.textContent = currentConsiderations;
        considerationsTextEl.classList.remove('hidden');
        considerationsBtn.textContent = 'Hide Considerations';
    } else {
        considerationsTextEl.classList.add('hidden');
        considerationsBtn.textContent = 'Show Key Considerations';
    }
});