"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import React, { useState } from "react"
import { LoginValidationSchema } from "@/validation-schemas"
import { useToast } from "@/components/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const AdminLogin = () => {
  const [processing, setProcessing] = useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const [errors, setErrors] = useState<{ email: string[]; password: string[] }>({
    email: [],
    password: []
  });
  const clientLogin = async (formData: FormData) => {
    setErrors({
      email: [],
      password: []
    })
    const data = {
      email: formData.get('email')?.toString(),
      password: formData.get('password')?.toString(),
    }

    const result = LoginValidationSchema.safeParse(data);
    if (!result.success) {
      const errors = result.error.flatten();
      setErrors({
        email: errors.fieldErrors.email ?? [],
        password: errors.fieldErrors.password ?? [],
      });
      setProcessing(false)
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: "POST",
        body: JSON.stringify(data)
      })

      const { status } = response;
      if (status === 500) {
        const error = await response.json();
        toast({
          variant: "destructive",
          description: error.error
        })
        return;
      }
      if (status === 401) {
        const error = await response.json();
        setErrors({
          password: [error.error],
          email: [error.error]
        })
        return;
      }

      if (status === 201) {
        return router.push('/admin/dashboard')
      }
    } catch (error) {
      toast({
        className: "text-red-600 bg-red-200 border-red-800",
        description: error as string
      })
    } finally {
      setProcessing(false)
    }
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form action={async (formData) => {
        setProcessing(true)
        clientLogin(formData)
      }} className="bg-secondary text-secondary-foreground p-4 rounded-lg flex flex-col gap-3 w-[320px]">
        <h1 className="text-xl font-bold">Login</h1>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            id="email"
            type="email"
            className="bg-background text-foreground border-background" />
          {errors.email.map((error, idx) => {
            return <small key={`email-error-${idx}`} className="text-red-500">{error}</small>
          })}
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            id="password"
            type="password"
            className="bg-background text-foreground border-background" />
          {errors.password.map((error, idx) => {
            return <small key={`password-error-${idx}`} className="text-red-500">{error}</small>
          })}
        </div>
        <Button disabled={processing} className="bg-primary text-primary-foreground">Login</Button>
      </form>
    </div>
  )
}

export default AdminLogin;