export interface ISideNavItem {
  link: string;
  isDisabled: boolean;
  label: string;
  icon: string;
  customClass: string;
  children?: ISideNavItem[];
  isExpand?: boolean;
}
