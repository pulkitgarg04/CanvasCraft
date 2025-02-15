const Sidebar = () => {
  return (
    <div className="flex flex-col min-h-screen w-72 fixed left-0 top-0 bg-gray-200">
        <h2>CanvasCraft</h2>
        <button>Profile</button>
        <ul>
            <li>Feed</li>
            <li>Friends</li>
            <li>Leaderboard</li>
            <li>Categories</li>
        </ul>

        <div>
            <ul>
                <li>Settings</li>
            </ul>
        </div>
    </div>
  );
};

export default Sidebar;