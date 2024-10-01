import React from 'react'

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '../../utils/cn';

const button = cva("font-semibold border rounded", {
    variants: {
        intent: {
            primary: [
                "bg-blue-500",
                "text-white",
                "border-transparent",
                "hover:bg-blue-600",
            ],
            secondary: [
                "bg-white",
                "text-gray-800",
                "border-gray-400",
                "hover:bg-gray-100",
            ],
        },
        size: {
            small: ["text-sm", "py-1", "px-2"],
            medium: ["text-base", "py-2", "px-4"],
            large: ["text-xl", "py-2", "px-4"],
        },
    },
    compoundVariants: [{ intent: "primary", size: "medium" }],
    defaultVariants: {
        intent: "primary",
        size: "medium",
    },
});

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> { }

export const Button: React.FC<ButtonProps> = ({
    className,
    intent,
    size,
    value,
    ...props
}) => <button className={cn(button({ intent, size, className }))} {...props}>{value}</button>;