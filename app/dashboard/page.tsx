import React from "react";
import Image from "next/image";

export default function Page() {
  const images = [
    "https://photoshulk.com/wp-content/uploads/aesthetic-pfp-emo.jpg",
    "https://photoshulk.com/wp-content/uploads/emu-otori-cute-pfp-3.jpg",
    "https://i.pinimg.com/736x/c9/5d/10/c95d10759d0b2c3170526eeee3155b64.jpg",
    "https://photoshulk.com/wp-content/uploads/gojo-pfp-cat-2.jpg",
    "https://photoshulk.com/wp-content/uploads/best-meme-pfp-for-school.jpg",
    "https://avatars.githubusercontent.com/u/87312278",
    "https://avatars.githubusercontent.com/u/8079861",
    "https://i.pinimg.com/236x/85/74/e8/8574e88ff1c57bf62b6a9b0c76ec1d93.jpg",
    "https://photoshulk.com/wp-content/uploads/aesthetic-pfp-emo.jpg",
    "https://photoshulk.com/wp-content/uploads/emu-otori-cute-pfp-3.jpg",
    "https://i.pinimg.com/736x/c9/5d/10/c95d10759d0b2c3170526eeee3155b64.jpg",
    "https://photoshulk.com/wp-content/uploads/gojo-pfp-cat-2.jpg",
    "https://photoshulk.com/wp-content/uploads/best-meme-pfp-for-school.jpg",
    "https://avatars.githubusercontent.com/u/87312278",
    "https://avatars.githubusercontent.com/u/8079861",
    "https://i.pinimg.com/236x/85/74/e8/8574e88ff1c57bf62b6a9b0c76ec1d93.jpg",
    "https://photoshulk.com/wp-content/uploads/aesthetic-pfp-emo.jpg",
    "https://photoshulk.com/wp-content/uploads/emu-otori-cute-pfp-3.jpg",
    "https://i.pinimg.com/736x/c9/5d/10/c95d10759d0b2c3170526eeee3155b64.jpg",
    "https://photoshulk.com/wp-content/uploads/gojo-pfp-cat-2.jpg",
    "https://photoshulk.com/wp-content/uploads/best-meme-pfp-for-school.jpg",
    "https://avatars.githubusercontent.com/u/87312278",
    "https://avatars.githubusercontent.com/u/8079861",
    "https://i.pinimg.com/236x/85/74/e8/8574e88ff1c57bf62b6a9b0c76ec1d93.jpg",
    "https://photoshulk.com/wp-content/uploads/aesthetic-pfp-emo.jpg",
    "https://photoshulk.com/wp-content/uploads/emu-otori-cute-pfp-3.jpg",
    "https://i.pinimg.com/736x/c9/5d/10/c95d10759d0b2c3170526eeee3155b64.jpg",
    "https://photoshulk.com/wp-content/uploads/gojo-pfp-cat-2.jpg",
    "https://photoshulk.com/wp-content/uploads/best-meme-pfp-for-school.jpg",
    "https://avatars.githubusercontent.com/u/87312278",
    "https://avatars.githubusercontent.com/u/8079861",
    "https://i.pinimg.com/236x/85/74/e8/8574e88ff1c57bf62b6a9b0c76ec1d93.jpg",
    "https://photoshulk.com/wp-content/uploads/aesthetic-pfp-emo.jpg",
    "https://photoshulk.com/wp-content/uploads/emu-otori-cute-pfp-3.jpg",
    "https://i.pinimg.com/736x/c9/5d/10/c95d10759d0b2c3170526eeee3155b64.jpg",
    "https://photoshulk.com/wp-content/uploads/gojo-pfp-cat-2.jpg",
    "https://photoshulk.com/wp-content/uploads/best-meme-pfp-for-school.jpg",
    "https://avatars.githubusercontent.com/u/87312278",
    "https://avatars.githubusercontent.com/u/8079861",
    "https://i.pinimg.com/236x/85/74/e8/8574e88ff1c57bf62b6a9b0c76ec1d93.jpg",
  ];

  return (
    <div className="flex min-h-screen">
      <main className="flex-grow p-2 mr-72">
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Profile Picture ${index + 1}`}
                  width={200}
                  height={200}
                  className="rounded-lg transition-transform duration-200 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}