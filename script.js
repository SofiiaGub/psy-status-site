function generateStatus() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pronoun = gender === 'male' ? 'Пациент' : 'Пациентка';
    const actionVerb = gender === 'male' ? 'пришел' : 'пришла';

    let report = `${pronoun} ${actionVerb} на осмотр.\n`;

    function addSection(name, sectionTitle, joinWith = ', ', isLowerCase = true, detailName = `${name}-detail`) {
        const selectedItems = document.querySelectorAll(`input[name="${name}"]:checked`);
        const detailText = document.querySelector(`input[name="${detailName}"]`)?.value;

        if (selectedItems.length > 0 || detailText) {
            const selectedValues = Array.from(selectedItems).map(item => item.value);
            const text = isLowerCase ? selectedValues.join(joinWith).toLowerCase() : selectedValues.join(joinWith);

            report += `${sectionTitle}: ${text}.\n`;
            if (detailText) {
                report += `Уточнение: ${detailText}\n`;
            }
        }
    }

    // Обработка каждого раздела
    addSection('consciousness', 'Сознание');
    addSection('orientation', 'Ориентация');
    addSection('meeting', 'Как пришел на беседу с врачом');
    addSection('speech', 'Речь');
    addSection('voice', 'Голос');
    addSection('appearance', 'Внешний вид и поведение');
    addSection('posture', 'Поза, жесты и манеры');
    addSection('face', 'Выражение лица');
    addSection('mimic', 'Мимика');
    addSection('contact', 'Контакт');
    addSection('answers', 'Ответы на вопросы');
    addSection('perception', 'Восприятие вопросов врача');
    addSection('conversation', 'Нить разговора');
    addSection('complaints', 'Жалобы');
    addSection('thinking', 'Нарушение содержания мышления');
    addSection('associative', 'Нарушение ассоциативного процесса мышления');
    addSection('perception2', 'Нарушение восприятия');
    addSection('emotions', 'Настроение и эмоции');
    addSection('attention', 'Внимание');
    addSection('memory', 'Память');
    addSection('criticism', 'Критика к состоянию');

    const bp = document.querySelector('input[name="bp"]').value;
    const temperature = document.querySelector('input[name="temperature"]').value;
    const healthDetail = document.querySelector('input[name="health-detail"]').value;
    let healthText = "";
    if (bp) healthText += `Артериальное давление: ${bp} мм рт. ст. `;
    if (temperature) healthText += `Температура тела: ${temperature}°C `;

    const healthItems = document.querySelectorAll('input[name="health"]:checked');
    if (healthItems.length > 0) {
        const healthValues = Array.from(healthItems).map(item => item.value.toLowerCase()).join(', ');
        healthText += `Состояние: ${healthValues}`;
    }
    if (healthText) {
        report += `Соматическое состояние: ${healthText}.\n`;
    }
    if (healthDetail) {
        report += `Уточнение: ${healthDetail}\n`;
    }

    document.getElementById("result").innerText = report;
}
