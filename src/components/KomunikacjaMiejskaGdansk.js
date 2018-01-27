import React, { Component } from "react";
import Mail from 'react-icons/lib/md/mail'
import Face from 'react-icons/lib/md/face'
import Box from 'react-icons/lib/md/account-box'
import Scanner from 'react-icons/lib/md/scanner'
import Facebook from 'react-icons/lib/fa/facebook'
import Twitter from 'react-icons/lib/fa/twitter'
import GooglePlus from 'react-icons/lib/fa/google-plus'

import { Parallax } from 'react-parallax';
import '../App.css'
import {Image} from 'react-bootstrap'
import firstPhoto from '../photos/1.jpeg'
import secondPhoto from '../photos/2.jpeg'
import thirdPhoto from '../photos/3.jpeg'
import {Col} from 'react-bootstrap'


class KomunikacjaMiejskaGdansk extends Component {
    render() {
        return (
            <div>


                <Parallax
                    blur={{ min: -23, max: 15 }}
                    bgImage={require('../images/bg3.jpg')}
                    bgImageAlt="second"
                    strength={200}
                >
                    <div className="mainHeader">
                        <div className="container">
                            <div className="intro-text">
                                <div className="intro-lead-in">Welcome To Our Studio!</div>
                                <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: '50vh' }} />
                </Parallax>



                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Services</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-3">
            <span className="fa-stack fa-4x">

             <Scanner size={50}/>
            </span>
                                <h4 className="service-heading">E-Commerce</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </div>
                            <div className="col-md-3">
            <span className="fa-stack fa-4x">
          <Box size={50} />
            </span>
                                <h4 className="service-heading">Responsive Design</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </div>
                            <div className="col-md-3">
            <span className="fa-stack fa-4x">
            <Mail size={50}/>
            </span>
                                <h4 className="service-heading">Web Security</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </div>
                            <div className="col-md-3">
            <span className="fa-stack fa-4x">
            <Mail size={50}/>
            </span>
                                <h4 className="service-heading">Web Security</h4>
                                <p className="text-muted">Lorem ipsum dolor sit amet,maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <Parallax
                    blur={{ min: -23, max: 15 }}
                    bgImage={require('../images/bg1.jpg')}
                    bgImageAlt="second"
                    strength={200}
                >
                    Blur transition from min to max
                    <div style={{ height: '400px' }} />
                </Parallax>


                <section className="bg-light" id="team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="team-member">

                                    <Image src={firstPhoto} rounded responsive/>                                        <h4>Kay Garland</h4>

                                        <p className="text-muted">Lead Designer</p>
                                        <ul className="list-inline social-buttons">
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <Twitter size={30}/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <Facebook size={30}/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <GooglePlus size={30}/>
                                                </a>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">
                                    <Image src={secondPhoto} rounded responsive/>

                                    <h4>Larry Parker</h4>

                                        <p className="text-muted">Lead Marketer</p>
                                        <ul className="list-inline social-buttons">
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <Twitter size={30}/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <Facebook size={30}/>                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <GooglePlus size={30}/>
                                                </a>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="team-member">

                                    <Image src={thirdPhoto} rounded responsive/>
                                        <h4>Diana Pertersen</h4>

                                        <p className="text-muted">Lead Developer</p>
                                        <ul className="list-inline social-buttons">
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <Twitter size={30}/>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">
                                                    <Facebook size={30}/>                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#">


                                                    <GooglePlus  size={30}/>

                                                </a>
                                            </li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                            </div>
                        </div>
                    </div>
                </section>


                <Parallax
                    blur={{ min: -23, max: 15 }}
                    bgImage={require('../images/bg2.jpg')}
                    bgImageAlt="second"
                    strength={200}
                >
                    Blur transition from min to max
                    <div style={{ height: '400px' }} />
                </Parallax>



            </div>





        );
    }
}

export default KomunikacjaMiejskaGdansk;