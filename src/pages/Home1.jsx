import {
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Phone,
  Link,
  Globe,
} from "lucide-react";
import PropTypes from "prop-types";

const Home1 = () => {
  const SidebarSection = ({ title, children }) => (
    <div className="mb-6">
      <h2 className="text-lg font-bold mb-2 text-blue-600 border-b border-blue-200 pb-1">
        {title}
      </h2>
      {children}
    </div>
  );

  SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  const MainSection = ({ title, children }) => (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-3 text-blue-700 border-b border-blue-200 pb-2">
        {title}
      </h2>
      {children}
    </div>
  );

  MainSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  const ExperienceItem = ({ period, title, company, description }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      <p className="text-gray-700">{company}</p>
      <ul className="list-disc list-inside mt-2">
        {description.map((item, index) => (
          <li key={index} className="text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  ExperienceItem.propTypes = {
    period: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  const SkillTag = ({ skill }) => (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
      {skill}
    </span>
  );

  SkillTag.propTypes = {
    skill: PropTypes.string.isRequired,
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg flex">
      {/* Sidebar */}
      <div className="w-1/3 bg-gray-100 p-6 rounded-l-lg">
        <div className="text-center mb-8">
          <img
            src="src\images\sena.jpeg"
            alt="Senanu Adjabeng"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h1 className="text-2xl font-bold text-gray-800">Senanu Adjabeng</h1>
          <p className="text-lg text-blue-600 mt-2">Master of Engineering</p>
        </div>

        <SidebarSection title="Contact">
          <div className="space-y-2">
            <div className="flex items-center">
              <Phone size={16} className="mr-2 text-blue-600" /> +4915226175744
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-blue-600" /> Berlin, DE
            </div>
            <div className="flex items-center">
              <Mail size={16} className="mr-2 text-blue-600" />{" "}
              senanuadjabeng1@gmail.com
            </div>
            <div className="flex items-center">
              <Linkedin size={16} className="mr-2 text-blue-600" />{" "}
              adjabengsenanu
            </div>
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-blue-600" /> 05.12.1993
            </div>
          </div>
        </SidebarSection>

        <SidebarSection title="Skills">
          <div className="flex flex-wrap">
            <SkillTag skill="Python" />
            <SkillTag skill="JavaScript" />
            <SkillTag skill="R" />
            <SkillTag skill="React" />
            <SkillTag skill="Node.js" />
            <SkillTag skill="Express.js" />
            <SkillTag skill="Pandas" />
            <SkillTag skill="NumPy" />
            <SkillTag skill="ARIMA" />
            <SkillTag skill="Prophet" />
          </div>
        </SidebarSection>

        <SidebarSection title="Languages">
          <div className="space-y-1">
            <div className="flex justify-between">
              <span>English</span>
              <span className="text-blue-600">Fluent</span>
            </div>
            <div className="flex justify-between">
              <span>French</span>
              <span className="text-blue-600">Intermediate</span>
            </div>
            <div className="flex justify-between">
              <span>German</span>
              <span className="text-blue-600">Intermediate</span>
            </div>
            <div className="flex justify-between">
              <span>Twi</span>
              <span className="text-blue-600">Native</span>
            </div>
            <div className="flex justify-between">
              <span>Ewe</span>
              <span className="text-blue-600">Native</span>
            </div>
          </div>
        </SidebarSection>

        <SidebarSection title="Certificates">
          <ul className="list-disc list-inside text-sm">
            <li>Certified Renewable Energy Project Developer, RENAC (2024)</li>
            <li>Google Project Management Professional Certificate (2023)</li>
            <li>Google Data Analytics Professional Certificate (2023)</li>
            <li>Spring School Hydrogen Technology (2023)</li>
            <li>
              Environmental Social Governance (ESG) Expert Training (2023)
            </li>
          </ul>
        </SidebarSection>
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-6">
        <MainSection title="Professional Summary">
          <p className="text-sm leading-relaxed">
            Dedicated Master of Engineering graduate with expertise in renewable
            energy, project development, and data analysis. Skilled in
            leveraging AI and machine learning for climate risk assessment and
            energy forecasting. Proven track record of reducing project costs,
            improving operational efficiency, and driving sustainable solutions.
            Seeking to apply my diverse skill set in a challenging role that
            contributes to advancing clean energy initiatives and addressing
            climate change.
          </p>
        </MainSection>

        <MainSection title="Experience">
          <ExperienceItem
            period="September 2023 - Present"
            title="Guest Researcher"
            company="Climate + Tech Thinktank + AI for Climate Risk, ESG and Adaptation | Berlin, Germany"
            description={[
              "Led cross-functional teams on ESG reporting frameworks, resulting in 20% improved client alignment with sustainability goals",
              "Developed machine learning models to forecast energy demand, enhancing forecast accuracy by 15%",
              "Conducted time series forecasting to assess energy demand patterns, contributing to a 25% reduction in forecast error",
              "Collaborated on policy recommendations, leading to a 10% improvement in worker productivity metrics in climate-affected regions",
            ]}
          />
          <ExperienceItem
            period="September 2022 - February 2023"
            title="Solar Project Developer"
            company="Sustaining Dunbar | Dunbar, Scotland"
            description={[
              "Completed feasibility study for 20 MW solar park, increasing projected energy yield by 15% through optimized panel placement",
              "Developed financial models resulting in a 20% increase in investor confidence for risk assessment scenarios",
              "Reduced project costs by 10% through improved procurement and design optimization techniques",
              "Directed regulatory compliance efforts, achieving 100% permit acquisition rate and fostering positive stakeholder relations",
            ]}
          />
        </MainSection>

        <MainSection title="Education">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold">Iron Hack</h3>
              <p className="text-sm">Full Stack Web Development</p>
              <p className="text-sm text-gray-500">
                Berlin, Germany | June 2024 - August 2024
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Europa Universität Flensburg</h3>
              <p className="text-sm">
                Master of Engineering, Energy and Environmental Management
              </p>
              <p className="text-sm text-gray-500">
                Flensburg, Germany | September 2021 - September 2023
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                University of Mines and Technology
              </h3>
              <p className="text-sm">
                Bachelor of Science, Electrical and Electronics Engineering
              </p>
              <p className="text-sm text-gray-500">
                Tarkwa, Ghana | November 2013 - July 2017
              </p>
            </div>
          </div>
        </MainSection>

        <MainSection title="Projects">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <h3 className="font-semibold">Senstate</h3>
              <p className="text-sm">
                A real-estate web application for property listings
              </p>
              <p className="text-sm text-blue-600">
                Technologies: React, Node.js, Express, OAuth, Firebase
              </p>
              <a
                href="https://senstate.up.railway.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline flex items-center mt-1"
              >
                <Globe size={14} className="mr-1" /> View Project
              </a>
            </div>
            <div>
              <h3 className="font-semibold">Energy Demand Forecast</h3>
              <p className="text-sm">
                Forecasting model for energy demand in Ontario, Canada
              </p>
              <p className="text-sm text-blue-600">
                Technologies: Python, R, SQL, Prophet
              </p>
              <a
                href="https://github.com/Senalniho/Ontario_Demand_Forecast/tree/main/Energy%20Forecast"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline flex items-center mt-1"
              >
                <Link size={14} className="mr-1" /> View Project
              </a>
            </div>
          </div>
        </MainSection>

        <MainSection title="Mentoring & Volunteering">
          <ul className="list-disc list-inside">
            <li>
              Mentored 20 graduates, guiding them to secure fully funded
              scholarships for further studies
            </li>
            <li>
              Conducted training sessions on Lean Technologies and Six Sigma,
              focusing on process improvement and organizational health and
              safety practices
            </li>
          </ul>
        </MainSection>
      </div>
    </div>
  );
};

export default Home1;
