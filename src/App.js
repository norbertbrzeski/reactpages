import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    NavLink,

} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import KomunikacjaMiejskaGdansk from "./components/KomunikacjaMiejskaGdansk";
import RozkladJazdy from "./components/RozkladJazdy";
import InformacjeOKomunikacji from "./components/InformacjeOKomunikacji";
import Kontakt from './components/Kontakt'
import $ from 'jquery'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div >
                        <div id="body">


                            <ul className="navMain header animated fadeIn" >
                                <li><NavLink  exact to="/" activeClassName="active" >Komunikacja Miejska Gdansk</NavLink></li>
                                <li><NavLink  to="/RozkladJazdy" activeClassName="active">Rozklad Jazdy </NavLink></li>
                                <li><NavLink  to="/InformacjeOKomunikacji" activeClassName="active">Informacje o komunikacji</NavLink></li>
                                <li><NavLink  to="/Kontakt" activeClassName="active">Kontakt</NavLink></li>
                            </ul>

                            <div className="content">
                                <Route path="/RozkladJazdy" component={RozkladJazdy}/>
                                <Route path="/InformacjeOKomunikacji" component={InformacjeOKomunikacji}/>
                                <Route path="/Kontakt" component={Kontakt}/>
                            </div>
                        </div>
                        <Route exact path="/" component={KomunikacjaMiejskaGdansk}/>
                        <button  id="myBtn">Top</button>
                    </div>
                </Router>


            </div>
        );

    }
    componentDidMount() {
        $("#myBtn").hide().click(function(){
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });


        $(document).scroll(function() {
            let y = $(this).scrollTop();
            if (y > 100) {
                $('#myBtn').fadeIn();
            } else {
                $('#myBtn').fadeOut();
            }
        });
    }
}

export default App;
