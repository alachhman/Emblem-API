const axios = require('axios');
const cheerio = require('cheerio');
const {writeFileSync} = require("fs");


// Function to fetch HTML data
async function fetchHtml(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// Function to parse headers from the table row
function parseHeaders($, row) {
    const headers = [];
    $(row).find('th').each((_, col) => {
        headers.push($(col).text().trim());
    });
    return headers;
}

// Function to parse row data based on headers
function parseRowData($, row, headers) {
    const rowData = {};
    $(row).find('td').each((colIndex, col) => {
        const cellData = [];
        $(col).contents().each((itemIndex, item) => {
            let text = $(item).text().trim();
            let imgAlt = $(item).find('img').attr('alt');

            if (imgAlt) {
                text = imgAlt;
            }

            const numberValue = parseFloat(text);

            if (text) {
                cellData.push(!isNaN(numberValue) ? numberValue : text);
            }
        });
        rowData[headers[colIndex]] = cellData.length > 1 ? cellData : cellData[0];
    })

    if(rowData.Name) {
        rowData['Weapon Rank'] = groupStrings(rowData['Weapon Rank'])

        return rowData
    }
}

// Function to parse table data
function parseTable($, table) {
    const tableRows = [];
    let headers = [];
    $(table).find('tr').each((rowIndex, row) => {
        if (rowIndex === 0) {
            headers = parseHeaders($, row);
        } else {
            const rowData = parseRowData($, row, headers);
            tableRows.push(rowData);
        }
    });
    return tableRows.filter(x => x !== undefined);
}

// Main function to fetch and process table data
async function fetchTableData(url) {
    try {
        const htmlData = await fetchHtml(url);
        const $ = cheerio.load(htmlData);
        const tableData = [];
        $('table').each((_, table) => {
            const tableRows = parseTable($, table);
            tableData.push(tableRows);
        });
        return {units: [tableData.reduce((acc, curr) => acc.concat(curr), [])][0]};
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

function groupStrings(arr) {
    if(!arr) return;
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        // Ensure there is a pair of strings to process
        if (i + 1 < arr.length) {
            result.push({
                Weapon: arr[i],
                Rank: arr[i + 1]
            });
        } else {
            // Handle an odd number of strings
            result.push({
                Weapon: arr[i],
                Rank: null
            });
        }
    }
    return result;
}

fetchTableData('https://serenesforest.net/the-sacred-stones/characters/base-stats/')
    .then(data => {
        console.dir(data, {depth: 10})
        const fileName = 'data/8/units.json'
        writeFileSync(fileName, JSON.stringify(data, null, 2), 'utf-8', err => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Data saved to ' + fileName);
            }
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
