declare global {
  interface Window {
    amplitude?: {
      track: (eventName: string, eventProperties?: Record<string, unknown>) => void;
    };
  }
}

const track = (eventName: string, properties?: Record<string, unknown>): void => {
  if (typeof window !== 'undefined' && window.amplitude) {
    window.amplitude.track(eventName, properties);
  }
};

export const analytics = {
  // Contact form
  contactFormSubmitted: () =>
    track('contact_form_submitted'),

  contactFormFailed: (error: string) =>
    track('contact_form_failed', { error }),

  // CV download
  cvDownloadOpened: () =>
    track('cv_download_opened'),

  cvDownloaded: (language: string) =>
    track('cv_downloaded', { language }),

  // Navigation
  navMenuOpened: () =>
    track('nav_menu_opened'),

  navMenuClosed: () =>
    track('nav_menu_closed'),

  navItemClicked: (destination: string, label: string) =>
    track('nav_item_clicked', { destination, label }),
};
