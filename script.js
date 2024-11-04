function generateStatus() {
    // Определяем пол пациента
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pronoun = gender === 'Мужчина' ? 'Пациент' : 'Пациентка';

    let report = `Психический статус\n`;

    // Ориентировка
    const orientationTimeOptions = getCheckedOptions('orientation-time');
    const orientationPlaceOptions = getCheckedOptions('orientation-place');
    const orientationSelfOptions = getCheckedOptions('orientation-self');
    const orientationNotes = document.querySelector('textarea[name="orientation-notes"]').value;

    if (orientationTimeOptions.length > 0 || orientationPlaceOptions.length > 0 || orientationSelfOptions.length > 0 || orientationNotes) {
        report += "Ориентировка: ";
        if (orientationTimeOptions.length > 0) report += `${orientationTimeOptions.join(', ')}; `;
        if (orientationPlaceOptions.length > 0) report += `${orientationPlaceOptions.join(', ')}; `;
        if (orientationSelfOptions.length > 0) report += `${orientationSelfOptions.join(', ')}; `;
        if (orientationNotes) report += `${orientationNotes}`;
        report += '\n';
    }

    // Внешний вид
    const appearanceOptions = getCheckedOptions('appearance');
    const appearanceNotes = document.querySelector('textarea[name="appearance-notes"]').value;
    if (appearanceOptions.length > 0 || appearanceNotes) {
        report += `${pronoun} выглядит: ${appearanceOptions.join(', ')}`;
        if (appearanceNotes) report += `. ${appearanceNotes}`;
        report += '.\n';
    }

    // Речь
    const speechOptions = getCheckedOptions('speech');
    const speechNotes = document.querySelector('textarea[name="speech-notes"]').value;
    if (speechOptions.length > 0 || speechNotes) {
        report += `Речь: ${speechOptions.join(', ')}`;
        if (speechNotes) report += `. ${speechNotes}`;
        report += '.\n';
    }

    // Голос
    const voiceOptions = getCheckedOptions('voice');
    const voiceNotes = document.querySelector('textarea[name="voice-notes"]').value;
    if (voiceOptions.length > 0 || voiceNotes) {
        report += `Голос: ${voiceOptions.join(', ')}`;
        if (voiceNotes) report += `. ${voiceNotes}`;
        report += '.\n';
    }

    // Поведение
    const behaviorOptions = getCheckedOptions('behavior');
    const behaviorNotes = document.querySelector('textarea[name="behavior-notes"]').value;
    if (behaviorOptions.length > 0 || behaviorNotes) {
        report += `Поведение: ${behaviorOptions.join(', ')}`;
        if (behaviorNotes) report += `. ${behaviorNotes}`;
        report += '.\n';
    }

    // Движения
    const movementsOptions = getCheckedOptions('movements');
    const movementsNotes = document.querySelector('textarea[name="movements-notes"]').value;
    if (movementsOptions.length > 0 || movementsNotes) {
        report += `Движения: ${movementsOptions.join(', ')}`;
        if (movementsNotes) report += `. ${movementsNotes}`;
        report += '.\n';
    }

    // Поза, жесты и манеры
    const postureOptions = getCheckedOptions('posture');
    const postureNotes = document.querySelector('textarea[name="posture-notes"]').value;
    if (postureOptions.length > 0 || postureNotes) {
        report += `Поза, жесты и манеры: ${postureOptions.join(', ')}`;
        if (postureNotes) report += `. ${postureNotes}`;
        report += '.\n';
    }

    // Выражение лица и контакт глаз
    const facialExpressionOptions = getCheckedOptions('facial-expression');
    const facialExpressionNotes = document.querySelector('textarea[name="facial-expression-notes"]').value;
    if (facialExpressionOptions.length > 0 || facialExpressionNotes) {
        report += `Выражение лица и контакт глаз: ${facialExpressionOptions.join(', ')}`;
        if (facialExpressionNotes) report += `. ${facialExpressionNotes}`;
        report += '.\n';
    }

    // Мимика
    const mimicryOptions = getCheckedOptions('mimicry');
    const mimicryNotes = document.querySelector('textarea[name="mimicry-notes"]').value;
    if (mimicryOptions.length > 0 || mimicryNotes) {
        report += `Мимика: ${mimicryOptions.join(', ')}`;
        if (mimicryNotes) report += `. ${mimicryNotes}`;
        report += '.\n';
    }

    // Контакт
    const contactOptions = getCheckedOptions('contact');
    const contactNotes = document.querySelector('textarea[name="contact-notes"]').value;
    if (contactOptions.length > 0 || contactNotes) {
        report += `Контакт: ${contactOptions.join(', ')}`;
        if (contactNotes) report += `. ${contactNotes}`;
        report += '.\n';
    }

    // Ответы на вопросы
    const answersOptions = getCheckedOptions('answers');
    const answersNotes = document.querySelector('textarea[name="answers-notes"]').value;
    if (answersOptions.length > 0 || answersNotes) {
        report += `Ответы на вопросы: ${answersOptions.join(', ')}`;
        if (answersNotes) report += `. ${answersNotes}`;
        report += '.\n';
    }

    // Восприятие вопросов врача
    const perceptionOptions = getCheckedOptions('perception');
    const perceptionNotes = document.querySelector('textarea[name="perception-notes"]').value;
    if (perceptionOptions.length > 0 || perceptionNotes) {
        report += `Восприятие вопросов врача: ${perceptionOptions.join(', ')}`;
        if (perceptionNotes) report += `. ${perceptionNotes}`;
        report += '.\n';
    }

    // Нить разговора и реакция на замечания
    const conversationThreadOptions = getCheckedOptions('conversation-thread');
    const remarksReactionOptions = getCheckedOptions('remarks-reaction');
    const conversationThreadNotes = document.querySelector('textarea[name="conversation-thread-notes"]').value;
    if (conversationThreadOptions.length > 0 || remarksReactionOptions.length > 0 || conversationThreadNotes) {
        report += `Нить разговора: ${conversationThreadOptions.join(', ')}`;
        if (remarksReactionOptions.length > 0) {
            report += `, реакция на замечания: ${remarksReactionOptions.join(', ')}`;
        }
        if (conversationThreadNotes) report += `. ${conversationThreadNotes}`;
        report += '.\n';
    }

    // Жалобы
    const complaintsOptions = getCheckedOptions('complaints');
    const complaintsDetail = document.querySelector('textarea[name="complaints-detail"]').value;
    if (complaintsOptions.length > 0 || complaintsDetail) {
        report += `Жалобы: ${complaintsOptions.join(', ')}`;
        if (complaintsDetail) {
            report += `: ${complaintsDetail}`;
        }
        report += '.\n';
    }

    // Мышление
    const thinkingOptions = getCheckedOptions('thinking');
    const thinkingNotes = document.querySelector('textarea[name="thinking-notes"]').value;
    if (thinkingOptions.length > 0 || thinkingNotes) {
        report += `Мышление: ${thinkingOptions.join(', ')}`;
        if (thinkingNotes) report += `. ${thinkingNotes}`;
        report += '.\n';
    }

    // Восприятие
    const perception2Options = getCheckedOptions('perception2');
    const perception2Notes = document.querySelector('textarea[name="perception2-notes"]').value;
    if (perception2Options.length > 0 || perception2Notes) {
        report += `Восприятие: ${perception2Options.join(', ')}`;
        if (perception2Notes) report += `. ${perception2Notes}`;
        report += '.\n';
    }

    // Настроение и эмоции
    const moodEmotionsOptions = getCheckedOptions('mood-emotions');
    const moodEmotionsNotes = document.querySelector('textarea[name="mood-emotions-notes"]').value;
    if (moodEmotionsOptions.length > 0 || moodEmotionsNotes) {
        report += `Настроение и эмоции: ${moodEmotionsOptions.join(', ')}`;
        if (moodEmotionsNotes) report += `. ${moodEmotionsNotes}`;
        report += '.\n';
    }

    // Внимание
    const attentionOptions = getCheckedOptions('attention');
    const attentionDetail = document.querySelector('textarea[name="attention-detail"]').value;
    const attentionNotes = document.querySelector('textarea[name="attention-notes"]').value;
    if (attentionOptions.length > 0 || attentionDetail || attentionNotes) {
        report += `Внимание: ${attentionOptions.join(', ')}`;
        if (attentionDetail) report += `: ${attentionDetail}`;
        if (attentionNotes) report += `. ${attentionNotes}`;
        report += '.\n';
    }

    // Память
    const memoryOptions = getCheckedOptions('memory');
    const memoryNotes = document.querySelector('textarea[name="memory-notes"]').value;
    if (memoryOptions.length > 0 || memoryNotes) {
        report += `Память: ${memoryOptions.join(', ')}`;
        if (memoryNotes) report += `. ${memoryNotes}`;
        report += '.\n';
    }

    // Критика к состоянию
    const criticismOptions = getCheckedOptions('criticism');
    const criticismNotes = document.querySelector('textarea[name="criticism-notes"]').value;
    if (criticismOptions.length > 0 || criticismNotes) {
        report += `Критика к состоянию: ${criticismOptions.join(', ')}`;
        if (criticismNotes) report += `. ${criticismNotes}`;
        report += '.\n';
    }

    // Дополнительные заметки
    const additionalNotes = document.querySelector('textarea[name="additional-notes"]').value;
    if (additionalNotes) {
        report += `${additionalNotes}\n`;
    }

    // Отображение итогового отчета
    document.getElementById("result").value = report;
}

// Функция для получения отмеченных опций по имени
function getCheckedOptions(name) {
    return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(option => option.value);
}

