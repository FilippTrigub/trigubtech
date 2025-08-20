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

export interface ServiceData {
  title: string;
  imagePath: string;
  shortDescription: string;
  content: string;
  keyBenefits: string[];
  keyTech: string[];
}

export interface ProjectData {
  title: string;
  client?: string;
  duration: string;
  shortDescription: string;
  goal: string;
  solution: string;
  imagePath: string;
  keyTechnologies: string[];
  isImageOnRight?: boolean;
}

export interface AboutData {
  title: string;
  imagePath: string;
  shortDescription: string;
  content: string;
  tags: string[];
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