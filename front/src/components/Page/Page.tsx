import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface PageProps {
    children?: ReactNode;
    className?: string;
    wrapperClassName?: string;
}

interface PageTitleProps {
    children?: ReactNode;
    className?: string;
}

interface PageSubtitleProps {
    children?: ReactNode;
    className?: string;
}

export default function Page({ children, className, wrapperClassName }: PageProps) {
    return (
        <div className={twMerge('p-4 pt-20 flex flex-col items-center', wrapperClassName)}>
            <div className={twMerge('w-[95%] md:w-[85%] lg:w-[70%]', className)}>{children}</div>
        </div>
    );
}

function PageTitle({ children, className }: PageTitleProps) {
    return <h1 className={twMerge('text-3xl font-bold', className)}>{children}</h1>;
}

function PageSubtitle({ children, className }: PageSubtitleProps) {
    return <h2 className={twMerge('text-xl', className)}>{children}</h2>;
}

Page.Title = PageTitle;
Page.Subtitle = PageSubtitle;
