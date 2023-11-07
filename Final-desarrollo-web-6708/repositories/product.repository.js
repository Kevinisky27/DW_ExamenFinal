const Products = require('../models/product.models');

const findAll = async () => {
    const product = await Products.findAll();
    return product;
}

const findByEmail = async (email) => {
    return await Product.findByEmail(email);
}

const create = async (user) => {
    const createdUser = await Product.create(user);
    return createdUser;
}

module.exports = {
    findAll,
    findByEmail,
    create
}