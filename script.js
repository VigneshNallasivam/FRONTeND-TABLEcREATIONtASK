function tableCreation() {
    dataArray = [
        {
            "id": 1,
            "name": "Vignesh",
            "age": 25,
            "gender": "male",
            "nationality": "indian",
            "address": "Erode"
        },
    
        {
            "id": 2,
            "name": "Bino",
            "age": 25,
            "gender": "male",
            "nationality": "indian",
            "address": "Thirunelveli"
        }
    ]
    
    
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    let headers = Object.keys(dataArray[0]);

    let headerRow = document.createElement("tr");

    for (let i = 0; i < headers.length; i++) {
        let headerCell = document.createElement("th");
        headerCell.textContent = headers[i];
        headerRow.appendChild(headerCell);
        }

    thead.appendChild(headerRow);
    table.appendChild(thead);

    for (let j = 0; j < dataArray.length; j++) {
        let row = document.createElement("tr");

        for (var k = 0; k < headers.length; k++) {
            let dataCell = document.createElement("td");
            dataCell.textContent = dataArray[j][headers[k]];
            row.appendChild(dataCell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
    var container = document.getElementById("table-container");
    container.appendChild(table);   
}

