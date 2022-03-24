import React from "react";
import Button from "./button";
const Form = () => {
    return (
        <form className="flex flex-col justify-around h-full items-center">
            <label class="flex w-full justify-center">
                <div className="w-40">course name</div>
                <select
                    name="course name"
                    className="w-40 text-white bg-blue-400 p-2 rounded-md"
                >
                    <option value="python">python</option>
                    <option value="php">php</option>
                    <option value="dart">dart</option>
                    <option value="javascript">javascript</option>
                </select>
            </label>
            <label class="flex w-full justify-center">
                <div className="w-40">section</div>
                <select
                    name="section"
                    className=" bg-blue-400 text-white w-40 p-2 rounded-md"
                >
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