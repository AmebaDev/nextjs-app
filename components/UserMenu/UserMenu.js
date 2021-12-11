import {
    MenuIcon,
    UserCircleIcon
} from "@heroicons/react/solid"

function UserMenu() {
    return (
        <div className="flex items-center space-x-4 border-2 p-2 rounded-full">
            <MenuIcon className='h-8' />
            <UserCircleIcon  className='h-8' />
            </div>
    )
}

export default UserMenu


