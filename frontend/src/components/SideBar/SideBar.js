import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';


class SideBar extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Menu>
                <a className = "menu-item" href = "/">
                    Home
                </a>
            </Menu>
        )
    }
}

export default SideBar;
