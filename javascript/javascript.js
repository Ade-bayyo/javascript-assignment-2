document.addEventListener('DOMContentLoaded', function () {

    // ---------- Department dropdown: show the right subject group ----------
    const departmentSelect = document.querySelector('#department');

    departmentSelect.addEventListener('change', function () {
        const departmentValue = departmentSelect.value;

        document.querySelectorAll('.subject-group').forEach(function (group) {
            group.classList.remove('active');
        });

        document.querySelector('.subject-group--' + departmentValue).classList.add('active');
    });

    // ---------- Form submit: build the result ----------
    const formm = document.querySelector('#mainform');

    formm.addEventListener('submit', function (event) {
        event.preventDefault();

        const examination_number = document.querySelector('#examnumber').value;
        const student_sex = document.querySelector('#sex').value;
        const student_surname = document.querySelector('#surname').value;
        const student_firstname = document.querySelector('#firstname').value;
        const student_middlename = document.querySelector('#middlename').value;
        const student_examination = document.querySelector('#examination').value;
        const student_centre = document.querySelector('#centre').value;
        const student_department = document.querySelector('#department').value;

        const science_english_grade = document.querySelector('#science-englishgrade').value;
        const science_mathematics_grade = document.querySelector('#science-mathematicsgrade').value;
        const science_civic_grade = document.querySelector('#science-civicgrade').value;
        const science_physics_grade = document.querySelector('#science-physicsgrade').value;
        const science_chemistry_grade = document.querySelector('#science-chemistrygrade').value;
        const science_biology_grade = document.querySelector('#science-biologygrade').value;
        const science_furthermathematics_grade = document.querySelector('#science-furthermathematicsgrade').value;
        const science_geography_grade = document.querySelector('#science-geographygrade').value;
        const science_agricultural_grade = document.querySelector('#science-agriculturalgrade').value;

        const art_english_grade = document.querySelector('#art-englishgrade').value;
        const art_mathematics_grade = document.querySelector('#art-mathematicsgrade').value;
        const art_civic_grade = document.querySelector('#art-civicgrade').value;
        const art_literature_grade = document.querySelector('#art-literaturegrade').value;
        const art_government_grade = document.querySelector('#art-governmentgrade').value;
        const art_crs_grade = document.querySelector('#art-crsgrade').value;
        const art_finearts_grade = document.querySelector('#art-fineartsgrade').value;
        const art_history_grade = document.querySelector('#art-historygrade').value;
        const art_geography_grade = document.querySelector('#art-geographygrade').value;

        const commercial_english_grade = document.querySelector('#commercial-englishgrade').value;
        const commercial_mathematics_grade = document.querySelector('#commercial-mathematicsgrade').value;
        const commercial_civic_grade = document.querySelector('#commercial-civicgrade').value;
        const commercial_economics_grade = document.querySelector('#commercial-economicsgrade').value;
        const commercial_financialaccounting_grade = document.querySelector('#commercial-financialaccountinggrade').value;
        const commercial_commerce_grade = document.querySelector('#commercial-commercegrade').value;
        const commercial_marketing_grade = document.querySelector('#commercial-marketinggrade').value;
        const commercial_officepractice_grade = document.querySelector('#commercial-officepracticegrade').value;
        const commercial_insurance_grade = document.querySelector('#commercial-insurancegrade').value;

        // ---------- Fill in the candidate info ----------
        document.querySelector('#resultfullname').innerText = `${student_surname} ${student_firstname} ${student_middlename}`;
        document.querySelector('#resultexamnumber').innerText = examination_number;
        document.querySelector('#resultsex').innerText = student_sex;
        document.querySelector('#resultexamination').innerText = student_examination;
        document.querySelector('#resultcentre').innerText = student_centre;
        document.querySelector('#resultdepartment').innerText = student_department;

        // ---------- Pick the right 9 subjects based on department ----------
        let subjectsAndGrades = [];

        if (student_department === 'science') {
            subjectsAndGrades = [
                ['English Language', science_english_grade],
                ['Mathematics', science_mathematics_grade],
                ['Civic Education', science_civic_grade],
                ['Physics', science_physics_grade],
                ['Chemistry', science_chemistry_grade],
                ['Biology', science_biology_grade],
                ['Further Mathematics', science_furthermathematics_grade],
                ['Geography', science_geography_grade],
                ['Agricultural Science', science_agricultural_grade]
            ];
        } else if (student_department === 'art') {
            subjectsAndGrades = [
                ['English Language', art_english_grade],
                ['Mathematics', art_mathematics_grade],
                ['Civic Education', art_civic_grade],
                ['Literature in English', art_literature_grade],
                ['Government', art_government_grade],
                ['CRS / IRS', art_crs_grade],
                ['Fine Arts', art_finearts_grade],
                ['History', art_history_grade],
                ['Geography', art_geography_grade]
            ];
        } else if (student_department === 'commercial') {
            subjectsAndGrades = [
                ['English Language', commercial_english_grade],
                ['Mathematics', commercial_mathematics_grade],
                ['Civic Education', commercial_civic_grade],
                ['Economics', commercial_economics_grade],
                ['Financial Accounting', commercial_financialaccounting_grade],
                ['Commerce', commercial_commerce_grade],
                ['Marketing', commercial_marketing_grade],
                ['Office Practice', commercial_officepractice_grade],
                ['Insurance', commercial_insurance_grade]
            ];
        }

        // ---------- Build the subject/grade rows ----------
        const resultSubjectsBody = document.querySelector('#resultsubjectsbody');
        resultSubjectsBody.innerHTML = '';

        subjectsAndGrades.forEach(function (pair) {
            const subjectName = pair[0];
            const gradeValue = pair[1];

            const row = document.createElement('tr');
            row.innerHTML = `<td>${subjectName}</td><td>${gradeValue}</td>`;
            resultSubjectsBody.appendChild(row);
        });

        // ---------- Finally, reveal the result section ----------
        document.querySelector('.result-section').classList.remove('hidden');
    });

});