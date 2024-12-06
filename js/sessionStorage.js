// // Функция для сохранения данных таблицы в sessionStorage
// function saveTableData() {
//   const tableData = [];
//   const tables = document.querySelectorAll("table"); // Получаем все таблицы

//   tables.forEach((table) => {
//     const rows = table.querySelectorAll("tr"); // Получаем все строки в каждой таблице
//     const tableRowsData = [];

//     rows.forEach((row) => {
//       const rowData = [];
//       const cells = row.querySelectorAll("td, th"); // Получаем все ячейки

//       cells.forEach((cell) => {
//         rowData.push(cell.innerText); // Сохраняем текст ячейки
//       });

//       if (rowData.length > 0) {
//         tableRowsData.push(rowData); // Добавляем данные строки в текущую таблицу
//       }
//     });

//     if (tableRowsData.length > 0) {
//       tableData.push(tableRowsData); // Добавляем данные текущей таблицы в общие данные
//     }
//   });

//   sessionStorage.setItem("tableData", JSON.stringify(tableData)); // Сохраняем данные в sessionStorage
// }

// // Функция для загрузки данных из sessionStorage
// function loadTableData() {
//   const storedData = sessionStorage.getItem("tableData");
//   if (storedData) {
//     const tableData = JSON.parse(storedData);
//     const tables = document.querySelectorAll("table"); // Получаем все таблицы

//     tableData.forEach((tableRowsData, tableIndex) => {
//       if (tables[tableIndex]) { // Проверяем, существует ли соответствующая таблица
//         const rows = tables[tableIndex].querySelectorAll("tr");

//         tableRowsData.forEach((rowData, rowIndex) => {
//           if (Array.isArray(rowData)) {
//             rowData.forEach((cellData, cellIndex) => {
//               if (rows[rowIndex] && rows[rowIndex].cells[cellIndex]) {
//                 rows[rowIndex].cells[cellIndex].innerText = cellData; // Заполняем ячейку данными
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// }

// // Обработчик события для кнопки "Сохранить данные"
// document.getElementById("saveDataButton").addEventListener("click", () => {
//   saveTableData(); // Сохраняем данные в sessionStorage
// });

// // Загружаем данные при загрузке страницы
// document.addEventListener("DOMContentLoaded", loadTableData);

// Функция для сохранения таблицы в sessionStorage
function saveTable() {
  const originalTable = document.querySelector('.info-table');
  if (originalTable) {
      // Сохраняем HTML-код таблицы в sessionStorage
      sessionStorage.setItem('savedTable', originalTable.outerHTML);
      
      // Удаляем оригинальную таблицу
      originalTable.remove();
  }
}

// Функция для восстановления таблицы из sessionStorage
function loadTable() {
  const savedTable = sessionStorage.getItem('savedTable');
  if (savedTable) {
      // Удаляем существующую таблицу, если она есть
      const existingTableContainer = document.querySelector('.cloned-table-container');
      if (existingTableContainer) {
          existingTableContainer.remove(); // Удаляем старую таблицу
      }

      // Создаем контейнер для восстановленной таблицы
      const container = document.createElement('div');
      container.className = 'cloned-table-container';
      container.innerHTML = savedTable;

      // Находим контейнер с классом 'container' и добавляем восстановленную таблицу в него
      const mainContainer = document.querySelector('.container');
      if (mainContainer) {
          mainContainer.appendChild(container); // Добавляем новую таблицу в контейнер
      }
  }
}

// Обработчик события для кнопки
document.getElementById('saveDataButton').addEventListener('click', function() {
  saveTable(); // Сохраняем таблицу при нажатии на кнопку

  // Проверяем наличие сохранённой таблицы и загружаем её
  loadTable(); // Восстанавливаем таблицу сразу после сохранения
});

// Восстановление таблицы при загрузке страницы, если данные есть
window.addEventListener('load', function() {
  if (sessionStorage.getItem('savedTable')) {
      // Удаляем оригинальную таблицу, если она существует
      const originalTable = document.querySelector('.info-table');
      if (originalTable) {
          originalTable.remove();
      }
      
      loadTable(); // Восстанавливаем таблицу при загрузке страницы, если есть данные
  }
});