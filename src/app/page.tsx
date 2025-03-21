import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            NFT Portfolio Analyzer
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Track and analyze your NFT portfolio value in real-time
          </p>
          
          {/* Placeholder for WalletInput component */}
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            <input
              type="text"
              placeholder="Enter your wallet address"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
              Analyze Portfolio
            </button>
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Real-time Valuation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get instant updates on your NFT portfolio value
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Multi-Chain Support
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track NFTs across different blockchain networks
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                Detailed Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                View comprehensive stats and trends for your NFTs
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
