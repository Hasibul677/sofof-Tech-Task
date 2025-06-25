import { Link, useLocation } from 'react-router-dom'
import {
  HomeIcon,
  ShoppingCartIcon,
  ClipboardDocumentIcon,
  VideoCameraIcon,
  UserIcon
} from '@heroicons/react/24/outline'

export default function BottomNavigation() {
  const location = useLocation()

  const tabs = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'Cart', path: '/cart', icon: ShoppingCartIcon },
    { name: 'Orders', path: '/orders', icon: ClipboardDocumentIcon },
    { name: 'Media', path: '/media', icon: VideoCameraIcon },
    { name: 'Profile', path: '/profile', icon: UserIcon },
  ]

  return (
      <div className="fixed bottom-5 left-0 right-0">
        <div >
          <div className="flex justify-around items-center max-w-md mx-auto shadow-md rounded-full">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = location.pathname === tab.path

              return (
                <Link
                  key={tab.name}
                  to={tab.path}
                  className={`flex flex-col items-center justify-center w-full py-3 ${isActive ? 'text-blue-500' : 'text-gray-500'}`}
                >
                  <Icon className="h-6 w-6" />
                </Link>
              )
            })}
          </div>
          <div className="flex justify-around items-center max-w-md mx-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = location.pathname === tab.path

              return (
                <Link
                  key={tab.name}
                  to={tab.path}
                  className={`flex flex-col items-center justify-center w-full ${isActive ? 'text-blue-500' : 'text-gray-500'}`}
                >
                  <span className="text-xs mt-1">{tab.name}</span>

                </Link>
              )
            })}
          </div>
        </div>
      </div>

  )
}