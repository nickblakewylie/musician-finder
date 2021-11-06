import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './registerStyle.css'
export default function Register(){
    const [bandName, setBandName] = useState("");
    const [bCity, setCity] = useState("");
    const [bState, setState] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [youtubeLinkArray, setYoutubeLinkArray] = useState([]);
    function checkIfZero(){
        if(bandName === '' || bCity === ''|| bState === ''|| password === ''|| passwordConfirm === ''){
            return false;
        } else {
            return true;
        }
    }
    function submitUserInfo(){
        var URL = "https://protected-gorge-89882.herokuapp.com/addBand";
        var params = {
          'bandName': bandName,
          'city': bCity,
          'state': bState,
          'youTubeVideos': youtubeLinkArray
        };
        var request = new XMLHttpRequest;
        request.open('POST',URL,true);
        request.send(params);
        request.onload = function(){
            if(request.status == 200){
              console.log(request.response);
             return true;
            } else {
              console.log(request);
              return false;
            } 
        };
    }
    return (
        <div id='parent'>
        <div id='registerBanner'>
            <h1>
                Register your band here!
            </h1>
        </div>
        <div id="formContainer">
        <Form onSubmit={submitUserInfo}>
            <Form.Group size="lg" id = "bandName">
                <Form.Label>Band Name</Form.Label>
                <Form.Control
                autoFocus
                type="text"
                value={bandName}
                onChange={(e) => setBandName(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" id = "bandCity">
                <Form.Label>Band City</Form.Label>
                <Form.Control
                autoFocus
                type="text"
                value={bCity}
                onChange={(e) => setCity(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" id = "bandState">
                <Form.Label>Band State</Form.Label>
                <Form.Control
                autoFocus
                type="text"
                value={bState}
                onChange={(e) => setState(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" id = "password">
                <Form.Label>Band Password
                </Form.Label>
                <Form.Control
                autoFocus
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Form.Group size="lg" id = "passwordConfirm">
                <Form.Label>Confirm Password
                </Form.Label>
                <Form.Control
                autoFocus
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                />
            </Form.Group>
            <Button id="submitButton" block size="lg" type="submit" disabled={!checkIfZero()}>Register
            </Button>
        </Form>
        </div>
        </div>
    );
}