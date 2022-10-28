"use strict";

const axios = require('axios');
const db = require("../db");
const { NotFoundError } = require("../expressError");

class Game {
    static async checkImgs(dataArr) {
        let promises = []
        for (let item of dataArr) {
            if (item.img_lg) {
                promises.push(axios.get(item.img_lg))
            }
        }
        let results = await Promise.allSettled(promises)
        let status = results.map(r => r.status)
        for (let i = 0; i < dataArr.length; i++) {
            if (status[i] === 'rejected') dataArr[i].img_lg = null
        }
    }

    static async getSimilarGames(game_slug) {
        const gameRes = await db.query(
            `SELECT game_slug, game_name, img_sm, img_lg
            FROM games 
            WHERE game_slug <> $1 AND SIMILARITY (game_slug, $1) > 0.4
            AND is_available = True
            ORDER BY CHAR_LENGTH(game_slug)
            LIMIT 6`,
            [game_slug]
        );

        const games = gameRes.rows

        if(!games) throw new NotFoundError(`No similar games found`);

        await this.checkImgs(games)

        return games;
    }

    static async autosearch({fragment}) {
        const gameRes = await db.query(
            `SELECT game_slug, game_name, img_sm, img_lg
            FROM games 
            WHERE game_slug ILIKE $1
            AND is_available = True
            ORDER BY CHAR_LENGTH(game_slug)
            LIMIT 5`,
            [`%${fragment}%`]
        );

        const games = gameRes.rows

        if(!games) throw new NotFoundError(`No games like that found`);

        await this.checkImgs(games)

        return games;
    }
}

module.exports = Game;