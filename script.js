function toggleSelection(unit) {
    // Hide all extra content sections
    document.getElementById("content-1").style.display = "none";
    document.getElementById("content-2").style.display = "none";
    document.getElementById("content-3").style.display = "none";

    // Show only the selected unit's extra content
    document.getElementById("content-" + unit).style.display = "block";

    // Update total price based on selection
    if (unit === 1) {
        document.getElementById("total-price").innerText = "$10.00 USD";
    } else if (unit === 2) {
        document.getElementById("total-price").innerText = "$18.00 USD";
    } else {
        document.getElementById("total-price").innerText = "$24.00 USD";
    }
}
