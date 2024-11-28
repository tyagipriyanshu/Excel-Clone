# Excel Clone - A Spreadsheet Application Built with Vanilla JavaScript
This is a lightweight **Excel Clone** application built using **Vanilla JavaScript**, **HTML**, and **CSS**. The application mimics basic spreadsheet functionality, including data entry, cell formatting, formula calculations, dynamic updates, and multiple sheets within a single workbook. It leverages a **graph data structure** to manage cell dependencies and evaluate formulas.

## Features
* **Cell Editing**: Click on a cell to enter values.
* **Formula Support**: Supports basic formulas like **=A1+B1**, and other mathematical operations (Can set formula only in the formula bar).
* **Real-time Calculation**: When a cell value changes, all dependent cells are recalculated automatically using a graph data structure.
* **Cell Formatting**: Users can apply text alignment, font styles and background colors. Also, Format cell contents with **bold**, **italic**, and **underline**.
* **Grid Layout**: Built with **CSS Grid** to create a responsive and flexible spreadsheet layout. (**A-Z** cols, **1-100** rows)
* **Dependency Graph**: Uses a **Directed Acyclic Graph** **(DAG)** to manage formula dependencies between cells, ensuring accurate and efficient updates when a cell’s value changes.
* **Multiple Sheets**: Create and switch between multiple sheets in the same workbook. Each sheet functions independently, with its own set of data and formulas.
* **Basic Save/Dowmload**: Save your spreadsheet data or download.

## Installation
To run the application locally:
* Clone the repository:
`git clone https://github.com/your-username/excel-clone.git`
* Navigate into the project directory:
`cd excel-clone`
* Open the `index.html` file in your browser to start using the application.

## Technologies Used
* **Vanilla JavaScript**: For handling all the logic (formula parsing, dependency management, cell interactions).
* **HTML5**: For structuring the spreadsheet and user interface.
* **CSS3**: For styling the layout, fonts, and cell formatting.
* **Graph Data Structure**: To track dependencies between cells and handle formula recalculations.

## Future Improvements
* **Support for More Complex Formulas**: Enhance formula parsing to support functions like IF, VLOOKUP, COUNTIF, etc.
* **Undo/Redo Functionality**: Implement a history of changes to allow users to undo or redo actions.
* **Keyboard Shortcuts**: Add keyboard shortcuts for common operations like copy-paste, undo, redo, etc.
* **Better Save/Load Mechanism**: Use localStorage or a file export/import system to allow users to save and load their spreadsheet data.
