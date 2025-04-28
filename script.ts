document.addEventListener('DOMContentLoaded', function() {
    // Find all copy buttons on the page
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    // Add click event listener to each button
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Find the next code element after this button
            const codeElement = this.nextElementSibling.querySelector('code');
            
            if (codeElement && codeElement.textContent) {
                // Copy the code text to clipboard
                navigator.clipboard.writeText(codeElement.textContent.trim())
                    .then(() => {
                        // Show success feedback
                        const originalText = this.textContent;
                        this.textContent = "Copied!";
                        
                        // Reset button text after 2 seconds
                        setTimeout(() => {
                            this.textContent = originalText;
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy: ', err);
                        this.textContent = "Error!";
                        
                        // Reset button text after 2 seconds
                        setTimeout(() => {
                            this.textContent = "Copy";
                        }, 2000);
                    });
            }
        });
    });
    
    // Also trigger Prism highlighting just to be safe
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
});