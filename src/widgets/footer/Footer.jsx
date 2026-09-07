const Footer = () => {
  return (
    <footer className="w-full">

      {/* ================= TOP FOOTER ================= */}
      <div className="bg-[#f7f7f7] px-6 py-10 md:px-12 lg:px-24">

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">

          {/* Popular Used Cars */}
          <div>
            <h3 className="mb-4 text-[17px] font-bold text-[#111]">
              POPULAR USED CARS FOR SALE
            </h3>

            <ul className="space-y-2 text-[15px] text-gray-500">
              <li>Used Maruti Suzuki Cars For Sale</li>
              <li>Used Hyundai Cars For Sale</li>
              <li>Used Mahindra Cars For Sale</li>
              <li>Used Toyota Cars For Sale</li>
            </ul>
          </div>


          {/* Locations */}
          <div>
            <h3 className="mb-4 text-[17px] font-bold text-[#111]">
              POPULAR USED CARS LOCATIONS
            </h3>

            <ul className="space-y-2 text-[15px] text-gray-500">
              <li>Used Cars in Kerala</li>
              <li>Used Cars in Delhi</li>
              <li>Used Cars in Tamil Nadu</li>
              <li>Used Cars in Bangalore</li>
            </ul>
          </div>


          {/* Price */}
          <div>
            <h3 className="mb-4 text-[17px] font-bold text-[#111]">
              USED CARS BY PRICE
            </h3>

            <ul className="space-y-2 text-[15px] text-gray-500">
              <li>Used Cars Below 1 Lakh</li>
              <li>Used Cars Below 2 Lakhs</li>
              <li>Used Cars Below 3 Lakhs</li>
              <li>Used Cars Below 4 Lakhs</li>
            </ul>
          </div>


          {/* OLX */}
          <div>
            <h3 className="mb-4 text-[17px] font-bold text-[#111]">
              OLX
            </h3>

            <ul className="space-y-2 text-[15px] text-gray-500">
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
              <li>Vulnerability Disclosure Program</li>
            </ul>
          </div>


          {/* Follow Us */}
          <div>
            <h3 className="mb-3 text-[17px] font-bold text-[#111]">
              FOLLOW US
            </h3>

            {/* Social Icons */}
            <div className="mb-3 flex gap-2">

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-200 text-lg font-bold text-white">
                f
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-md border-2 border-pink-500 text-sm font-bold text-pink-500">
                ◎
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                ▶
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-black text-white">
                𝕏
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-500 text-sm font-bold text-white">
                ☎
              </div>

              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-amber-200 text-sm font-bold text-white">
                in
              </div>

            </div>


            {/* Google Play */}
            <div className="mb-2 flex h-14 w-44 items-center rounded-lg bg-[#203b50] px-3 text-white">
              <span className="mr-2 text-2xl">▶</span>

              <div>
                <p className="text-[9px]">GET IT ON</p>
                <p className="text-[17px] font-medium">Google Play</p>
              </div>
            </div>


            {/* App Store */}
            <div className="flex h-14 w-44 items-center rounded-lg bg-[#203b50] px-3 text-white">
              <span className="mr-2 text-2xl">●</span>

              <div>
                <p className="text-[9px]">Download on the</p>
                <p className="text-[17px] font-medium">App Store</p>
              </div>
            </div>

          </div>

        </div>
      </div>


      {/* ================= BLUE FOOTER ================= */}
      <div className="bg-[#07549b] px-6 py-10 text-white md:px-12 lg:px-24">

        {/* Company Logos */}
        <div className="flex flex-wrap items-center justify-between gap-8">

          {/* CarTrade */}
          <div className="flex items-center">
            <div className="pr-10 text-center">
              <p className="text-[25px] font-bold">
                CarTrade<span className="rounded-full bg-white px-1 text-[#07549b]">
                  T
                </span>rade
              </p>
              <p className="text-sm font-bold">GROUP</p>
            </div>

            <div className="hidden h-32 w-px bg-white md:block"></div>
          </div>


          {/* OLX */}
          <div className="text-3xl font-bold">
            olx
            <span className="block text-center text-[7px]">
              INDIA
            </span>
          </div>


          {/* Carwale */}
          <div className="text-2xl font-bold">
            🚗 carwale
          </div>


          {/* Bikewale */}
          <div className="text-2xl font-bold">
            ♢ bikewale
          </div>


          {/* CarTrade */}
          <div className="text-2xl font-bold">
            Car<span className="rounded-full bg-white px-1 text-[#07549b]">
              T
            </span>rade
          </div>


          {/* Mobility Outlook */}
          <div className="text-center">
            <div className="text-xl font-bold">✖ MOBILITY</div>
            <div className="text-xl font-bold">OUTLOOK</div>
          </div>

        </div>


        {/* Bottom */}
        <div className="mt-8 flex flex-col justify-between gap-4 text-sm md:flex-row">
          <div>
            Help - Sitemap
          </div>

          <div>
            All rights reserved © 2006-2026 OLX
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;