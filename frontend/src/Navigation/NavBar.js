import { useState, useEffect } from "react";
import { Nav, NavbarBrand, Navbar, NavItem } from "reactstrap";
import Api from "../API/api";
import GameSearchCard from "../Games/GameSearchCard";
import "./NavBar.css"
const slugify = require("slugify")

const NavBar = () => {
    const [search, setSearch] = useState('')
    const [games, setGames] = useState([])

    useEffect(() => {
        const fetchGames = async () => {
            let games = await Api.autosearch(search)
            setGames(games)
        }
        fetchGames(); 
    }, [search])

    return (
        <>
            <Navbar className="NavBar sticky-top">
                <NavbarBrand href="/">
                    <span className="NavBar-brand">Thrifty_Wizard</span> 
                </NavbarBrand>
                <Nav className="navbar">
                    <NavItem>
                        <div className="SearchForm row" style={{width: "30rem"}}>
                            <div className="col-auto d-flex align-items-center">
                                <label className="fw-bold fs-4" htmlFor="search">SEARCH:</label>
                            </div>
                            <div className="col-9">
                                <input
                                    className="form-control" 
                                    onChange={evt => setSearch(slugify(evt.target.value, {strict: true}))} 
                                />  
                            </div>
                            <div className="position-absolute mt-5" style={{width: "30rem",zIndex: '99'}}>
                            {
                                games ? (games.map(game => <GameSearchCard key= {game.game_name} game={game} />)) : (null)
                            }
                            </div>
                        </div>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    )    
};

export default NavBar;