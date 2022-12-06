type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
  return (
    <>
      <h1>Cloudinary Playground</h1>
      <div className='card'>
        <p>Take a look at our proof of concept demos using the links below.</p>
        <a href='/image-builder'>Image Builder</a>
      </div>
    </>
  );
};

export default HomePage;
