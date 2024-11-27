import { Button } from "@/tailwind-components/ui/button"
import {
  BaggageClaimIcon,
  HeartIcon,
  LogIn,
  ShoppingCartIcon,
} from "lucide-react"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/tailwind-components/ui/tooltip"

const MenuList = () => {
  return (
    <div className='flex items-center space-x-5'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href='/' className='flex items-center'>
              <BaggageClaimIcon className='mr-2' />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>My-Order</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href='/' className='flex items-center relative'>
              <HeartIcon className='relative mr-2' />
              <span className='absolute bottom-[12px] right-[4px] w-4 h-4 rounded-full bg-pink-400 flex items-center justify-center p-2 text-xs'>
                1
              </span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>My-Wishlist</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href='/' className='flex items-center relative'>
              <ShoppingCartIcon className='relative mr-2' />
              <span className='absolute bottom-[12px] right-[4px] w-4 h-4 rounded-full bg-pink-400 flex items-center justify-center p-2 text-xs'>
                1
              </span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>My-Cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Button className='bg-white text-black ring-white ring-inset ring-2 rounded-md hover:bg-black hover:text-white font-semibold'>
        <LogIn />
        Login
      </Button>
    </div>
  )
}

export default MenuList
