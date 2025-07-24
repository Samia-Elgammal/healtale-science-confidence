export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-purple-100 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-rose-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs">H</span>
            </div>
            <span className="font-bold text-lg text-gray-800">HealTale</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-2">
            Where Science Heals Confidence
          </p>
          
          <p className="text-gray-500 text-xs">
            Empowering young girls through science-backed awareness and emotional storytelling
          </p>
          
          <div className="mt-6 pt-4 border-t border-purple-100">
            <p className="text-gray-400 text-xs">
              © 2024 HealTale. Built with science, awareness, and choice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
