import { getUser } from "@/lib/auth"
import Link from "next/link"

export default async function Navbar() {
  const { session, user } = await getUser()

  return (
    <nav className="container max-w-[1130px] mx-auto bg-[#0D5CD7] p-5 rounded-3xl relative">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex shrink-0 z-10">
          <img src="/assets/logos/logo.svg" alt="icon" />
        </div>

        {/* Mobile menu checkbox hack */}
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <label
          htmlFor="menu-toggle"
          className="lg:hidden z-20 cursor-pointer flex flex-col justify-center items-center w-8 h-8"
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all peer-checked:rotate-45 peer-checked:translate-y-2"></span>
          <span className="block w-6 h-0.5 bg-white mb-1.5 transition-all peer-checked:opacity-0"></span>
          <span className="block w-6 h-0.5 bg-white transition-all peer-checked:-rotate-45 peer-checked:-translate-y-2"></span>
        </label>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center gap-[30px]">
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 font-bold text-[#FFC736]">
            <Link href="/">Shop</Link>
          </li>
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
            <Link href="/catalogs">Catalogs</Link>
          </li>
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
            <Link href="/">Testimonials</Link>
          </li>
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
            <Link href="/">Rewards</Link>
          </li>
        </ul>

        {/* Mobile navigation overlay */}
        <div className="fixed inset-0 bg-[#0D5CD7] z-10 flex-col items-center justify-center hidden peer-checked:flex lg:hidden">
          <ul className="flex flex-col items-center gap-6">
            <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 font-bold text-[#FFC736] text-xl">
              <Link href="/">Shop</Link>
            </li>
            <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white text-xl">
              <Link href="/catalogs">Catalogs</Link>
            </li>
            <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white text-xl">
              <Link href="/">Testimonials</Link>
            </li>
            <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white text-xl">
              <Link href="/">Rewards</Link>
            </li>
            {session && user?.role === "customer" ? (
              <li className="text-white text-xl">Hi, {user.name}</li>
            ) : (
              <>
                <li>
                  <Link href="/sign-in" className="p-[12px_20px] bg-white rounded-full font-semibold block">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link href="/sign-up" className="p-[12px_20px] bg-white rounded-full font-semibold block mt-3">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Cart and user profile/auth buttons */}
        <div className="flex items-center gap-3 z-10">
          <Link href="/carts">
            <div className="w-10 h-10 md:w-12 md:h-12 flex shrink-0">
              <img src="/assets/icons/cart.svg" alt="icon" />
            </div>
          </Link>

          {/* User info - visible only on desktop */}
          {session && user?.role === "customer" ? (
            <div className="hidden md:flex items-center gap-3">
              <p className="text-white">Hi, {user.name}</p>
              <div className="w-[48px] h-[48px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
                <img src="/assets/photos/p4.png" className="w-full h-full object-cover rounded-full" alt="photo" />
              </div>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-3">
              <Link href="/sign-in" className="p-[12px_20px] bg-white rounded-full font-semibold">
                Sign In
              </Link>
              <Link href="/sign-up" className="p-[12px_20px] bg-white rounded-full font-semibold">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
