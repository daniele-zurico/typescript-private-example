export interface INavigationItems {
    items: INavigationItem[];
    default?: string;
}
export interface INavigationItem {
    href: string;
    label: string;
};
