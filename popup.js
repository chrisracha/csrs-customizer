document.getElementById("injectFontsButton").addEventListener("click", () => {
  const selectedFont = document.getElementById("fontSelector").value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: applyFont,
      args: [selectedFont]
    });
  });
});

document.getElementById("changeColorsButton").addEventListener("click", () => {
  const backgroundColor = document.getElementById("backgroundColorPicker").value;
  const borderColor = document.getElementById("borderColorPicker").value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: changeColors,
      args: [backgroundColor, borderColor]
    });
  });
});

document.getElementById("changePaddingButton").addEventListener("click", () => {
  const paddingValue = document.getElementById("paddingValue").value;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: changePadding,
      args: [paddingValue]
    });
  });
});

document.getElementById("removeBordersButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: removeBorders
    });
  });
});

document.getElementById("reverseChangesButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: reverseChanges
    });
  });
});

document.getElementById("alternateRowColorsButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: alternateRowColors
    });
  });
});

document.getElementById("calculateGwaButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: calculateGwa
    });
  });
});

document.getElementById("calculateCumulativeGwaButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: calculateCumulativeGwa
    });
  });
});

function applyFont(selectedFont) {
  const addFontLinks = () => {
    const head = document.head || document.getElementsByTagName("head")[0];
    let fontStylesheet;

    if (selectedFont === "inter") {
      fontStylesheet = document.createElement("link");
      fontStylesheet.rel = "stylesheet";
      fontStylesheet.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap";
    } else if (selectedFont === "sf-pro") {
      fontStylesheet = document.createElement("link");
      fontStylesheet.rel = "stylesheet";
      fontStylesheet.href = "https://fonts.cdnfonts.com/css/sf-pro-display";
    } else if (selectedFont === "sf-ui") {
      fontStylesheet = document.createElement("link");
      fontStylesheet.rel = "stylesheet";
      fontStylesheet.href = "https://fonts.cdnfonts.com/css/sf-ui-display";
    } else if (selectedFont === "palatino-avenir") {
      const palatinoStylesheet = document.createElement("link");
      palatinoStylesheet.rel = "stylesheet";
      palatinoStylesheet.href = "https://fonts.cdnfonts.com/css/palatino";
      head.appendChild(palatinoStylesheet);

      fontStylesheet = document.createElement("link");
      fontStylesheet.rel = "stylesheet";
      fontStylesheet.href = "https://fonts.cdnfonts.com/css/avenir";
    } else if (selectedFont === "roboto") {
      fontStylesheet = document.createElement("link");
      fontStylesheet.rel = "stylesheet";
      fontStylesheet.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap";
    } else if (selectedFont === "open-sans") {
      fontStylesheet = document.createElement("link");
      fontStylesheet.rel = "stylesheet";
      fontStylesheet.href = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap";
    } else if (selectedFont === "courier-new") {
      fontStylesheet = document.createElement("link");
      fontStylesheet.rel = "stylesheet";
      fontStylesheet.href = "https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap";
    } else if (selectedFont === "times-new-roman") {
      fontStylesheet = document.createElement("link");
      fontStylesheet.rel = "stylesheet";
      fontStylesheet.href = "https://fonts.googleapis.com/css2?family=Times+New+Roman:wght@400;700&display=swap";
    }

    if (fontStylesheet) {
      head.appendChild(fontStylesheet);
    }
  };

  const changeFontFamily = () => {
    const allElements = document.querySelectorAll("*");
    allElements.forEach((el) => {
      if (selectedFont === "inter") {
        el.style.fontFamily = "'Inter', sans-serif";
      } else if (selectedFont === "sf-pro") {
        el.style.fontFamily = "'SF Pro Display', sans-serif";
      } else if (selectedFont === "sf-ui") {
        el.style.fontFamily = "'SF UI Display', sans-serif";
      } else if (selectedFont === "roboto") {
        el.style.fontFamily = "'Roboto', sans-serif";
      } else if (selectedFont === "open-sans") {
        el.style.fontFamily = "'Open Sans', sans-serif";
      } else if (selectedFont === "courier-new") {
        el.style.fontFamily = "'Courier Prime', monospace";
      } else if (selectedFont === "times-new-roman") {
        el.style.fontFamily = "'Times New Roman', serif";
      } else {
        el.style.fontFamily = "";
      }
    });
  };

  addFontLinks();
  changeFontFamily();
}

