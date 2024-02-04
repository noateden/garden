export default function Home() {
  return (
    <>
      <div className="flex justify-start">
        Hi, I'm Eden and welcome to my garden. I'm a software engineer and learning things. I share everything I have
        learned in my journey here!
      </div>
      <div className="mt-5 flex justify-start">
        I have passions in Linux, operating systems and blockchain technology.
      </div>

      <div className="my-10 border border-dashed border-gray-100"></div>

      <div className="flex justify-start">
        <p className="text-xl font-semibold text-foreground">My Favorites</p>
      </div>

      <div className="mt-5 flex justify-start">
        <p className="text-base text-foreground">Here are some of my favorite articles you might want to start with:</p>
      </div>

      <div className="mt-5 flex justify-start">
        <ul className="ml-5 list-disc">
          <li>
            <a className="underline hover:cursor-pointer" href="/post/the-linux-ego">
              The Linux Ego
            </a>
            , where we discuss about the failure of Linux desktops and negative effects of open-source development.
          </li>
          <li className="mt-2">
            <a className="underline hover:cursor-pointer" href="/post/my-software-design-pattern">
              My software design pattern
            </a>
            , share with you my favorite pattern I used in my developed software.
          </li>
          <li className="mt-2">
            <a className="underline hover:cursor-pointer" href="/post/state-machine-the-world-state">
              State machine - the world state
            </a>
            , what I have learned about the state machine architecture.
          </li>
        </ul>
      </div>
    </>
  );
}
