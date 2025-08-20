export interface NavigationItem {
  label: string;
  href: string;
  icon: string;
}

export interface StatementBoxProps {
  statement: string;
  backgroundColor?: string;
  hoverColor?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
  className?: string;
}

export interface ServiceSection {
  title: string;
  icon: string;
  color: string;
  statements: string[];
}

export interface ProjectData {
  title: string;
  client: string;
  duration: string;
  goal: string;
  solution: string;
  imagePath: string;
  isImageOnRight?: boolean;
}

export interface ContactLink {
  text: string;
  url?: string;
  isLink: boolean;
}

export interface PageProps {
  currentPage?: string;
}

export type Theme = {
  colors: {
    primary: string;
    primaryDark: string;
    dark: string;
    mediumGrey: string;
    lightGrey: string;
    veryLightGrey: string;
    textDark: string;
    text: string;
    breakingLine: string;
    attention: string;
    bright: string;
  };
  fontSize: {
    headingMobile: string;
    bigBodyMobile: string;
    smallBodyMobile: string;
    headingDesktop: string;
    bigBodyDesktop: string;
    smallBodyDesktop: string;
  };
};