import { i, _ as _decorate, s, e, y, a as e$1 } from './query-assigned-elements-8a604587.js';


const baseStyle = i`
  :host {
    height: 100%;
    width: 100%;
    display: block;
  }
`; 
const NacTableStyles = i`
.redirect-link {
  display: inline-flex;
  align-items: center;
  color: #007bff;
  text-decoration: none;
  font-size: 16px;
}

.redirect-link:hover {
  text-decoration: underline;
}

.icon-pencil {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.table-wrapper {
  border-radius: 4px;
  overflow: auto;
  text-wrap: nowrap !important;
  border: 1px solid #ccc;
}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-family: inherit;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.87);
  background-color: #fff;
}

th,
td {
  padding: 0 0.5rem;
  border-top: 1px solid #ccc;
  text-align: center;
  vertical-align: middle;
  position: relative;
}

th {
  font-weight: bold;
  height: 3.5rem;
  text-transform: capitalize;
  border-top: none;
}
thead tr {
  background-color: #fff !important;
}

tr {
  background-color: #fff;
  height: 3.25rem;
}

tr:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

th {
  font-weight: bold;
  cursor: pointer;
}

.table-row.selected {
  background-color: rgba(25, 118, 210, 0.08);
}

.table-row.selected:hover {
  background-color: rgba(25, 118, 210, 0.12);
}

.table-cell-value {
  visibility: visible;
}

.table-row.edit .table-cell-value {
  visibility: hidden;
}

.table-cell-input {
  position: absolute;
  left: 4px;
  right: 4px;
  top: 4px;
  bottom: 4px;
  padding: 0 0.5rem;
  font-size: inherit;
  color: inherit;
}

.dsc {
  transform: rotate(180deg);
}

.flex-item {
  display: flex;
  justify-content: center;
}

.top-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.margin-left-4 {
  margin-left: 0.25rem;
}

.opacity {
  opacity: 1;
}

/*  search start*/
.search-wrapper {
  height: 3.5rem;
  width: 100%;
  max-width: 26.25rem;
  position: relative;
}
.search-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 1rem;
  color: rgba(0, 0, 0, 0.54);
}
.search-input {
  height: 3.5rem;
  width: 100%;
  padding: 1.03125rem 0.875rem;
  padding-left: 3rem;
  color: rgba(0, 0, 0, 0.87);
  font-size: 1rem;
}

.input-styled {
  border-radius: 0.25rem;
  box-sizing: border-box;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.23);
  outline: none;
}

.input-styled:hover {
  border-color: rgba(0, 0, 0, 0.87);
}

.input-styled:focus {
  box-shadow: 0 0 0 1px rgb(25, 118, 210);
  border-color: rgb(25, 118, 210);
}
/* search end */

/* Pagination-start */
.pagination {
  color: rgba(0, 0, 0, 0.87);
  font-size: 0.875rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 0;
  font-family: inherit;
}
.pagination-total {
  display: inline-flex;
  align-items: center;
  margin-right: 2rem;
}
.pagination-button {
  border: 0;
  outline: 0;
  padding: 0.5rem;
  background-color: transparent;
  border-radius: 50%;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.54);
}

.pagination-button:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.pagination-button:disabled {
  cursor: default;
  background-color: transparent;
  color: rgba(0, 0, 0, 0.3);
}


@media (max-width: 872px) {
  .top-panel {
    flex-direction: column;
  }
  .search-wrapper {
    margin-bottom: 1rem;
  }
}



`;
const styles = [baseStyle, NacTableStyles];

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");

_decorate([e$1("lit-toolbar")], function (_initialize, _LitElement) {
  class LitToolbar extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: LitToolbar,
    d: [{
      kind: "field",
      decorators: [e({
        type: Boolean
      })],
      key: "editMode",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [e({
        type: Boolean
      })],
      key: "hasSelectedRow",
      value() {
        return false;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return i`
      :host {
        background-color: rgba(0, 0, 0, 0.04);
        border-radius: 4px;
        width: 100%;
        max-width: 420px;
      }
      .button-wrapper {
        box-sizing: border-box;
        height: 56px;
        padding: 16.5px 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      button {
        background-color: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        border: none;
        outline: none;
        padding: 8px;
        margin: 0;
      }

      .delete {
        color: #d32f2f;
      }

      button:hover {
        text-decoration: underline;
      }

      button:disabled {
        text-decoration: none;
        cursor: default;
        color: rgba(0, 0, 0, 0.3);
      }

      button > svg {
        margin-right: 2px;
      }
    `;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return y`
      <div class="button-wrapper">
        <button disabled=true 
          @click="${() => this.dispatchEvent(new CustomEvent("add-row"))}"
        >
          <svg
            height="18px"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
          Add
        </button>
        <button
          @click="${() => this.dispatchEvent(new CustomEvent("edit-row"))}"
          ?disabled="${true}"
        >
          <svg
            height="18px"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            fill="currentColor"
          >
            <path
              d="M16 2H17V3H18V4H19V5H20V6H19V7H18V8H17V7H16V6H15V5H14V4H15V3H16M12 6H14V7H15V8H16V10H15V11H14V12H13V13H12V14H11V15H10V16H9V17H8V18H7V19H6V20H2V16H3V15H4V14H5V13H6V12H7V11H8V10H9V9H10V8H11V7H12"
            />
          </svg>
          Edit
        </button>
        <button
          @click="${() => this.dispatchEvent(new CustomEvent("discard-row"))}"
          ?disabled="${!this.editMode}"
        >
          <svg
            height="18px"
            fill="currentColor"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M13.5,7A6.5,6.5 0 0,1 20,13.5A6.5,6.5 0 0,1 13.5,20H10V18H13.5C16,18 18,16 18,13.5C18,11 16,9 13.5,9H7.83L10.91,12.09L9.5,13.5L4,8L9.5,2.5L10.92,3.91L7.83,7H13.5M6,18H8V20H6V18Z"
            />
          </svg>

          Discard
        </button>
        <button
          @click="${() => this.dispatchEvent(new CustomEvent("save-row"))}"
          ?disabled="${!this.editMode}"
        >
          <svg
            height="18px"
            fill="currentColor"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M17 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H11.81C11.42 20.34 11.17 19.6 11.07 18.84C9.5 18.31 8.66 16.6 9.2 15.03C9.61 13.83 10.73 13 12 13C12.44 13 12.88 13.1 13.28 13.29C15.57 11.5 18.83 11.59 21 13.54V7L17 3M15 9H5V5H15V9M15.75 21L13 18L14.16 16.84L15.75 18.43L19.34 14.84L20.5 16.25L15.75 21"
            />
          </svg>
          Save
        </button>
        <button
          class="delete"
          @click="${() => this.dispatchEvent(new CustomEvent("delete-row"))}"
          ?disabled="${true}"
        >
          <svg
            height="18px"
            width="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            />
          </svg>
          Delete
        </button>
      </div>
    `;
      }
    }]
  };
}, s);

