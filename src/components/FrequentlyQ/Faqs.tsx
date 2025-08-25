export default function Faqs() {
  return (
    <div className="px-4 md:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 text-slate-800 rounded-xl shadow-lg px-6 py-10 md:px-12 lg:px-16 max-w-7xl mx-auto font-sans">
        <h2 className="text-3xl font-bold mb-2 text-slate-900 font-sans">Frequently Asked Questions</h2>
        <p className="mb-8 text-slate-600 font-sans">
          If you can't find what you're looking for, email our support team at{" "}
          <a
            href="mailto:support@cellpointpro.com"
            className="text-blue-600 hover:text-orange-500 hover:underline transition-colors duration-200 font-medium"
          >
            support@cellpointpro.com
          </a>
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Item 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-orange-500 font-semibold mb-3 text-lg font-sans">Why CellPointPro?</h3>
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              Developed by industry veterans, CellPointPro tackles the challenges inherent in repair businesses,
              offering innovative solutions for optimization and simplified management. We design our software to help
              increase sales, not more data entry.
            </p>
          </div>

          {/* Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-orange-500 font-semibold mb-3 text-lg font-sans">
              How can I sign up for insurance claim programs to get insurance and enterprise claims?
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              First you need to be a Pro customer. Contact us at support@cellpointpro.com and we can help you start!
            </p>
          </div>

          {/* Item 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-orange-500 font-semibold mb-3 text-lg font-sans">What ticketing system do you use?</h3>
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              We have reimagined the ticketing system by using a more efficient board model so you can easily track your
              tickets and know where they are at all times. Plus, it is much faster!
            </p>
          </div>

          {/* Item 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-orange-500 font-semibold mb-3 text-lg font-sans">
              How long does it take to setup CellPointPro?
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              Getting set up is super quick! With our easy registration process you can get set up and selling in
              minutes!
            </p>
          </div>

          {/* Item 5 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-orange-500 font-semibold mb-3 text-lg font-sans">
              What cards can I accept with CellPointPro?
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              Our non-integrated and integrated card options allow you to be able to use your own processor or an
              integrated option to take all types of payments.
            </p>
          </div>

          {/* Item 6 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-orange-500 font-semibold mb-3 text-lg font-sans">Do you have inventory solutions?</h3>
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              We do! Our inventory system is designed to help you keep track of your inventory and we integrate with
              some of the most popular suppliers in the industry to make it really easy to make and manage purchase
              orders.
            </p>
          </div>

          {/* Item 7 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-orange-500 font-semibold mb-3 text-lg font-sans">
              Can I manage my employees in the app?
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-sans">
              Yes! You can manage and add employees directly in the app. You can also keep track on them with clock in
              and clock out features.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
