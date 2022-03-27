class API {
    static serverhost = "http://localhost:4000/api/v1/question";
    static async asyncWrapper(func) {
        try {
            return await func();
        } catch (err) {
            return false;
        }
    }
    async getFileNames() {
        const result = await fetch(`${API.serverhost}/courses`, {
            method: "GET",
        });
        if (result.status > 199 && result.status < 300) {
            return await result.json();
        } else {
            throw new Error(" something went wrong!");
        }
    }

    async getPath(course, filename) {
        const courseParsed = course.replaceAll(" ", "%");
        const filenameParsed = filename.replaceAll(" ", "%");
        const path = `${API.serverhost}/course?course=${courseParsed}&filename=${filenameParsed}`;
        return path;
    }
}

export default API;
