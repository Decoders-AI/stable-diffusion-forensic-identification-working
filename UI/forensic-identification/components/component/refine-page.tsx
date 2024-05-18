/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function RefinePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#12012e] to-[#732bbf] dark:from-[#12012e] dark:to-[#732bbf]">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold">Criminal Identification</h2>
          <Button size="icon" variant="ghost">
            <XIcon className="h-5 w-5" />
          </Button>
        </div>
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <img
              alt="Generated Face"
              className="rounded-lg"
              height="300"
              src="/result.jpg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
           <div className="grid gap-4">
            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
              <div>
                <Label htmlFor="eyes">Green Eyes</Label>
                <Slider defaultValue={[50]} id="eyes" max={100} step={1} />
              </div>
              <Button className="shrink-0" size="icon" variant="ghost">
                <XIcon className="h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
              <div>
                <Label htmlFor="nose">Pointed Nose</Label>
                <Slider defaultValue={[50]} id="nose" max={100} step={1} />
              </div>
              <Button className="shrink-0" size="icon" variant="ghost">
                <XIcon className="h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
              <div>
                <Label htmlFor="mouth">Sharp Jawline</Label>
                <Slider defaultValue={[50]} id="mouth" max={100} step={1} />
              </div>
              <Button className="shrink-0" size="icon" variant="ghost">
                <XIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <Button className="w-full" size="lg">
              Refine
            </Button>
            <Button className="w-full" size="lg" variant="outline">
              New Generation
            </Button>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-b-lg border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
          <p>This face generator is powered by AI technology. Adjust the sliders to refine the generated face.</p>
        </div>
      </div>
    </div>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

