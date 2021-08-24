const db = require("../../database/models");
const sequelize = db.sequelize;

const genresController = {
  list: (req, res) => {
    db.Genre.findAll().then((genres) => {
      return res.status(200).json({
        meta: {
          status: 200,
          total: genres.length,
          url: req.originalUrl,
        },
        data: genres,
      });
    });
  },
  detail: (req, res) => {
    db.Genre.findByPk(req.params.id).then((genre) => {
      return res.status(200).json({ genre });
    });
  },
};

module.exports = genresController;
