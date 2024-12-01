import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#8E2A4A] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">StarkDate</h3>
              <p>Where Connections Spark Securely</p>
            </div>
            
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#D14E70]">About Us</a></li>
                <li><a href="#" className="hover:text-[#D14E70]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#D14E70]">Terms of Service</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#D14E70]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#D14E70]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 0c-2.462 0-3.71.014-5.01.065-1.303.048-2.38.219-3.178.48a6.86 6.86 0 00-2.573 1.692A6.86 6.86 0 001.48 6.97c-.261.798-.432 1.875-.48 3.178-.051 1.3-.065 2.548-.065 5.01s.014 3.71.065 5.01c.048 1.303.219 2.38.48 3.178a6.86 6.86 0 001.692 2.573A6.86 6.86 0 004.97 22.52c.798.261 1.875.432 3.178.48 1.3.051 2.548.065 5.01.065s3.71-.014 5.01-.065c1.303-.048 2.38-.219 3.178-.48a6.86 6.86 0 002.573-1.692A6.86 6.86 0 0022.52 17.03c.261-.798.432-1.875.48-3.178.051-1.3.065-2.548.065-5.01s-.014-3.71-.065-5.01c-.048-1.303-.219-2.38-.48-3.178a6.86 6.86 0 00-1.692-2.573A6.86 6.86 0 0017.03 1.48c-.798-.261-1.875-.432-3.178-.48C15.71.014 14.462 0 12 0z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer