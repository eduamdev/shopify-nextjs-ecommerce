export function Testimonial() {
  return (
    <section
      aria-labelledby="testimonial-heading"
      className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <h2 id="testimonial-heading" className="text-2xl font-bold tracking-tight text-gray-900">
          What are people saying?
        </h2>
        <div className="mt-16 space-y-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          <blockquote className="sm:flex lg:block">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              aria-hidden="true"
              className="shrink-0 text-gray-300"
            >
              <path
                d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
              <p className="text-lg text-gray-600">
                My order arrived super quickly. The product is even better than I hoped it would be.
                Very happy customer over here!
              </p>
              <cite className="mt-4 block font-semibold not-italic text-gray-900">
                Sarah Peters, New Orleans
              </cite>
            </div>
          </blockquote>
          <blockquote className="sm:flex lg:block">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              aria-hidden="true"
              className="shrink-0 text-gray-300"
            >
              <path
                d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
              <p className="text-lg text-gray-600">
                I had to return a purchase that didn’t fit. The whole process was so simple that I
                ended up ordering two new items!
              </p>
              <cite className="mt-4 block font-semibold not-italic text-gray-900">
                Kelly McPherson, Chicago
              </cite>
            </div>
          </blockquote>
          <blockquote className="sm:flex lg:block">
            <svg
              width="24"
              height="18"
              viewBox="0 0 24 18"
              aria-hidden="true"
              className="shrink-0 text-gray-300"
            >
              <path
                d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="mt-8 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-10">
              <p className="text-lg text-gray-600">
                Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s
                just so convenient, and I know the quality will always be there.
              </p>
              <cite className="mt-4 block font-semibold not-italic text-gray-900">
                Chris Paul, Phoenix
              </cite>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
