import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                "flex h-[48px] rounded-md border border-black/10 dark:border-white/10 focus:border-accent font-light bg-white dark:bg-black px-4 py-5 text-base placeholder:text-black/60 dark:placeholder:text-white/60 outline-none",
                className
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

export { Input };