function changeColors(backgroundColor, borderColor) {
  document.body.style.backgroundColor = backgroundColor;
  const tableList = document.querySelectorAll("table.list");
  tableList.forEach((table) => {
    table.style.border = `1px solid ${borderColor}`;
  });
  const tableHeaders = document.querySelectorAll("table.list th");
  tableHeaders.forEach((th) => {
    th.style.backgroundColor = borderColor;
  });
  const tableCells = document.querySelectorAll("table.list tbody tr td");
  tableCells.forEach((td) => {
    td.style.backgroundColor = "";
  });

  // Remove footer
  const footer = document.getElementById("footer");
  if (footer) {
    footer.style.display = "none";
  }

  // Disable div#main background image, set background color to white, and change width to 780px
  const mainDiv = document.getElementById("main");
  if (mainDiv) {
    mainDiv.style.backgroundImage = "none";
    mainDiv.style.backgroundColor = "white";
    mainDiv.style.width = "780px";
  }

  // Adjust div#header and div#chromemenu styles
  const headerDiv = document.getElementById("header");
  if (headerDiv) {
    headerDiv.style.marginLeft = "0";
    headerDiv.style.backgroundColor = backgroundColor;
  }

  const chromemenuDiv = document.getElementById("chromemenu");
  if (chromemenuDiv) {
    chromemenuDiv.style.marginLeft = "0";
    chromemenuDiv.style.backgroundColor = backgroundColor;
  }

  // Set .chromestyle ul style
  const chromestyleUl = document.querySelector(".chromestyle ul");
  if (chromestyleUl) {
    chromestyleUl.style.border = "none";
    chromestyleUl.style.backgroundColor = backgroundColor;
    chromestyleUl.style.padding = "5px 3px";
  }
}

function changePadding(paddingValue) {
  const tableHeaders = document.querySelectorAll("table.list th, table.form th");
  tableHeaders.forEach((th) => {
    th.style.padding = `${paddingValue}px`;
  });

  const content2Tables = document.querySelectorAll("div#content2 table");
  content2Tables.forEach((table) => {
    table.style.padding = `${paddingValue}px`;
  });

  const tableCells = document.querySelectorAll("table.list tbody tr td, table.form tbody tr td");
  tableCells.forEach((td) => {
    td.style.padding = `${paddingValue}px`;
  });

  const gwaRows = document.querySelectorAll("table.list tr td[colspan='2'], table.list tr td[colspan='4']");
  gwaRows.forEach((td) => {
    td.style.padding = `${paddingValue}px`;
  });
}

function removeBorders() {
  const tableList = document.querySelectorAll("table.list");
  tableList.forEach((table) => {
    table.style.border = "0";
  });
}

function reverseChanges() {
  document.body.style.backgroundColor = "";
  const tableList = document.querySelectorAll("table.list");
  tableList.forEach((table) => {
    table.style.border = "";
  });
  const tableHeaders = document.querySelectorAll("table.list th");
  tableHeaders.forEach((th) => {
    th.style.backgroundColor = "";
    th.style.padding = "";
  });
  const tableCells = document.querySelectorAll("table.list tbody tr td");
  tableCells.forEach((td) => {
    td.style.padding = "";
  });
  const content2Tables = document.querySelectorAll("div#content2 table");
  content2Tables.forEach((table) => {
    table.style.padding = "";
  });
  const allElements = document.querySelectorAll("*");
  allElements.forEach((el) => {
    el.style.fontFamily = "";
  });
}

