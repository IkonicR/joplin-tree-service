/**
 * Analytics Utility
 * Sends events to both GA4 (via gtag) and GTM (via dataLayer) for redundancy.
 */

// Declare gtag and dataLayer for TypeScript
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

type EventParams = Record<string, string | number | boolean | undefined>;

/**
 * Track an event to both GA4 and GTM dataLayer
 */
export function trackEvent(eventName: string, params?: EventParams): void {
    // Log in development
    if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics] ${eventName}`, params || {});
    }

    // Send to GA4 via gtag
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params);
    }

    // Also push to dataLayer for GTM
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...params,
        });
    }
}

/**
 * Track a phone number click
 */
export function trackPhoneClick(phoneNumber?: string): void {
    trackEvent('phone_click', {
        event_category: 'engagement',
        event_label: phoneNumber || 'unknown',
        value: 1,
    });
}

/**
 * Track a successful form submission (lead generation)
 */
export function trackFormSubmission(service: string, urgency?: string): void {
    trackEvent('generate_lead', {
        event_category: 'conversion',
        service_type: service,
        urgency: urgency,
        value: 1,
    });
}

/**
 * Track when user opens the chat widget
 */
export function trackChatWidgetOpen(): void {
    trackEvent('chat_widget_open', {
        event_category: 'engagement',
        value: 1,
    });
}

/**
 * Track scroll depth milestones (25%, 50%, 75%, 100%)
 */
export function trackScrollDepth(percentage: number): void {
    trackEvent('scroll_depth', {
        event_category: 'engagement',
        depth_percentage: percentage,
    });
}
