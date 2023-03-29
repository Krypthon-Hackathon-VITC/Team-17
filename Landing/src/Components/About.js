import { RiCheckboxBlankCircleFill } from "react-icons/ri";
const About = () => {
    return (<div id="about" className="bg-green-900 pb-24">
    <h2 className="font-medium leading-tight text-2xl p-2 text-center md:text-7xl text-green-100 mt-24">About</h2>
    <div className="flex justify-center items-center">
    <p className="font-medium leading-tight text-2xl p-2 text-left w-2/3 md:text-2xl text-green-200 mt-2">
    The proposed system is designed to address the challenges that rural farmers often face due to their limited access to technology, education, and vulnerability to exploitation in the supply chain.<br></br>The system aims to create an ecosystem for farmers that utilizes blockchain technology to ensure transparency and fairness in transactions between farmers and consumers. 
    </p>
    </div>
    <div className="about-div flex flex-wrap space-around mt-10 items-center justify-center gap-10">
    <img src="imagess.jpg" className='lg:w-1/3 w-3/4'></img>

<p className="about-p font-small leading-tight text-3xl text-left mt-6 mb-2 text-green-200 md:w-1/2 w-3/4">
<ul>
<li>
<RiCheckboxBlankCircleFill size={22} style={{ marginRight: "9px", color: "#3498db",display:"inline" }}/>Transparent blockchain based transactions, stored on the ethereum chain.</li>
<li><RiCheckboxBlankCircleFill size={22} style={{ marginRight: "9px", color: "#3498db",display:"inline" }}/>Machine learning based price prediction based on economical and geographical factors.</li>
<li><RiCheckboxBlankCircleFill size={22} style={{ marginRight: "9px", color: "#3498db",display:"inline" }}/>Personalized dashboard for farmers.</li>
<li><RiCheckboxBlankCircleFill size={22} style={{ marginRight: "9px", color: "#3498db",display:"inline" }}/>No third party interference between consumers and farmers.</li>
<li><RiCheckboxBlankCircleFill size={22} style={{ marginRight: "9px", color: "#3498db",display:"inline" }}/>Responsive and bilingual user interface</li>
</ul>
</p>

    </div>
    </div>
    );
  };
  
  export default About;
  