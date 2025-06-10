function ServicesPage() {
    const services = [
        {
            title: "Audit & Assurance",
            items: [
                "Statutory audit",
                "Tax audit",
                "Cost audit",
                "Bank Concurrent audit",
                "Stock audit",
                "Revenue audit"
            ]
        },
        {
            title: "Risk Advisory",
            items: [
                "Internal audit",
                "Internal Financial Controls",
                "Compliance audit"
            ]
        },
        {
            title: "Business Support Services",
            items: [
                "Company & LLP formation",
                "Accounting and bookkeeping services also cloud based maintenance of accounts",
                "Cost record maintenance",
                "Costing MIS",
                "ERP development and implementation",
                "Design and implementation of SOP",
                "Payroll compliance",
                "Fixed asset management"
            ]
        },
        {
            title: "Consulting",
            items: [
                "Cost of production evaluation",
                "Pricing decision",
                "Budget - Planning, monitoring and analysis",
                "Subsidy and incentives"
            ]
        },
        {
            title: "Taxation",
            items: [
                "Tax advisory",
                "Corporate taxation",
                "Individual and partnership taxation",
                "Departmental scrutiny and assessments proceedings",
                "TDS compliances and filings",
                "GST registration",
                "GST - Compliances and return filings",
                "Refunds"
            ]
        },
        {
            title: "Project Finance",
            items: [
                "Ascertaining financial needs and structuring",
                "Preparation of Detailed Project Reports (DPR)",
                "Preparation of CMA reports",
                "Liasoning and coordinating with banks"
            ]
        }
    ];

    return (
        <div>
            {/* Header Section */}
            <section className="text-center pt-35 pb-10 px-5">
                <h1 className="text-5xl mb-5">Our Services</h1>
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-10 mb-12">
                        <h2 className="text-2xl font-semibold text-amber-600">What We Offer</h2>
                        <div className="md:w-2/3 text-left">
                            <p className="text-lg text-gray-700">
                                At NEXTGEN HORIZON CONSULTANTS, we offer a wide range of professional accounting services.
                                From tax preparation to financial consulting, our dedicated team is here to assist you every step of the way.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-12 px-5 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white border-t-4 border-yellow-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 min-h-96"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-amber-600">{service.title}</h3>
                                <ul className="space-y-2">
                                    {service.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="text-gray-700 flex items-start">
                                            <span className="text-amber-600 mr-2">•</span>
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServicesPage;