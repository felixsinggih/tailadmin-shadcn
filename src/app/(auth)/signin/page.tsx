import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputPassword } from "@/components/ui/inputPassword";
import { Label } from "@/components/ui/label";

export default function SignInPage() {
    return (
        <>
            <span className='mb-1.5 block font-normal'>Start for free</span>
            <h2 className='mb-9 text-3xl font-medium text-black dark:text-white sm:text-2xl'>
                Sign In to TailAdmin
            </h2>

            <form className="w-full space-y-6">

                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input type='email' id='email' className='p-4 rounded-lg' placeholder='Enter your email' />
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <InputPassword iconSize={22} id='password' className='py-4 pl-4 pr-12 rounded-lg' placeholder='Enter your password' />
                </div>

                <Button type='submit' className='w-full p-6 rounded-lg'>
                    Sign In
                </Button>
            </form >
        </>
    )
}
