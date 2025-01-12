const regions = [
    'Алтайский край', 
    'Амурская область', 
    'Архангельская область', 
    'Астраханская область', 
    'Белгородская область', 
    'Брянская область',
    'Владимирская область',
    'Волгоградская область',
    'Вологодская область',
    'Воронежская область',
    'г. Москва',
    'г. Санкт-Петербург',
    'г. Севастополь',
    'Донецкая народная республика',
    'Еврейская автономная область',
    'Забайкальский край',
    'Запорожская область',
    'Ивановская область',
    'Иркутская область',
    'Кабардино-Балкарская республика',
    'Калининградская область',
    'Калужская область',
    'Камчатский край',
    'Карачаево-Черкесская Республика',
    'Кемеровская область - Кузбасс',
    'Кировская область',
    'Костромская область',
    'Краснодарский край',
    'Красноярский край',
    'Курганская область',
    'Курская область',
    'Ленинградская область',
    'Липецкая область',
    'Луганская народная республика',
    'Магаданская область',
    'Московская область',
    'Мурманская область',
    'Ненецкий автономный округ',
    'Нижегородская область',
    'Новгородская область',
    'Новосибирская область',
    'Омская область',
    'Оренбургская область',
    'Орловская область',
    'Пензенская область',
    'Пермский край',
    'Приморский край',
    'Псковская область',
    'Республика Адыгея',
    'Республика Алтай',
    'Республика Башкортостан',
    'Республика Бурятия',
    'Республика Дагестан',
    'Республика Ингушетия',
    'Республика Калмыкия',
    'Республика Карелия',
    'Республика Коми',
    'Республика Крым',
    'Республика Марий Эл',
    'Республика Мордовия',
    'Республика Саха (Якутия)',
    'Республика Северная Осетия - Алания',
    'Республика Татарстан',
    'Республика Тыва',
    'Республика Хакасия',
    'Ростовская область',
    'Рязанская область',
    'Самарская область',
    'Саратовская область',
    'Сахалинская область',
    'Свердловская область',
    'Смоленская область',
    'Ставропольский край',
    'Тамбовская область',
    'Тверская область',
    'Томская область',
    'Тульская область',
    'Тюменская область',
    'Удмуртская Республика',
    'Ульяновская область',
    'Хабаровский Край',
    'Ханты-Мансийский автономный округ - Югра',
    'Херсонская область',
    'Челябинская область',
    'Чеченская Республика',
    'Чувашская Республика - Чувашия',
    'Чукотский автономный округ',
    'Ямало-Ненецкий автономный округ',
    'Ярославская область'
    ];

document.getElementById('regionSearchInput').addEventListener('input', function () {
    const inputValue = this.value.toLowerCase();
    const suggestionsContainer = document.getElementById('suggestions');
    
    // Очистка предыдущих подсказок
    suggestionsContainer.innerHTML = '';

    if (!inputValue) return;

    // Фильтрация регионов по введенному значению
    const filteredRegions = regions.filter(region => region.toLowerCase().includes(inputValue));

    // Создание и отображение новых подсказок
    filteredRegions.forEach(region => {
        const suggestionItem = document.createElement('div');
        suggestionItem.textContent = region;

        suggestionItem.addEventListener('click', function() {
            document.getElementById('regionSearchInput').value = region; // Установка выбранного региона в поле ввода
            suggestionsContainer.innerHTML = ''; // Очистка подсказок
        });

        suggestionsContainer.appendChild(suggestionItem);
    });
});