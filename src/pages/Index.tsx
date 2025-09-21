import heroImageOne from "@/images/meditating.jpg";
import heroImageTwo from "@/images/mixing-food.jpg";
import meditatingIllustration from "@/images/meditating-illustration.png";
import freshProduce from "@/images/fresh-produce.jpg";import illustration2 from "@/images/illustration-2.png";
import { Leaf, Flower2 } from "lucide-react";

export default function Index() {
  const wellbeingCards = [
    {
      icon: <Leaf />,
      content:
        "Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea",
    },
    {
      icon: <Leaf />,
      content:
        "Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit.",
    },
  ];
  const organicProduceList = [
    {
      icon: <Flower2 />,
      content:
        "Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea orci vel elit.",
    },
    {
      icon: <Flower2 />,
      content:
        "Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea",
    },
    {
      icon: <Flower2 />,
      content:
        "Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam lacus platea",
    },
  ];

  return (
    <div className="container mx-auto px-4 my-24">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-2xl md:text-6xl font-medium text-foreground mb-6">
          The dawn of a new era in health is here
        </h1>
        <p className="text-lg text-gray-700 mx-auto">
          Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
          lacus platea orci vel elit blandit facilisis
        </p>
        <button className="btn btn-primary mt-6 px-12 py-2 rounded-full">
          Join now
        </button>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <img
            src={heroImageOne}
            alt="meditating"
            className="border rounded-lg md:h-full h-90 w-full object-cover"
          />
          <img
            src={heroImageTwo}
            alt="mixing food"
            className="border rounded-lg md:h-full h-90 w-full object-cover"
          />
        </div>
      </section>

      {/* Content Sections */}

      {/* wellbeing */}
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-8 px-12 rounded-lg bg-gray-100 pt-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-6">
            Wellbeing is welldoing
          </h2>
          <div className="flex gap-8 md:flex-row flex-col">
            {wellbeingCards.map(({ icon, content }, index) => (
              <div key={index} className="p-6">
                <div className="flex lg:justify-start justify-center items-center mb-2">
                  <span className="bg-[#285E67] text-white p-2 rounded flex items-center justify-center">
                    {icon}
                  </span>
                </div>
                <p className="text-muted-foreground lg:text-left text-semibold">
                  {content}
                </p>
              </div>
            ))}
          </div>
        </div>
        <img
          src={meditatingIllustration}
          alt="Meditating Illustration"
          className="hidden lg:block align-end justify-end"
        />
      </section>

      {/* organic produce section */}
      <section className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-24">
        <img
          src={freshProduce}
          alt="Fresh Produce"
          className="hidden md:block align-end justify-end rounded-lg w-full object-cover"
          style={{ height: "30rem" }}
        />
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
              Fresh organic produce
            </h2>
            <p className="text-muted-foreground lg:text-left text-sm">
              Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
              Diam lacus platea orci vel elit blandit facilisis enim risus. Ut
              tristique eget integer odio nec vulputate consequat. Elit mattis
              ac in amet sit viverra.
            </p>
          </div>

          <ul className="flex flex-col gap-12">
            {organicProduceList.map(({ icon, content }, index) => (
              <li key={index} className="flex items-center gap-4 mb-2">
                <span className="border-2 border-[#285E67] text-[#285E67] p-2 rounded-full flex items-center justify-center bg-transparent">
                  {icon}
                </span>
                <p className="text-muted-foreground lg:text-left font-semibold">
                  {content}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* you are what you eat section */}
      <section className="grid lg:grid-cols-2 grid-cols-1  md:py-12 md:px-44 px-12 rounded-lg bg-gray-100 mt-24 justify-center gap-8">
        <img
          src={illustration2}
          alt="cocktail illustration"
          className="hidden lg:block align-end justify-end h-68"
        />
        <div className="flex flex-col lg:align-start justify-center">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl lg:text-left font-semibold text-foreground mb-6">
            You are what you eat
          </h2>
          <div className="flex gap-8 md:flex-row flex-col">
            {wellbeingCards.map(({ icon, content }, index) => (
              <div key={index} className="">
                <div className="flex lg:justify-start justify-center items-center mb-2">
                  <span className="bg-[#EBBFAE] text-black p-2 rounded flex items-center justify-center">
                    {icon}
                  </span>
                </div>
                <p className="text-muted-foreground lg:text-left">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
