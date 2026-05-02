/*
 * Copyright (c) 2024. Devtron Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

interface TtlShIconProps {
    size?: number
}

export const TtlShIcon = ({ size = 20 }: TtlShIconProps) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ttl.sh"
    >
        <defs>
            <linearGradient id="dt-ttl-sh-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#059669" />
            </linearGradient>
        </defs>
        <rect width="32" height="32" rx="7" fill="url(#dt-ttl-sh-grad)" />
        <circle cx="16" cy="17" r="10" fill="none" stroke="white" strokeWidth="2" />
        <line x1="16" y1="17" x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="17" x2="21" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="14" y="4" width="4" height="4" rx="1" fill="white" />
    </svg>
)
