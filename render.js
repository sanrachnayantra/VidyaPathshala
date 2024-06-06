// Function to escape HTML characters
function escapeHtml(text) {
    const map = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#039;': "'"
    };
    return text.replace(/(&amp;|&lt;|&gt;|&quot;|&#039;)/g, m => map[m]);
}


// Function to render a question and its options
function renderQuestion(question) {
    console.log("Rendering question:", question); // Debugging line

    // Display the question
    const questionTextElement = document.querySelector(".question-text");
    if (questionTextElement) {
        questionTextElement.innerHTML = escapeHtml(question.question);
    }

    // Display the options
    const optionsContainer = document.querySelector(".option-list");
    if (optionsContainer) {
        optionsContainer.innerHTML = ""; // Clear previous options
        question.options.forEach(option => {
            const optionElement = document.createElement("div");
            optionElement.classList.add("option"); // Assuming you have some CSS class for options
            optionElement.innerHTML = escapeHtml(option);
            optionsContainer.appendChild(optionElement);
        });
    }
}

// Ensure the questions array is loaded
window.onload = function() {
    if (typeof questions !== 'undefined' && questions.length > 0) {
        console.log("Questions array loaded:", questions); // Debugging line
        // Render the first question as an example
        renderQuestion(questions[0]);
    } else {
        console.error("Questions array is not defined or empty.");
    }
};
