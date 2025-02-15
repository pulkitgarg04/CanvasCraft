import Image from 'next/image';

interface UserImage {
  url: string;
}

const Profile = ({ userImages = [] }: { userImages: UserImage[] }) => {
  return (
    <div className="ml-64 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative w-20 h-20 rounded-full overflow-hidden">
              <Image 
                src="/api/placeholder/80/80"
                alt="Profile"
                className="object-cover"
                width={80}
                height={80}
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-600">john.doe@example.com</p>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4">My Uploads</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {userImages.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={image.url || "/api/placeholder/300/300"}
                    alt={`Upload ${index + 1}`}
                    className="object-cover"
                    width={300}
                    height={300}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile