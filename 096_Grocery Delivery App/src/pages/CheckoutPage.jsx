import { useState } from 'react'
import { CreditCard, Wallet, Truck } from 'lucide-react'

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [deliveryTime, setDeliveryTime] = useState('asap')

  const orderSummary = {
    subtotal: 42.97,
    deliveryFee: 5.99,
    discount: 8.59,
    total: 40.37
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Forms */}
        <div className="lg:col-span-2 space-y-8">
          {/* Delivery Address */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Truck className="mr-2" size={24} />
              Delivery Address
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Address</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="123 Main St, Apt 4B"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="New York"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">ZIP Code</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="10001"
                />
              </div>
            </div>
          </div>

          {/* Delivery Time */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Delivery Time</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { id: 'asap', label: 'ASAP', time: '30-45 min' },
                { id: '1hour', label: '1 Hour', time: '1 hour' },
                { id: '2hours', label: '2 Hours', time: '2 hours' }
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => setDeliveryTime(option.id)}
                  className={`p-4 border rounded-lg text-left transition-all ${
                    deliveryTime === option.id
                      ? 'border-green-500 bg-green-50 ring-2 ring-green-200'
                      : 'hover:border-green-300'
                  }`}
                >
                  <div className="font-semibold">{option.label}</div>
                  <div className="text-sm text-gray-600">{option.time}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="space-y-4">
              {[
                { id: 'card', icon: CreditCard, label: 'Credit/Debit Card' },
                { id: 'wallet', icon: Wallet, label: 'Digital Wallet' },
                { id: 'cod', label: 'Cash on Delivery' }
              ].map((method) => (
                <div key={method.id} className="flex items-center">
                  <input
                    type="radio"
                    id={method.id}
                    name="payment"
                    checked={paymentMethod === method.id}
                    onChange={() => setPaymentMethod(method.id)}
                    className="h-5 w-5 text-green-500"
                  />
                  <label htmlFor={method.id} className="ml-3 flex items-center cursor-pointer">
                    {method.icon && <method.icon className="mr-2" size={20} />}
                    <span className="font-medium">{method.label}</span>
                  </label>
                </div>
              ))}
            </div>

            {paymentMethod === 'card' && (
              <div className="mt-6 p-4 border rounded-lg bg-gray-50">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Card Number</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">CVV</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${orderSummary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span>${orderSummary.deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Discount (20%)</span>
                <span>-${orderSummary.discount.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-green-600">${orderSummary.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold text-lg">
              Place Order
            </button>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700">
                ✓ Your order will be delivered within 30-45 minutes
              </p>
              <p className="text-sm text-green-700 mt-2">
                ✓ Free returns within 24 hours if unsatisfied
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage