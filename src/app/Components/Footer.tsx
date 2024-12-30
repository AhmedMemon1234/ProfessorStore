import { FaDiscord, FaYoutube } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-black">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            <img
              src="https://mcqmate.com/public/images/logos/60x60.png"
              alt="logo"
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-bold tracking-wide text-white">
              Professor Store
            </span>
          </a>
          <div className="mt-6 lg:max-w-xl">
            <p className="text-sm text-white">
              Offering professional video editing and thumbnail designing services to take your content to the next
              level. Whether you're working on YouTube videos, Instagram Reels, or any other platform, we help make
              your visuals stand out with crisp editing and eye-catching thumbnails.
            </p>
          </div>
        </div>

        <div>
          <p className="text-base font-bold tracking-wide text-white">Services</p>
          <a href="#" className="text-white">Video Editing</a>
          <a href="#" className="text-white">Thumbnail Designing</a>
          <a href="#" className="text-white">Instagram Reels</a>
          <p className="text-base font-bold tracking-wide text-white">Social Media Content</p>
          <a href="#" className="text-white">YouTube Videos</a>
          <a href="#" className="text-white">Instagram Posts</a>
          <a href="#" className="text-white">TikTok Videos</a>
        </div>

        <div>
          <p className="text-base font-bold tracking-wide text-white">Contact Me On</p>
          <div className="flex items-center gap-1 px-2">
            <a href="https://discord.com/channels/@me/1293223501553205280">
              <FaDiscord className="text-white h-10 w-10" /> 
            </a>
          </div>
          <p className="text-base font-bold tracking-wide text-white">Contact</p>
          <div className="flex">
            <p className="mr-1 text-white">Email:</p>
            <a href="#" title="send email" className="text-white">professoryt81@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-white">© Copyright 2023 Company. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="#"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Privacy &amp; Cookies Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Disclaimer
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
