import React from 'react'
import { Dropdown } from '@/ui/atoms/dropdown/Dropdown'
import { BsSliders } from 'react-icons/bs'
import Logo from '../../../public/svg/Logo.svg'
import Link from 'next/link'

export const Header = () => (
  <div className="block w-full">
    <header className="block py-5 bg-oceania-900">
      <div className="container flex flex-row gap-2 px-4 mx-auto">
        <div className="inline-flex items-center justify-center w-10 h-10 text-lg text-white bg-indigo-500 rounded">
          <Logo />
        </div>
        <Dropdown />
        <nav className="hidden md:inline-flex">
          <ul className="inline-flex flex-row">
            <li className="inline-flex items-center text-indigo-200">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-white">
                Home
              </Link>
            </li>
            <li className="inline-flex items-center text-white">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-white">
                Invoices
                <span className="inline-flex px-3 py-2 text-sm text-white bg-blue-600 rounded">
                  4
                </span>
              </Link>
            </li>
            <li className="inline-flex items-center text-indigo-200">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-white">
                Vendors
              </Link>
            </li>
            <li className="inline-flex items-center text-indigo-200">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-white">
                Insights
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="inline-flex ml-auto">
          <ul className="inline-flex flex-row">
            <li className="items-center hidden text-indigo-200 md:inline-flex">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-white">
                <BsSliders />
              </Link>
            </li>
            <li className="items-center hidden text-indigo-200 md:inline-flex">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-white">
                Logs
              </Link>
            </li>
            <li className="items-center hidden text-indigo-200 md:inline-flex">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-white">
                Liquidity
              </Link>
            </li>
            <li className="items-center hidden text-indigo-200 md:inline-flex">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-white">
                Policies
              </Link>
            </li>
            <li className="inline-flex items-center">
              <Link
                href=""
                className="inline-flex items-center object-contain w-10 h-10 overflow-hidden rounded">
                <img src="/images/user.png" alt="user" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    {/* 
      S U B  H E A D E R
    */}
    <header className="block w-full py-5 overflow-x-scroll bg-white shadow-md">
      <div className="container flex flex-row gap-2 px-4 mx-auto">
        <nav className="inline-flex">
          <ul className="inline-flex flex-row">
            <li className="inline-flex items-center text-slate-500">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-slate-900">
                Inbox
              </Link>
            </li>
            <li className="inline-flex items-center text-slate-500">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-slate-900">
                Approving
                <span className="inline-flex px-3 py-2 text-sm text-white bg-blue-600 rounded">
                  4
                </span>
              </Link>
            </li>
            <li className="inline-flex items-center text-slate-500">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-slate-900">
                Scheduled
              </Link>
            </li>
            <li className="inline-flex items-center text-slate-500">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-slate-900">
                Processing
                <span className="inline-flex px-3 py-2 text-sm text-white bg-blue-600 rounded">
                  2
                </span>
              </Link>
            </li>
            <li className="inline-flex items-center text-slate-500">
              <Link
                href=""
                className="inline-flex items-center h-full gap-1 px-4 bg-transparent rounded hover:text-slate-900">
                Paid
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
)
