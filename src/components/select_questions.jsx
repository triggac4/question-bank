import React from "react";
import Button from "./button";
const Form = () => {
    return (
        <form className="flex flex-col justify-around h-full items-center">
            <label>
                course name
                <select name="course name">
                    <option value="python">python</option>
                    <option value="php">php</option>
                    <option value="dart">dart</option>
                    <option value="javascript">javascript</option>
                </select>
            </label>
            <label>
                section
                <select name="section">
                    <option value="python">section 1</option>
                    <option value="php">section 2</option>
                    <option value="dart">section 3</option>
                    <option value="javascript">section 4</option>
                </select>
            </label>
            <Button text="fetch Assignment" />
        </form>
    );
};

export default Form;
