"use strict";

const axios = require('axios');
const db = require("../db");
const { NotFoundError } = require("../expressError");

class Price {
    //pass the ORDER BY parameters as `column ASC/DESC` (ex: `base_price DESC`) to modify the results
    static queryStr = (orderByStr) => {
        return `SELECT g.game_name, g.img_sm, g.img_lg, s.store_name, s.store_logo, s.store_url, p.link, p.base_price, p.discount, p.discount_price, p.last_modified
        FROM prices AS p
        JOIN games AS g
        ON p.game_slug = g.game_slug
        JOIN stores AS s
        ON p.store_id = s.store_id 
        WHERE p.store_id = $1
        AND p.discount <> '0'
        AND p.is_available = True
        ORDER BY p.${orderByStr}
        LIMIT 10`
    }
    
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

    static async getPriceBySlug(store_id, game_slug) {
        const priceRes = await db.query(
        `SELECT g.game_name, g.img_sm, g.img_lg, s.store_name, s.store_logo, s.store_url, p.link, p.base_price, p.discount, p.discount_price, p.last_modified
        FROM prices AS p
        JOIN games AS g
        ON p.game_slug = g.game_slug
        JOIN stores AS s
        ON p.store_id = s.store_id 
        WHERE p.store_id = $1
        AND p.game_slug = $2
        AND p.is_available = True`,
        [store_id, game_slug]);

        const price = priceRes.rows[0];

        if (price.img_lg) {
            let status = await this.checkImg(price.img_lg)
            if (!status) price.img_lg = null
        }
         
        if (!price) throw new NotFoundError(`That deal doesn't exist`);

        return price;
    }

    static async getAllPrices(game_slug) {
        const priceRes = await db.query(
        `SELECT g.game_name, g.img_sm, g.img_lg, s.store_name, s.store_logo, s.store_url, p.link, p.base_price, p.discount, p.discount_price, p.last_modified
        FROM prices AS p
        JOIN games AS g
        ON p.game_slug = g.game_slug
        JOIN stores AS s
        ON p.store_id = s.store_id 
        WHERE p.game_slug = $1
        AND p.is_available = True
        ORDER BY discount_price ASC`,
        [game_slug]);

        const prices = priceRes.rows;
        
        if(!prices) throw new NotFoundError(`That deal doesn't exist`);

        await this.checkImgs(prices)

        return prices;
    }

    static async getRecentDeals(store_id) {
        const priceRes = await db.query(this.queryStr(`last_modified DESC`), [store_id]);
        const prices = priceRes.rows;
        const store_name = prices[0].store_name

        if(!prices) throw new NotFoundError(`No new deals from ${store_name}`);

        await this.checkImgs(prices)

        return prices;
    }

    static async getLargestDiscounts(store_id) {
        const priceRes = await db.query(this.queryStr(`discount DESC`), [store_id]);
        const prices = priceRes.rows;
        const store_name = prices[0].store_name
        
        if(!prices) throw new NotFoundError(`Currently no deals from ${store_name}`);

        await this.checkImgs(prices)
       
        return prices;
    }

    static async getLowestPrices(store_id) {
        const priceRes = await db.query(this.queryStr(`discount_price ASC`), [store_id]);
        const prices = priceRes.rows;
        const store_name = prices[0].store_name
        
        if(!prices) throw new NotFoundError(`Currently no deals from ${store_name}`);

        await this.checkImgs(prices)
       
        return prices;
    }
}

module.exports = Price;