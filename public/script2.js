async function verifyUser() {
    const uniqueCode = document.getElementById("uniqueCode").value;
    const fingerprintData = document.getElementById("fingerprintData").value;

    const response = await fetch("http://localhost:5000/verify-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uniqueCode, fingerprintData }),
    });

    const data = await response.json();
    document.getElementById("verificationMessage").innerText = data.message || data.error;
}

// Simulated fingerprint scanner
function scanFingerprint() {
    document.getElementById("fingerprintData").value = "sample_fingerprint_123";
}
