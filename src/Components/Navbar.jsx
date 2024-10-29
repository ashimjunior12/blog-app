import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { IoIosMenu } from 'react-icons/io';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <nav className='h-20 bg-black text-white px-14 pt-6'>
        <div className='flex justify-between'>
          <section className='flex'>
            <img src={logo} alt='' className='w-9 h-9' />
            <h3 className='hidden sm:flex font-bold mt-0 flex justify-self-end items-center'>
              ango
            </h3>
          </section>

          <section className='relative sm:flex flex-col sm:flex-row gap-4'>
            <IoIosMenu
              className='sm:hidden w-9 h-9 cursor-pointer'
              onClick={() => setOpenMenu(!openMenu)}
            />

            {openMenu && (
              <div className='absolute  right-0 top-full bg-black p-4 flex flex-col items-center w-max '>
                <Button className='w-full border-none mb-2'>
                  Submit a request
                </Button>
                <Button className='w-full border bg-black sm:bg-blue-700 border-none'>
                  Sign in
                </Button>
              </div>
            )}

            <div className='hidden sm:flex sm:gap-4'>
              <Button className='border-none border'>Submit a request</Button>
              <Button className='border bg-black sm:bg-blue-700 border-none'>
                Sign in
              </Button>
            </div>
          </section>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
