import React, { useState, useLayoutEffect, useEffect } from "react";

import API from "../util/api_consumption";
import Select from "./select";

const Form = () => {
    const [result, setResult] = useState([]);
    const [course, setCourse] = useState("");

    const [section, setSection] = useState("");
    useLayoutEffect(() => {
        const apiConsumer = new API();
        const set = async () => {
            const response = await API.asyncWrapper(apiConsumer.getFileNames);
            console.log(response);
            if (response) {
                setResult(response.result);
            }
        };
        set();
    }, []);

    useEffect(() => {
        if (result.length) {
            setCourse(result[0].course);
            setSection(result[0].section[0]);
        }
    }, [result]);

    useEffect(() => {
        if (course && result.length) {
            const find = result.find((e) => {
                return e.course === course;
            });
            setSection(find.section[0]);
        }
    }, [course]);
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
            <Select
                label="course"
                name="course name"
                options={courses}
                onSelect={(e) => {
                    console.log("check");
                    setCourse(e.target.value);
                }}
            />
            <Select
                label="section"
                name="section"
                options={sections}
                onSelect={(e) => {
                    setSection(e.target.value);
                }}
            />
            <a href={API.getPath({ course, section })} onClick={() => {}}>
                Fetch Assignment
            </a>
        </form>
    );
};

export default Form;
