// Define your translations
const translations = {
    en: {
        welcome: "Welcome",
        description: "This is a bilingual website."
    },
    ar: {
        welcome: "مرحبا",
        description: "هذا موقع بلغتين."
    }
};

// Function to change language
function changeLanguage(lang) {
    // Save the selected language to localStorage
    localStorage.setItem('selectedLanguage', lang);

    // Get all elements with a data-key attribute
    document.querySelectorAll('[data-key]').forEach((element) => {
        // Get the key from the element
        const key = element.getAttribute('data-key');
        // Set the text content using the translations object
        element.textContent = translations[lang][key];
    });

    // Change the page direction for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.setAttribute('dir', 'rtl');
        // Hide the Arabic button and show the English button
        document.getElementById('arabic-btn').style.display = 'none';
        document.getElementById('english-btn').style.display = 'inline-block';
    } else {
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.setAttribute('dir', 'ltr');
        // Hide the English button and show the Arabic button
        document.getElementById('english-btn').style.display = 'none';
        document.getElementById('arabic-btn').style.display = 'inline-block';
    }
}

// Function to reload the page when the language is changed
function reloadPageWithLanguage(lang) {
    changeLanguage(lang);
    location.reload(); // Reload the page after language change
}

// Event listeners for the language buttons
document.getElementById('english-btn').addEventListener('click', function () {
    reloadPageWithLanguage('en');
});

document.getElementById('arabic-btn').addEventListener('click', function () {
    reloadPageWithLanguage('ar');
});

// Load language on page load
window.addEventListener('load', function () {
    // Check if a language is saved in localStorage
    const savedLang = localStorage.getItem('selectedLanguage');
    const defaultLang = savedLang ? savedLang : 'en'; // Set your default language
    changeLanguage(defaultLang); // Apply the saved or default language
});
