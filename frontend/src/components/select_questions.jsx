import React from "react";
import Button from "./button";
import Select from "./select";
const Form = () => {
    return (
        <form className="flex flex-col justify-around h-full gap-4 items-center">
            <Select
                label="course"
                name="course name"
                options={["Python", "C.C.N.A", "Javascript", "PHP"]}
            />
            <Select
                label="section"
                name="section"
                options={["section 1", "section 2", "section 3", "section 4"]}
            />
            <Button text="fetch Assignment" />
        </form>
    );
};

export default Form;
