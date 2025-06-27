
import React from 'react';

const InputField: React.FC<{ label: string; type: string; placeholder: string; name: string; as?: 'input' | 'textarea' | 'select' }> = ({ label, type, placeholder, name, as = 'input' }) => {
    const commonClasses = "w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b29a68] transition-shadow";
    
    if (as === 'textarea') {
        return (
            <div>
                <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
                <textarea id={name} name={name} placeholder={placeholder} rows={4} className={commonClasses}></textarea>
            </div>
        );
    }

    if (as === 'select') {
        return (
             <div>
                <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
                <select id={name} name={name} className={commonClasses}>
                    <option>Sales Enquiry</option>
                    <option>General Information</option>
                    <option>Investment Opportunity</option>
                </select>
            </div>
        )
    }

    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
            <input type={type} id={name} name={name} placeholder={placeholder} className={commonClasses} />
        </div>
    );
};

const Register: React.FC<{ projectName: string }> = ({ projectName }) => {
    
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    alert(`Thank you for your interest in ${projectName}! We will be in touch shortly.`);
  }

  return (
    <section id="register" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-white">Register Your Interest</h2>
        <p className="text-lg text-gray-400 mt-2 mb-12">Be the first to receive exclusive updates and offers on {projectName}.</p>

        <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl shadow-2xl space-y-6 text-left">
          <InputField label="Full Name" type="text" placeholder="John Doe" name="fullName" />
          <InputField label="Email Address" type="email" placeholder="you@example.com" name="email" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="md:col-span-1">
                 <label htmlFor="countryCode" className="block text-sm font-medium text-gray-300 mb-2">Code</label>
                 <select id="countryCode" name="countryCode" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#b29a68] transition-shadow">
                    <option>+971</option>
                    <option>+1</option>
                    <option>+44</option>
                 </select>
             </div>
             <div className="md:col-span-2">
                 <InputField label="Phone Number" type="tel" placeholder="50 123 4567" name="phone" />
             </div>
          </div>

          <InputField label="Enquiry Type" type="" placeholder="" name="enquiryType" as="select" />
          <InputField label="Message (Optional)" type="" placeholder={`I'm interested in ${projectName}...`} name="message" as="textarea" />

          <div className="space-y-4">
              <div className="flex items-start">
                  <input id="consent" name="consent" type="checkbox" className="h-4 w-4 mt-1 rounded border-gray-600 bg-gray-800 text-[#b29a68] focus:ring-[#b29a68]" />
                  <div className="ml-3 text-sm">
                      <label htmlFor="consent" className="text-gray-300">I consent to receive marketing communications from Reportage Properties.</label>
                  </div>
              </div>
              <p className="text-xs text-gray-500">
                  By submitting this form, you agree to our <a href="#" className="text-[#b29a68] hover:underline">Privacy Policy</a> and <a href="#" className="text-[#b29a68] hover:underline">Cookie Policy</a>.
              </p>
          </div>

          <button type="submit" className="w-full bg-[#b29a68] text-black font-bold py-4 rounded-lg text-lg hover:bg-[#cbb982] transition-colors duration-300 shadow-lg">
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;