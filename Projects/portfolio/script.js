function addRecommendation() {
    const recommendationInput =
        document.getElementById("newRecommendation");

    const recommendationText =
        recommendationInput.value.trim();

    if (recommendationText === "") {
        return;
    }

    const recommendation = document.createElement("div");
    recommendation.className = "recommendation";

    recommendation.innerHTML = `
        <p>"${recommendationText}"</p>
        <h4>— New Recommendation</h4>
    `;

    const recommendationContainer =
        document.querySelector(".recommendation-container");

    if (!recommendationContainer) {
        return;
    }

    recommendationContainer.appendChild(recommendation);

    recommendationInput.value = "";

    showPopup(true);
}


function showPopup(show) {
    if (show) {
        alert("Thank you for your recommendation!");
    }
}