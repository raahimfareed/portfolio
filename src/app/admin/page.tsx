import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "../actions"

export async function AdminLogin () {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <form action={async (formData) => {
        await login(formData);
      }} className="bg-secondary text-secondary-foreground p-4 rounded-lg flex flex-col gap-3 w-[320px]">
        <h1 className="text-xl font-bold">Login</h1>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input 
            name="email" 
            id="email"
            type="email"
            className="bg-background text-foreground border-background" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input 
            name="password"
            id="password"
            type="password"
            className="bg-background text-foreground border-background" />
        </div>
        <button className="rounded-lg inline-flex items-center justify-center h-8 w-16 bg-accent text-accent-foreground">Login</button>
      </form>
    </div>
  )
}
