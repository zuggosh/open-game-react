import React, { Component } from "react";
import axios from 'axios';
import './header.scss';
// import { hostBack } from '../../env';
import { ILinks } from "./interfaces";
import Links from "./Links";

class Header extends Component {
    links: ILinks | undefined;

    // componentDidMount(): void {
    //     axios.get(`${hostBack}api/links`)
    //         .catch(error => {
    //             console.error(error);
    //         })
    //         .then(links => {
    //             // why two req
    //             this.links = links?.data;
    //             this.forceUpdate();
    //         })
    // }

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
