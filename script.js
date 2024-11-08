function generateStatus() {
    let report = "";

    // Пол пациента
    const gender = document.querySelector('input[name="gender"]:checked').value;
    report += `Пол пациента: ${gender}.\n`;

    // Ориентировка
    report += "Ориентировка:\n";
    document.querySelectorAll('input[name^="orientation-time"]:checked').forEach(checkbox => {
        report += `- Время: ${checkbox.value}.\n`;
    });
    document.querySelectorAll('input[name^="orientation-place"]:checked').forEach(checkbox => {
        report += `- Место: ${checkbox.value}.\n`;
    });
    document.querySelectorAll('input[name^="orientation-self"]:checked').forEach(checkbox => {
        report += `- Собственная личность: ${checkbox.value}.\n`;
    });
    const orientationNotes = document.querySelector('textarea[name="orientation-notes"]').value;
    if (orientationNotes) {
        report += `Примечания по ориентировке: ${orientationNotes}.\n`;
    }

    // Внешний вид
    report += "Внешний вид:\n";
    document.querySelectorAll('input[name="appearance"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const appearanceNotes = document.querySelector('textarea[name="appearance-notes"]').value;
    if (appearanceNotes) {
        report += `Примечания по внешнему виду: ${appearanceNotes}.\n`;
    }

    // Речь
    report += "Речь:\n";
    document.querySelectorAll('input[name="speech"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const speechNotes = document.querySelector('textarea[name="speech-notes"]').value;
    if (speechNotes) {
        report += `Примечания по речи: ${speechNotes}.\n`;
    }

    // Голос
    report += "Голос:\n";
    document.querySelectorAll('input[name="voice"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const voiceNotes = document.querySelector('textarea[name="voice-notes"]').value;
    if (voiceNotes) {
        report += `Примечания по голосу: ${voiceNotes}.\n`;
    }

    // Поведение
    report += "Поведение:\n";
    document.querySelectorAll('input[name="behavior"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const behaviorNotes = document.querySelector('textarea[name="behavior-notes"]').value;
    if (behaviorNotes) {
        report += `Примечания по поведению: ${behaviorNotes}.\n`;
    }

    // Движения
    report += "Движения:\n";
    document.querySelectorAll('input[name="movements"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const movementsNotes = document.querySelector('textarea[name="movements-notes"]').value;
    if (movementsNotes) {
        report += `Примечания по движениям: ${movementsNotes}.\n`;
    }

    // Поза, жесты и манеры
    report += "Поза, жесты и манеры:\n";
    document.querySelectorAll('input[name="posture"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const postureNotes = document.querySelector('textarea[name="posture-notes"]').value;
    if (postureNotes) {
        report += `Примечания по позе и жестам: ${postureNotes}.\n`;
    }

    // Выражение лица и контакт глаз
    report += "Выражение лица и контакт глаз:\n";
    document.querySelectorAll('input[name="facial-expression"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const facialExpressionNotes = document.querySelector('textarea[name="facial-expression-notes"]').value;
    if (facialExpressionNotes) {
        report += `Примечания по выражению лица: ${facialExpressionNotes}.\n`;
    }

    // Мимика
    report += "Мимика:\n";
    document.querySelectorAll('input[name="mimicry"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const mimicryNotes = document.querySelector('textarea[name="mimicry-notes"]').value;
    if (mimicryNotes) {
        report += `Примечания по мимике: ${mimicryNotes}.\n`;
    }

    // Контакт
    report += "Контакт:\n";
    document.querySelectorAll('input[name="contact"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const contactNotes = document.querySelector('textarea[name="contact-notes"]').value;
    if (contactNotes) {
        report += `Примечания по контакту: ${contactNotes}.\n`;
    }

    // Ответы на вопросы
    report += "Ответы на вопросы:\n";
    document.querySelectorAll('input[name="answers"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const answersNotes = document.querySelector('textarea[name="answers-notes"]').value;
    if (answersNotes) {
        report += `Примечания по ответам на вопросы: ${answersNotes}.\n`;
    }

    // Восприятие вопросов врача
    report += "Восприятие вопросов врача:\n";
    document.querySelectorAll('input[name="perception"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const perceptionNotes = document.querySelector('textarea[name="perception-notes"]').value;
    if (perceptionNotes) {
        report += `Примечания по восприятию вопросов: ${perceptionNotes}.\n`;
    }

    // Нить разговора и реакция на замечания
    report += "Нить разговора и реакция на замечания:\n";
    document.querySelectorAll('input[name="conversation-thread"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    document.querySelectorAll('input[name="remarks-reaction"]:checked').forEach(checkbox => {
        report += `- Реакция на замечания: ${checkbox.value}.\n`;
    });
    const conversationThreadNotes = document.querySelector('textarea[name="conversation-thread-notes"]').value;
    if (conversationThreadNotes) {
        report += `Примечания по нити разговора: ${conversationThreadNotes}.\n`;
    }

    // Жалобы
    report += "Жалобы:\n";
    document.querySelectorAll('input[name="complaints"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const complaintsDetail = document.querySelector('textarea[name="complaints-detail"]').value;
    if (complaintsDetail) {
        report += `Детали жалоб: ${complaintsDetail}.\n`;
    }

    // Мышление
    report += "Мышление:\n";
    document.querySelectorAll('input[name="thinking"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const thinkingNotes = document.querySelector('textarea[name="thinking-notes"]').value;
    if (thinkingNotes) {
        report += `Примечания по мышлению: ${thinkingNotes}.\n`;
    }

    // Восприятие
    report += "Восприятие:\n";
    document.querySelectorAll('input[name="perception2"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const perception2Notes = document.querySelector('textarea[name="perception2-notes"]').value;
    if (perception2Notes) {
        report += `Примечания по восприятию: ${perception2Notes}.\n`;
    }

    // Настроение и эмоции
    report += "Настроение и эмоции:\n";
    document.querySelectorAll('input[name="mood-emotions"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const moodEmotionsNotes = document.querySelector('textarea[name="mood-emotions-notes"]').value;
    if (moodEmotionsNotes) {
        report += `Примечания по настроению и эмоциям: ${moodEmotionsNotes}.\n`;
    }

    // Внимание
    report += "Внимание:\n";
    document.querySelectorAll('input[name="attention"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const attentionDetail = document.querySelector('textarea[name="attention-detail"]').value;
    if (attentionDetail) {
        report += `Детали внимания: ${attentionDetail}.\n`;
    }
    const attentionNotes = document.querySelector('textarea[name="attention-notes"]').value;
    if (attentionNotes) {
        report += `Примечания по вниманию: ${attentionNotes}.\n`;
    }

    // Память
    report += "Память:\n";
    document.querySelectorAll('input[name="memory"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const memoryNotes = document.querySelector('textarea[name="memory-notes"]').value;
    if (memoryNotes) {
        report += `Примечания по памяти: ${memoryNotes}.\n`;
    }

    // Критика к состоянию
    report += "Критика к состоянию:\n";
    document.querySelectorAll('input[name="criticism"]:checked').forEach(checkbox => {
        report += `- ${checkbox.value}.\n`;
    });
    const criticismNotes = document.querySelector('textarea[name="criticism-notes"]').value;
    if (criticismNotes) {
        report += `Примечания по критике к состоянию: ${criticismNotes}.\n`;
    }

    // Дополнительные заметки
    const additionalNotes = document.querySelector('textarea[name="additional-notes"]').value;
    if (additionalNotes) {
        report += `Дополнительные заметки: ${additionalNotes}.\n`;
    }

    // Вывод результата в текстовое поле
    document.getElementById("result").value = report;
}
