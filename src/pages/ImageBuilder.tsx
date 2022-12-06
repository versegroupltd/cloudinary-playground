import { useState } from 'react';

type ImageBuilderPageProps = {};

const ImageBuilderPage = ({}: ImageBuilderPageProps) => {
  const [imageUrl, setImageUrl] = useState('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const role = event.target.elements.role.value;
    const company = event.target.elements.company.value;
    setImageUrl(
      `/image-builder.png?name=${name}&role=${role}&company=${company}`
    );
  };

  return (
    <>
      <h1>Image Builder</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <label htmlFor='name'>Name</label>
          <input id='name' name='name' type='text' required />
        </div>
        <div>
          <label htmlFor='role'>Role</label>
          <input id='role' name='role' type='text' />
        </div>
        <div>
          <label htmlFor='company'>Company</label>
          <input id='company' name='company' type='text' />
        </div>
        <button type='submit'>Submit</button>
      </form>

      {!!imageUrl && <img src={imageUrl} alt='badge' className='mx-auto' />}
    </>
  );
};

export default ImageBuilderPage;
