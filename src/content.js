// Fallback theme storage if localStorage is not available
let themeFallback = 'dark';

// Function to check if localStorage is accessible
function isLocalStorageAccessible() {
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (e) {
        return false;
    }
}

// Function to toggle themes
function toggleTheme() {
    const body = document.body;
    const themeText = document.getElementById('theme-text');

    if (body.classList.contains('light-mode')) {
        // Switch to Dark Mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeText.innerText = "Dark Mode";
        themeText.style.color = "white";  // Change text color to white for dark mode
        
        if (isLocalStorageAccessible()) {
            localStorage.setItem('theme', 'dark'); // Save the theme preference in localStorage
        } else {
            themeFallback = 'dark'; // Use in-memory fallback
        }
    } else {
        // Switch to Light Mode
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeText.innerText = "Light Mode";
        themeText.style.color = "black";  // Change text color to black for light mode
        
        if (isLocalStorageAccessible()) {
            localStorage.setItem('theme', 'light'); // Save the theme preference in localStorage
        } else {
            themeFallback = 'light'; // Use in-memory fallback
        }
    }
}

// Function to initialize theme from storage
function initializeTheme() {
    let savedTheme = null;

    if (isLocalStorageAccessible()) {
        savedTheme = localStorage.getItem('theme');
    } else {
        savedTheme = themeFallback; // Use in-memory fallback if localStorage is not accessible
    }

    const body = document.body;
    const themeText = document.getElementById('theme-text');
    const themeSlider = document.getElementById('theme-slider');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeText.innerText = "Light Mode";
        themeText.style.color = "black";  // Set text color to black for light mode
        themeSlider.checked = true; // Set the slider to the light mode position
    } else {
        body.classList.add('dark-mode');
        themeText.innerText = "Dark Mode";
        themeText.style.color = "white";  // Set text color to white for dark mode
    }
}

// Append the theme toggle slider and markdown content container to the body
document.body.innerHTML = `
    <div id="theme-slider-container" style="top: 0; left: 50%; width: 100%; display: flex; justify-content: center; padding: 20px;">
        <label class="switch">
            <input type="checkbox" id="theme-slider">
            <span class="slider round"></span>
        </label>
        <span id="theme-text" style="margin-left: 10px; display: flex; justify-content: center; align-items: center;">Dark Mode</span>
    </div>
    <div id="markdown-content"></div> <!-- Padding to avoid overlap with slider -->
`;

// Initialize theme based on previous preference
initializeTheme();

// Event listener for the slider
document.getElementById('theme-slider').addEventListener('change', toggleTheme);

// Function to process and render Markdown
function processMarkdown() {
    if (document.URL.endsWith('.md')) {
        fetch(document.URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.text();
            })
            .then(text => {
                const html = typeof marked === 'function' || typeof marked === 'object' ? 
                             marked.parse ? marked.parse(text) : marked(text) : '';
                document.getElementById('markdown-content').innerHTML = html;
            })
            .catch(err => {
                console.error('Error loading or rendering the Markdown file:', err);
                document.getElementById('markdown-content').innerHTML = `
                    <div style="color: red;">
                        Error loading or rendering the Markdown file. Please check the console for more details.
                    </div>`;
            });
    }
}

// Process Markdown immediately if DOM is ready
if (document.readyState === "complete" || document.readyState === "interactive") {
    processMarkdown();
} else {
    document.addEventListener('DOMContentLoaded', processMarkdown);
}
