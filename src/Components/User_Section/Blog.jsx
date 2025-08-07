import React from "react";

const blogs = [
  {
    id: 1,
    title: "Why Draze is the Future of Smart Living in India",
    summary:
      "Discover how Draze is revolutionizing property search, offering a seamless experience for students, families, and event planners.",
    date: "August 1, 2025",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&q=80",
  },
  {
    id: 2,
    title: "Top Benefits of Booking PGs & Hostels through Draze",
    summary:
      "From verified listings to real-time availability and secure bookings, learn why Draze is trusted by thousands of students and working professionals.",
    date: "July 24, 2025",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&q=80",
  },
  {
    id: 3,
    title: "Planning a Wedding or Corporate Event? Draze Has You Covered",
    summary:
      "Explore top-rated banquet halls, event spaces, and customized booking services across major Indian cities with Draze.",
    date: "July 10, 2025",
    image:
      "https://images.unsplash.com/photo-1556012018-4b3cd3042e78?auto=format&q=80",
  },
  {
    id: 4,
    title: "5 Things to Check Before Renting a Property on Draze",
    summary:
      "Ensure a smooth move-in by knowing what to look for—lease terms, amenities, location insights, and more, all made simple through Draze.",
    date: "June 28, 2025",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&q=80",
  },
  {
    id: 5,
    title: "Draze Verified Properties: Why Verification Matters",
    summary:
      "We ensure peace of mind by verifying owners, documents, and locations—because your comfort and safety is our priority.",
    date: "June 10, 2025",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&q=80",
  },
  {
    id: 6,
    title: "How Draze Supports Students Moving to New Cities",
    summary:
      "From local PGs to budget hostels with high-speed internet and food services, Draze makes student life easier in metro cities.",
    date: "May 28, 2025",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&q=80",
  },
];

const BlogPage = () => {
  return (
    <section className="bg-gray-100 pt-24 pb-20 px-6">
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-5">
          Draze Blog
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Get expert tips, discover smart rental solutions, explore event planning guides, and stay ahead with real estate trends—only at Draze.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 space-y-4">
              <p className="text-xs text-gray-500">{blog.date}</p>
              <h3 className="text-2xl font-semibold text-blue-800">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-base">{blog.summary}</p>
              <button className="mt-2 inline-block text-sm text-blue-600 font-medium hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
