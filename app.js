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

// Scenarios data with updated HTML formatting for considerations
const scenarios = [
    {
        title: "Engine Failure After V1",
        description: "The critical engine fails immediately after passing decision speed (V1) during a weight-limited takeoff from a runway with obstacles in the departure path.",
        considerations: `<strong>Procedure:</strong><br>This is a critical memory-item-driven event requiring precise flying to maintain control and achieve the required climb gradient. Follow the procedures for a Power Plant Malfunction After V1 During Takeoff Phase (Below 1,500’ AAE).<br><br><strong>Decision Making:</strong><br>Does the situation require the published Engine Failure Turn Procedure (EFTP), or will ATC provide alternate vectors? Is the departure airport suitable for a single-engine return, considering weather, approach availability, and runway length? If not, what is the takeoff alternate, and do you have sufficient performance and fuel to proceed there?<br><br><strong>Crew Coordination:</strong><br>How long will it take for the pilots to complete the memory items, stabilize the aircraft, and action the QRH to the point where they can brief the I/C FA? What key information does the cabin crew need for their own preparation and for managing passengers?<br><br><strong>Passenger Management:</strong><br>An engine failure is often visible and audible to passengers. How will the cabin crew manage passenger anxiety? What PA will the Captain make, and when is the appropriate time to make it?`
    },
    {
        title: "Unscheduled Propeller Feather In-Flight",
        description: "During cruise, a propeller feathers without crew input, leading to significant asymmetric thrust and drag.",
        considerations: `<strong>Procedure:</strong><br>Follow the memory checks and QRH checklist for the malfunction, likely "Unscheduled Propeller Feathering," which will lead to the "Engine Fail/Fire/Shutdown" procedure.<br><br><strong>Decision Making:</strong><br>A landing at the nearest suitable airport is required. Is your destination still the closest suitable option, or does this necessitate a diversion? "Suitable" now means considering terrain on descent, available approach types, and single-engine landing performance. How does this affect fuel planning?<br><br><strong>Crew Coordination:</strong><br>The sudden yaw and noise will be alarming. How does the flight crew communicate the situation to the cabin crew to prevent panic? What PA will be made to passengers regarding the change of flight path and potential diversion?`
    },
    {
        title: "Engine Fire on Start",
        description: "An engine fire warning illuminates during the engine start sequence on the ground, and the ground crew provides immediate visual confirmation of a fire.",
        considerations: `<strong>Procedure:</strong><br>Follow the memory items for an "Engine Fire on Ground".<br><br><strong>Crew Response:</strong><br>With a visually confirmed fire, an evacuation or rapid deplanement is imminent. The decision is not if, but how to get the passengers off safely. Considerations include wind direction for smoke, which side of the aircraft is safe, and coordinating with airport emergency services.<br><br><strong>Crew Coordination:</strong><br>Communication with the ground crew is vital for confirming the fire is extinguished. How will the flight crew command the evacuation? Flight Attendants must be prepared to initiate an evacuation if the danger is life-threatening and no command is heard6.`
    },
    {
        title: "Propeller Overspeed",
        description: "During descent, a propeller exceeds its maximum RPM limit, causing significant noise, vibration, and potential for catastrophic failure.",
        considerations: `<strong>Procedure:</strong><br>Immediately accomplish the memory items for a "Propeller Overspeed". This involves reducing airspeed and attempting to feather the propeller.<br><br><strong>Decision Making:</strong><br>The noise and vibration can be severe, making communication difficult and potentially masking other issues. If the propeller fails to feather, the QRH provides a specific procedure that must be followed, which affects aircraft performance and handling. A landing at the nearest suitable airport is required.<br><br><strong>Passenger Management:</strong><br>This is a high-stress event for passengers due to extreme noise. What is the content and timing of the PA from the Captain to prevent panic? How do FAs reassure passengers while preparing the cabin for a potential emergency landing?`
    },
    {
        title: "Precautionary Engine Shutdown",
        description: "In cruise, a rapid loss of oil pressure on one engine necessitates a precautionary shutdown to prevent catastrophic failure.",
        considerations: `<strong>Procedure:</strong><br>Follow the QRH procedure for the specific malfunction (e.g., ENG OIL PRESS warning). This will lead to the "Engine Fail/Fire/Shutdown" checklist.<br><br><strong>Decision Making:</strong><br>This is a deliberate, controlled engine shutdown. You are choosing to become a single-engine aircraft. What is the nearest suitable airport for a precautionary landing? Does the weather or terrain en route to that airport pose any new risks?<br><br><strong>Crew Coordination:</strong><br>Since this is not an explosive failure, the crew has more time to coordinate. The PF will fly, while the PM manages the QRH. A thorough briefing should be provided to the I/C FA, outlining the plan and the expected abnormal, single-engine landing.`
    },
    {
        title: "Dual Hydraulic System Failure",
        description: "During flight, cautions illuminate indicating the loss of both primary hydraulic systems, affecting flight controls, landing gear, spoilers, and brakes.",
        considerations: `<strong>Procedure:</strong><br>Follow the appropriate QRH procedure.<br><br><strong>Decision Making:</strong><br>Controllability is the primary concern. Landing distance will be significantly increased due to lack of flaps, ground spoilers and normal brakes with reliance on emergency braking. This necessitates a diversion to an airport with a much longer runway than originally planned. How will the gear be extended via the alternate system?<br><br><strong>Crew Coordination:</strong><br>This could be a prepared emergency if there are no runways with suitable length in range. The PIC must brief the I/C FA on the situation, the likelihood of an abnormal/emergency landing, and the time available for preparation. If instructed, the FAs will conduct the full "Prepared Emergency Landing" checklist.`
    },
    {
        title: "Landing Gear Unsafe Indication",
        description: "After selecting the gear down for landing, one main gear indicates it is not down and locked.",
        considerations: `<strong>Procedure:</strong><br>Follow the QRH procedure for the unsafe gear indication. This will involve recycling the gear and potentially using the alternate extension system.<br><br><strong>Decision Making:</strong><br>Do you have enough fuel to troubleshoot the problem? Will you perform a low pass for a visual inspection from the tower? If the gear cannot be confirmed down, a partial-gear-up landing must be planned, which significantly changes landing characteristics and required runway.<br><br><strong>Crew Coordination:</strong><br>This is a prepared emergency requiring a full briefing to the cabin crew using the ELC format. ABPs must be briefed to cover specific exits. How does the FA's "Silent Review" change when preparing for a potential gear collapse?`
    },
    {
        title: "Flap Failure During Extension",
        description: "While selecting flaps for approach, they stop moving at an intermediate position, accompanied by a caution light.",
        considerations: `<strong>Procedure:</strong><br>Follow the "Abnormal Flap Landing" QRH checklist.<br><br><strong>Decision Making:</strong><br>The approach and landing speeds will be significantly higher than normal. Does the planned runway have sufficient length for a flapless or partial-flap landing? Is a diversion to an airport with a longer runway and better weather a safer course of action? The higher speed will also result in a larger turn radius, affecting maneuvering for the approach.<br><br><strong>Crew Coordination:</strong><br>Would this be an abnormal landing or a prepared emergency? The PIC will brief the I/C FA on the situation, specifically the high landing speed and the need for passengers to be thoroughly prepared for a firm landing and rapid deceleration.`
    },
    {
        title: "Brake System Failure on Landing",
        description: "After touchdown, the pilots apply brakes with no response from the normal system.",
        considerations: `<strong>Procedure:</strong><br>Follow the procedure for a brake system failure. This involves using the emergency/parking brake system and maximum reverse thrust.<br><br><strong>Decision Making:</strong><br>The use of the emergency brake can be aggressive and may cause tires to blow. The primary goal is to keep the aircraft on the runway. What is the runway length remaining? What is the condition of the surface (wet/dry)?<br><br><strong>Crew Coordination:</strong><br>The cabin crew will experience extremely aggressive braking and reverse thrust. They must remain secured until the aircraft is at a complete stop. Once stopped, is there a secondary hazard (e.g., fire from hot brakes) that would require an evacuation? What if the tires caught fire on one side?`
    },
    {
        title: "Smoke in the Cockpit",
        description: "An acrid, electrical smell is detected on the flight deck, followed by the appearance of light haze or smoke. The source is not immediately apparent.",
        considerations: `<strong>Procedure:</strong><br>Immediate memory items are to don oxygen masks and establish communication. Follow the QRH for "Smoke or Fumes of Unknown Source".<br><br><strong>Decision Making:</strong><br>This checklist is complex and may require shedding electrical buses, leading to the loss of other systems, including flight instruments. The crew must be prepared to fly on standby instruments. A diversion to the nearest suitable airport is required. How quickly can you get on the ground?<br><br><strong>Crew Coordination:</strong><br>Communication is difficult with oxygen masks on. The cabin crew must be alerted to the emergency and prepare the cabin for a landing with very little notice.`
    },
    {
        title: "Lavatory Fire",
        description: "The lavatory smoke detector activates, and the cabin crew confirms smoke coming from under the lavatory door.",
        considerations: `<strong>Procedure:</strong><br>Follow the FAM procedure for a lavatory fire. Don PBE, feel the door for heat, and crack it open cautiously. Use the Halon extinguisher at the base of the fire.<br><br><strong>Decision Making:</strong><br>If the door is hot, do not open it; the fire may flash over. Keep the door closed and fight the fire through any available cracks or vents. The PIC must be notified immediately and will initiate a diversion and emergency landing.<br><br><strong>Crew Coordination:</strong><br>The I/C FA must notify the PIC of the 4 S's: Source, Site, Severity, and Smoke. A second crew member (or ABP) should bring a backup extinguisher and PBE. Passengers near the lavatory must be moved.`
    },
    {
        title: "In-flight PED / Lithium Battery Fire",
        description: "A passenger's device in the cabin experiences thermal runaway, emitting smoke, sparks, and fire from their carry-on bag.",
        considerations: `<strong>Procedure:</strong><br>Follow the FAM/SOP procedure for a Lithium Battery Fire. The immediate actions are to use a Halon/water extinguisher, don PBE, and use fire gloves.<br><br><strong>Key Action:</strong><br>After extinguishing the initial flames, the device must be fully immersed in liquid (water, juice, etc.) to cool the remaining battery cells and prevent further thermal runaway. Do not use ice, as it insulates the device.<br><br><strong>Crew Coordination:</strong><br>This is a joint effort. One FA fights the fire while the other manages passengers, communicates with the flight deck, and brings backup equipment. The PIC must decide on the necessity of a diversion based on the severity and containment of the fire.`
    },
    {
        title: "Tire Burst at Rotation (Vr)",
        description: "A loud bang and severe vibration are experienced at the moment of rotation. The aircraft successfully becomes airborne but is clearly damaged.",
        considerations: `<strong>Procedure:</strong><br>Follow the QRH/SOP procedure for "Main Landing Gear Tire Failure"21. The landing gear must not be retracted.<br><br><strong>Decision Making:</strong><br>A visual inspection by a crew member is essential. If the tire carcass appears unbalanced, the crew must prepare for a full emergency landing, with a high probability of a main landing gear collapse on touchdown. Landing must be accomplished at Flaps 35 at published Ref speed if possible. A firm touchdown followed my maximum braking and full reverse will reduce chances of gear collapse.<br><br><strong>Crew Coordination:</strong><br>This is a prepared emergency requiring a full cabin briefing. Passengers in the propeller arc on the affected side should be moved if possible. Brace commands will be critical.`
    },
    {
        title: "Unstable Approach Go-Around",
        description: "On short final in IMC, the aircraft deviates from the stabilized approach criteria (e.g., excessive sink rate, speed deviation).",
        considerations: `<strong>Procedure:</strong><br>Any crew member observing a deviation from stabilized approach criteria must call it out. If unstable, a "Go Around" call is mandatory24. The PF will execute the go-around procedure.<br><br><strong>Decision Making:</strong><br>What caused the unstable approach? Was it an environmental factor (wind shear), a technical issue, or a pilot technique error? This analysis will determine if a second approach is safe or if a diversion is the better option.<br><br><strong>CRM:</strong><br>This tests crew discipline. There can be pressure to "save" a landing, especially near minimums. The SOPs are clear that a go-around is the required action. The briefing should reinforce this as a safe and professional maneuver, not a failure.`
    },
    {
        title: "In-flight Medical Emergency (Cardiac Arrest)",
        description: "A passenger becomes unconscious, is not breathing, and has no pulse.",
        considerations: `<strong>Procedure:</strong><br>Follow Aviation First Aid procedures. Initiate CPR and call for any medical professionals on board.<br><br><strong>Decision Making:</strong><br>This is the most severe medical emergency. The PIC must be notified immediately and declare a medical emergency ("Mayday") with ATC to divert to the absolute nearest suitable airport with emergency medical services.<br><br><strong>Crew Coordination:</strong><br>This is an "all hands" event. One FA performs CPR, another operates communicates with the flight deck. A call for any medical professionals on board is critical. Other passengers must be managed and kept clear of the area. When would you contact the flight deck if you were single FA operations?`
    },
    {
        title: "Flight Attendant Incapacitated",
        description: "A Flight Attendant becomes unconscious for unknown reasons.",
        considerations: `<strong>Procedure:</strong><br>Follow the FAM procedure for an incapacitated Flight Attendant.<br><br><strong>Decision Making (Q400):</strong><br>With two FAs, the remaining FA must contact the flight deck immediately. The flight crew will declare a medical emergency ("Mayday") with ATC and divert to the absolute nearest suitable airport with emergency medical services.<br><br><strong>Single FA Operations (Dash 8 100/300):</strong><br>We will be relying on an ABP to alert the flight crew to the issue. The flight crew will declare a medical emergency ("Mayday") with ATC and divert to the absolute nearest suitable airport with emergency medical services. The pilots will make PAs to ensure passengers are secured for landing.`
    },
    {
        title: "Destination and Alternate Weather Below Minima",
        description: "After starting descent, the destination airport's weather drops below landing minima. Upon checking the filed alternate, its weather has also unexpectedly deteriorated to below minima due to fog.",
        considerations: `<strong>Procedure:</strong><br>Reference the Fuel Planning, Monitoring, and Awareness Protocol in the SOP’s.<br><br><strong>Decision Making:</strong><br>This is a critical fuel planning and decision-making scenario. What other airports are in range? This may not be a filed alternate. You must immediately determine a new course of action. At what fuel quantity do you declare "Minimum Fuel" to ATC, and at what point does it become a "Mayday" fuel emergency? Is there any hope of the weather improving at either airport if you hold?<br><br><strong>CRM:</strong><br>This scenario requires calm, clear communication and teamwork between pilots to analyze all options and make a timely decision before fuel becomes the overriding factor.`
    },
    {
        title: "Lightning Strike",
        description: "A bright flash and loud bang occur, consistent with a lightning strike. The electronic flight displays flicker momentarily, and an ozone smell is present.",
        considerations: `<strong>Procedure:</strong><br>There is no specific QRH memory procedure for a lightning strike. This is an airmanship and systems knowledge scenario.<br><br><strong>Systems Check:</strong><br>A thorough check of all aircraft systems is required. Are all flight instruments, radios, and navigation systems functioning correctly? Are all circuit breakers in? Did any warnings or cautions appear?<br><br><strong>Decision Making:</strong><br>While a diversion is not automatically required, the PIC must assess the state of the aircraft. Any suspected damage or system anomaly warrants a precautionary landing at the nearest suitable airport. How will you explain the event to passengers to avoid alarm?`
    }
];

