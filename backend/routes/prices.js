"use strict";

const express = require('express')
const Price = require('../models/price')
const router = new express.Router()

router.get("/:game_slug", async function (req, res, next) {
    try {
        const prices = await Price.getAllPrices(req.params.game_slug);
        return res.json({ prices });
    } catch (err) {
        return next(err);
    }
  });

router.get("/:store_id/recent-deals", async function (req, res, next) {
    try {
        const prices = await Price.getRecentDeals(req.params.store_id);
        return res.json({ prices });
    } catch (err) {
        return next(err);
    }
  });

router.get("/:store_id/largest-discount", async function (req, res, next) {
    try {
        const prices = await Price.getLargestDiscounts(req.params.store_id);
        return res.json({ prices });
    } catch (err) {
        return next(err);
    }
  });

router.get("/:store_id/lowest-price", async function (req, res, next) {
    try {
        const prices = await Price.getLowestPrices(req.params.store_id);
        return res.json({ prices });
    } catch (err) {
        return next(err);
    }
  });

  router.get("/:store_id/:game_slug", async function (req, res, next) {
    try {
        const price = await Price.getPriceBySlug(req.params.store_id, req.params.game_slug);
        return res.json({ price });
    } catch (err) {
        return next(err);
    }
  });

module.exports = router;
