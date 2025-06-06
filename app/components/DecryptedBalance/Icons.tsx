import React from 'react';

const EyeIcon = (
    <svg className='size-4' fill='none' viewBox='0 0 24 24'>
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z'
        ></path>
        <circle cx='12' cy='12' r='2.25' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5'></circle>
    </svg>
);

const EyeOffIcon = (
    <svg className='size-4' fill='none' viewBox='0 0 24 24'>
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M18.6247 10C19.0646 10.8986 19.25 11.6745 19.25 12C19.25 13 17.5 18.25 12 18.25C11.2686 18.25 10.6035 18.1572 10 17.9938M7 16.2686C5.36209 14.6693 4.75 12.5914 4.75 12C4.75 11 6.5 5.75 12 5.75C13.7947 5.75 15.1901 6.30902 16.2558 7.09698'
        ></path>
        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M19.25 4.75L4.75 19.25'></path>
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M10.409 13.591C9.53033 12.7123 9.53033 11.2877 10.409 10.409C11.2877 9.5303 12.7123 9.5303 13.591 10.409'
        ></path>
    </svg>
);

const LoadingIcon = (
    <svg className='size-4 animate-spin text-primary-brand/50' fill='none' viewBox='0 0 24 24'>
        <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            d='M12 4.75v1.5m5.126.624L16 8m3.25 4h-1.5m-.624 5.126-1.768-1.768M12 16.75v2.5m-3.36-3.891-1.768 1.768M7.25 12h-2.5m3.891-3.358L6.874 6.874'
        ></path>
    </svg>
);

export { EyeIcon, EyeOffIcon, LoadingIcon };
