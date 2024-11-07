export default function json2html(data) {
  // Start building the HTML table with a specific data-user attribute
  let tableHTML = `<table data-user="peralasaathwi@gmail.com">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
      </tr>
    </thead>
    <tbody>`;

  // Loop through the array of data objects and create table rows
  data.forEach(item => {
    tableHTML += '<tr>';
    tableHTML += `<td>${item.Name || ''}</td>`;
    tableHTML += `<td>${item.Age || ''}</td>`;
    tableHTML += `<td>${item.Gender || ''}</td>`;
    tableHTML += '</tr>';
  });

  // Close the table tags
  tableHTML += '</tbody></table>';
  
  return tableHTML;
}
