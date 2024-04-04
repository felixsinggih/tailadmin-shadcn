'use client'

import * as React from "react"

import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    iconSize?: number | 20
}

const InputPassword = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, iconSize, ...props }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false)

        return (
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    className={cn(
                        "w-full rounded border border-stroke bg-transparent px-3 py-2 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                <span className="absolute inset-y-0 end-3 flex items-center ps-3 cursor-pointer">
                    <Eye size={iconSize} className={showPassword ? 'hidden' : 'block'} onClick={() => setShowPassword(true)} />
                    <EyeOff size={iconSize} className={!showPassword ? 'hidden' : 'block'} onClick={() => setShowPassword(false)} />
                </span>
            </div>
        )
    }
)
InputPassword.displayName = "Input"

export { InputPassword }
