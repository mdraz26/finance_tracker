import React, { useState } from "react";

const App = () => {

  const [balance,setBalance] = useState(2000)

  const [description,setDescription] = useState("")
  const [amount,setAmount] = useState("")
  const [type,setType] = useState("expense")

  const handleSubmit = () => {
    if(description && amount) {
      const numAmount = parseFloat(amount)
      if(type === "income") {
        setBalance(balance + numAmount)
      } else {
        setBalance(balance - numAmount)
      }

      setDescription("")
      setAmount("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Personal Finance trakcer
        </h1>
        <p className="text-gray-600">
          Take control of your finances
        </p>

        <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
          <h2 className="text-lg font-medium text-gray-700 mb-2">
            Current balance
          </h2>
          <p className="text-3xl font-bold text-green-600">
            ${balance}
                    </p>
        </div>
        {/*Action Buttons*/}
          <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Quick actions
            </h3>
            <div className="flex gap-4">
              <button
                onClick={() => setBalance(balance+100)}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Add $100
              </button>
              <button
                onClick={() => setBalance(balance-50)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Subtract $50
              </button>
              <button 
                onClick={() => setBalance(0)}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Reset
              </button>
            </div>
          </div>
          {/*Transaction form*/}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-medium text-gray-700 mb-4">
              Add transaction
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <input
                  type="text"
                  placeholder="Enter description..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-3"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
              >
                <option value="income"> Income (+)</option>
                <option value="expense"> Expense (-)</option>
              </select>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 font-medium"
            >
              Submit
            </button>

          </div>

      </div>
    </div>
  )
}

export default App
