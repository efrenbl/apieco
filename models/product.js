const mongoose = require('mongoose')
const Schema = moongose.Schema

const ProductSchema = Schema ({
    name: String,
    picture: String,
    price: {type: Number, default: 0},
    category: { type: String, enum: ['computers', 'phones', 'accesories']},
    description: String
})

moongose.model('Product, ProductSchema')