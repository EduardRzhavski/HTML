function generateMultiplicationTable(rows, cols) {
    let table = '<tr><th>*</th>';

    for (let i = 1; i <= cols; i++) {
      table += `<th>${i}</th>`;
    }
    table += '</tr>';

    for (let i = 1; i <= rows; i++) {
      table += `<tr><th>${i}</th>`;
      for (let j = 1; j <= cols; j++) {
        table += `<td>${i * j}</td>`;
      }
      table += '</tr>';
    }

    return table;
  }

  document.getElementById('multiplicationTable').innerHTML = generateMultiplicationTable(10, 10);