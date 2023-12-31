const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Italian Perfume",
      description: "Styled with flower essence",
      price: "$200",
      brand: "Bvlgari",
      ratings: "5",
    },
    {
      id: "2",
      title: "Italian Perfume",
      description: "Styled with flower essence",
      price: "$300",
      brand: "Dolce & Gabbana",
      ratings: "4.5",
    },
    {
      id: "3",
      title: "Italian Perfume",
      description: "Styled with flower essence",
      price: "$400",
      brand: "Giorgio Armani",
      ratings: "5",
    },
    {
      id: "4",
      title: "Italian Perfume",
      description: "Styled with flower essence",
      price: "$100",
      brand: "Roberto Cavalli",
      ratings: "5",
    },
    {
      id: "5",
      title: "Microsoft Banner",
      description: "Next Generation mobility",
      price: "$700",
      brand: "Hp laptop",
      ratings: "5",
    },
    {
      id: "6",
      title: "Microsoft Banner",
      description: "Next Generation mobility",
      price: "$800",
      brand: "Lenovo",
      ratings: "5",
    },
    {
      id: "7",
      title: "Apple Watches",
      description: "Future Executed",
      price: "$200",
      brand: "Apple",
      ratings: "5",
    },
    {
      id: "8",
      title: "Hollywood Movies",
      description: "Technology Related Movies",
      price: "$40",
      ratings: "5",
      movieName: "Source Code",
      createdYear: "2000",
    },
    {
      id: "9",
      title: "Hollywood Movies",
      description: "Technology Related Movies",
      price: "$20",
      ratings: "5",
      movieName: "Ex Machina",
      createdYear: "2020",
    },
    {
      id: "10",
      title: "Hollywood Movies",
      description: "Technology Related Movies",
      price: "$50",
      ratings: "5",
      movieName: "Inception",
      createdYear: "2020",
    },
    {
      id: "11",
      title: "Hollywood Movies",
      description: "Technology Related Movies",
      price: "$50",
      ratings: "5",
      movieName: "Matrix",
      createdYear: "2005",
    },
    {
      id: "12",
      title: "Cars",
      description: "Live Freely, Drive Defensively",
      price: "$35000",
      ratings: "5",
      brand: "Ford",
    },
    {
      id: "13",
      title: "Cars",
      description: "Live Freely, Drive Defensively",
      price: "$45000",
      ratings: "5",
      brand: "Audi",
    },
    {
      id: "14",
      title: "Cars",
      description: "Live Freely, Drive Defensively",
      price: "$25000",
      ratings: "5",
      brand: "Toyota",
    },
    {
      id: "15",
      title: "Cars",
      description: "Live Freely, Drive Defensively",
      price: "$535000",
      ratings: "5",
      brand: "Porsche",
    },
    {
      id: "16",
      title: "Cars",
      description: "Live Freely, Drive Defensively",
      price: "$335000",
      ratings: "5",
      brand: "Tesla",
    },
    {
      id: "17",
      title: "Cars",
      description: "Live Freely, Drive Defensively",
      price: "$235000",
      ratings: "5",
      brand: "BMW",
    },
  ]);
});

module.exports = router;
