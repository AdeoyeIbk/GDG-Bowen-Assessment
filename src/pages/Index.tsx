export default function Index() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          The dawn of a new era in health is here
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
          lacus platea orci vel elit blandit facilisis
        </p>
        <button className="btn btn-primary mt-6 rounded">Join now</button>
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
