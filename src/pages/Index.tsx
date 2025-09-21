import heroImageOne from "@public/images/meditating.jpg";
import heroImageTwo from "@public/images/mixing-food.jpg";

export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-2xl md:text-6xl font-semibold text-foreground mb-6">
          The dawn of a new era in health is here
        </h1>
        <p className="text-l text-gray-700 mx-auto">
          Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
          lacus platea orci vel elit blandit facilisis
        </p>
        <button className="btn btn-primary mt-6 rounded">Join now</button>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <img
            src={heroImageOne}
            alt="meditating"
            className="border rounded-lg h-full w-full object-cover"
          />
          <img
            src={heroImageTwo}
            alt="mixing food"
            className="border rounded-lg h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-semibold mb-4">Learn</h3>
          <p className="text-muted-foreground">
            Expand your knowledge with our workshops and events.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-semibold mb-4">Build</h3>
          <p className="text-muted-foreground">
            Create amazing projects with cutting-edge technologies.
          </p>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-semibold mb-4">Connect</h3>
          <p className="text-muted-foreground">
            Network with like-minded developers in our community.
          </p>
        </div>
      </section>
    </div>
  );
}
