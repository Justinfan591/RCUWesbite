function handleSelection(category) {
    alert(`You selected ${category}.`);
    document.getElementById('inquiry-section').classList.remove('hidden');
}

function submitInquiry() {
    const inquiryText = document.getElementById('inquiry-text').value;
    if (inquiryText.trim() === "") {
        alert("Please type your inquiry before submitting.");
    } else {
        alert(`Inquiry submitted: ${inquiryText}`);
        // Optionally, send the inquiry to a backend or API here
    }
}
