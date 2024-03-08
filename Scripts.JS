document.getElementById('inject-btn').addEventListener('click', function() {
    // Get the URL and code entered by the user
    var websiteUrl = document.getElementById('website-url').value;
    var code = document.getElementById('code-input').value;

    // Fetch the website content
    fetch(websiteUrl)
        .then(response => response.text())
        .then(html => {
            // Inject the code into the website content
            var updatedHtml = html + '<script>' + code + '</script>';
            document.getElementById('message').innerText = 'Code injected successfully!';
            
            // Update the website content with the injected code
            var websiteContent = document.createElement('div');
            websiteContent.innerHTML = updatedHtml;
            document.body.appendChild(websiteContent);
        })
        .catch(error => {
            // Display an error message if the URL cannot be fetched
            document.getElementById('message').innerText = 'Error fetching website content: ' + error.message;
        });
});
