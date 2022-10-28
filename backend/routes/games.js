"use strict";

const express = require('express')
const Game = require('../models/game')
const router = new express.Router()


router.get("/similar/:game_slug", async function (req, res, next) {
    try {
        const games = await Game.getSimilarGames(req.params.game_slug);
        return res.json({ games });
    } catch (err) {
        return next(err);
    }
  });

router.post("/autosearch", async function (req, res, next) {
    try {
        const games = await Game.autosearch(req.body);
        return res.json({ games });
    } catch (err) {
        return next(err);
    }
  });

module.exports = router;
