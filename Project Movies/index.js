import express from "express";
const app = express();

app.use(express.json());

import { initDB, client } from "./config/db.js";
import { ObjectId } from "mongodb";

initDB();
const db = client.db("mongoflix");

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

// Directors

app.get("/directors", async (req, res) => {
  const directors = await db.collection("directors").find().toArray();
  res.status(200).json(directors);
});

app.get("/directors/:id", async (req, res) => {
  const id = req.params.id;
  const director = await db
    .collection("directors")
    .findOne({ _id: new ObjectId(id) });
  console.log(director);
  res.status(200).json(director);
});

app.post("/directors", async (req, res) => {
  const { name, birthdate, nationality } = req.body;
  const addDirector = await db
    .collection("directors")
    .insertOne({ name, birthdate, nationality });
  console.log(addDirector);
  res.status(201).json(addDirector);
});

app.delete("/directors/:id", async (req, res) => {
  const id = req.params.id;
  const removeDirector = await db
    .collection("directors")
    .deleteOne({ _id: new ObjectId(id) });
  console.log(removeDirector);
  res.status(200).json(removeDirector);
});

app.put("/directors/:id", async (req, res) => {
  const id = req.params.id;
  const { name, birthdate, nationality } = req.body;

  const result = db
    .collection("directors")
    .updateOne(
      { _id: new ObjectId(id) },
      { $set: { name, birthdate, nationality } }
    );
  console.log(result);
  res.status(200).json(result);
});

// Movies

app.get("/movies", async (req, res) => {
  const movies = await db.collection("movies").find().toArray();
  res.status(200).json(movies);
});

app.get("/movies/:id", async (req, res) => {
  const id = req.params.id;
  const movie = await db
    .collection("movies")
    .findOne({ _id: new ObjectId(id) });
  console.log(movie);
  res.status(200).json(movie);
});

app.post("/movies", async (req, res) => {
  const { title, year, genre } = req.body;
  const addMovie = await db
    .collection("movies")
    .insertOne({ title, year, genre });
  console.log(addMovie);
  res.status(201).json(addMovie);
});

app.delete("/movies/:id", async (req, res) => {
  const id = req.params.id;
  const removeMovie = await db
    .collection("movies")
    .deleteOne({ _id: new ObjectId(id) });
  console.log(removeMovie);
  res.status(200).json(removeMovie);
});

app.put("/movies/:id", async (req, res) => {
  const id = req.params.id;
  const { title, year, genre } = req.body;

  const result = db
    .collection("movies")
    .updateOne({ _id: new ObjectId(id) }, { $set: { title, year, genre } });
  console.log(result);
  res.status(200).json(result);
});

// evies

app.get("/reviews", async (req, res) => {
  const reviews = await db.collection("reviews").find().toArray();
  res.status(200).json(reviews);
});

app.get("/reviews/:id", async (req, res) => {
  const id = req.params.id;
  const review = await db
    .collection("reviews")
    .findOne({ _id: new ObjectId(id) });
  console.log(review);
  res.status(200).json(review);
});

app.post("/reviews", async (req, res) => {
  const { reviewer_name, rating, comment } = req.body;
  const addReview = await db
    .collection("reviews")
    .insertOne({ reviewer_name, rating, comment });
  console.log(addReview);
  res.status(201).json(addReview);
});

app.delete("/reviews/:id", async (req, res) => {
  const id = req.params.id;
  const removeReview = await db
    .collection("reviews")
    .deleteOne({ _id: new ObjectId(id) });
  console.log(removeReview);
  res.status(200).json(removeReview);
});

app.put("/reviews/:id", async (req, res) => {
  const id = req.params.id;
  const { reviewer_name, rating, comment } = req.body;

  const result = db
    .collection("reviews")
    .updateOne(
      { _id: new ObjectId(id) },
      { $set: { reviewer_name, rating, comment } }
    );
  console.log(result);
  res.status(200).json(result);
});

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/directors`);
});
