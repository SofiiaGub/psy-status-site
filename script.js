// JavaScript для генерации отчета
function generateStatus() {
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pronoun = gender === 'Мужчина' ? 'Пациент' : 'Пациентка';
    const actionVerb = gender === 'Мужчина' ? 'пришел' : 'пришла';
    const ending = gender === 'Мужчина' ? '' : 'а';
    const participleEnding = gender === 'Мужчина' ? 'ен' : 'на';
    const adjectiveEnding = gender === 'Мужчина' ? 'ый' : 'ая';
    const adjectiveEndingAlt = gender === 'Мужчина' ? 'ий' : 'ая';

    let report = `${pronoun} ${actionVerb} на осмотр.
`;

    // Функция для добавления выбранных значений из чекбоксов и текстовых полей
    function addSectionData(sectionId, sectionTitle) {
        const checkboxes = document.querySelectorAll(`#${sectionId} input[type="checkbox"]:checked`);
        const notes = document.querySelector(`#${sectionId} textarea`)?.value.trim();
        
        let selectedValues = Array.from(checkboxes).map(checkbox => {
            let value = checkbox.value;
            if (value.includes('(м)') || value.includes('(ж)')) {
                value = gender === 'Мужчина' ? value.replace('(м)', '').replace('(ж)', '') : value.replace('(ж)', '').replace('(м)', '');
            }
            value = value.replace('(ый)', adjectiveEnding).replace('(ий)', adjectiveEndingAlt);
            return value;
        });

        if (selectedValues.length > 0) {
            report += `${sectionTitle}: ${selectedValues.join(", " )}.`;
            if (notes) {
                report += ` Дополнительно: ${notes}.`;
            }
            report += "\n";
        } else if (notes) {
            report += `${sectionTitle}: Дополнительно: ${notes}.\n`;
        }
    }

    // Добавление данных из всех разделов
    addSectionData('orientation', 'Ориентировка');
    addSectionData('appearance', 'Внешний вид');
    addSectionData('speech', 'Речь');
    addSectionData('voice', 'Голос');
    addSectionData('behavior', 'Поведение');
    addSectionData('movements', 'Движения');
    addSectionData('posture', 'Поза, жесты и манеры');
    addSectionData('facial-expression', 'Выражение лица и контакт глаз');
    addSectionData('mimicry', 'Мимика');
    addSectionData('contact', 'Контакт');
    addSectionData('answers', 'Ответы на вопросы');
    addSectionData('perception', 'Восприятие вопросов врача');
    addSectionData('conversation-thread', 'Нить разговора и реакция на замечания');
    addSectionData('complaints', 'Жалобы');
    addSectionData('thinking', 'Мышление');
    addSectionData('perception2', 'Восприятие');
    addSectionData('mood-emotions', 'Настроение и эмоции');
    addSectionData('attention', 'Внимание');
    addSectionData('memory', 'Память');
    addSectionData('criticism', 'Критика к состоянию');
    addSectionData('additional-notes', 'Дополнительные заметки');

    // Отображение итогового отчета
    document.getElementById("result").value = report;
}
