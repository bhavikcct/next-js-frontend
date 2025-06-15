"use client"
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { RegisterFormValues, registerFormSchema } from "@/schema/auth";
import { useMutation } from "@tanstack/react-query"
import Link from "next/link";
import { registerUser } from "@/http/auth";
import { API_ENDPOINTS } from "@/lib/api-endpoint";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
export const RegisterForm = () => {

const router = useRouter()
    const form = useForm({
        resolver: zodResolver(registerFormSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const { isPending, mutateAsync } = useMutation({
        mutationFn: registerUser,
        onSuccess:() =>{
            form.reset()
            router.push('/login')
 
        }
    })


    const onSubmit = async (data: RegisterFormValues) => {
        await mutateAsync({
            queryKey: [API_ENDPOINTS.register],

            payload: data
        })

    };




    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="you@example.com" {...field} />
                                </FormControl>
                                <FormDescription>Your Register email address.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="••••••••" {...field} />
                                </FormControl>
                                <FormDescription>Must be 6+ characters long.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />



                    <Button type="submit" disabled={isPending} className="w-full cursor-pointer" >
                        {isPending ? <Loader className="h-2 w-2 animate-spin"/> : "Register"}
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                            Login
                        </Link>
                    </div>
                </form>
            </Form>
        </>
    )
}