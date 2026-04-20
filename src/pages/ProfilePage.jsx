import { useAuth } from "../context/auth-context";
import Header from "../components/header";
import Footer from "../components/footer";
import WarningBanner from "../components/WarningBanner";

const ProfilePage = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <WarningBanner />
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-10 bg-white border border-gray-200 rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Your Profile
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="py-4 border-b border-gray-200">
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-lg font-medium text-gray-900">{user?.name || "N/A"}</p>
              </div>
              <div className="py-4">
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="text-lg font-medium text-gray-900">{user?.email}</p>
              </div>
            </div>

            <div>
              <button
                onClick={logout}
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
