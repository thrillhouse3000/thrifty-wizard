import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class Api {
    static async getAllPrices(game_slug) {
        let results = await axios.get(`${BASE_URL}/prices/${game_slug}`)
        return results.data.prices
    }

    static async getRecentDeals() {
        let results = await Promise.all([
            axios.get(`${BASE_URL}/prices/1/recent-deals`),
            axios.get(`${BASE_URL}/prices/2/recent-deals`),
            axios.get(`${BASE_URL}/prices/3/recent-deals`),
            axios.get(`${BASE_URL}/prices/5/recent-deals`)
        ]);
        let deals = results.map(r => r.data.prices)
        return deals
    }

    static async getLargestDiscounts() {
        let results = await Promise.all([
            axios.get(`${BASE_URL}/prices/1/largest-discount`),
            axios.get(`${BASE_URL}/prices/2/largest-discount`),
            axios.get(`${BASE_URL}/prices/3/largest-discount`),
            axios.get(`${BASE_URL}/prices/5/largest-discount`)
        ]);
        let deals = results.map(r => r.data.prices)
        return deals
    }

    static async getLowestPrices() {
        let results = await Promise.all([
            axios.get(`${BASE_URL}/prices/1/lowest-price`),
            axios.get(`${BASE_URL}/prices/2/lowest-price`),
            axios.get(`${BASE_URL}/prices/3/lowest-price`),
            axios.get(`${BASE_URL}/prices/5/lowest-price`)
        ]);
        let deals = results.map(r => r.data.prices)
        return deals
    }

    static async autosearch(fragment) {
        if (fragment !== '') {
            let results = await axios.post(`${BASE_URL}/games/autosearch`, {fragment: fragment})
            return results.data.games
        }
    }

    static async getSimilarGames(game_slug) {
        let results = await axios.get(`${BASE_URL}/games/similar/${game_slug}`)
        return results.data.games
    }
}

export default Api;