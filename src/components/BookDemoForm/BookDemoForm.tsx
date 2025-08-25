
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BookDemoForm({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 sm:p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#264160] hover:text-[#4D53ED] text-lg"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-[#264160] mb-6 text-center">
          Book a Demo
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#264160] mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-[#264160]/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4D53ED]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#264160] mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-[#264160]/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4D53ED]"
            />
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-[#264160] mb-1">
              Service Interested In
            </label>
            <select
              className="w-full border border-[#264160]/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4D53ED]"
            >
              <option value="">Select a service</option>
              <option value="cellphone">Cellphone Repair</option>
              <option value="computer">Computer Repair</option>
              <option value="wireless">Prepaid Wireless</option>
              <option value="inventory">Inventory Management</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-[#264160] mb-1">
              Message
            </label>
            <textarea
              placeholder="Tell us about your needs..."
              className="w-full border border-[#264160]/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4D53ED] min-h-[100px]"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-[#264160] text-white hover:bg-[#4D53ED] transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#FFB34F] to-[#FFB34F] text-white font-semibold shadow-lg hover:from-[#4D53ED] hover:to-[#4D53ED] transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
