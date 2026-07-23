import isValidEmail from "../utils/isValidEmail.js";

function assignmentValidation(req, res, next) {
    const { title, content, category, email } = req.body;
    const allowedCategories = ["Math", "English", "Biology"];


    if (!title || !content || !category || !email) {
        return res.status(400).json({
            message: "Title, content, category, and email are required"
        });
    }

    if (email && !isValidEmail(email)) {
        return res.status(400).json({
            message: "Invalid email format"
        });
    }

    if (!allowedCategories.includes(category)) {
        return res.status(400).json({
            message: "Invalid category. Must be one of: Math, English, Biology"
        });
    }

    if (content.length < 500 || content.length > 1000) {
        return res.status(400).json({
            message: "Content must be between 500 and 1000 characters"
        });
    }

    next();
}

export default assignmentValidation;