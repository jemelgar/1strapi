const path = require("path");
const db = require("../../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require("moment");

//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

const moviesController = {
  create: function (req, res) {
    Movies.create(req.body).then((Movie) => {
      return res.status(200).json({
        data: Movie,
        status: 200,
        created: "Película Guardada",
      });
    });
  },

  destroy: function (req, res) {
    let movieId = req.params.id;
    let movieToDelete = req.body;
    Movies.destroy({ where: { id: movieId }, force: true }) // force: true es para asegurar que se ejecute la acción
      .then((movie) => {
        return res.json(movieToDelete);
      })
      .catch((error) => res.send(error));
  },
};

module.exports = moviesController;
