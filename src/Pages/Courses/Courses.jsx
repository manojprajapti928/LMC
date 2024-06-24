import React from 'react'
import "./Courses.css"

import Card from "./Card"
export default function Courses() {

  let CoursesData = [
    {
      Banner: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png",
      Category: "Core Programming",
      CourseTitle: "Complete Basic Python",
      CourseDescription: "lorem",
      CoursePrice: "12000",
      CourseDuration: "12Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1BoiVIU4nLDvc0BBhdPS1zqKurZhiMoodEQ&s",
      Category: "Core Programming",
      CourseTitle: "Advanced Java",
      CourseDescription: "lorem",
      CoursePrice: "15000",
      CourseDuration: "20Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://www.shutterstock.com/image-illustration/c-code-on-dark-background-600nw-1896170293.jpg",
      Category: "Core Programming",
      CourseTitle: "C++ for Beginners",
      CourseDescription: "lorem",
      CoursePrice: "10000",
      CourseDuration: "15Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmTPcUcn-eQnOf7psQGdyEJGmMD4me9ALXA&s",
      Category: "Core Programming",
      CourseTitle: "Data Structures and Algorithms",
      CourseDescription: "lorem",
      CoursePrice: "18000",
      CourseDuration: "25Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://img.freepik.com/free-vector/gradient-sql-illustration_23-2149247491.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718928000&semt=sph",
      Category: "Core Programming",
      CourseTitle: "Mastering SQL",
      CourseDescription: "lorem",
      CoursePrice: "12000",
      CourseDuration: "18Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://media.geeksforgeeks.org/wp-content/uploads/20231110115359/Roadmap-to-Mern-stack-developer-copy-(3).webp",
      Category: "Full Stack",
      CourseTitle: "MERN Stack Development",
      CourseDescription: "lorem",
      CoursePrice: "25000",
      CourseDuration: "40Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://www.c-metric.com/wp-content/uploads/2022/07/Angular_with_Node_JS.jpg",
      Category: "Full Stack",
      CourseTitle: "Angular and Node.js",
      CourseDescription: "lorem",
      CoursePrice: "22000",
      CourseDuration: "35Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://fullscale.io/wp-content/uploads/2024/02/spring-boot-and-react-js.png",
      Category: "Full Stack",
      CourseTitle: "React and Spring Boot",
      CourseDescription: "lorem",
      CoursePrice: "20000",
      CourseDuration: "30Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://clickysoft.com/wp-content/uploads/2022/04/Getting-Started-with-Laravel-and-Vue.js.jpg",
      Category: "Full Stack",
      CourseTitle: "Vue.js and Laravel",
      CourseDescription: "lorem",
      CoursePrice: "18000",
      CourseDuration: "25Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://thetapacademy.com/wp-content/uploads/2022/10/full-stack-web-developer-1024x1024.jpg",
      Category: "Full Stack",
      CourseTitle: "Full Stack Web Development",
      CourseDescription: "lorem",
      CoursePrice: "28000",
      CourseDuration: "45Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkF0_CcXpJcMLeAcVxaJk4Sqsizv5kq6cx4Q&s",
      Category: "AI",
      CourseTitle: "Machine Learning with Python",
      CourseDescription: "lorem",
      CoursePrice: "20000",
      CourseDuration: "30Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://www.gopichandrakesan.com/wp-content/uploads/2021/04/Deep-Learning.jpeg",
      Category: "AI",
      CourseTitle: "Deep Learning Fundamentals",
      CourseDescription: "lorem",
      CoursePrice: "25000",
      CourseDuration: "40Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://images.prismic.io/turing/652ebe6bfbd9a45bcec81881_Natural_Language_Processing_Functionality_in_AI_95cadec9bc.webp?auto=format,compress",
      Category: "AI",
      CourseTitle: "Natural Language Processing",
      CourseDescription: "lorem",
      CoursePrice: "18000",
      CourseDuration: "25Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://editor.analyticsvidhya.com/uploads/839851_tRhSEi8t5nXBDqejZSOdKQ.png",
      Category: "AI",
      CourseTitle: "Computer Vision with OpenCV",
      CourseDescription: "lorem",
      CoursePrice: "22000",
      CourseDuration: "35Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://images.prismic.io/turing/652ec261fbd9a45bcec81941_Reinforcement_Learning_4_11zon_946380769c.webp?auto=format%2Ccompress&fit=max&w=3840",
      Category: "AI",
      CourseTitle: "Reinforcement Learning",
      CourseDescription: "lorem",
      CoursePrice: "20000",
      CourseDuration: "30Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_11_Financial-Accounting.jpg",
      Category: "Non-IT",
      CourseTitle: "Financial Accounting",
      CourseDescription: "lorem",
      CoursePrice: "15000",
      CourseDuration: "20Hr",
      CourseLanguage: "English",
    },
    {
      Banner: " https://3.imimg.com/data3/XU/YM/MY-15734316/marketing-management-500x500.png",
      Category: "Non-IT",
      CourseTitle: "Marketing Management",
      CourseDescription: "lorem",
      CoursePrice: "12000",
      CourseDuration: "18Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://c8.alamy.com/comp/TDG9FJ/human-resource-management-hr-team-building-and-recruitment-concept-on-blurred-background-TDG9FJ.jpg",
      Category: "Non-IT",
      CourseTitle: "Human Resource Management",
      CourseDescription: "lorem",
      CoursePrice: "10000",
      CourseDuration: "15Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://www.simplinotes.com/wp-content/uploads/2017/09/business-comm-2.jpg",
      Category: "Non-IT",
      CourseTitle: "Business Communication",
      CourseDescription: "lorem",
      CoursePrice: "8000",
      CourseDuration: "12Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://media.istockphoto.com/id/980272768/photo/project-management-concept-chart-with-keywords-and-icons.jpg?s=612x612&w=0&k=20&c=OB3Lhh1-vD8ZU_07PM6F_vnN-hJTYhtWYID9UrFJRyU=",
      Category: "Non-IT",
      CourseTitle: "Project Management",
      CourseDescription: "lorem",
      CoursePrice: "18000",
      CourseDuration: "25Hr",
      CourseLanguage: "English",
    },
    {
      Banner: "https://familycomputercentre.com/wp-content/uploads/fp-cpp-adv.jpg",
      Category: "Core Programming",
      CourseTitle: "Advanced C++",
      CourseDescription: "lorem",
      CoursePrice: "16000",
      CourseDuration: "22Hr",
      CourseLanguage: "English",
    }
 
    
  ];


  return (
    <div id='main'>
        <center>
            <h1>Courses</h1>
            {CoursesData.map((e,i)=>
              <Card key = {i} e = {e} />
            )}
        </center>
    </div>
  )
}