let AndysTable = _decorate([e$1('andys-table')], function (_initialize, _LitElement) {
  class AndysTable extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: AndysTable,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "collection",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "readonly",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "data",
      value() {
        return [];
      }
    }, {
      kind: "field",
      key: "editCell",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "pageData",
      value() {
        return [];
      }
    }, {
      kind: "field",
      key: "totalPages",
      value() {
        return 1;
      }
    }, {
      kind: "field",
      key: "currentPage",
      value() {
        return 1;
      }
    }, {
      kind: "field",
      key: "pageSize",
      value() {
        return 10;
      }
    }, {
      kind: "field",
      key: "searchText",
      value() {
        return "";
      }
    }, {
      kind: "field",
      key: "tableSort",
      value() {
        return {
          field: "",
          direction: "asc"
        };
      }
    }, {
      kind: "field",
      key: "selectedRow",
      value() {
        return null;
      }
    }, {
      kind: "field",
      key: "editMode",
      value() {
        return false;
      }
    }, {
      kind: "field",
      key: "tempEditRowData",
      value() {
        return null;
      }
    }, {
      kind: "get",
      key: "filteredData",
      value:
      // @property({ type: Boolean })
      // readOnly = false;

      function filteredData() {
        return this.data.filter(item => {
          if (this.isconfirm) {
            const currencyKey = item["Currency Key"];
            const pDate = item["Payment Date"];
            const rateUSD = parseFloat((item["Exchange Rate USD"]).toString().replace(/,/g, '')) || 0
            const rateJPY = parseFloat((item["Exchange Rate JPY"]).toString().replace(/,/g, '')) || 0
				
            //console.log(this.paymentDate, this.startUSD, this.endUSD, this.startJPY, this.endJPY)
            //console.log(currencyKey, pDate, rateUSD, rateJPY)
            if( this.paymentDate !== "" && pDate !== this.paymentDate){
              return false
            }
            if ( ((this.startUSD >= 0 && this.endUSD >=0) && (rateUSD < this.startUSD || rateUSD > this.endUSD)) ){
              return false
            }
            if (((this.startJPY >= 0 && this.endJPY >=0) && (rateJPY < this.startJPY || rateJPY > this.endJPY))){
              return false
            }
			
          }
	  else {
		const PO = item["Purchasing Document Number"] ?? "";
		const poPrefix = PO.substring(0, 2);
		//console.log(PO, this.category, poPrefix)
		if (this.category === "Raw Material") {		  
		  if (!(poPrefix >= '41' && poPrefix <= '46')) {
		    return false;
		  }
		}
		else if (this.category === "Non Raw Material") {
		  if ((poPrefix >= '41' && poPrefix <= '46')) {
		    return false;
		  }
		}
	  }
          
          return Object.values(item).map(val => String(val)).some(val => 
            val.toLowerCase().includes(this.searchText.toLowerCase())
          );
        });
      }
      
    }, {
      kind: "get",
      key: "sortedData",
      value: function sortedData() {
        const {
          field,
          direction
        } = this.tableSort;
        return this.filteredData.sort((a, b) => {
          const aVal = a[field];
          const bVal = b[field];
          if (aVal < bVal) return direction === "asc" ? -1 : 1;
          if (aVal > bVal) return direction === "asc" ? 1 : -1;
          return 0;
        });
      }
    }, {
      kind: "get",
      key: "columns",
      value: function columns() {
        const sampleRow = this.data[0] || {};
        return Object.keys(sampleRow).map(field => {
          return {
            label: field,
            field: field
          };
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (changedProps.has("collection")) {
          try {
      console.log(this.collection,"rawJSON")
	    const [isnewString, isapprovalString, issubmissionString, isconfirmString, mappingString, collectionString] = this.collection.split(';');
	    this.isnew = JSON.parse(isnewString);
      this.isapproval = JSON.parse(isapprovalString);
      this.isconfirm = JSON.parse(isconfirmString);
      this.issubmission = JSON.parse(issubmissionString);
      console.log(this.isnew,"isnew");
      console.log(this.isapproval,"isapproval");
      console.log(this.isconfirm,"isconfirmation");
      console.log(this.issubmission,"issubmission");
	    this.totalAmountIDR = 0;
      this.totalAmountUSD = 0;
      this.totalAmountJPY = 0;
      this.grandTotal = 0;
      this.exchangeJPY = 0;
      this.exchangeUSD = 0;
      this.colMapping = JSON.parse(mappingString);
      this.data = JSON.parse(collectionString);
     
      this.category = document.querySelector('ntx-simple-select-single .ng-value span')?.textContent;
      const ngSelectElement = document.querySelector('ng-select');
      if (ngSelectElement){
        let previousValue = '';
        const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                  if (mutation.type === 'childList') {
                      const selectedValueElement = ngSelectElement.querySelector('.ng-value span');
                      if (selectedValueElement) {
                          const selectedValue = selectedValueElement.textContent.trim();
                          if (selectedValue !== previousValue) {
                              this.category = selectedValue;
                              this.updatePageData();
                              console.log('Selection changed:', selectedValue);
                              previousValue = selectedValue; 

                              const isChecked = false;
                              console.log(isChecked, "check all");
                        
                              // Reset the total amounts
                              this.totalAmountUSD = 0;
                              this.totalAmountJPY = 0;
                              this.totalAmountIDR = 0;
                              this.grandTotal = 0;

                              this.exchangeJPY = parseFloat((document.querySelector('[aria-label="Exchange Rate JPY"]').value).toString().replace(/,/g, '')) || 0;
                              this.exchangeUSD = parseFloat((document.querySelector('[aria-label="Exchange Rate USD"]').value).toString().replace(/,/g, '')) || 0;
                        
                              // Update "Action" for all rows in the data
                              this.data = this.data.map(row => {
                                const amount = parseFloat((row["Amount in document currency"]).toString().replace(/,/g, '')) || 0;
                                const amountLocalCurrency = parseFloat((row["Amount in Local Currency"]?? '0').toString().replace(/,/g, '')) || 0;
                                const currency = row["Currency Key"];
                                
                                // If checked, add the amount to the appropriate currency total
                                if (isChecked) {
                                  if(amountLocalCurrency > 0){
                                    this.grandTotal += amountLocalCurrency
                                    if (currency === "USD"){
                                      this.totalAmountUSD += amount
                                    }
                                    else if (currency === "JPY"){
                                      this.totalAmountJPY += amount
                                    }    	
                                    else{
                                      this.totalAmountIDR += amount
                                    }                  
                                  }
                                  else{
                                    if (currency === "USD"){
                                      this.grandTotal += (amount * this.exchangeUSD)
                                      this.totalAmountUSD += amount
                                    }
                                    else if (currency === "JPY"){
                                      this.grandTotal += (amount * this.exchangeJPY)
                                      this.totalAmountJPY += amount
                                    }    	
                                    else{
                                      this.grandTotal += amount
                                      this.totalAmountIDR += amount
                                    }              
                                  }
                                }
                        
                                // Set the Action field for the row
                                return {
                                  ...row,
                                  Action: isChecked
                                };
                              });
                        
                              //Update the UI to show the new total amounts
                              document.querySelector('[aria-label="Total Amount (IDR)"]').value = this.totalAmountIDR;
                              document.querySelector('[aria-label="Total Amount (IDR)"]').dispatchEvent(new Event('blur'));
                              document.querySelector('[aria-label="Total Amount (USD)"]').value = this.totalAmountUSD;
                              document.querySelector('[aria-label="Total Amount (USD)"]').dispatchEvent(new Event('blur'));
                              document.querySelector('[aria-label="Total Amount (JPY)"]').value = this.totalAmountJPY;
                              document.querySelector('[aria-label="Total Amount (JPY)"]').dispatchEvent(new Event('blur'));
                              document.querySelector('[aria-label="Grand Total (IDR)"]').value = this.grandTotal;
                              document.querySelector('[aria-label="Grand Total (IDR)"]').dispatchEvent(new Event('blur'));

                              // Dispatch the change event with the updated data
                              this.dispatchEvent(new CustomEvent("change", {
                                detail: {
                                  collection: JSON.stringify(this.data)
                                }
                              }));

                              this.onChange(this.data);
                        
                              // Request update for UI refresh
                              this.requestUpdate();
                          }
                      }
                  }
              });
          });
        observer.observe(ngSelectElement, { childList: true, subtree: true });
      }      
      console.log(this.category, "category")

      document.querySelector('[aria-label="Exchange Rate USD"]').addEventListener('blur', (event) => {
        //console.log(event.target.value)
        this.exchangeUSD = parseFloat((event.target.value).toString().replace(/,/g, '')) || 0
        this.onchangeExrate()
        this.updatePageData();
        console.log(this.exchangeUSD, "rangeUSD")
      });

      document.querySelector('[aria-label="Exchange Rate JPY"]').addEventListener('blur', (event) => {
        //console.log(event.target.value)
        this.exchangeJPY = parseFloat((event.target.value).toString().replace(/,/g, '')) || 0
        this.onchangeExrate()
        this.updatePageData();
        console.log(this.exchangeJPY, "rangeJPY")
      });

      this.startUSD = -1;
      this.endUSD = -1;
      this.startJPY = -1;
      this.endJPY = -1;
      this.paymentDate = "";

      if (this.isconfirm){
        document.querySelector('[name="_0b35dd58f7464b4ca66eecb1e959625f"]').addEventListener('change', (event) => {
          const d = new Date(event.target.value);
          this.paymentDate = isNaN(d.getTime()) 
              ? "" 
              : `${d.getDate().toString().padStart(2, '0')}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getFullYear()}`;

          this.updatePageData();
          console.log(this.paymentDate, "paymentDate");
        });

        document.querySelector('[aria-label="Exchange Rate USD (Start)"]').addEventListener('blur', (event) => {
            //console.log(event.target.value)
			this.startUSD = event.target.value == '' ? -1: parseFloat((event.target.value).toString().replace(/,/g, ''))
            this.updatePageData();
            console.log(this.startUSD + "," + this.endUSD, "rangeUSD")
        });

        document.querySelector('[aria-label="Exchange Rate USD (End)"]').addEventListener('blur', (event) => {
            this.endUSD = event.target.value == '' ? -1: parseFloat((event.target.value).toString().replace(/,/g, ''))
            this.updatePageData();
            console.log(this.startUSD + "," + this.endUSD, "rangeUSD")
        });

        document.querySelector('[aria-label="Exchange Rate JPY (Start)"]').addEventListener('blur', (event) => {
            this.startJPY = event.target.value == '' ? -1: parseFloat((event.target.value).toString().replace(/,/g, ''))
            this.updatePageData();
            console.log(this.startJPY + "," + this.endJPY, "rangeJPY")
        });

        document.querySelector('[aria-label="Exchange Rate JPY (End)"]').addEventListener('blur', (event) => {
            this.endJPY = event.target.value == '' ? -1: parseFloat((event.target.value).toString().replace(/,/g, ''))
            this.updatePageData();
            console.log(this.startJPY + "," + this.endJPY, "rangeJPY")
        });

      }

      //if (this.isnew){
      //  this.data = this.data.map(row => {
      //        return {Action: false, ...row };
      //      });
      //}
     if (this.isnew) {
	    this.data = this.data.map(row => {
		var headerID = row["HeaderID"]
	  	console.log(headerID)
		if (headerID !== null && headerID !== "" && headerID !== "0") {
	            return { Action: true, ...row };
	        }
	        return { Action: false, ...row };
	  });
      }

      
      if (this.isapproval){
        this.data = this.data.map(row => {
	        return {Action: true, ...row };
	      });
      }
      // else {
      //   this.shadowRoot.getElementById('select-all').checked = true;
      // }
	    

        this.orderMapping = this.colMapping.reduce((acc, curr) => {
          if(this.isnew || this.isapproval){
            acc[curr.Title] = {
              order: parseInt(curr.Order0, 10),
              dataType: curr.DataType,
              displayName: curr.Display_x0020_Name
            };
          }
          else{
            acc[curr.Display_x0020_Name] = {
              order: parseInt(curr.Order0, 10),
              dataType: curr.DataType,
              displayName: curr.Display_x0020_Name
            };
          }
          
          return acc;
      }, {});
      //console.log(this.orderMapping, "orderMapping");
      
      const formatData = (value, dataType) => {
          switch (dataType) {
              case "2": // integer
                  return ( (parseInt(value).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",") || 0);
              case "3": // decimal
                  return ((parseFloat(value) ||0)?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
              case "4": // date (dd-mm-yyyy)
                  if (value && (this.isnew|| this.isapproval)) {
                      const date = new Date(value);
                      return `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
                  }
                  return value;
              default:
                  return value;
          }
      };
      
      this.data = this.data.map(item => {
          this.orderedItem = {};
          Object.keys(item)
              .sort((a, b) => {
                  const aOrder = this.orderMapping[a] ? this.orderMapping[a].order : Infinity;
                  const bOrder = this.orderMapping[b] ? this.orderMapping[b].order : Infinity;
                  return aOrder - bOrder;
              })
              .forEach(key => {
                  const mappingKey = Object.keys(this.orderMapping).find(k => k === key);
                  if (mappingKey) {
                      if (this.isnew|| this.isapproval) {
                        this.formattedValue = formatData(item[key], this.orderMapping[mappingKey].dataType);
                        this.displayName = this.orderMapping[mappingKey].displayName;
                      } else {
                        this.formattedValue = item[key]
                        this.displayName = key;
                      }
                      this.orderedItem[this.displayName] = this.formattedValue;
                  } else {
                      this.orderedItem[key] = item[key];
                  }
              });
          return this.orderedItem;
      });
 	this.data.sort((a, b) => {
	    // Get "Supplier Name" values, default to empty string if undefined
	    const nameA = (a['Supplier Name'] || '').toUpperCase(); // Convert to uppercase for case-insensitive comparison
	    const nameB = (b['Supplier Name'] || '').toUpperCase();
	    
	    // Compare "Supplier Name" values
	    if (nameA < nameB) return -1;
	    if (nameA > nameB) return 1;
	    return 0;
	});
      
      console.log(this.data, "processedData");

      this.onChange(this.data);
      
      this.updatePageData();

          } catch (e) {
            console.error("Error parsing table data: ", e);
          }
        }
      }
    }, {
      kind: "method",
      static: true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./nac-table.config-d2342d00.js').then(x => x.config);
      }
    }, {
      kind: "method",
      key: "unselect",
      value: function unselect() {
        this.selectedRow = null;
        this.editMode = false;
        this.tempEditRowData = null;
        this.editCell = null;
      }
    }, {
      kind: "method",
      key: "onSortClick",
      value: function onSortClick(field) {
        const {
          direction
        } = this.tableSort;
        this.unselect();
        if (this.tableSort.field === field) {
          this.tableSort.direction = direction === "asc" ? "desc" : "asc";
        } else {
          this.tableSort = {
            field: field,
            direction: "asc"
          };
        }
        this.currentPage = 1;
        this.updatePageData();
      }
    }, {
      kind: "method",
      key: "onPageChange",
      value: function onPageChange(page) {
        this.unselect();
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
          this.updatePageData();
        }
      }

      // Handle edit event for a cell
    }, {
      kind: "method",
      key: "onCellEdit",
      value: function onCellEdit({
        field,
        value
      }) {
  	//console.log(this.selectedRow,"selectedRow");
	//console.log(this.editCell,"editCell")
	//console.log(this.tempEditRowData,"tmp edit")
	      
        if (this.editCell) {
          const found = this.pageData.find(item => item === this.editCell?.row);
	        //console.log(found,"found");	  
          if (!found) return;
          const editedRow = {
            ...found
          };
          editedRow[field] = value;
          this.tempEditRowData = editedRow;
		
	  console.log(found,"selectedrow");	
	  console.log(this.tempEditRowData,"editedrow");
	  
	  const previousAction = found["Action"];
    const rowToSave = this.data.find(item => item === found);
	  //console.log(rowToSave,"rowToSave")
	  if (rowToSave) {
		  const actionChanged = this.tempEditRowData["Action"] !== previousAction;
      const currency = found["Currency Key"];   
      const amount = parseFloat((this.tempEditRowData["Amount in document currency"]).toString().replace(/,/g, '')) || 0
      const amountLocCurrency = parseFloat((this.tempEditRowData["Amount in Local Currency"]?? '0').toString().replace(/,/g, '')) || 0		  

      this.grandTotal = parseFloat((document.querySelector('[aria-label="Grand Total (IDR)"]').value).toString().replace(/,/g, '')) || 0;
      this.exchangeJPY = parseFloat((document.querySelector('[aria-label="Exchange Rate JPY"]').value).toString().replace(/,/g, '')) || 0;
      this.exchangeUSD = parseFloat((document.querySelector('[aria-label="Exchange Rate USD"]').value).toString().replace(/,/g, '')) || 0;
      
      console.log(amountLocCurrency, "local currency")
      this.totalAmountIDR = parseFloat((document.querySelector('[aria-label="Total Amount (IDR)"]').value).toString().replace(/,/g, '')) || 0;
      this.totalAmountUSD = parseFloat((document.querySelector('[aria-label="Total Amount (USD)"]').value).toString().replace(/,/g, '')) || 0;
      this.totalAmountJPY = parseFloat((document.querySelector('[aria-label="Total Amount (JPY)"]').value).toString().replace(/,/g, '')) || 0;

		  if (actionChanged) {
		      if (this.tempEditRowData["Action"]) {      
            if(amountLocCurrency > 0){
              this.grandTotal += amountLocCurrency
              if (currency === "USD"){
                this.totalAmountUSD += amount
              }
              else if (currency === "JPY"){
                this.totalAmountJPY += amount
              }    	
              else{
                this.totalAmountIDR += amount
              }  
            }
            else{
              if (currency === "USD"){
                this.grandTotal += (amount * this.exchangeUSD)
                this.totalAmountUSD += amount
              }
              else if (currency === "JPY"){
                this.grandTotal += (amount * this.exchangeJPY)
                this.totalAmountJPY += amount
              }    	
              else{
                this.grandTotal += amount
                this.totalAmountIDR += amount
              }              
            }
		        
		      } else {
		        if(amountLocCurrency > 0){
              this.grandTotal -= amountLocCurrency
              if (currency === "USD"){
                this.totalAmountUSD -= amount
              }
              else if (currency === "JPY"){
                this.totalAmountJPY -= amount
              }    	
              else{
                this.totalAmountIDR -= amount
              }  
            }
            else{
              if (currency === "USD"){
                this.grandTotal -= (amount * this.exchangeUSD)
                this.totalAmountUSD -= amount
              }
              else if (currency === "JPY"){
                this.grandTotal -= (amount * this.exchangeJPY)
                this.totalAmountJPY -= amount
              }    	
              else{
                this.grandTotal -= amount
                this.totalAmountIDR -= amount
              }              
            }
		      }
		}
      //console.log(this.totalAmountIDR,"IDR")
      //console.log(this.totalAmountUSD,"USD")
      //console.log(this.totalAmountJPY,"JPY")
      document.querySelector('[aria-label="Total Amount (IDR)"]').value = this.totalAmountIDR;
      document.querySelector('[aria-label="Total Amount (IDR)"]').dispatchEvent(new Event('blur'));
      document.querySelector('[aria-label="Total Amount (USD)"]').value = this.totalAmountUSD;
      document.querySelector('[aria-label="Total Amount (USD)"]').dispatchEvent(new Event('blur'));
      document.querySelector('[aria-label="Total Amount (JPY)"]').value = this.totalAmountJPY;
      document.querySelector('[aria-label="Total Amount (JPY)"]').dispatchEvent(new Event('blur'));
      
      document.querySelector('[aria-label="Grand Total (IDR)"]').value = this.grandTotal;
      document.querySelector('[aria-label="Grand Total (IDR)"]').dispatchEvent(new Event('blur'));
      
		  Object.assign(rowToSave, this.tempEditRowData);
		  this.dispatchEvent(new CustomEvent("change", {
		   detail: {
            collection: JSON.stringify(this.data)
		      }
		}));
		  this.onChange(this.data);
  	}
	}
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return y`
        <div style="
            display: flex;
            justify-content: flex-start;
            padding-left: 10px;
            margin-bottom: 10px
        ">
            <div style="
            position: relative;
            padding: 26px
        ">
            <input id="select-all" type="checkbox" class="table-cell-input input-styled">
            </div>
            <div>
                <p>Select All</p>
            </div>
        </div>
      <div class="top-panel">
        ${this.renderSearch()} ${this.readonly ? null : this.renderToolbar()}
      </div>
      <br />
      ${this.renderTable()}
    `;
      }
    }, 
    {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        const selectAllCheckbox = this.shadowRoot.getElementById('select-all');
        
        // Manually add event listener for the checkbox
        selectAllCheckbox.addEventListener('change', (event) => {
          const isChecked = event.target.checked;
          console.log(isChecked, "check all");
    
          // Reset the total amounts
          this.totalAmountUSD = 0;
          this.totalAmountJPY = 0;
          this.totalAmountIDR = 0;
          this.grandTotal = 0;

          this.exchangeJPY = parseFloat((document.querySelector('[aria-label="Exchange Rate JPY"]').value).toString().replace(/,/g, '')) || 0;
          this.exchangeUSD = parseFloat((document.querySelector('[aria-label="Exchange Rate USD"]').value).toString().replace(/,/g, '')) || 0;
    
          // Update "Action" for all rows in the data
          this.data = this.data.map(row => {
            const amount = parseFloat((row["Amount in document currency"]).toString().replace(/,/g, '')) || 0;
            const amountLocalCurrency = parseFloat((row["Amount in Local Currency"]?? '0').toString().replace(/,/g, '')) || 0;
            const currency = row["Currency Key"];
            const purchasingDocumentNumber = row["Purchasing Document Number"] ?? "";
            const docNumberPrefix = purchasingDocumentNumber.substring(0, 2);
            
            // Filter based on category if it's "Raw Material"
            if (this.category === "Raw Material") {
              if (!(docNumberPrefix >= "41" && docNumberPrefix <= "46")) {
                return row;
              }
            }
            else{
              if ((docNumberPrefix >= "41" && docNumberPrefix <= "46")) {
                return row;
              }
            }

            // If checked, add the amount to the appropriate currency total
            if (isChecked) {
              if(amountLocalCurrency > 0){
                this.grandTotal += amountLocalCurrency
                if (currency === "USD"){
                  this.totalAmountUSD += amount
                }
                else if (currency === "JPY"){
                  this.totalAmountJPY += amount
                }    	
                else{
                  this.totalAmountIDR += amount
                }                  
              }
              else{
                if (currency === "USD"){
                  this.grandTotal += (amount * this.exchangeUSD)
                  this.totalAmountUSD += amount
                }
                else if (currency === "JPY"){
                  this.grandTotal += (amount * this.exchangeJPY)
                  this.totalAmountJPY += amount
                }    	
                else{
                  this.grandTotal += amount
                  this.totalAmountIDR += amount
                }              
              }
            }
    
            // Set the Action field for the row
            return {
              ...row,
              Action: isChecked
            };
          });
    
          //Update the UI to show the new total amounts
          document.querySelector('[aria-label="Total Amount (IDR)"]').value = this.totalAmountIDR;
          document.querySelector('[aria-label="Total Amount (IDR)"]').dispatchEvent(new Event('blur'));
          document.querySelector('[aria-label="Total Amount (USD)"]').value = this.totalAmountUSD;
          document.querySelector('[aria-label="Total Amount (USD)"]').dispatchEvent(new Event('blur'));
          document.querySelector('[aria-label="Total Amount (JPY)"]').value = this.totalAmountJPY;
          document.querySelector('[aria-label="Total Amount (JPY)"]').dispatchEvent(new Event('blur'));
          document.querySelector('[aria-label="Grand Total (IDR)"]').value = this.grandTotal;
          document.querySelector('[aria-label="Grand Total (IDR)"]').dispatchEvent(new Event('blur'));

          // Dispatch the change event with the updated data
          this.dispatchEvent(new CustomEvent("change", {
            detail: {
              collection: JSON.stringify(this.data)
            }
          }));

          this.onChange(this.data);
    
          // Request update for UI refresh
          this.requestUpdate();
        });
      }
    },
    {
      kind: "method",
      key: "onchangeExrate",
      value: function onchangeExrate() {
        this.grandTotal = 0
        this.totalAmountUSD = 0;
        this.totalAmountJPY = 0;
        this.totalAmountIDR = 0;
        this.data = this.data.map(row => {
          if (!(row["Action"])) {  // Only process rows where action is true
            return row;
          }
          
          const amount = parseFloat((row["Amount in document currency"]).toString().replace(/,/g, '')) || 0;
          const amountLocalCurrency = parseFloat((row["Amount in Local Currency"]?? '0').toString().replace(/,/g, '')) || 0;
          const currency = row["Currency Key"];
          const purchasingDocumentNumber = row["Purchasing Document Number"] ?? "";
          const docNumberPrefix = purchasingDocumentNumber.substring(0, 2);
    
          // Filter based on category if it's "Raw Material"
          if (this.category === "Raw Material") {
            if (!(docNumberPrefix >= "41" && docNumberPrefix <= "46")) {
              return row;
            }
          } else {
            if (docNumberPrefix >= "41" && docNumberPrefix <= "46") {
              return row;
            }
          }
    
          if (amountLocalCurrency > 0) {
            this.grandTotal += amountLocalCurrency;
            if (currency === "USD"){
              this.totalAmountUSD += amount
            }
            else if (currency === "JPY"){
              this.totalAmountJPY += amount
            }    	
            else{
              this.totalAmountIDR += amount
            }  
          } else {
            if (currency === "USD") {
              this.grandTotal += (amount * this.exchangeUSD);
              this.totalAmountUSD += amount
            } else if (currency === "JPY") {
              this.grandTotal += (amount * this.exchangeJPY);
              this.totalAmountJPY += amount
            } else {
              this.grandTotal += amount;
              this.totalAmountIDR += amount
            }
          }
    
          return row;
        })
        
        document.querySelector('[aria-label="Total Amount (IDR)"]').value = this.totalAmountIDR;
        document.querySelector('[aria-label="Total Amount (IDR)"]').dispatchEvent(new Event('blur'));
        document.querySelector('[aria-label="Total Amount (USD)"]').value = this.totalAmountUSD;
        document.querySelector('[aria-label="Total Amount (USD)"]').dispatchEvent(new Event('blur'));
        document.querySelector('[aria-label="Total Amount (JPY)"]').value = this.totalAmountJPY;
        document.querySelector('[aria-label="Total Amount (JPY)"]').dispatchEvent(new Event('blur'));
        document.querySelector('[aria-label="Grand Total (IDR)"]').value = this.grandTotal;
        document.querySelector('[aria-label="Grand Total (IDR)"]').dispatchEvent(new Event('blur'));
      }
    },
    {
      kind: "method",
      key: "renderSearch",
      value: function renderSearch() {
        return y`<div class="search-wrapper">
      <svg
        class="search-icon"
        height="24px"
        width="24px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M9.5,4C13.09,4 16,6.91 16,10.5C16,12.12 15.41,13.6 14.43,14.73L20.08,20.38L19.37,21.09L13.72,15.44C12.59,16.41 11.11,17 9.5,17C5.91,17 3,14.09 3,10.5C3,6.91 5.91,4 9.5,4M9.5,5C6.46,5 4,7.46 4,10.5C4,13.54 6.46,16 9.5,16C12.54,16 15,13.54 15,10.5C15,7.46 12.54,5 9.5,5Z"
        />
      </svg>
      <input
        class="search-input input-styled"
        id="search-input"
        placeholder="Search..."

        @input=${event => {
          this.searchText = event.target.value;
          this.updatePageData();
        }}
      />
    </div> `;
      }
    }, {
      kind: "method",
      key: "renderToolbar",
      value: function renderToolbar() {
        return y`
      <lit-toolbar
        @add-row="${this.onAddRow}"
        @edit-row="${this.onEditRow}"
        @delete-row="${this.onDeleteRow}"
        @save-row="${this.onSaveRow}"
        @discard-row="${this.onDiscardRow}"
        .editMode="${this.editMode}"
        .hasSelectedRow="${!!this.selectedRow}"
        
      ></lit-toolbar>
    `;
      }
    }, {
      kind: "method",
      key: "renderTable",
      value: function renderTable() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        this.pageData = this.sortedData.slice(start, end);
        return y`


      <div class="table-wrapper">
        <table>
          <thead>
            <tr>
              ${this.columns.map(column => y`
                  <th style="${(
                                  ((column.label === "Payment Date" || column.label === "Form Status" ||column.label === "Attachment Link" || column.label === "HeaderID_DisplayName" || column.label === 'ID' || column.label === 'HeaderID' || column.label === "Exchange Rate USD" || column.label === "Exchange Rate JPY" || column.label === "Submission Code" || column.label === "History Log" || column.label === "ListItemID" || column.label === "CreatedBy" || column.label === "CreatedDate" || column.label === "ModifiedBy" || column.label === "ModifiedDate") 
                                  && (this.issubmission) && (!this.isapproval)) 
                                || 
                                 ((column.label != "Action" &&  column.label != "Planning date" && column.label != "Supplier Name" && column.label != "Currency Key" && column.label != "Amount in document currency" && column.label != "Amount in Local Currency") 
                                  && (this.issubmission) && (this.isapproval)) 
                                || 
                                  ((column.label === "Form Status" || column.label === "HeaderID_DisplayName" || column.label === 'ID' || column.label === 'HeaderID') 
                                  && (this.isconfirm)) 
                                )

                    ? 'display: none;' : ''}" @click="${() => this.onSortClick(column.field)}">
                    ${y`<span class="flex-item">
                      ${column.label}
                      ${this.tableSort.direction === "asc" ? y`<svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height="18px"
                            width="18px"
                            opacity="0"
                            class="margin-left-4 ${this.tableSort.field === column.field ? "opacity" : ""}"
                          >
                            <path
                              d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"
                            />
                          </svg>` : y`<svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            height="18px"
                            width="18px"
                            opacity="0"
                            class="margin-left-4 dsc ${this.tableSort.field === column.field ? "opacity" : ""}"
                          >
                            <path
                              d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"
                            />
                          </svg>`}
                    </span>`}
                  </th>
                `)}
            </tr>
          </thead>
          <tbody>
            ${this.pageData.map(item => y`
              
                <tr
                  @click="${() => {
          //if (this.readonly) return;
          //if (this.editMode && this.selectedRow !== item) {
          //  this.unselect();
          //}
          //if (this.selectedRow === item && !this.editMode) {
          //  this.selectedRow = null;
          //} 
	  //else {          
            this.selectedRow = item;
          //}
          console.log(this.selectedRow,"tes select")
          this.requestUpdate();
        }}"
                  class="table-row ${this.editMode && this.selectedRow === item ? "edit" : ""} ${this.selectedRow === item ? "selected" : ""}"
                >	

   
                  ${this.columns.map((column, columnIndex) => y`
                      <td style="${(
                                  ((column.label === "Payment Date" || column.label === "Form Status" ||column.label === "Attachment Link" || column.label === "HeaderID_DisplayName" || column.label === 'ID' || column.label === 'HeaderID' || column.label === "Exchange Rate USD" || column.label === "Exchange Rate JPY" || column.label === "Submission Code" || column.label === "History Log" || column.label === "ListItemID" || column.label === "CreatedBy" || column.label === "CreatedDate" || column.label === "ModifiedBy" || column.label === "ModifiedDate") 
                                  && (this.issubmission) && (!this.isapproval)) 
                                || 
                                 ((column.label != "Action" &&  column.label != "Planning date" && column.label != "Supplier Name" && column.label != "Currency Key" && column.label != "Amount in document currency" && column.label != "Amount in Local Currency") 
                                  && (this.issubmission) && (this.isapproval)) 
                                || 
                                  ((column.label === "Form Status" || column.label === "HeaderID_DisplayName" || column.label === 'ID' || column.label === 'HeaderID') 
                                  && (this.isconfirm)) 
                                )
                          ? 'display: none;' : ''}" >
                        ${columnIndex === 0 ? y`<input
                              type="checkbox"
                              .checked="${item[column.field]}"
                              class="table-cell-input input-styled"
                              @change="${event => this.onCellEdit({
          field: column.field,
          value: event.target.checked
        })}"
                              @focus="${() => {
          this.editCell = {
            columnName: column.field,
            row: item
          };
          this.requestUpdate();
        }}"
                              @blur="${() => {
          if (this.editCell?.row === item) {
            this.editCell = {
              columnName: column.field,
              row: item
            };
            this.requestUpdate();
          }
        }}"
                              ? ""
                            />` : y`
                            ${column.label == "History Log" || column.label == "Attachment Link" ? 
                            y`<a href="${item[column.field]}" class="redirect-link" target="_blank" style=${item[column.field] == ""? "display:none" : ""}>
                                <svg class="icon-pencil" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                  <path d="M12.146 0.854a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708l-8.486 8.486a.5.5 0 0 1-.224.13l-4 1a.5.5 0 0 1-.62-.62l1-4a.5.5 0 0 1 .13-.224l8.486-8.486zM11.207 3l-1.5-1.5L1 10.207V12h1.793L11.207 3z"/>
                                </svg>
                                Click Here
                              </a>` 
                            
                            : y`<span class=${this.editMode && this.selectedRow === item ? "table-cell-value-edit" : "table-cell-value"}
                              >${item[column.field]}</span>`
                              }
                            `}
                      </td>
                    `)}
                </tr>
              `)}
          </tbody>
        </table>
      </div>
      ${this.onLoad(this.collection)}                    
      ${this.totalPages > 1 ? this.renderPagination() : null}

      
    `;
      }
    }, {
      kind: "method",
      key: "renderPagination",
      value: function renderPagination() {
        const start = (this.currentPage - 1) * this.pageSize + 1;
        const end = Math.min(start + this.pageSize - 1, this.filteredData.length);
        const total = this.filteredData.length;
        return y`
      <div class="pagination">
        <span class="pagination-total">${start}-${end} of ${total}</span>
        <button
          class="pagination-button"
          @click="${() => this.onPageChange(1)}"
          ?disabled="${this.currentPage === 1}"
        >
          <svg
            height="24px"
            width="24px"
            fill="currentColor"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              d="M18.41 16.59 13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
            ></path>
          </svg>
        </button>
        <button
          class="pagination-button"
          @click="${() => this.onPageChange(this.currentPage - 1)}"
          ?disabled="${this.currentPage === 1}"
        >
          <svg
            height="24px"
            width="24px"
            fill="currentColor"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
            ></path>
          </svg>
        </button>
        <button
          class="pagination-button"
          @click="${() => this.onPageChange(this.currentPage + 1)}"
          ?disabled="${this.currentPage === this.totalPages}"
        >
          <svg
            height="24px"
            width="24px"
            fill="currentColor"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
            ></path>
          </svg>
        </button>
        <button
          class="pagination-button"
          @click="${() => this.onPageChange(this.totalPages)}"
          ?disabled="${this.currentPage === this.totalPages}"
        >
          <svg
            height="24px"
            width="24px"
            fill="currentColor"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
            ></path>
          </svg>
        </button>
      </div>
      <script>
        
  const nacTable = document.querySelector("andys-table");

  
</script>
    `;
      }
    }, {
      kind: "method",
      key: "saveSelectedRow",
      value: function saveSelectedRow() {
        if (!this.selectedRow) return;
        const editedRow = this.data.find(item => item === this.selectedRow);
        if (editedRow) {
          Object.assign(editedRow, this.tempEditRowData);
          this.dispatchEvent(new CustomEvent("change", {
            detail: {
              collection: JSON.stringify(this.data)
            }
          }));
        }
      }
    }, {
      kind: "method",
      key: "updatePageData",
      value: function updatePageData() {
        this.totalPages = Math.ceil(this.filteredData.length / this.pageSize);
        if (this.currentPage > this.totalPages) {
          this.currentPage = this.totalPages;
        }
        if (this.totalPages < 1) {
          this.currentPage = 1;
        }
        this.requestUpdate();
      }
    }, {
      kind: "method",
      key: "onAddRow",
      value: function onAddRow() {
        this.searchText = "";
        this.tableSort = {
          field: "",
          direction: "asc"
        };
        const searchInput = this.shadowRoot?.querySelector("#search-input");
        if (searchInput) searchInput.value = "";
        this.updatePageData();
        const newRow = {};
        this.columns.forEach(column => newRow[column.field] = "");
        this.data.push(newRow);
        this.selectedRow = newRow;
        this.editMode = true;
        this.editCell = null;
        this.updatePageData();
        this.currentPage = this.totalPages;
        this.focusInputOnEdit();
      }
    }, {
      kind: "method",
      key: "onEditRow",
      value: function onEditRow() {
        if (this.selectedRow) {
          this.editMode = true;
          this.editCell = {
            columnName: "",
            row: this.selectedRow
          };
          this.requestUpdate();
          this.focusInputOnEdit();
        }
      }
    }, {
      kind: "method",
      key: "onDeleteRow",
      value: function onDeleteRow() {
        if (this.selectedRow) {
          const index = this.data.indexOf(this.selectedRow);
          this.data.splice(index, 1);
          this.unselect();
          this.updatePageData();
          this.dispatchEvent(new CustomEvent("change", {
            detail: {
              collection: JSON.stringify(this.data)
            }
          }));
          this.onChange(this.data);
        
        }
      }
    }, {
      kind: "method",
      key: "onSaveRow",
      value: function onSaveRow() {
        if (!this.selectedRow) return;
        if (this.editMode) {
          this.editMode = false;
          this.saveSelectedRow();
          this.updatePageData();
          this.onChange(this.data);
        }
      }
    }, {
      kind: "method",
      key: "onDiscardRow",
      value: function onDiscardRow() {
        if (this.selectedRow) {
          const editedRow = this.pageData.find(item => item === this.selectedRow);
          if (editedRow) {
            this.columns.forEach(column => {});
            this.editMode = false;
            this.editCell = null;
            this.requestUpdate();
            this.onChange(this.data);
          }
        }
      }
    }, {
      kind: "method",
      key: "onChange",
      value: function onChange(e) {
        const value = e;
        const args = {
          bubbles: true,
          cancelable: false,
          composed: true,
          detail: value
        };
        const event = new CustomEvent('ntx-value-change', args);
        this.dispatchEvent(event);
      }
    }, {
      kind: "method",
      key: "onLoad",
      value: function onLoad(e) {
        console.info("data: " + this.data);
        var dataCheck = this.data.toString();
        if (dataCheck == null || dataCheck == '') {
          this.onChange(this.collection);
        }
      }
    }, {
      kind: "method",
      key: "focusInputOnEdit",
      value: function focusInputOnEdit() {
        setTimeout(() => {
          const inputElement = this.shadowRoot?.querySelector(".selected")?.querySelector("input");
          if (inputElement) inputElement.focus();
        }, 50);
      }
    }]
  };
}, s);

export { AndysTable };
