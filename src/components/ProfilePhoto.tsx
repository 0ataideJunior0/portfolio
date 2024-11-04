import Image from "next/image";
import profilePhoto from "../assets/images/profile_alta.png";

export const ProfilePhoto = () => {
  return (
    <section className="flex justify-center h-screen">
      <div className="card-wrapper h-[400px] w-[400px]">
        <div className="card-content flex items-center justify-center text-xs">
          <div className="max-w-[100%] text-center">
            <Image src={profilePhoto} alt="/" />
          </div>
        </div>
      </div>
    </section>
  );
};
