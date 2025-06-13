'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CardPaymentPage = () => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isLoading] = useState(false);
  
  const router = useRouter();

  return (
    <div className="flex h-screen bg-white text-black">
      {/* Left side with the background image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image 
          src="/general-background.svg" 
          alt="Event Background" 
          fill 
          style={{objectFit: 'cover'}}
          priority
        />
      </div>

      {/* Right side with the payment form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#F94F4F] rounded-full flex items-center justify-center">
              <span className="text-white text-3xl font-bold">M</span>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center mb-6">Pay With Card</h1>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="cardholderName" className="block text-sm font-medium mb-1">
                Cardholder Name
              </label>
              <input
                id="cardholderName"
                type="text"
                placeholder="Enter Cardholder Name"
                className="w-full p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-200"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">
                Card Number
              </label>
              <input
                id="cardNumber"
                type="text"
                placeholder="Enter Card Number"
                className="w-full p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-200"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="expiryDate" className="block text-sm font-medium mb-1">
                  Expiry Date
                </label>
                <input
                  id="expiryDate"
                  type="text"
                  placeholder="MM/YY"
                  className="w-full p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-200"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  required
                />
              </div>
              
              <div className="w-1/2">
                <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                  CVV
                </label>
                <input
                  id="cvv"
                  type="text"
                  placeholder="CVV"
                  className="w-full p-3 bg-gray-50 text-gray-800 rounded-md border border-gray-200"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </div>
            
            <button 
              type="button"
              className="w-full p-3 mt-6 bg-[#F94F4F] text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              onClick={() => router.push("/order-details")}
              disabled={isLoading}
            >
              {isLoading ? 'PROCESSING...' : 'NEXT'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardPaymentPage;