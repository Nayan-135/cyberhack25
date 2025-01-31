document.getElementById("accountForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const accountType = document.getElementById("accountType").value;
    const limit = document.getElementById("limit").value;
    const fingerprintData = document.getElementById("fingerprintData").value;

    const response = await fetch("http://localhost:5000/create-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, accountType, limit, fingerprintData }),
    });

    const data = await response.json();
    document.getElementById("responseMessage").innerText = data.message + " Your Code: " + data.uniqueCode;
});

// Simulated fingerprint scanner
function scanFingerprint() {
    document.getElementById("fingerprintData").value = "sample_fingerprint_123";
}
