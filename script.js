// Объект с текстовыми данными для каждого языка
var languages = {
    'en': {
        'welcome': 'Welcome!',
        // Добавьте другие тексты на английском
    },
    'ru': {
        'welcome': 'Добро пожаловать!',
        // Добавьте другие тексты на русском
    },
    'es': {
        'welcome': 'Bienvenido!',
        // Добавьте другие тексты на испанском
    }
};

// Функция для изменения языка
function switchLanguage(languageCode) {
    var elements = document.querySelectorAll('[data-translate]');
    elements.forEach(function (element) {
        var key = element.getAttribute('data-translate');
        element.innerHTML = languages[languageCode][key];
    });
}

// Начальная установка языка
switchLanguage('en');
