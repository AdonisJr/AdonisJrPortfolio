import React, {useState} from 'react';
import Header from '../Header/Header'
import Body from '../Body/Body'
import Footer from '../Footer/Footer';

export default function Home() {

  const technologies = [
    {
        tech: 'HTML',
        description: 'HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage.'
    },
    {
        tech: 'CSS',
        description: 'CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts.'
    },
    {
        tech: 'SASS',
        description: 'SASS (Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more.'
    },
    {
        tech: 'Javascript',
        description: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages'
    },
    {
        tech: 'Bootstrap',
        description: 'Bootstrap is a free and open source front end development framework for the creation of websites and web apps. '
    },
    {
        tech: 'React JS',
        description: 'React JS is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.',
    },
    {
        tech: 'Node JS',
        description: 'Node.js is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.'
    },
    {
        tech: 'Express JS',
        description: 'Express is a node js web application framework that provides broad features for building web and mobile applications.'
    },
    {
        tech: 'MySQL',
        description: 'MySQL is an Oracle-backed open source relational database management system (RDBMS) based on Structured Query Language (SQL).'
    },
    {
        tech: 'MongoDB',
        description: 'MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need.'
    },
];
    const [navClose, setNavClose] = useState(true);
    const [isToggle, setIsToggle] = useState(true);

    const handleNavToggle = ()=>{
        // to open and close navbar
        setNavClose(!navClose);
    }

    const handleIsToggle = () =>{
        setIsToggle(!isToggle)
    }

  return (
    <div className='home'>
        <Header handleNavToggle={handleNavToggle} navClose={navClose} />
        <Body handleNavToggle={handleNavToggle} navClose={navClose} technologies={technologies}
        handleIsToggle={handleIsToggle} isToggle={isToggle}/>
        <Footer />
    </div>
  )
}
