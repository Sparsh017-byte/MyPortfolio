import api from "../api/api.js";
import { useState } from "react";
import { toast,Zoom } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post("/messages", form);
      sendToast();
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong ❌");
    } finally {
      setLoading(false);
    }
  };

  const sendToast = () => {
    toast.success('Message Sent ✅', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
    });
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        Contact Me
      </h2>

      {/* Full width container */}
      <div className="px-6 max-w-7xl mx-auto">
        <div
          className="
            bg-white rounded-2xl shadow-md
            p-8 md:p-12
            transition-all duration-300
            hover:shadow-2xl
          "
        >
          <form onSubmit={submitHandler} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="
                  w-full px-4 py-3 rounded-xl
                  border border-gray-300
                  focus:ring-2 focus:ring-blue-500
                  focus:outline-none
                "
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="
                  w-full px-4 py-3 rounded-xl
                  border border-gray-300
                  focus:ring-2 focus:ring-blue-500
                  focus:outline-none
                "
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows="6"
                required
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="
                  w-full px-4 py-3 rounded-xl
                  border border-gray-300
                  focus:ring-2 focus:ring-blue-500
                  focus:outline-none
                  resize-none
                "
                placeholder="Write your message..."
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full md:w-auto
                px-8 py-3 rounded-xl
                bg-blue-600 text-white font-semibold
                transition-all duration-300 cursor-pointer
                hover:bg-blue-700
                disabled:opacity-60
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
