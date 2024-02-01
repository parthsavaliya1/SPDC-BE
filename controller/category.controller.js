const categoryModel = require('../model/category.model');

const getAllCategory = async (req, res) => {
    try {
        const categories = await categoryModel.find({});
        return res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ message: `Error while getting categories: ${error}` });
    }
}

const createCategory = async (req, res) => {
    const { name, description, image } = req.body || {};
    try {
        const category = new categoryModel({ name, description, image });
        const createdCategory = await category.save();
        return res.status(201).json(createdCategory);
    } catch (error) {
        return res.status(500).json({ message: `Error while creating category: ${error}` });
    }
}

const updateCategory = async (req, res) => {
    const categoryId = req.params.categoryId;
    const { name, description, image } = req.body || {};
    console.log(categoryId)
    try {
        const updatedCategory = await categoryModel.findByIdAndUpdate(
            categoryId,
            { name, description, image },
            { new: true }
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        return res.status(200).json(updatedCategory);
    } catch (error) {
        return res.status(500).json({ message: `Error while updating category: ${error}` });
    }
};

const deleteCategory = async (req, res) => {
    const categoryId = req.params.categoryId;

    try {
        const deletedCategory = await categoryModel.findByIdAndDelete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        return res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: `Error while deleting category: ${error}` });
    }
};

module.exports = { getAllCategory, createCategory, updateCategory, deleteCategory };
