const $openModalButtons = Array.from(
    document.getElementsByClassName("select-question")
);

const $closeModalButtons = Array.from(
    document.getElementsByClassName("close-modal")
);

const $modal_root = document.getElementById("modal-root");

const $modal_content = document.getElementsByClassName("modal-inside")[0];

const $select_course = document.getElementById("select-course");
const $select_section = document.getElementById("select-section");
const $anchor = document.getElementsByClassName("anchor")[0];
let modalOpen = false;
let select_props = [
    {
        course: "python",
        section: [
            "boolean-Answer.docx",
            "list-answer.docx",
            "operator-answer.docx",
        ],
    },
    {
        course: "php",
        section: ["OOP answer original.docx", "oop answers.docx"],
    },
    {
        course: "fundamentals of computer",
        section: [
            "DAY_3_PYTHON_EXERCISE.pdf",
            "list-QUESTIONS.docx",
            "python-exercise-answer-day-3.docx",
        ],
    },
];
let selected = { course: "", section: "" };

$openModalButtons.forEach((e) => {
    e.addEventListener("click", function () {
        modalOpen = true;
        $modal_root.setAttribute(
            "class",
            `${modalOpen ? "display" : "display-none"}`
        );
    });
});

$closeModalButtons.forEach((e) => {
    e.addEventListener("click", function () {
        modalOpen = false;
        $modal_root.setAttribute(
            "class",
            `${modalOpen ? "display" : "display-none"}`
        );
    });
});
$modal_content.addEventListener("click", function (event) {
    event.stopPropagation();
});

function initialOption() {
    select_props.forEach((e, i) => {
        const $optionCourse = document.createElement("option");
        $optionCourse.setAttribute("value", e.course);
        $optionCourse.append(e.course);
        $select_course.appendChild($optionCourse);

        if (i === 0) {
            e.section.forEach((section) => {
                const $optionSection = document.createElement("option");
                $optionSection.setAttribute("value", section);
                $optionSection.append(section);
                $select_section.appendChild($optionSection);
            });
        }
    });
    const first = select_props[0];
    selected = { course: first.course, section: first.section[0] };
    $anchor.setAttribute(
        "href",
        `./question/${selected.course}/${selected.section}`
    );
}

initialOption();

function changeCourse(courseVal) {
    select_props.forEach((e) => {
        if (courseVal === e.course) {
            while ($select_section.firstChild) {
                $select_section.removeChild($select_section.firstChild);
            }
            e.section.forEach((section) => {
                const $optionSection = document.createElement("option");
                $optionSection.setAttribute("value", section);
                $optionSection.append(section);
                $select_section.appendChild($optionSection);
            });
            selected = { course: e.course, section: e.section[0] };
            $anchor.setAttribute(
                "href",
                `./question/${selected.course}/${selected.section}`
            );
        }
    });
}

function changeSection(sectionVal) {
    selected = { ...selected, section: sectionVal };
    $anchor.setAttribute(
        "href",
        `./question/${selected.course}/${selected.section}`
    );
}

$select_course.addEventListener("change", function () {
    changeCourse(this.value);
});

$select_section.addEventListener("change", function () {
    changeSection(this.value);
});
