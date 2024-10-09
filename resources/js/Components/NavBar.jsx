import { Link } from '@inertiajs/react';

export default function Navbar() {
    return (
        <nav className="w-full bg-gray-800 p-4 fixed top-0 left-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl">
                    <Link href="/">MyApp</Link>
                </div>
                <div>
                    <Link href="/employees/list" className="text-white px-4">Employees</Link>
                    {/* <Link href="/department/list" className="text-white px-4">Department</Link> */}
                </div>
            </div>
        </nav>
    );
}
