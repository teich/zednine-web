// ABOUTME: About section with placeholder content about Zed9's craftsmanship
// ABOUTME: Centered layout with constrained width for readability
export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
          About Us
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            At Zed9, we believe in the timeless beauty of handcrafted woodwork.
            Each piece we create is a testament to our commitment to quality,
            precision, and attention to detail.
          </p>
          <p>
            From custom furniture to bespoke cabinetry, we work closely with our
            clients to bring their vision to life. Whether it's a modern
            minimalist design or a classic traditional piece, our craftsmanship
            ensures lasting beauty and functionality.
          </p>
          <p>
            Every project is an opportunity to showcase the natural beauty of
            wood and the artistry of skilled woodworking. We take pride in
            creating pieces that will be cherished for generations.
          </p>
        </div>
      </div>
    </section>
  );
}
