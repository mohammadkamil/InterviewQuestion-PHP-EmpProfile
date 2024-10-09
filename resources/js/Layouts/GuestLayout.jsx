import ApplicationLogo from '@/Components/ApplicationLogo';
import NavBar from '@/Components/NavBar'; // Correct naming
import { Link, Head } from '@inertiajs/react';

export default function Guest({ children, title }) { // Accept title as a prop
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Head title={title} /> {/* Set the title using the prop */}

            {/* NavBar at the top */}
            <NavBar />

            {/* Main content container with margin-top to avoid overlap */}
            <div className="flex justify-center mt-16 mb-5 sm:mt-20">
                <div className="w-11/12 bg-white px-6 py-4 shadow-md sm:rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
}
