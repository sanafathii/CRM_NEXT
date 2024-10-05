import { Schema, model, models } from "mongoose";

const customerSchema = new Schema({
    name: {
        type: String,
        minLength: 2,
        required: true,
    },
    lastName: {
        type: String,
        minLength: 2,
        required: true,
    },
    email: {
        type: String,
        minLength: 2,
        required: true,
    },
    phone: {
        type: String,
    },
    address: {
        type: String,
    },
    postalCode: {
        type: Number,
    },
    date: {
        type: Date,
    },
    products: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: {
        type: Date,
        default: () => new Date(),
    },
});

const Customer = models.Customer || model("Customer", customerSchema);

export default Customer;