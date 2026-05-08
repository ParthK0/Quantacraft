/**
 * Accessibility Utilities
 * Provides helpers for ARIA labels, semantic HTML, and accessibility best practices
 */

/**
 * Generate ARIA label for interactive elements
 */
export const generateAriaLabel = (text: string, context?: string): string => {
  return context ? `${text} - ${context}` : text;
};

/**
 * Accessibility attributes for buttons
 */
export const buttonA11yAttrs = {
  role: "button",
  tabIndex: 0,
} as const;

/**
 * Accessibility attributes for links
 */
export const linkA11yAttrs = {
  role: "link",
} as const;

/**
 * Generate alt text for images
 * Ensures descriptive alt text for screen readers
 */
export const generateAltText = (imageName: string, context?: string): string => {
  const descriptions: Record<string, string> = {
    hero: "QuantCraft hackathon hero banner",
    logo: "QuantCraft logo",
    team: "Team member profile",
    track: "Hackathon track",
    prize: "Prize tier",
    sponsor: "Sponsor logo",
    timeline: "Event timeline",
    background: "Background image",
  };

  const baseAlt = descriptions[imageName] || imageName;
  return context ? `${baseAlt} - ${context}` : baseAlt;
};

/**
 * Semantic heading levels
 */
export const headingLevels = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
} as const;

/**
 * ARIA live region attributes for dynamic content
 */
export const liveRegionAttrs = {
  polite: {
    role: "status",
    "aria-live": "polite",
    "aria-atomic": "true",
  },
  assertive: {
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true",
  },
} as const;

/**
 * Keyboard navigation helper
 * Handles common keyboard events
 */
export const handleKeyboardNavigation = (
  event: React.KeyboardEvent,
  callbacks: {
    onEnter?: () => void;
    onSpace?: () => void;
    onEscape?: () => void;
    onArrowUp?: () => void;
    onArrowDown?: () => void;
  }
) => {
  switch (event.key) {
    case "Enter":
      callbacks.onEnter?.();
      break;
    case " ":
      event.preventDefault();
      callbacks.onSpace?.();
      break;
    case "Escape":
      callbacks.onEscape?.();
      break;
    case "ArrowUp":
      callbacks.onArrowUp?.();
      break;
    case "ArrowDown":
      callbacks.onArrowDown?.();
      break;
  }
};

/**
 * Focus management utilities
 */
export const focusManagement = {
  /**
   * Trap focus within a modal or container
   */
  trapFocus: (container: HTMLElement) => {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    return {
      firstElement,
      lastElement,
      focusableElements,
    };
  },

  /**
   * Restore focus to previously focused element
   */
  restoreFocus: (element: HTMLElement | null) => {
    element?.focus();
  },
};
