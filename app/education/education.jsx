/* eslint-disable @next/next/no-img-element */
const educationDetails = [
  {
    universityName: "George Mason University",
    address: "Fairfax, Virginia, United States",
    major: "Master of Science in Computer Science",
    duration: "August 2022 - May 2024",
    gpa: "3.92",
    courseWork: [
      "Analysis of Algorithms",
      "Computer Systems and Systems Programming",
      "Mathematical Foundations of CS",
      "Database Systems",
      "Natural Language Processing(NLP)",
      "Component based Software Development",
      "Software Design and Architecture",
      "Software Testing",
      "Advance Algorithms",
      "Software Engineering for the World Wide Web",
    ],
    concentration: "Concentration in Web-Based Software Engineering",
    logo: "/assets/images/GmuLogo.jpeg",
  },
  {
    universityName: "Visveswaraya Technological University",
    address: "Belgaum, Karnataka, India",
    major: "Bachelors of Technology in Computer Science and Engineering",
    duration: "Aug 2016 - May 2020",
    gpa: "3.52",
    courseWork: [
      "Computer Programming in C",
      "Data Structures through C++",
      "Object oriented Programming through Java",
      "Design and Analysis of Algorithms",
      "Database Management Systems",
      "Computer Organization",
      "Digital Logic Design",
      "Compiler Design",
      "Web technologies",
      "Cryptography and Network Security",
      "Principle of Programming Languages",
      "Python Programming",
      "Machine Learning",
      "Cloud Computing",
    ],
    // concentration: "Concentration in Web-Based Software Engineering"
    logo: "/assets/images/Visvesvaraya_Technological_University_logo.png",
  },
];

export default function EducationComponent() {
  return (
    <>
      <h2 className="text-3xl mx-auto max-w-6xl font-bold mt-4 py-2 sm:text-2xl">
        Education
      </h2>
      <div className="mx-auto max-w-6xl lg:max-w-6xl">
        {/* <p className="my-8 text-justify">
            {`" A Full Stack Developer with a rich academic background from George Mason University, I specialize in bringing web and mobile applications to life. My toolkit is stocked with advanced technologies such as React, React Native, Node.js, and more, ensuring high performance and captivating user experiences. My journey is marked by a commitment to excellence, leadership in team settings, and a continuous pursuit of groundbreaking projects. Join me in forging digital pathways that resonate with creativity, precision, and endless possibilities. Let’s transform ideas into reality, together."`}
          </p> */}
        {educationDetails.map((education, index) => {
          return (
            <div
              key={index}
              className="mt-8 flex shadow-lg rounded-xl text-justify p-8 w-100 sm:flex-col dark:shadow-white"
            >
              <div className="flex flex-col w-1/3  border-black items-center justify-center sm:flex-row sm:w-full sm:border-0 sm:mb-4 dark:border-white">
                <img
                  src={education.logo}
                  alt={education.universityName}
                  className="w-36 h-36 object-cove shadow-xl ring-1 ring-gray-400/10 mb-8 sm:flex-1 sm:mb-0 dark:ring-white"
                  width={100}
                  height={100}
                />

                <div className="sm:flex-1">
                  <p className="text-center flex-1 font-semibold text-base mt-4  sm:text-sm">
                    GPA - <span className="">{education.gpa} / 4.0</span>
                  </p>
                  <p className="text-center flex-1 font-semibold text-base mt-4 sm:text-sm">
                    {education.duration}
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-2/3 justify-center pl-8 sm:w-full sm:p-0">
                <div className="pb-2 mb-4">
                  <p className="text-2xl font-semibold sm:text-xl">
                    {education.universityName}
                  </p>
                  <p className="text-xl font-semibold sm:text-l">
                    {education.major}
                  </p>
                </div>
                <div>
                  <p className="text-base font-semibold sm:text-sm">
                    Coursework :
                  </p>
                  <ul className="list-disc">
                    {education.courseWork.map((course, index) => {
                      return (
                        <li key={index} className="text-sm ml-8">
                          {course}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
