import React, { useState, useLayoutEffect } from "react";

import API from "../util/api_consumption";
import Button from "./button";
import Select from "./select";

const Form = () => {
    const [result, setResult] = useState([]);
    const [course, setCourse] = useState("");
    useLayoutEffect(() => {
        const apiConsumer = new API();
        const set = async () => {
            const response = await API.asyncWrapper(apiConsumer.getFileNames());
            if (response) {
                setResult(response.result);
            }
        };
        set();
    }, []);
    let courses = [];
    let sections = [];
    result.forEach((e) => {
        courses.push(e.course);
        if (course === e.course) {
            sections = e.section;
        }
    });
    return (
        <form className="flex flex-col justify-around h-full gap-4 items-center">
            <Select label="course" name="course name" options={courses} />
            <Select label="section" name="section" options={sections} />
            <Button text="fetch Assignment" />
        </form>
    );
};

export default Form;
