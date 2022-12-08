import { useState } from "react";

const BadgeBuilderPage = () => {
  const [imageUrl, setImageUrl] = useState("");

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const role = event.target.elements.role.value;
    const company = event.target.elements.company.value;
    setImageUrl(
      `/image-badge-builder.png?name=${name}&role=${role}&company=${company}`
    );
  };

  return (
    <>
      <h1 className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
        Badge Builder
      </h1>
      <div className="mt-8 space-y-16 md:flex md:justify-center md:gap-16 md:space-y-0">
        <form
          onSubmit={(e) => submitHandler(e)}
          className="mt-10 flex flex-col items-start space-y-4 text-left"
        >
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
            <div className="min-w-[300px]">
              <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700"
              >
                {`${label} ${!required ? "(optional)" : ""}`}
              </label>
              <div className="mt-1">
                <input
                  id={id}
                  name={name}
                  type={type}
                  required={required}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  // placeholder="you@example.com"
                />
              </div>
            </div>
          ))}

          <button
            type="submit"
            className="group inline-flex rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
          >
            Submit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="ml-1 h-6 w-6 transition-transform group-hover:translate-x-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </form>

        {imageUrl ? (
          <img src={imageUrl} alt="badge" />
        ) : (
          <div className="flex items-center rounded-md border border-gray-300 bg-gray-200 p-8">
            <span className="md:flex">
              {/* Left arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mr-2 hidden h-6 w-6 md:block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>

              {/* Up arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="mb-2 h-6 w-6 md:hidden"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                />
              </svg>

              <p className="prose">
                Add your details to the form to generate your badge.
              </p>
            </span>
          </div>
        )}
      </div>
    </>
  );
};

export default BadgeBuilderPage;
