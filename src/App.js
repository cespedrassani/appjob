import { StackNavigator } from "react-navigation";
import React, { Component } from "react";
import Login from "./pages/login";

const Application = StackNavigator({
    home: {screen: Login},
    }, {
         navigationOptions: {
             header: false,
         }
});

export default class App extends Component {
    render() {
        return (
            <Application />
        )
    }
} 