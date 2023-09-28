import React from "react";
import './footer.scss';
import { Trans } from 'react-i18next';

function Footer() {
    return (
        <div className={'row footer'}>
            <div className={'footer__content'}>
                <div><Trans>footer.powered_by</Trans> React v.{React.version}</div>
                <div>©2023 Limanskiy Yakov</div>
            </div>
        </div>
    )
}

export default Footer;
