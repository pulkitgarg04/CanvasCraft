import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div
    className='flex justify-center items-center min-h-screen bg-cover bg-center'
    style={{ backgroundImage: "url('login-background.png')" }}
    >
      <SignIn afterSignOutUrl="/" />
    </div>
  )
}