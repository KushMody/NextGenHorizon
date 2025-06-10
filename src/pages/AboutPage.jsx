import React from 'react';

function AboutPage() {
  const teamMembers = [
    {
      name: "Harsh Gheewala",
      title: "ACA, B.com, Research Analyst (NISM)",
      bio: "Harsh has been involved in the audit of a wide variety of clients and industries, with specific focus on Taxation and audits. His professional work has been in Statutory and Tax audits and Internal audits. He also has good experience in all types of Bank audits like Statutory audit, Concurrent audits and Stock audits. He also has experience in Project finance and project reconciliation related engagements. Previously, he has worked as an Audit senior in Statutory audit department with BDO Oman."
    },
    {
      name: "Nidhi Mody",
      title: "ACMA, DISSA, B.com",
      bio: "Nidhi has been involved in the audit of a wide variety of clients and industries, with specific focus on Costing and GST. Her professional work has been in Cost audits, Bank audits and GST compliances. She also has on-going experience in providing specific MIS reporting and functional support for ERP implementation in companies. She also has experience in pricing decision for various clients and industries. Previously, she has worked as a Business controller with Sterlite Copper, Vedanta Limited."
    }
  ];

  const industries = [
    "Textile Industry",
    "Diamond Industry",
    "Solar Power Industry",
    "Flex Industry",
    "Lab testing service providers",
    "Hospitality Industry",
    "Healthcare & many more"
  ];

  const locations = {
    domestic: ["Gujarat", "Maharastra", "Karnataka", "Telangana"],
    international: ["Oman", "UAE"]
  };

  return (
    <div>
      {/* Team Section */}
      <section className="pt-35 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-3xl mb-2 text-amber-600">{member.name}</h3>
                <p className="text-xl mb-4 text-gray-600 font-semibold">{member.title}</p>
                <p className="text-lg text-gray-700 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries Section */}
      <section className="py-10 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl text-center mb-12">Industry Segments</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-3xl mb-4 text-amber-600">List of Industry segments for major clients</h3>
            <ul className="text-lg text-gray-700 leading-relaxed list-disc pl-5">
              {industries.map((industry, index) => (
                <li key={index} className="mb-2">{industry}</li>
              ))}
            </ul>
          </div>
          
          <h2 className="text-5xl text-center mb-12">Geographical Coverage</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl mb-4 text-amber-600">Within India</h3>
              <ul className="text-lg text-gray-700 leading-relaxed list-disc pl-5">
                {locations.domestic.map((location, index) => (
                  <li key={index} className="mb-2">{location}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl mb-4 text-amber-600">International</h3>
              <ul className="text-lg text-gray-700 leading-relaxed list-disc pl-5">
                {locations.international.map((location, index) => (
                  <li key={index} className="mb-2">{location}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;