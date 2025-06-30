import { Link } from "react-router";
import { motion } from "framer-motion";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-300 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="btn btn-primary px-6 py-2 text-white font-semibold rounded-lg hover:bg-primary-focus transition"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
