"use client"
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { LoginFormValues, LoginFormSchema } from "@/schema/auth";
import Link from "next/link";
import { loginuser } from "@/http/auth";
import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINTS } from "@/lib/api-endpoint";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
export const LogInForm = () => {
    const router = useRouter()


    const form = useForm({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const { isPending, mutateAsync } = useMutation({
        mutationFn: loginuser,
        onSuccess:() =>{
            form.reset()
            router.push('/')
 
        }
    })


    const onSubmit = async (data: LoginFormValues) => {
        await mutateAsync({
            queryKey: [API_ENDPOINTS
                .login],


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
                                <FormDescription>Your login email address.</FormDescription>
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



                    <Button type="submit" className="w-full cursor-pointer" >
                    {isPending ? <Loader className="h-2 w-2 animate-spin"/> : "Login"}
                    </Button>
                    <div className="text-center text-sm text-muted-foreground">
                        Don't have an account?{" "}
                        <Link href="/register" className="text-blue-600 hover:underline">
                            Sign Up
                        </Link>
                    </div>
                </form>
            </Form>
        </>
    )
}