function changeService(service, serviceButton) {
    const serviceContent = document.getElementById(service);
    serviceContent.classList.remove('hidden');

    document.querySelectorAll('.service-description > div').forEach(content => {
        if (content.id !== service && !content.classList.contains('hidden')) {
            content.classList.add('hidden');
        }
    });

    document.querySelectorAll('.service-list button').forEach(button => {
        button.classList.remove('active');
    });

    serviceButton.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const serviceButtons = document.querySelectorAll('.service-list button');

    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = button.dataset.service;
            changeService(service, button);
        });
    });
});