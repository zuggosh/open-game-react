import {ILinks} from "./interfaces";

interface ILinksData {
    links: ILinks | undefined;
}

function Links (linksData: ILinksData) {
    return (
        <div className={'linksData'}>
            <a
                className={'linksData__link'}
                href={ linksData.links?.github.value }
                rel="noreferrer"
                target="_blank">
                <i className="bi bi-github"></i>
            </a>
            <a
                className={'linksData__link'}
                href={ linksData.links?.telegram.value }
                rel="noreferrer"
                target="_blank">
                <i className="bi bi-telegram"></i>
            </a>
            <a
                className={'linksData__link'}
                href={ linksData.links?.mail.value }
                rel="noreferrer"
                target="_blank">
                <i className="bi bi-mailbox"></i>
            </a>
            <a
                className={'linksData__link'}
                href={ linksData.links?.linedIn.value }
                rel="noreferrer"
                target="_blank">
                <i className="bi bi-linkedin"></i>
            </a>
        </div>
    )
}

export default Links;
