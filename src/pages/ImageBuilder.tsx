import { useState } from "react";

type ImageBuilderPageProps = {};

const ImageBuilderPage = ({}: ImageBuilderPageProps) => {
  const [imageUrl, setImageUrl] = useState("");

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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <form onSubmit={(e) => submitHandler(e)} className="mt-10 text-left">
          {[
            {
              id: "name",
              name: "name",
              type: "text",
              required: true,
              label: "Name",
            },
            {
              id: "role",
              name: "role",
              type: "text",
              required: false,
              label: "Role",
            },
            {
              id: "company",
              name: "company",
              type: "text",
              required: false,
              label: "Company",
            },
          ].map(({ id, name, type, required, label }) => (
            <div className="mb-3 w-full text-left">
              <label className="block" htmlFor={id}>
                {`${label} ${!required ? "(optional)" : ""}`}
              </label>
              <input
                className="block"
                id={id}
                name={name}
                type={type}
                required={required}
              />
            </div>
          ))}

          <button type="submit" className="bg-gray-100 py-1 px-2 text-gray-900">
            Submit
          </button>
        </form>

        {!!imageUrl && <img src={imageUrl} alt="badge" className="mx-auto" />}
      </div>
    </>
  );
};

export default ImageBuilderPage;
