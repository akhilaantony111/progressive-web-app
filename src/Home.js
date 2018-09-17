import React, { Component } from 'react';
import './Home.css';
class App extends Component {
    constructor(props){
        super(props);
    }
    toggle =()=>{
        var element = document.getElementById('collapsibleNavbar');
        if((element.style.display == "none") || (element.style.display == "")){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    }
  render() {
    return (
        
        <div className="container-fluid main-container ">
         <nav className="navbar navbar-expand-sm bg navbar-dark navbg">
                {/* <a className="navbar-brand" href="#">References</a> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar" onClick={this.toggle}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse toggleClass" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item text-color">
                            <a className="nav-link" href="https://medium.com/@deepusnath/4-points-to-keep-in-mind-before-introducing-progressive-web-apps-pwa-to-your-team-8dc66bcf6011">About</a>
                        </li>
                        <li className="nav-item text-color">
                            <a className="nav-link" href="http://www.learncodeonline.in/blog/list-of-top-advantages-disadvantages-of-progressive-web-apps/">Pros & Cons</a>
                        </li>
                        <li className="nav-item text-color">
                            <a className="nav-link" href="https://engineering.musefind.com/build-your-first-progressive-web-app-with-react-8e1449c575cd">Creation</a>
                        </li>    
                    </ul>
                </div>  
            </nav>
            <div className=" text-center jumbo">
                <h1 className="text-color">PROGRESSIVE WEB APPS</h1>
                <p className="text-color"><i><b>A Progressive Web App uses modern web capabilities to deliver an app-like user experience.</b></i></p> 
            </div>

            <div className="container-fluid container-div">
                <div className="row">
                    <div className="col-sm-4">
                        <h2 className="text-color">What is PWA ?</h2>
                         <div class="card">
                            <div class="card-body">
                                <ul>
                                    <li className="nav-item">
                                        <p className="text-color">
                                            A progressive web application is a website that looks and behaves in the same way as a mobile application, which means that it can be added to the main screen of the smartphone, send push notifications, access the hardware of the device, and work offline
                                        </p>
                                    </li>
                                    <li className="nav-item">
                                        <p className="text-color">
                                            A Progressive Web App uses modern web capabilities to deliver an app-like user experience.
                                        </p>
                                    </li>
                                    <li className="nav-item">
                                        <p className="text-color">
                                            Progressive web apps can be added to the home screen of Desktop/ Native devices, and can use it as an app.
                                        </p>
                                    </li>    
                                </ul>
                                
                            </div>
                        </div>
                        <hr className="d-sm-none"/>
                    </div>
                    <div className="col-sm-8">
                        <h2 className="text-color">Advantages of PWA</h2>
                        <div class="card">
                            <div class="card-body">
                                <ul>
                                    <li className="nav-item">
                                        <p className="text-color">
                                            Offline mode
                                        </p>
                                    </li>
                                    <li className="nav-item">
                                        <p className="text-color">
                                            App like way
                                        </p>
                                    </li>
                                    <li className="nav-item">
                                        <p className="text-color">
                                            Zero install
                                        </p>
                                    </li> 
                                    <li className="nav-item">
                                        <p className="text-color">
                                            Specific hardware features, for example, push notifications
                                        </p>
                                    </li> 
                                    <li className="nav-item">
                                        <p>
                                            No app store submission
                                        </p>
                                    </li> 
                                    <li className="nav-item">
                                        <p className="text-color">
                                            Add to home screen
                                        </p>
                                    </li> 
                                    
  
                                </ul>
                                
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <h2 className="text-color">Disadvantages of PWA</h2>
                        <div class="card">
                            <div class="card-body">
                            <ul>
                                <li className="nav-item">
                                    <p className="text-color">
                                    To enjoy the push notifications and in prompt builds, the website needs to use the secured TL connection.
                                    </p>
                                </li>
                                <li className="nav-item">
                                    <p className="text-color">
                                    Currently,  not all the web browser supports PWA, not even the Microsoft and Apple Safari. Whereas Microsoft has started to adopt PWA, but for Apple, it is still a long road.

                                    </p>
                                </li>
                                <li className="nav-item">
                                    <p className="text-color">
                                    The PWAs are designed to capture the attention of the mass, but, still not all the user supports PWA.

                                    </p>
                                </li> 
                            </ul>
                            

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jumbotron text-center footer">
            </div>
        </div>


    );
  }
}

export default App;
