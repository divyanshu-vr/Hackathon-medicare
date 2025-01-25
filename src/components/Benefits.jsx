import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { useNavigate } from "react-router-dom";

import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    if (id === "0") {
      navigate("/sosalert");
    }
    if (id === "2") {
      navigate("/medicationreminder");
    }
    if (id === "3") {
      navigate("/vitalmonitoring");
    }
  };

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-xl"
          title="Manage Your Medicines Smarter, Not Harder with MediCare"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] cursor-pointer"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
              onClick={() => handleCardClick(item.id)} // Handle click for navigation
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
