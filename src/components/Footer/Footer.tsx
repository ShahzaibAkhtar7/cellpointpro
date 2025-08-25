import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 text-slate-700 py-12 px-4 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Side - Branding */}
          <div className="flex flex-col space-y-3">
            <h1 className="text-2xl font-bold font-sans">
              <span className="text-slate-800">CellPoint</span>
              <span className="text-orange-500">Pro</span>
            </h1>
            <p className="text-sm text-slate-600 font-sans">Your next repair shop software</p>
          </div>

          {/* Center - Support Contact */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 font-sans">Get Support</h3>
            <div className="space-y-3">
              <a
                href="mailto:support@cellpointpro.com"
                className="flex items-center space-x-3 text-slate-600 hover:text-orange-500 transition-colors group"
              >
                <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                  <Mail className="h-4 w-4 text-orange-600" />
                </div>
                <span className="font-sans">support@cellpointpro.com</span>
              </a>
              <a
                href="tel:+1-800-CELLPRO"
                className="flex items-center space-x-3 text-slate-600 hover:text-blue-600 transition-colors group"
              >
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Phone className="h-4 w-4 text-blue-600" />
                </div>
                <span className="font-sans">+1 (800) CELL-PRO</span>
              </a>
            </div>
          </div>

          {/* Right Side - Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 font-sans">Legal</h3>
            <div className="flex flex-col space-y-2 text-sm">
              <a href="FooterPage/TermOfService/TermOfService" className="text-slate-600 hover:text-orange-500 transition-colors font-sans">
                Terms of Service
              </a>
              <a href="FooterPage/DataPolicy/DataPolicy" className="text-slate-600 hover:text-orange-500 transition-colors font-sans">
                Data Policy
              </a>
              <a href="FooterPage/PrivacyPolicy/PrivacyPolicy" className="text-slate-600 hover:text-orange-500 transition-colors font-sans">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
            <p className="text-sm text-slate-500 font-sans">© 2025 CellPointPro. All rights reserved.</p>
            <p className="text-sm text-slate-500 font-sans">Sell like a pro</p>
          </div>
        </div>
      </div>
    </div>
  )
}
