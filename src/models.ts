import mongoose from "mongoose";

const ToppingSchema = new mongoose.Schema({
  name: String,
  price: Number,
});

const PizzaSchema = new mongoose.Schema({
  name: String,
  basePrice: Number,
  toppings: [ToppingSchema],
});

const OrderSchema = new mongoose.Schema({
  customerName: String,
  pizzas: [PizzaSchema],
  totalPrice: Number,
});

export const Topping = mongoose.model("Topping", ToppingSchema);
export const Pizza = mongoose.model("Pizza", PizzaSchema);
export const Order = mongoose.model("Order", OrderSchema);
