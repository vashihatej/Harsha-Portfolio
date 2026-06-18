/* eslint-disable @next/next/no-img-element */
"use client";

const education = [
  {
    university: "George Mason University",
    location: "Fairfax, Virginia, United States",
    degree: "Master of Science in Computer Science",
    concentration: "Concentration in Web-Based Software Engineering",
    duration: "August 2022 – May 2024",
    gpa: "3.92",
    logo: "/assets/images/GmuLogo.jpeg",
    courses: [
      "Analysis of Algorithms",
      "Computer Systems and Systems Programming",
      "Mathematical Foundations of CS",
      "Database Systems",
      "Natural Language Processing (NLP)",
      "Component Based Software Development",
      "Software Design and Architecture",
      "Software Testing",
      "Advance Algorithms",
      "Software Engineering for the World Wide Web",
    ],
  },
  {
    university: "Visveswaraya Technological University",
    location: "Belgaum, Karnataka, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    concentration: null,
    duration: "Aug 2016 – May 2020",
    gpa: "3.52",
    logo: "/assets/images/Visvesvaraya_Technological_University_logo.png",
    courses: [
      "Computer Programming in C",
      "Data Structures through C++",
      "Object Oriented Programming through Java",
      "Design and Analysis of Algorithms",
      "Database Management Systems",
      "Computer Organization",
      "Digital Logic Design",
      "Compiler Design",
      "Web Technologies",
      "Cryptography and Network Security",
      "Principle of Programming Languages",
      "Python Programming",
      "Machine Learning",
      "Cloud Computing",
    ],
  },
];

export default function EducationComponent() {
  return (
    <section className="port-section" id="education">
      <div className="port-container">
        <div className="section-eyebrow">Academic Background</div>
        <h2 className="section-title">My <span className="acc">Education</span></h2>
        <div className="edu-list">
          {education.map((edu, i) => (
            <div key={i} className="edu-card reveal">
              <div className="edu-left">
                <img src={edu.logo} alt={edu.university} className="edu-logo" />
                <div className="edu-gpa-block">
                  <div className="edu-gpa-num">{edu.gpa}</div>
                  <div className="edu-gpa-label">GPA / 4.0</div>
                </div>
                <div className="edu-duration">{edu.duration}</div>
              </div>
              <div className="edu-right">
                <div className="edu-university">{edu.university}</div>
                <div className="edu-degree">{edu.degree}</div>
                {edu.concentration && (
                  <div className="edu-concentration">📌 {edu.concentration}</div>
                )}
                <div className="edu-location">📍 {edu.location}</div>
                <div className="edu-courses-label">Relevant Coursework</div>
                <div className="edu-courses">
                  {edu.courses.map((c) => (
                    <span key={c} className="edu-course-tag">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
