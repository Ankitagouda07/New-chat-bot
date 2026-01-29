function loadPage(page) {
    let content = document.getElementById("content");

    if (page === "home") {
        content.innerHTML = `
        <div class="card">
            <h3>Welcome 👋</h3>
            <p>This app provides information about:</p>
            <ul>
                <li>Youth Red Cross (YRC)</li>
                <li>Bharat Scouts & Guides</li>
                <li>National Cadet Corps (NCC)</li>
            </ul>
        </div>`;
    }

    if (page === "yrc") {
        content.innerHTML = `
        <div class="card">
            <h3>Youth Red Cross (YRC)</h3>
            <p><b>Established:</b> 1920</p>
            <p><b>Volunteers:</b> 130</p>
            <p><b>Coordinator:</b> Mr. P. Srinivasa</p>
            <p><b>Student Coordinators:</b> R. Vardhini, N. Trishya</p>
            <p><b>Activities:</b> Blood donation, health camps, disaster relief, awareness programs</p>
            <p><b>Camps:</b> Keshavaram, North Camp, Outreach Programs</p>
        </div>`;
    }

    if (page === "scouts") {
        content.innerHTML = `
        <div class="card">
            <h3>Bharat Scouts & Guides</h3>
            <p><b>Motto:</b> Service</p>
            <p><b>Founded:</b> 1914</p>
            <p><b>Faculty Coordinators:</b></p>
            <ul>
                <li>Mrs. Y. Vijayalakshmi</li>
                <li>Dr. Chandan Babu</li>
            </ul>
            <p><b>Selection:</b> Physical Test, Interview</p>
        </div>`;
    }

    if (page === "ncc") {
        content.innerHTML = `
        <div class="card">
            <h3>National Cadet Corps (NCC)</h3>
            <p><b>Started:</b> 2012</p>
            <p><b>Cadets:</b> 160</p>
            <p><b>Training:</b> Drill, Weapon Training, Physical Fitness</p>
            <p><b>Camps:</b> RDC, Thal Sainik Camp, Mountaineering, YEP</p>
        </div>`;
    }

    if (page === "contact") {
        content.innerHTML = `
        <div class="card">
            <h3>General Information</h3>
            <p><b>College:</b> Bhavan’s Vivekananda College</p>
            <p><b>Purpose:</b> Student development & social service</p>
            <p><b>Units:</b> YRC, NCC, Scouts & Guides</p>
        </div>`;
    }
}

// Load home on start
loadPage("home");
