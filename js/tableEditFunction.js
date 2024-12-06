// Объявление переменных
const editButton = document.querySelector('.header__edit-button');
const editButtonsBlockList = document.querySelectorAll('.edit-buttons'); 
let isActive = false;


// Функция для добавления строки
function addRow() {
    const table = event.target.closest('.table-wrap').querySelector('table');
    let maxCellCount = 0;
    // Проходим по всем строкам таблицы, чтобы найти максимальное количество ячеек
    for (let i = 0; i < table.rows.length; i++) {
        const cellCount = table.rows[i].cells.length;
        if (cellCount > maxCellCount) {
            maxCellCount = cellCount; // Обновляем максимальное количество ячеек
        }
    }
    const newRow = table.insertRow(-1); // Добавляем новую строку в конец таблицы

    // Добавляем ячейки в новую строку
    for (let i = 0; i < maxCellCount; i++) {
        const newCell = newRow.insertCell(i);
        newCell.setAttribute('contenteditable', 'true'); // Делаем ячейку редактируемой
    }
}

// Функция для удаления строки
function deleteRow() {
    const table = event.target.closest('.table-wrap').querySelector('table');
    const rowCount = table.rows.length;

    if (rowCount > 1) {
        table.deleteRow(rowCount - 1);
    } else {
        alert('Нельзя удалить все строки!');
    }
}

// Функция для добавления заголовка
function addHeader(color) {
    const table = event.target.closest('.table-wrap').querySelector('table');
    const newRow = table.insertRow(-1); // Вставляем строку в конец таблицы

    let newCell = newRow.insertCell(0);
    newCell.colSpan = 4; // Объединяем все 4 столбца
    newCell.className = `highlight-${color}`; // Устанавливаем класс цвета

    // Устанавливаем текст заголовка
    switch (color) {
        case 'yellow':
            newCell.innerHTML = 'Желтые зоны';
            break;
        case 'red':
            newCell.innerHTML = 'Красные зоны';
            break;
        case 'green':
            newCell.innerHTML = 'Зеленые зоны';
            break;
    }

    addRowButtons(newRow.rowIndex);
}

// Функция для добавления кнопок под заголовком
function addRowButtons(headerRowIndex) {
    const rowButtonsDiv = document.getElementById("rowButtons");
    if (!rowButtonsDiv) return; // Проверка на существование элемента

    const buttonContainer = document.createElement('div');

    const addButton = document.createElement('button');
    addButton.innerText = 'Добавить строку';
    
    addButton.onclick = function() { addRow(headerRowIndex); };

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Удалить строку';
    
    deleteButton.onclick = function() { deleteRow(headerRowIndex); };
    
    rowButtonsDiv.appendChild(buttonContainer);
}

// Обработчик события для кнопки "Редактировать таблицу"
document.addEventListener('click', (e) => {
    if (e.target === editButton) {
        isActive = !isActive; // Переключаем режим редактирования
        editButton.classList.toggle('button--primary', isActive); // Меняем стиль кнопки в зависимости от состояния

        const editableElements = document.querySelectorAll('.info-table-header__item, .info-table-thead th, td');

        editableElements.forEach(element => {
            if (isActive) {
                element.classList.add('edit-active');
                element.setAttribute('contenteditable', 'true');
            } else {
                element.classList.remove('edit-active');
                element.removeAttribute('contenteditable');
            }
        });

        editButtonsBlockList.forEach(editButtonsBlockItem => {
            editButtonsBlockItem.style.display = isActive ? 'block' : 'none';
        });
    }
});
