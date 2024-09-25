import { Input } from "@/components/ui/input";

export default function ContactSection(){
  return (
      <div className="px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Sales</h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">Please feel free to ask </p>
          </div>
          <form className="mx-auto mt-16 max-w-xl sm:mt-20" action="">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="mt-2.5">
                <Input type='name' id='name' placeholder='Enter Your Name' />
              </div>
              <div className="sm:col-span-2">
                <div className="mt-2.5">
                <Input type='email' id='name' placeholder='Enter Your Email Adress' />

                </div>
              </div>
            </div>

          </form>
      </div>
  )
}