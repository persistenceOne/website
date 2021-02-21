import React from "react";
import {Particles as ReactParticles} from 'react-particles-js';

const Particles = () => {
    return (
                <ReactParticles
                    params={{
                        "particles": {
                            "number": {
                                "value": 160,
                                "density": {
                                    "enable": false,
                                    "value_area": 1500
                                }
                            },
                            "line_linked": {
                                "enable": false,
                                "opacity": 0.02
                            },
                            "move": {
                                "random": false,
                                "direction": "left",
                                "speed": 2,
                                "out_mode": "out",
                                "straight":"true"
                            },
                            "size": {
                                "value": 1
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0.05
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                }
                            },
                            "modes": {
                                "push": {
                                    "particles_nb": 1
                                }
                            }
                        },
                        "retina_detect": true
                    }} />
    )
};

export default Particles;