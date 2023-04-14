import express from "express";
import { Order, Pizza } from "./models";

const router = express.Router();

// GET all orders
router.get("/orders", async (_, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// GET single order
router.get("/orders/:id", async (req, res) => {
    try {
      const order = await Order.findById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.json(order);
    } catch (err: any) {
      res.status(500).json({ message: "Order not found" });
      //TODO: send logger: err
    }
  });

// POST place order
router.post("/orders", async (req, res) => {
  const newOrder = new Order(req.body);
  newOrder.totalPrice = newOrder.pizzas.reduce((acc: number, pizza: any) => {
    return acc + pizza.basePrice + pizza.toppings.reduce((toppingAcc: number, topping: any) => {
      return toppingAcc + topping.price;
    }, 0);
  }, 0);
  await newOrder.save();
  res.json(newOrder.totalPrice);
});

// PUT update order
router.put("/orders/:id", async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedOrder) {
        return res.status(404).json({ message: "Order not found" });
      }
      res.json(updatedOrder);
    } catch (err: any) {
      res.status(500).json({ message: "Internal Error" });
      //TODO: send logger: err
    }
  });

// DELETE delete order
router.delete("/orders/:id", async (req, res) => {
  const deletedOrder = await Order.findByIdAndRemove(req.params.id);
  res.json(deletedOrder);
});

export default router;