function alternateRowColors() {
  const tableRows = document.querySelectorAll("table.list tr, table.form tr");
  tableRows.forEach((row, index) => {
    if (index % 2 === 0) {
      row.style.backgroundColor = "#ffffff"; // white
    } else {
      row.style.backgroundColor = "#f2f2f2"; // very light grey
    }
  });
}

function calculateGwa() {
  const tables = document.querySelectorAll("table.list");
  let cumulativeUnits = 0;
  let cumulativeWeightedSum = 0;
  let overallHasIncomplete = false;

  tables.forEach((table, tableIndex) => {
    let totalUnits = 0;
    let weightedSum = 0;
    let hasIncomplete = false;
    let hasInvalidGrade = false;

    const rows = table.querySelectorAll("tr");
    rows.forEach((row, rowIndex) => {
      if (rowIndex === 0) return; // Skip header row

      const cells = row.querySelectorAll("td");
      const courseName = cells[0].innerText;
      const units = parseFloat(cells[1].innerText);
      let grade = cells[2].innerText;
      const removal = cells[3].innerText;

      // Handle INC and 4.0 grades
      if (grade === "INC" || grade === "4.0") {
        if (removal && !isNaN(parseFloat(removal))) {
          grade = removal;
        } else {
          hasIncomplete = true;
          overallHasIncomplete = true;
          return;
        }
      }

      // Exclude DRP (dropped)
      if (grade === "DRP") {
        hasInvalidGrade = true;
        return;
      }

      // Exclude PE and NSTP from GWA
      if (grade !== "P" && grade !== "F" && !courseName.startsWith("PE") && !courseName.startsWith("NSTP")) {
        const numericGrade = parseFloat(grade);
        // Only include valid numeric grades (including 5.0)
        if (!isNaN(units) && !isNaN(numericGrade)) {
          totalUnits += units;
          weightedSum += units * numericGrade;
        }
      }
    });

    if (totalUnits > 0) {
      const gwa = weightedSum / totalUnits;
      cumulativeUnits += totalUnits;
      cumulativeWeightedSum += weightedSum;

      let semestralStanding = "";
      if (!hasInvalidGrade && totalUnits >= 15) {
        if (gwa <= 1.45) {
          semestralStanding = "University Scholar";
        } else if (gwa <= 1.75) {
          semestralStanding = "College Scholar";
        }
      }

      const gwaRow = document.createElement("tr");
      gwaRow.innerHTML = `
        <td colspan="2" style="font-weight: bold;">Semestral GWA</td>
        <td colspan="2" style="text-align: center;">${hasIncomplete ? `Incomplete/${gwa.toFixed(2)}(Partial)` : gwa.toFixed(2)}</td>
        <td colspan="2" style="text-align: center;">${semestralStanding}</td>
      `;
      table.appendChild(gwaRow);
    } else {
      console.log(`Table ${tableIndex} has no valid grades or units for GWA calculation.`);
    }
  });

  if (cumulativeUnits > 0) {
    const cumulativeGwa = cumulativeWeightedSum / cumulativeUnits;
    let overallStanding = "";

    if (!overallHasIncomplete) {
      if (cumulativeGwa <= 1.20) {
        overallStanding = "Summa Cum Laude";
      } else if (cumulativeGwa <= 1.45) {
        overallStanding = "Magna Cum Laude";
      } else if (cumulativeGwa <= 1.75) {
        overallStanding = "Cum Laude";
      }
    }

    const cumulativeTable = document.createElement("table");
    cumulativeTable.className = "list";
    cumulativeTable.style.width = "100%";
    cumulativeTable.innerHTML = `
      <tr>
        <th colspan="6" style="text-align: center;">Cumulative GWA and Total Units</th>
      </tr>
      <tr>
        <td colspan="2" style="font-weight: bold;">Cumulative GWA</td>
        <td colspan="4" style="text-align: center;">${cumulativeGwa.toFixed(2)}</td>
      </tr>
      <tr>
        <td colspan="2" style="font-weight: bold;">Laude Standing</td>
        <td colspan="4" style="text-align: center;">${overallStanding}</td>
      </tr>
      <tr>
        <td colspan="2" style="font-weight: bold;">Total Units Completed</td>
        <td colspan="4" style="text-align: center;">${cumulativeUnits}</td>
      </tr>
    `;
    document.getElementById("content2").appendChild(cumulativeTable);
  }
}

