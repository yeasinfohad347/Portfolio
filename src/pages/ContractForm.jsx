import { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: null }));
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(formErrors);
      setSuccess(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
              Whether you want to collaborate, ask a question, or just say hello — feel free to connect. I’d love to hear from you.
            </p>

            <div className="space-y-5 max-w-md mx-auto lg:mx-0 text-gray-800 dark:text-gray-200">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary text-xl" />
                <a
                  href="mailto:yeasinforhad.dev@gmail.com"
                  className="hover:underline"
                >
                  yeasinforhad.dev@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-primary text-xl" />
                <a
                  href="https://wa.me/8801612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  +880 1612-345678 (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FaLinkedin className="text-primary text-xl" />
                <a
                  href="https://www.linkedin.com/in/yeasinfohad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/yeasinfohad
                </a>
              </div>

              <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-400">
                <FaMapMarkerAlt className="text-primary text-lg" />
                <span>Comilla, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl p-10 w-full">
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-primary"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-primary"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`w-full px-4 py-3 border rounded-md resize-none focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:ring-primary"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md font-semibold hover:bg-primary-focus transition"
              >
                Send Message
              </button>

              {success && (
                <p className="mt-4 text-green-600 dark:text-green-400 font-semibold text-center">
                  Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
