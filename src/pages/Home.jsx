import PropTypes from "prop-types";
import {
  Calendar,
  MapPin,
  Mail,
  Linkedin,
  Phone,
  Link,
  Globe,
} from "lucide-react";
const Home = () => {
  const Section = ({ title, children, className = "" }) => (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-200 pb-2">
        {title}
      </h2>
      {children}
    </div>
  );

  Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  const ExperienceItem = ({ period, title, company, description }) => (
    <div className="mb-6 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-indigo-200">
      <div className="absolute left-0 top-0 w-4 h-4 bg-indigo-500 rounded-full -translate-x-1.5"></div>
      <h3 className="text-xl font-semibold text-indigo-600">{title}</h3>
      <p className="text-gray-600 italic mb-2">{company}</p>
      <p className="text-sm text-gray-500 mb-2">{period}</p>
      <ul className="list-disc list-inside">
        {description.map((item, index) => (
          <li key={index} className="text-sm text-gray-700 mb-1">
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
    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full mb-2 inline-block">
      {skill}
    </span>
  );

  SkillTag.propTypes = {
    skill: PropTypes.string.isRequired,
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-br from-indigo-50 to-purple-50 shadow-2xl rounded-lg">
      <header className="text-center mb-12 relative">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-lg"></div>
        <img
          src="src\images\sena.jpeg"
          alt="Senanu Adjabeng"
          className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-white shadow-lg relative z-10"
        />
        <h1 className="text-4xl font-bold text-gray-800 mt-4">
          Senanu Adjabeng
        </h1>
        <p className="text-xl text-indigo-600 mt-2">Master of Engineering</p>
        <div className="flex flex-wrap justify-center space-x-4 mt-4">
          <div className="flex items-center text-gray-600">
            <Phone size={16} className="mr-2" /> +4915226175744
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-2" /> Berlin, DE
          </div>
          <div className="flex items-center text-gray-600">
            <Mail size={16} className="mr-2" /> senanuadjabeng1@gmail.com
          </div>
          <div className="flex items-center text-gray-600">
            <Linkedin size={16} className="mr-2" /> adjabengsenanu
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-2" /> 05.12.1993
          </div>
        </div>
      </header>

      <Section title="Professional Summary">
        <p className="text-gray-700 leading-relaxed">
          Dedicated Master of Engineering graduate with expertise in renewable
          energy, project development, and data analysis. Skilled in leveraging
          AI and machine learning for climate risk assessment and energy
          forecasting. Proven track record of reducing project costs, improving
          operational efficiency, and driving sustainable solutions. Seeking to
          apply my diverse skill set in a challenging role that contributes to
          advancing clean energy initiatives and addressing climate change.
        </p>
      </Section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Section title="Experience">
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
            <ExperienceItem
              period="August 2020 - August 2021"
              title="Project Engineer"
              company="Roots Consult Limited | Nmai-Dzorn, Ghana"
              description={[
                "Managed the installation of electrical systems for large-scale projects, ensuring on-time delivery and adherence to strict quality standards.",
                "Reviewed and approved over 50 electrical construction drawings and ensured compliance with technical specifications and safety regulations.",
                "Played a pivotal role in collaborating with contractors and ensuring smooth project execution in fast-paced, high-pressure environments.",
              ]}
            />
            <ExperienceItem
              period="September 2017 - May 2020"
              title="Production Engineer"
              company="Nexans Kabelmetal Ghana Limited  | Tema, Ghana"
              description={[
                "Achieved a 70% reduction in defective products, boosting production efficiency by 25% through process improvements.",
                "Reduced operational costs by 15% annually via strategic waste minimization and the implementation of lean principles.",
                "Led safety initiatives, achieving 863 consecutive accident-free days and fostering a culture of compliance and safety awareness.",
                "Pioneered new cable product development, expanding the company’s market reach and increasing profitability.",
                "Mentored junior engineers and production staff, enhancing team performance and operational efficiency.",
              ]}
            />
          </Section>
        </div>

        <div>
          <Section title="Skills" className="bg-white rounded-lg shadow-md p-6">
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
              <SkillTag skill="RESTful APIs" />
              <SkillTag skill="HTML5" />
              <SkillTag skill="CSS3" />
              <SkillTag skill="Git" />
              <SkillTag skill="MySQL" />
              <SkillTag skill="PostgreSQL" />
              <SkillTag skill="MongoDB" />
              <SkillTag skill="Firebase" />
              <SkillTag skill="SuperBase" />
              <SkillTag skill="Prisma" />
              <SkillTag skill="Unit Testing" />
              <SkillTag skill="Machine Learning" />
              <SkillTag skill="Agile & Scrum" />
            </div>
          </Section>

          <Section
            title="Languages"
            className="bg-white rounded-lg shadow-md p-6"
          >
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>English</span>
                <span className="text-indigo-600 font-semibold">Native</span>
              </div>
              <div className="flex justify-between">
                <span>French</span>
                <span className="text-indigo-600 font-semibold">
                  Intermediate
                </span>
              </div>
              <div className="flex justify-between">
                <span>German</span>
                <span className="text-indigo-600 font-semibold">
                  Intermediate
                </span>
              </div>
              <div className="flex justify-between">
                <span>Twi</span>
                <span className="text-indigo-600 font-semibold">Native</span>
              </div>
              <div className="flex justify-between">
                <span>Ewe</span>
                <span className="text-indigo-600 font-semibold">Native</span>
              </div>
            </div>
          </Section>

          <Section
            title="Certificates"
            className="bg-white rounded-lg shadow-md p-6"
          >
            <ul className="list-disc list-inside text-sm space-y-2">
              <li>
                Certified Renewable Energy Project Developer, RENAC (2024)
              </li>
              <li>Google Project Management Professional Certificate (2023)</li>
              <li>Google Data Analytics Professional Certificate (2023)</li>
              <li>Spring School Hydrogen Technology (2023)</li>
              <li>
                Environmental Social Governance (ESG) Expert Training (2023)
              </li>
            </ul>
          </Section>
        </div>
      </div>

      <Section title="Education">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg text-indigo-600">Iron Hack</h3>
            <p className="text-gray-700">Full Stack Web Development</p>
            <p className="text-sm text-gray-500">
              Berlin, Germany | June 2024 - August 2024
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg text-indigo-600">
              Europa Universität Flensburg
            </h3>
            <p className="text-gray-700">
              Master of Engineering, Energy and Environmental Management
            </p>
            <p className="text-sm text-gray-500">
              Flensburg, Germany | September 2021 - September 2023
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg text-indigo-600">
              University of Mines and Technology
            </h3>
            <p className="text-gray-700">
              Bachelor of Science, Electrical and Electronics Engineering
            </p>
            <p className="text-sm text-gray-500">
              Tarkwa, Ghana | November 2013 - July 2017
            </p>
          </div>
        </div>
      </Section>

      <Section title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg text-indigo-600">Senstate</h3>
            <p className="text-gray-700">
              A real-estate web application for property listings
            </p>
            <p className="text-sm text-indigo-500">
              Technologies: React, Node.js, Express, OAuth, Firebase
            </p>
            <a
              href="https://senstate.up.railway.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 hover:underline flex items-center mt-2"
            >
              <Globe size={14} className="mr-1" /> View Project
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold text-lg text-indigo-600">
              Energy Demand Forecast
            </h3>
            <p className="text-gray-700">
              Forecasting model for energy demand in Ontario, Canada
            </p>
            <p className="text-sm text-indigo-500">
              Technologies: Python, R, SQL, Prophet
            </p>
            <a
              href="https://github.com/Senalniho/Ontario_Demand_Forecast/tree/main/Energy%20Forecast"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 hover:underline flex items-center mt-2"
            >
              <Link size={14} className="mr-1" /> View Project
            </a>
          </div>
        </div>
      </Section>

      <Section title="Mentoring & Volunteering">
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Mentored 20 graduates, guiding them to secure fully funded
            scholarships for further studies
          </li>
          <li>
            Conducted training sessions on Lean Technologies and Six Sigma,
            focusing on process improvement and organizational health and safety
            practices
          </li>
        </ul>
      </Section>
    </div>
  );
};

export default Home;