// DOM Element References
const generateBtn = document.getElementById('generate-btn');
const outputContainer = document.getElementById('output-container');
const scenarioTitleEl = document.getElementById('scenario-title');
const scenarioTextEl = document.getElementById('scenario-text');
const considerationsBtn = document.getElementById('considerations-btn');
const considerationsTextEl = document.getElementById('considerations-text');
const feedbackLink = document.getElementById('feedback-link');

let currentConsiderations = '';

// Event Listener for the Generate Button
generateBtn.addEventListener('click', () => {
    outputContainer.classList.remove('hidden');

    const randomIndex = Math.floor(Math.random() * scenarios.length);
    const selectedScenario = scenarios[randomIndex];

    // Display the scenario title and description
    scenarioTitleEl.textContent = selectedScenario.title;
    scenarioTextEl.textContent = selectedScenario.description;

    // Dynamically update the feedback link
    const subject = `EOSD App Feedback: ${selectedScenario.title}`;
    feedbackLink.href = `mailto:chase.simpson@palairlines.ca?subject=${encodeURIComponent(subject)}`;

    // Store considerations and prepare the button
    currentConsiderations = selectedScenario.considerations;
    considerationsTextEl.classList.add('hidden');
    considerationsTextEl.innerHTML = ''; // Use innerHTML to clear
    considerationsBtn.classList.remove('hidden');
    considerationsBtn.textContent = 'Show Considerations';
});

// Event Listener for the Considerations Button
considerationsBtn.addEventListener('click', () => {
    const isHidden = considerationsTextEl.classList.contains('hidden');

    if (isHidden) {
        considerationsTextEl.innerHTML = currentConsiderations; // Use innerHTML to render bold tags
        considerationsTextEl.classList.remove('hidden');
        considerationsBtn.textContent = 'Hide Considerations';
    } else {
        considerationsTextEl.classList.add('hidden');
        considerationsBtn.textContent = 'Show Considerations';
    }
});