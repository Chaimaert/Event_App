import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Graduation Ceremony",
      image:
        "https://img.freepik.com/vecteurs-premium/happy-graduation-salutation-fond-illustration-vectoriellexd_118124-27706.jpg?w=740",
    },
    {
      id: 2,
      title: "Cultural Days",
      image:
        "https://img.freepik.com/vecteurs-libre/illustration-gradient-pour-journee-mondiale-art_23-2151299481.jpg?t=st=1712705606~exp=1712709206~hmac=2fa672b1795ff615d36f5ee11904aff1bcb22ea5e16ebb39177a6f2903999f4f&w=740",
    },
    {
      id: 3,
      title: "Science Day Ceremony",
      image:
        "https://img.freepik.com/vecteurs-libre/illustration-journee-nationale-science-plate_23-2149255525.jpg?t=st=1712705692~exp=1712709292~hmac=c763506fb114656de62c3dfdaca8093e85ef89118cb6bf846a28adfedeb32869&w=740",
    },
  ];
  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12 mt-20 mb-40">
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className=" discover text-4xl text-brandPrimary font-semibold mb-4">
          {" "}
          Immerse Yourself in Our School Events
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          Explore a rich tapestry of exciting events at Eventhub, designed to
          inspire, educate, and celebrate our vibrant community. From our
          captivating Open House, where prospective students and families
          discover the heart of our academic environment, to the grandeur of our
          Graduation Ceremony, marking the culmination of our students'
          educational journeys, there's something special for everyone.
        </p>
      </div>


      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 items-center justify-between mt-20">
  {blogs.map((blog) => (
    <div key={blog.id} className="relative cursor-pointer">
      <img
        src={blog.image}
        alt=""
        className="w-full h-auto hover:scale-95 transition-all duration-300 max-w-xs sm:max-w-sm rounded-md" // Adjust max-width here
      />
      <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12">
        <h3 className="mb-3 text-neutralGrey font-semibold">
          {blog.title}
        </h3>
        <div className="flex items-center justify-center">
          <a
            href="/"
            className="font-bold text-brandPrimary hover:text-neutral-700"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  ))}
</div>

      
    </div>
  );
};

export default Blog;
