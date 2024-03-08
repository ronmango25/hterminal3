document.getElementById('inject-btn').addEventListener('click', function() {
    var terminalCode = document.querySelector('.code-box').innerText;

    try {
        eval(terminalCode);
        showNotification('Code successfully executed!', 'success');
    } catch (error) {
        console.error('Error executing terminal code:', error);
        showNotification('Error executing code. Please check the syntax and try again.', 'error');
    }
});

document.getElementById('submit-btn').addEventListener('click', function() {
    var websiteCode = document.getElementById('website-code').value;

    document.getElementById('website-content').innerHTML = websiteCode;

    showNotification('Website content updated successfully.', 'success');
});

function showNotification(message, type) {
    var notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add(type);
    notification.style.display = 'block';

    setTimeout(function() {
        notification.classList.remove(type);
        notification.style.display = 'none';
    }, 3000); // Hide notification after 3 seconds
}

