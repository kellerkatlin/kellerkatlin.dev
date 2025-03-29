"use client";

import CountUp from "react-countup";

type Stat = {
  num: number;
  text: string;
};

export default function Stats() {
  // const [projectCount, setProjectCount] = useState(0);
  // const [commitCount, setCommitCount] = useState(0);

  // useEffect(() => {
  //     const fetchCommitCount = async () => {
  //         try {
  //             const reposResponse = await fetch(
  //                 "https://api.github.com/users/kellerkatlin/repos"
  //             );
  //             const repos = await reposResponse.json();
  //             let totalCommits = 0;

  //             for (const repo of repos) {
  //                 const commitsResponse = await fetch(
  //                     `https://api.github.com/repos/kellerkatlin/${repo.name}/commits`
  //                 );
  //                 const commits = await commitsResponse.json();
  //                 if (commitsResponse.ok) {
  //                     totalCommits += commits.length;
  //                 }
  //             }
  //             setCommitCount(totalCommits);
  //         } catch (error) {
  //             console.error("Error al obtener los commits:", error);
  //         }
  //     };

  //     fetchCommitCount();
  // }, []);

  // console.log(commitCount);

  // useEffect(() => {
  //     const fetchProjectCount = async () => {
  //         try {
  //             const response = await fetch(
  //                 "https://api.github.com/users/kellerkatlin/repos"
  //             );
  //             const data = await response.json();
  //             setProjectCount(data.length); // Almacena el número de proyectos
  //         } catch (error) {
  //             console.error("Error al obtener los proyectos:", error);
  //         }
  //     };

  //     fetchProjectCount();
  // }, []);

  const stats: Stat[] = [
    {
      num: 2,
      text: "Years of experience",
    },
    {
      num: 10,
      text: "Projects completed",
    },
    {
      num: 5,
      text: "Technologies mastered",
    },
    {
      num: 380,
      text: "Code commits",
    },
  ];
  return (
    <section className="pt-4 pb-12 xl:pb-0 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={stat.num}
                duration={5}
                className="text-4xl xl:text-6xl font-extrabold text-accent"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-black/80 dark:text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
