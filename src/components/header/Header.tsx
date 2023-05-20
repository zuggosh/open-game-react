import {Component} from "react";
import './header.scss';

class Header extends Component {
    render  () {
        return <div className={'header'}>
            <div className={'header__content'}>
                <div>avatar</div>
                <div>links</div>
            </div>
        </div>
    }
}

export default Header;