function removeYearSemesterColumns() {
  const tables = document.querySelectorAll("table.list");
  tables.forEach((table) => {
    const rows = table.querySelectorAll("tr");
    rows.forEach((row) => {
      const cells = row.querySelectorAll("th, td");
      if (cells.length > 4) {
        cells[4].style.display = "none"; // Year column
        cells[5].style.display = "none"; // Semester column
      }
    });
  });
}

function calculateCumulativeGwa() {
  const tables = document.querySelectorAll("table.list");
  let cumulativeUnits = 0;
  let cumulativeWeightedSum = 0;
  let overallHasIncomplete = false;

  tables.forEach((table) => {
    let totalUnits = 0;
    let weightedSum = 0;
    let hasIncomplete = false;

    const rows = table.querySelectorAll("tr");
    rows.forEach((row, rowIndex) => {
      if (rowIndex === 0) return; // Skip header row

      const cells = row.querySelectorAll("td");
      const courseName = cells[0].innerText;
      const units = parseFloat(cells[2].innerText);
      let grade = cells[3].innerText;
      const removal = cells[4].innerText;

      if (!grade) return; // Skip rows with blank grades

      // Handle INC and 4.0 grades
      if (grade === "INC" || grade === "4.0") {
        if (removal && !isNaN(parseFloat(removal))) {
          grade = removal;
        } else {
          hasIncomplete = true;
          overallHasIncomplete = true;
          return;
        }
      }

      // Exclude DRP (dropped)
      if (grade === "DRP") {
        return;
      }

      // Exclude PE and NSTP from GWA
      if (grade !== "P" && grade !== "F" && !courseName.startsWith("PE") && !courseName.startsWith("NSTP")) {
        const numericGrade = parseFloat(grade);
        // Only include valid numeric grades (including 5.0)
        if (!isNaN(units) && !isNaN(numericGrade)) {
          totalUnits += units;
          weightedSum += units * numericGrade;
        }
      }
    });

    if (totalUnits > 0) {
      cumulativeUnits += totalUnits;
      cumulativeWeightedSum += weightedSum;
    }
  });

  if (cumulativeUnits > 0) {
    const cumulativeGwa = cumulativeWeightedSum / cumulativeUnits;
    let overallStanding = "";

    if (!overallHasIncomplete) {
      if (cumulativeGwa <= 1.20) {
        overallStanding = "Summa Cum Laude";
      } else if (cumulativeGwa <= 1.45) {
        overallStanding = "Magna Cum Laude";
      } else if (cumulativeGwa <= 1.75) {
        overallStanding = "Cum Laude";
      }
    }

    const cumulativeTable = document.createElement("table");
    cumulativeTable.className = "list";
    cumulativeTable.style.width = "100%";
    cumulativeTable.style.padding = "10px";
    cumulativeTable.innerHTML = `
      <tr>
        <th colspan="6" style="text-align: center;">Cumulative GWA and Total Units</th>
      </tr>
      <tr>
        <td colspan="2" style="font-weight: bold;">Cumulative GWA</td>
        <td colspan="4" style="text-align: center;">${cumulativeGwa.toFixed(2)}</td>
      </tr>
      <tr>
        <td colspan="2" style="font-weight: bold;">Laude Standing</td>
        <td colspan="4" style="text-align: center;">${overallStanding}</td>
      </tr>
      <tr>
        <td colspan="2" style="font-weight: bold;">Total Units Completed</td>
        <td colspan="4" style="text-align: center;">${cumulativeUnits}</td>
      </tr>
    `;

    const content2 = document.getElementById("content2");
    content2.appendChild(cumulativeTable);
  }
}
