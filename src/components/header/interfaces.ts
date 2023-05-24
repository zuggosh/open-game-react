export interface ILinks {
    github: ILinkItem;
    linedIn: ILinkItem;
    mail: ILinkItem;
    telegram: ILinkItem;
}

interface ILinkItem {
    type: string
    value: string;
}
