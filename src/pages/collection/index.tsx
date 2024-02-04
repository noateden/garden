export default function CollectionPage() {
  return (
    <>
      <div className="flex justify-start">
        Welcome to my personal space where I share my favorite collections of things I love.
      </div>

      <div className="my-10 border border-dashed border-grey-100"></div>

      <div className="flex justify-start">
        <p className="text-xl font-semibold text-foreground">Pokédex</p>
      </div>

      <div className="mt-5 flex justify-start">
        <ul className="ml-10 list-disc ">
          <li>
            <a className="underline hover:cursor-pointer" href="/collection/pokemon-gen-1">
              Generation I (151 Pokemon)
            </a>
          </li>
          <li className="mt-2">
            <a className="underline hover:cursor-pointer" href="/collection/pokemon-gen-2">
              Generation II (251 Pokemon)
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
