"use client"

import { Button } from "@/tailwind-components/ui/button"
import {
  HeartIcon,
  LogOutIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  User,
} from "lucide-react"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/tailwind-components/ui/tooltip"
import { useRouter } from "next/navigation"
import { signOut, useSession } from "next-auth/react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/tailwind-components/ui/popover"
import { Avatar, AvatarImage } from "@/tailwind-components/ui/avatar"
import { Suspense } from "react"
import Loading from "./loading"
import { useSelector } from "react-redux"
import { AddToCartType } from "@/configs/type"

const MenuList = () => {
  const router = useRouter()

  const { data: userDetails } = useSession()

  const handleSignOutUser = () => {
    signOut()
  }
  const handleNavigateLoginPage = () => {
    router.push("/login")
  }

  const addedCartProducts = useSelector((state: AddToCartType) => {
    return state.addToCart
  })

  const addedWishListProduct = useSelector((state: AddToCartType) => {
    return state.addToWishList
  })

  return (
    <div className='items-center space-x-5 hidden md:flex'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link href='/' className='flex items-center'>
              <ShoppingBagIcon className='mr-2' />
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
            <Link href='/my-wishlist' className='flex items-center relative'>
              <HeartIcon className='relative mr-2' />
              <span className='absolute bottom-[12px] right-[4px] w-4 h-4 rounded-full bg-pink-400 flex items-center justify-center p-2 text-xs'>
                {addedWishListProduct.length}
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
            <Link href='/my-cart' className='flex items-center relative'>
              <ShoppingCartIcon className='relative mr-2' />
              <span className='absolute bottom-[12px] right-[4px] w-4 h-4 rounded-full bg-pink-400 flex items-center justify-center p-2 text-xs'>
                {addedCartProducts.length}
              </span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>My-Cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {userDetails === null ? (
        <Button
          variant='outline'
          className='bg-transparent text-white ring-[#38393B] ring-inset ring-2 rounded-md hover:bg-white hover:text-black font-semibold'
          onClick={handleNavigateLoginPage}
        >
          <User />
          Sign In
        </Button>
      ) : (
        <>
          <Suspense key={userDetails?.user?.name} fallback={<Loading />}>
            <Popover>
              <PopoverTrigger>
                <div className='w-full flex items-center text-white text-xl cursor-pointer capitalize'>
                  {userDetails?.user?.name ? (
                    <>
                      {userDetails?.user?.name}

                      <Avatar className='ml-3'>
                        <AvatarImage
                          src={userDetails?.user?.image ?? ""}
                          alt={userDetails?.user?.name ?? "avatar"}
                        />
                      </Avatar>
                    </>
                  ) : (
                    <Loading />
                  )}
                </div>
              </PopoverTrigger>
              <PopoverContent className='w-[200px] p-3 bg-black mt-5 border border-[#38393B]'>
                <Button
                  className='w-full bg-transparent text-white ring-[#38393B] ring-inset ring-2 rounded-md hover:bg-white hover:text-black font-semibold'
                  onClick={handleSignOutUser}
                >
                  <LogOutIcon />
                  Sign out
                </Button>
              </PopoverContent>
            </Popover>
          </Suspense>
        </>
      )}
    </div>
  )
}

export default MenuList
