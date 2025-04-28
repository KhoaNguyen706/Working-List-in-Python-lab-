document.addEventListener('DOMContentLoaded', function () {
    // Find all copy buttons on the page
    var copyButtons = document.querySelectorAll('.copy-btn');
    // Add click event listener to each button
    copyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var _this = this;
            // Find the next code element after this button
            var codeElement = this.nextElementSibling.querySelector('code');
            if (codeElement && codeElement.textContent) {
                // Copy the code text to clipboard
                navigator.clipboard.writeText(codeElement.textContent.trim())
                    .then(function () {
                    // Show success feedback
                    var originalText = _this.textContent;
                    _this.textContent = "Copied!";
                    // Reset button text after 2 seconds
                    setTimeout(function () {
                        _this.textContent = originalText;
                    }, 2000);
                })
                    .catch(function (err) {
                    console.error('Failed to copy: ', err);
                    _this.textContent = "Error!";
                    // Reset button text after 2 seconds
                    setTimeout(function () {
                        _this.textContent = "Copy";
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
