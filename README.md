# Student WAEC Result Checker || Adebayo Oluwapelumi Daniel

This project is a small front-end JavaScript assignment that simulates a WAEC/WASSCE result checker. A user enters a candidate's personal information, selects an academic department, enters grades for the department's subjects, and submits the form. JavaScript then creates a formatted result view on the same page.

The project runs entirely in the browser. It does not connect to a real WAEC service, use a database, or send the entered information to a server.

## Features

- Collects candidate information:
  - Examination number
  - Sex
  - Surname
  - First name
  - Middle name
  - Examination name
  - Examination centre
- Provides three department options:
  - Science
  - Art
  - Commercial
- Displays the appropriate nine-subject list after a department is selected.
- Accepts a grade for each displayed subject.
- Generates a result section without refreshing the page.
- Displays the candidate's name, examination details, department, subjects, and grades.
- Uses a responsive layout that changes from two columns to one column on small screens.
- Includes visible keyboard focus styles and a reduced-motion preference for accessibility.

## Project Structure

```text
javascript assignment 2/
|-- index.html
|-- README.md
|-- css/
|   `-- assignment2.css
`-- javascript/
    `-- javascript.js
```

### `index.html`

The HTML file provides the page structure and form controls.

#### Header

The header contains the page title, `Student WAEC Result Checker`, and a short instruction telling the user to enter their WASSCE details.

#### Candidate information section

The first form section contains inputs for the candidate's identity and examination details. Each control has an ID that JavaScript uses to read its value, including:

- `examnumber`
- `sex`
- `surname`
- `firstname`
- `middlename`
- `examination`
- `centre`

#### Subject and grade section

The department dropdown has the ID `department`. The page contains three subject groups, but CSS hides all of them initially. Each group is identified by a class:

- `.subject-group--science`
- `.subject-group--art`
- `.subject-group--commercial`

Each subject grade input is a text input. The expected format shown in the placeholder is a WAEC-style grade such as `A1`.

#### Result section

The result section starts hidden using the `hidden` class. It contains placeholders for the candidate details and an empty table body. JavaScript fills these elements after the form is submitted.

## Subject Lists

Every department currently contains nine subjects.

### Science

1. English Language
2. Mathematics
3. Civic Education
4. Physics
5. Chemistry
6. Biology
7. Further Mathematics
8. Geography
9. Agricultural Science

### Art

1. English Language
2. Mathematics
3. Civic Education
4. Literature in English
5. Government
6. CRS / IRS
7. Fine Arts
8. History
9. Geography

### Commercial

1. English Language
2. Mathematics
3. Civic Education
4. Economics
5. Financial Accounting
6. Commerce
7. Marketing
8. Office Practice
9. Insurance

## How the JavaScript Works

The script is loaded with the `defer` attribute, and its main code is wrapped in a `DOMContentLoaded` listener. This ensures that the HTML elements exist before JavaScript tries to select or modify them.

### 1. Department selection

When the department dropdown changes, the script:

1. Reads the selected value.
2. Removes the `active` class from every subject group.
3. Builds a class name using the selected value, for example `.subject-group--science`.
4. Adds `active` to the matching group.

The CSS rule `.subject-group.active { display: block; }` makes the selected group visible. The other groups remain hidden by `.subject-group { display: none; }`.

### 2. Form submission

When the user presses **Check Result**, the submit event is intercepted with `event.preventDefault()`. This prevents the browser from reloading or navigating away from the page.

The script then:

1. Reads all candidate information fields.
2. Reads all grade fields for Science, Art, and Commercial.
3. Writes the candidate details into the result section.
4. Selects the correct nine subject-grade pairs based on the chosen department.
5. Clears any previously generated table rows.
6. Creates a new table row for every subject and grade.
7. Removes the `hidden` class so the result is displayed.

Submitting the form again replaces the previous subject rows with the latest values.

## Styling and Design

The stylesheet is stored in `css/assignment2.css` and is linked from `index.html`.

The design uses:

- Forest green for the primary theme and actions.
- Gold for accents and result emphasis.
- A cream background for a soft contrast with the white form and result cards.
- `Fraunces` for headings and `IBM Plex Sans` for body text.
- CSS custom properties in `:root` for reusable colors.
- CSS Grid for the form, subject lists, and result details.
- A mobile breakpoint at `620px` that changes multi-column layouts to one column.
- `:focus-visible` outlines for keyboard users.
- `prefers-reduced-motion: reduce` support that disables transitions when requested by the operating system.

The two fonts are loaded from Google Fonts. An internet connection is therefore needed to load the chosen fonts; the page still works with the fallback font if they are unavailable.

## How to Run

No package installation or build process is required.

### Option 1: Open the HTML file

Open `index.html` directly in a modern web browser.

### Option 2: Use a local development server

From the project folder, use any static server, such as the VS Code Live Server extension. Open the local address provided by the server and navigate to `index.html` if necessary.

## How to Use the Application

1. Enter the examination number.
2. Select the candidate's sex.
3. Enter the surname, first name, and middle name.
4. Enter the examination name and centre.
5. Select Science, Art, or Commercial from the department menu.
6. Enter a grade for each subject displayed.
7. Click **Check Result**.
8. Review the generated result below the form.

## Current Limitations

The current implementation is a demonstration interface and does not yet provide production-level result verification.

- There is no required-field validation in JavaScript.
- The browser can submit blank text fields or blank grades.
- Grades are accepted as text and are not checked against a specific grade format.
- The examination number is not checked for length or numeric content.
- Results are generated from the values entered by the user; they are not retrieved from an official data source.
- Results are not saved after the page is closed or refreshed.
- There is no backend, authentication, database, or result lookup API.
- The values are inserted into table rows using `innerHTML`; a production version should validate and safely insert user-provided values before displaying them.

## Possible Future Improvements

- Add HTML and JavaScript validation for required fields.
- Restrict grades to valid WAEC grade values such as `A1`, `B2`, `B3`, `C4`, `C5`, `C6`, `D7`, `E8`, and `F9`.
- Validate the examination number format.
- Add clear error messages beside invalid fields.
- Replace hard-coded subject groups with a JavaScript data structure to reduce repetition.
- Use `textContent` or DOM text nodes instead of `innerHTML` for user-entered values.
- Connect the interface to a secure backend or official result service.
- Add print, download, or PDF functionality for the generated result.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
