import Image from "next/image";

function Footer() {
  return (
    <div className="bg-buttonColor text-white w-full">
      <div className="max-w-[110rem] mx-auto md:px-10 px-4 pt-6 pb-4">
        {/* Logo */}
        <div className="flex place-content-center">
          <Image
            src="/FooterIcon.png"
            alt="FooterIcon"
            width={200}
            height={200}
          />
        </div>

        {/* Footer Links */}
        <div className="flex items-start justify-between flex-col gap-14 text-[12px] lg:flex-row font-bold">
          {/* About Column */}
          <div className="flex flex-col gap-3">
            <p className="text-FooterLabel font-semibold">About</p>
            <p>About ZonBay</p>
            <p>Term and Conditions</p>
            <p>Privacy Policy</p>
          </div>

          {/* Support Column */}
          <div className="flex flex-col gap-3">
            <p className="text-FooterLabel font-semibold">Support</p>
            <p>Support@xonbay.com</p>
            <p>Contact Us</p>
            <p>FAQ</p>
          </div>

          {/* Sell Column */}
          <div className="flex flex-col gap-3">
            <p className="text-FooterLabel font-semibold">Sell</p>
            <p>Start Selling</p>
            <p>Learn to Sell</p>
          </div>

          {/* Payment Methods Column */}
          <div className="flex flex-col gap-2">
            <p className="text-FooterLabel font-semibold">Payment Made Easy</p>
            <div>
              <div className="hover:cursor-pointer">
                <Image src="/Bank.svg" alt="Bank" width={80} height={80} />
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="hover:cursor-pointer">
                <Image
                  src="/MasterCard.svg"
                  alt="MCard"
                  width={50}
                  height={50}
                />
              </div>
              <div className="hover:cursor-pointer">
                <Image src="/VISA.svg" alt="MCard" width={60} height={80} />
              </div>
            </div>
            <div className="hover:cursor-pointer">
              <Image
                src="/Mobile-money.svg"
                alt="Mmoney"
                width={160}
                height={160}
              />
            </div>
          </div>

          {/* Social/Join Column */}
          <div className="flex flex-col gap-3">
            <p className="text-FooterLabel font-semibold">Join Us</p>
            <div className="flex gap-4 items-center">
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={30}
                height={30}
                style={{ cursor: "pointer", transform: "scale(1.1)" }}
              />
              <Image
                src="/TwitterX.svg"
                alt="twitterX"
                width={30}
                height={30}
                style={{ cursor: "pointer", transform: "scale(1.1)" }}
              />
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={30}
                height={30}
                style={{ cursor: "pointer", transform: "scale(1.1)" }}
              />
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={30}
                height={30}
                style={{ cursor: "pointer", transform: "scale(1.1)" }}
              />
            </div>
            <Image src="/AppStore.svg" alt="MCard" width={100} height={120} />
            <Image src="/PlayStore.svg" alt="MCard" width={100} height={120} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
