type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  return (
    <>
      <div className="mx-auto max-w-prose text-lg">
        <h1 className="text-center">
          <span className="block text-lg font-semibold text-indigo-600">
            Introducing
          </span>
          <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Cloudinary Playground
          </span>
          <span className="prose prose-indigo text-sm">
            <a href="https://www.verse.co.uk">by Verse</a>
          </span>
        </h1>

        <p className="prose prose-gray mt-8 text-xl leading-8 text-gray-500">
          Take a look at our proof of concept demos using the links below. These
          showcase some of the functionality{" "}
          <a href="https://cloudinary.com/">Cloudinary</a> has to offer
        </p>
      </div>
      <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
        <a href="/badge-builder">Badge Builder</a>
      </div>
    </>
  );
};

export default HomePage;
