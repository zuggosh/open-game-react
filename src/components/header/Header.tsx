import React, { Component } from "react";
import './header.scss';
import { ILinks } from "./interfaces";
import Links from "./Links";

class Header extends Component {
    links: ILinks | undefined;

    render (): React.JSX.Element {
        return <div className={'row header'}>
            <div className={'header__content'}>
                <div>avatar</div>
                <Links links={this.links}></Links>
            </div>
        </div>
    }
}

export default Header;
