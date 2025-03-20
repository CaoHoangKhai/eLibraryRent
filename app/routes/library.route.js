const express = require("express");
const library = require("../controllers/library.controller");

const router = express.Router();

router.route("/")
    .post(library.create)
    .delete(library.create)
    .get(library.deleteAll)


router.route("/favorite")
    .get(library.findAllFavorite)
    
module.exports = router;