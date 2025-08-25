"use client"

import { useState } from "react"
import { CheckCircleIcon } from "@heroicons/react/24/solid"

export default function Plans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-slate-800 font-sans">Simple pricing for everyone</h2>
        <p className="text-slate-600 mt-4 text-lg font-medium">
          Scalable solutions tailored for businesses big and small.
        </p>

        {/* Toggle */}
        <div className="mt-8 inline-flex items-center rounded-xl border-2 border-slate-200 overflow-hidden bg-white shadow-sm">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-6 py-3 text-sm font-semibold transition-all duration-200 ${
              billingCycle === "monthly"
                ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-md"
                : "bg-white text-slate-600 hover:text-slate-800"
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-6 py-3 text-sm font-semibold transition-all duration-200 ${
              billingCycle === "annual"
                ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white shadow-md"
                : "bg-white text-slate-600 hover:text-slate-800"
            }`}
          >
            Annual Billing
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Starter */}
          <div className="flex flex-col border-2 border-slate-200 rounded-2xl shadow-lg p-8 text-left hover:shadow-xl hover:border-slate-300 transition-all duration-300 bg-white">
            <h3 className="text-xl font-bold text-slate-800">Starter</h3>
            <p className="text-sm text-slate-600 mt-2 font-medium">Good for owner-operators and solo shops.</p>
            <p className="mt-6 text-4xl font-bold text-slate-800">Free</p>
            <ul className="mt-8 space-y-4 text-sm text-slate-700 flex-grow">
              {[
                "Check-ins",
                "Ticket Boards",
                "Custom Form Builder",
                "Basic Reporting",
                "Time Clock Features",
                "Basic Inventory Management",
                "Store Account Only",
                "Support Email",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full border-2 border-slate-300 rounded-xl py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200">
              Learn More
            </button>
          </div>

          {/* Pro */}
          <div className="flex flex-col bg-gradient-to-br from-orange-400 to-orange-500 text-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                Most Popular
              </span>
            </div>
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="text-sm text-orange-100 mt-2 font-medium">
              Ideal for growing businesses needing more tools to scale.
            </p>
            <p className="mt-4 text-sm text-orange-100">Starting as low as</p>
            <p className="text-4xl font-bold">{billingCycle === "monthly" ? "$59.99/mo" : "$29.99/mo"}</p>
            <ul className="mt-8 space-y-4 text-sm flex-grow">
              {[
                "Everything in Starter plus:",
                "CellPointPro Shifts",
                "My Chats",
                "Customizable Ticket Boards",
                "Customizable Staff Access",
                "Advanced Metrics & KPIs",
                "Advanced Employee Management",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button className="w-full bg-white text-orange-500 rounded-xl py-3 text-sm font-bold hover:bg-orange-50 transition-all duration-200 shadow-md">
                Learn More
              </button>
            </div>
          </div>

          {/* Franchise */}
          <div className="flex flex-col border-2 border-slate-200 rounded-2xl shadow-lg p-8 text-left hover:shadow-xl hover:border-slate-300 transition-all duration-300 bg-white">
            <h3 className="text-xl font-bold text-slate-800">Franchise</h3>
            <p className="text-sm text-slate-600 mt-2 font-medium">Contact us for custom quotes and features.</p>
            <p className="mt-6 text-3xl font-bold text-slate-800">Custom Quote</p>
            <ul className="mt-8 space-y-4 text-sm text-slate-700 flex-grow">
              {[
                "Everything in Pro plus:",
                "More Advanced Roles",
                "Customizable Metrics & KPIs",
                "Internal Learning Management System",
                "Additional Revenue Tools",
                "Dedicated Account Managers",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 w-full border-2 border-slate-300 rounded-xl py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
