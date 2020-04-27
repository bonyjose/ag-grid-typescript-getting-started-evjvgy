// Import stylesheets
import './style.css';

import "ag-grid-enterprise";

import {Grid, GridOptions, RowNode} from "ag-grid-community";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

// Write TypeScript code!
const gridDiv: HTMLElement = document.getElementById('myGrid');

let gridOptions: GridOptions = {
  columnDefs: [
    {field: 'athlete', sortable: true, filter: true},
    {field: 'country', sortable: true, filter: true},
    {field: "year"},
    {field: "date"},
    {field: "sport"},
    {field: "gold"},
    {field: "silver"},
    {field: "bronze"}
  ],
  rowSelection: 'single',
  animateRows: true
};

new Grid(gridDiv, gridOptions);

var httpRequest = new XMLHttpRequest();
httpRequest.open('GET', 'https://raw.githubusercontent.com/ag-grid/ag-grid/master/packages/ag-grid-docs/src/olympicWinners.json');
httpRequest.send();
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        var httpResult = JSON.parse(httpRequest.responseText);
        gridOptions.api.setRowData(httpResult);
    }
};
