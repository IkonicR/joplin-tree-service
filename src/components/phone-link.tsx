'use client'

import { trackPhoneClick } from '@/lib/analytics'
import { cn } from '@/lib/utils'

interface PhoneLinkProps {
    href: string
    children: React.ReactNode
    className?: string
    /** Optional phone number for analytics (extracted from href if not provided) */
    phoneNumber?: string
}

/**
 * Tracked phone link component
 * Automatically sends analytics events on click
 */
export function PhoneLink({ href, children, className, phoneNumber }: PhoneLinkProps) {
    const handleClick = () => {
        // Extract phone number from href if not explicitly provided
        const number = phoneNumber || href.replace('tel:', '')
        trackPhoneClick(number)
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            className={cn(className)}
        >
            {children}
        </a>
    )
}
