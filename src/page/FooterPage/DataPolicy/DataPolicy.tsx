

export default function DataPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#264160] mb-4">Data Policy</h1>
        </div>

        {/* Introduction */}
        <div className="bg-gray-50 border-l-4 border-[#4D53ED] p-4 sm:p-6 mb-8 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed">
            As part of our commitment to your privacy and data security, we offer you the option to delete your personal
            data from our systems. This page guides you through the process of requesting the deletion of your data.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 sm:space-y-12">
          {/* What Does Data Deletion Mean? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#264160] mb-4 sm:mb-6">
              What Does Data Deletion Mean?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you request to delete your data, CellPointPro will remove all personal information associated with
              your account. This includes your account details, usage data, and any other data we have collected as part
              of our service. Please note that this process is irreversible.
            </p>
          </section>

          {/* How to Request Data Deletion */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#264160] mb-4 sm:mb-6">
              How to Request Data Deletion
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you need to request account deletion, please contact our support team at{" "}
              <a
                href="mailto:support@cellpointpro.com"
                className="text-[#4D53ED] hover:text-[#FFB34F] transition-colors duration-200 underline"
              >
                support@cellpointpro.com
              </a>
              .
            </p>
          </section>

          {/* What Happens Next? */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#264160] mb-4 sm:mb-6">What Happens Next?</h2>
            <p className="text-gray-700 leading-relaxed">
              Once you submit your request, our team will process it within 30 days. We will send you an email
              confirmation once your data has been successfully deleted.
            </p>
          </section>

          {/* Please Note */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#264160] mb-4 sm:mb-6">Please Note</h2>
            <p className="text-gray-700 leading-relaxed">
              Deleting your data will result in the deactivation of your CellPointPro account and you will no longer be
              able to access our services.
            </p>
          </section>

          {/* Privacy Policy */}
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#264160] mb-4 sm:mb-6">Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              For more detailed information on how we handle user data, please read our{" "}
              <a
                href="/FooterPage/PrivacyPolicy/PrivacyPolicy"
                className="text-[#4D53ED] hover:text-[#FFB34F] transition-colors duration-200 underline"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>

        {/* Footer Message */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm sm:text-base leading-relaxed">
            Thank you for being a valued user of CellPointPro. We respect your privacy and data rights.
          </p>
        </div>
      </div>
    </div>
  )
}
