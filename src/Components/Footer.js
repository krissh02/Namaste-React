import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center bg-black text-white py-10'>
        <div className='flex p-4'>
            <div className='mx-10'>
                <h1 className='text-2xl font-bold'>Company</h1>
                <p className='text-lg text-gray-300 py-2'>About</p>
                <p className='text-lg text-gray-300 py-2'>Careers</p>
                <p className='text-lg text-gray-300 py-2'>Team</p>
                <p className='text-lg text-gray-300 py-2'>Swiggy One</p>
                <p className='text-lg text-gray-300 py-2'>Swiggy Instamart</p>
                <p className='text-lg text-gray-300 py-2'>Swiggy Genie</p>
            </div>

            <div className='mx-10'>
                <h1 className='text-2xl font-bold'>Contact Us</h1>
                <p className='text-lg text-gray-300 py-2'>Help & Support</p>
                <p className='text-lg text-gray-300 py-2'>Partner with us</p>
                <p className='text-lg text-gray-300 py-2'>Ride with us</p>
            </div>

            <div className='mx-10'>
                <h1 className='text-2xl font-bold'>Legal</h1>
                <p className='text-lg text-gray-300 py-2'>Terms & Conditions</p>
                <p className='text-lg text-gray-300 py-2'>Cookie Policy</p>
                <p className='text-lg text-gray-300 py-2'>Privacy Policy</p>
            </div>

            <div className='mx-10'>
                <h1 className='text-2xl font-bold'>We deliver to:</h1>
                <p className='text-lg text-gray-300 py-2'>Mumbai</p>
                <p className='text-lg text-gray-300 py-2'>Pune</p>
                <p className='text-lg text-gray-300 py-2'>Delhi</p>
                <p className='text-lg text-gray-300 py-2'>Gurgoan</p>
                <p className='text-lg text-gray-300 py-2'>Banglore</p>
            </div>

        </div>
    </div>
  )
}

export default Footer