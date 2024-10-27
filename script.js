function generateStatus() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pronoun = gender === 'male' ? 'Пациент' : 'Пациентка';
    const actionVerb = gender === 'male' ? 'пришел' : 'пришла';

    let report = `${pronoun} ${actionVerb} на осмотр.\n`;

    // Функция для добавления выбранных значений из выпадающего списка
    function addMultiSelectSection(selectId, sectionTitle, detailId) {
        const selectElement = document.getElementById(selectId);
        const selectedOptions = Array.from(selectElement.selectedOptions).map(option => option.value);
        const detailText = document.querySelector(`input[name="${detailId}"]`).value;

        if (selectedOptions.length > 0) {
            report += `${sectionTitle}: ${selectedOptions.join(', ')}.`;
            if (detailText) report += ` Дополнительно: ${detailText}.`;
            report += '\n';
        }
    }
document.addEventListener('DOMContentLoaded', function () {
    const multiSelects = document.querySelectorAll('select[multiple]');
    multiSelects.forEach(select => {
        new Choices(select, {
            removeItemButton: true, // Кнопка для удаления выбранных элементов
            placeholder: true,
            placeholderValue: 'Выберите варианты',
        });
    });
});

    // Добавляем все разделы в отчет
    addMultiSelectSection('consciousness', 'Сознание', 'consciousness-detail');
    addMultiSelectSection('orientation', 'Ориентация', 'orientation-detail');
    addMultiSelectSection('meeting', 'Как пришел на беседу с врачом', 'meeting-detail');
    addMultiSelectSection('speech', 'Речь', 'speech-detail');
    addMultiSelectSection('voice', 'Голос', 'voice-detail');
    addMultiSelectSection('appearance', 'Внешний вид и Поведение', 'appearance-detail');
    addMultiSelectSection('posture', 'Поза, жесты и манеры', 'posture-detail');
    addMultiSelectSection('face', 'Выражение лица и Мимика', 'face-detail');
    addMultiSelectSection('contact', 'Контакт', 'contact-detail');
    addMultiSelectSection('answers', 'Ответы на вопросы', 'answers-detail');
    addMultiSelectSection('perception', 'Восприятие вопросов врача', 'perception-detail');
    addMultiSelectSection('conversation', 'Нить разговора', 'conversation-detail');
    addMultiSelectSection('complaints', 'Жалобы', 'complaints-detail');
    addMultiSelectSection('thinking', 'Нарушение содержания мышления', 'thinking-detail');
    addMultiSelectSection('associative', 'Нарушение ассоциативного процесса мышления', 'associative-detail');
    addMultiSelectSection('perception2', 'Нарушение восприятия', 'perception2-detail');
    addMultiSelectSection('emotions', 'Настроение и Эмоции', 'emotions-detail');
    addMultiSelectSection('attention', 'Внимание', 'attention-detail');
    addMultiSelectSection('memory', 'Память', 'memory-detail');
    addMultiSelectSection('criticism', 'Критика к состоянию', 'criticism-detail');

    // Соматическое состояние с текстовыми полями
    const bp = document.querySelector('input[name="bp"]').value;
    const temperature = document.querySelector('input[name="temperature"]').value;
    const healthOptions = Array.from(document.getElementById('health').selectedOptions).map(option => option.value);
    const healthDetail = document.querySelector('input[name="health-detail"]').value;

    if (bp || temperature || healthOptions.length > 0) {
        report += 'Соматическое состояние: ';
        if (bp) report += `АД: ${bp} мм рт. ст., `;
        if (temperature) report += `Температура тела: ${temperature}°C, `;
        if (healthOptions.length > 0) report += `Сон и аппетит: ${healthOptions.join(', ')}`;
        if (healthDetail) report += `. Дополнительно: ${healthDetail}`;
        report += '.\n';
    }

    // Отображение итогового отчета
    document.getElementById("result").innerText = report;
}
