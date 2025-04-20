export const projects = [
  {
    id: 1,
    title: "Twomatches B2B Business",
    subtitle:
      "A community platform for retailers and brands to sell collaboratively",
    description:
      "Fahim played a pivotal role in assisting Twomatches, a community platform designed for retailers and brands to collaborate on sales. We were instrumental in both the creation and deployment of their site on AWS. Expertise ensured a seamless transition to the cloud, allowing Twomatches to benefit from increased scalability, security, and performance. With our support, Twomatches was empowered to provide an optimal online experience for its users.",
    techicalOverview: `Fahim played an instrumental role in deploying Twomatches, a community platform for retailers and brands, onto the robust Amazon Web Services (AWS) cloud platform. The architectural foundation of Twomatches was crafted with a frontend built on ReactJS/Redux, ensuring a responsive user interface. The backend was anchored by the powerful combination of Node.js and Express.js, creating a scalable server environment primed for growth. Data integrity and structured storage were paramount, which led to the decision to integrate Amazon RDS with PostgreSQL.

    The beauty of deploying on AWS is the inherent scalability and flexibility it offers. Twomatches was hosted on Amazon EC2 instances, which allowed the platform to scale vertically based on the influx of traffic and user demand. Furthermore, static assets—ranging from images to documents—found a home in Amazon S3, renowned for its reliability. AWS's Auto Scaling capabilities were also harnessed to ensure that the platform could adapt to varying traffic loads without manual intervention.
    
    Security, a non-negotiable in today's digital landscape, was rigorously addressed. A Virtual Private Cloud (VPC) was set up to isolate resources, ensuring that Twomatches operated in a safe and contained environment. Coupled with AWS's Identity and Access Management (IAM), the platform was fortified against unauthorized access and potential breaches. Adding another layer of security, data transmission was encrypted using SSL certificates.
    
    To complement the structured data storage in RDS, Amazon DynamoDB was employed in instances where NoSQL storage was beneficial, offering high performance and scalability. With user experience at the forefront, performance optimization was a priority. To achieve this, Amazon CloudFront's Content Delivery Network was implemented, ensuring users across the globe experienced minimal latency. Moreover, Elastic Load Balancing was leveraged to evenly distribute incoming traffic among multiple EC2 instances.
    
    Lastly, the vitality of monitoring and logging wasn't overlooked. Amazon CloudWatch was integrated to keep a vigilant eye on the application's overall health and performance. And for those unforeseen instances where in-depth debugging was required, AWS X-Ray was at the ready to trace and resolve issues.`,
    takeaway:
      "Fahim's exemplary technical prowess was essential in the evolution and deployment of Twomatches on AWS, a pioneering community platform for retailers and brands. Many fledgling platforms often grapple with the intricate facets of cloud deployment and ensuring a seamless user experience. This is where Fahim shone, offering not only the technical know-how but also the strategic foresight for scalable architecture. Twomatches, through its collaboration with Fahim, not only addressed its immediate digital needs but also secured a robust foundation for anticipated business expansion. As Twomatches forges ahead in its domain, it does so with the confidence that Fahim expertise has equipped it with a resilient and adaptive platform.",
    client: {
      name: "Amos Omokpo",
      designation: "Staff Engineer, IBM",
      review:
        "Collaborating with Fahim has been a game-changer for Twomatches. In an era where digital presence can make or break a brand, Fahim proved to be the reliable partner we were seeking.",
    },
    category: "Web Development",
    thumbnail: "/images/thumbnail.jpg",
    images: [
      "/images/twoMatches-01.jpg",
      "/images/twomatches-02.jpg",
      "/images/twomatches-03.jpg",
    ],
    webUrl: "https://twomatches.xyz/",
    technologies: [
      "ReactJS",
      "NextJS",
      "Redux",
      "Node.js",
      "Express.js",
      "Amazon RDS (Relational Database Service)",
      "MySQL",
      "Amazon S3 (Simple Storage Service)",
      "Microservices",
      "Amazon EC2",
      "Amazon CloudWatch",
      "Elastic Load Balancing",
      "Auto Scaling",
    ],
    services: [
      "Software Consulting",
      "Devops",
      "Hosting",
      "AWS",
      "Ongoing Support/Maintenance",
      "UX Design",
    ],
  },
  {
    id: 2,
    title: "FreeCast",
    subtitle:
      "A innovative platform combines all your streaming apps into one user-friendly interface",
    description:
      "FreeCast, Inc. is an American digital media distribution company based in Orlando, Florida. The company is the developer of Rabbit TV, a web-based video aggregator and subscription service that provides access to third-party content. FreeCast's SmartGuide technology is the basis of SelectTV, a streaming media aggregation service that combines all your streaming apps into one user-friendly interface.",
    techicalOverview:
      "Fahim helped to build web platform using ReactJS, Typescript, Redux, Python, Fast API, AWS, and many more. We also provide ongoing support and maintenance for their platform. ",
    // Write takeaway here
    takeaway:
      "For over 2 years Fahim has been working with FreeCast to build their web platform and have combined seamlessly to produce a high volume of websites and digital solutions for customers nationwide. Fahim has been a reliable developer for FreeCast and has helped them to achieve their business goals. ",

    client: {
      name: "",
      designation: "",
      review:
        "We respect honesty and we respect hard work. You have shown us both. It is a pleasure to work with people who demonstrate excellence in all they do.",
    },
    category: "Web Development",
    thumbnail: "/images/freecast-landing.png",
    images: [
      "/images/Freecast.png",
      "/images/freecast-landing.png",
      "/images/Freecast-2.png",
    ],
    webUrl: "https://freecast.com/",
    technologies: ["ReactJS", "Typescipt", "Redux", "Python", "Fast API"],
    services: [
      "Software Consulting",
      "Devops",
      "Hosting",
      "AWS",
      "Ongoing Support/Maintenance",
      "UX Design",
    ],
  },
  {
    id: 3,
    title: "Shoutt Freelancer Platform",
    subtitle:
      "A platform that connects freelancers with clients in a seamless manner",
    description:
      "Fahim helped Shoutt to build their web platform using ReactJS, Typescript, Redux, Python, Fast API, AWS, and many more. We also provide ongoing support and maintenance for their platform. ",
    techicalOverview: `Fahim helped Shoutt to build their web platform using .NET Core, C#, ReactJS, Typescript, Azure and many more. Like many digital freelancing platform, their strength lies in their marketing expertise, creativity, and ability to create and build brands. To match their marketing skill, they need an equally strong technical team that can help them continue to innovate and bring a variety of digital solutions to the table.`,
    takeaway:
      "From DevOps, hosting solutions, UX design and development, Fahim matches the resources to the needs presenting and even offering weekend and evening support for critical initiatives.  ",
    client: {
      name: "Saleem Khan",
      designation: "Shoutt, CEO",
      review:
        "Fahim has been a great developer for us. They are reliable, responsive, and deliver high-quality work.",
    },
    category: "Web Development",
    thumbnail: "/images/shoutt-04.png",
    images: [
      "/images/shoutt-long-1.png",
      "/images/shoutt-04.png",
      "/images/shoutt-002.png",
    ],
    webUrl: "https://shoutt-dev.azurewebsites.net/",
    technologies: [
      "ReactJS",
      "NextJS",
      "Redux",
      "Node.js",
      "Express.js",
      "Amazon RDS (Relational Database Service)",
      "MySQL",
      "Amazon S3 (Simple Storage Service)",
      "Microservices",
      "Amazon EC2",
      "Amazon CloudWatch",
      "Elastic Load Balancing",
      "Auto Scaling",
    ],
    services: [
      "Software Consulting",
      "Devops",
      "Hosting",
      "AWS",
      "Ongoing Support/Maintenance",
      "UX Design",
    ],
  },
  {
    id: 4,
    title: "GetDone Maintenance Management",
    subtitle: "Redefining Maintenance Management",
    description:
      "Simplify, optimize, and elevate your maintenance management tasks with GetDone. Designed with efficiency in mind, our tool automates processes, expedites work order resolutions, and leverages machine learning to ensure consistency and quality in every job.",
    techicalOverview: `Automated Workflows: Say goodbye to manual processes. From job sorting to work order processing, automation ensures efficiency and client satisfaction.

    Machine Learning: Adapt and learn from every job, guaranteeing enhanced consistency and reducing follow-up tasks.
    
    Actionable Data Insights: Equip decision-makers with robust data-driven recommendations, enhancing operational efficiency.
    
    Communication Streamlining: Keep everyone on the same page. Our platform facilitates expectation management, leading to reduced turnovers and heightened satisfaction.
    
    Built on React Native: Seamless performance across devices ensures that you can manage and oversee tasks from anywhere.`,
    takeaway: `GetDone is more than just a management tool; it's your partner in achieving excellence in maintenance operations. With smarter processes and data-driven insights, redefine how you handle maintenance tasks and delight your clients every single time.`,
    client: {
      name: "",
      designation: "",
      review:
        "In the maintenance business, time is of the essence. GetDone has transformed the way we handle our operations. From quicker resolutions to intelligent task handling, we've experienced heightened client satisfaction and increased ROI.",
    },
    category: "App Development",
    thumbnail: "/images/getdone-thumbnail.jpg",
    images: [
      "/images/GetDone.png",
      "/images/getdone-thumbnail.jpg",
      "/images/Contact-GetDone-to-Learn-More.png",
    ],
    webUrl: "https://www.getdone.com/",
    technologies: [
      "React Native",
      "Typescipt",
      "Redux",
      "Node.js",
      "Express.js",
      "AWS",
    ],
    services: [
      "App Development",
      "React Native",
      "Mobile Development",
      "Hybrid App",
      "AWS",
      "Ongoing Support/Maintenance",
      "UX Design",
    ],
  },
  {
    id: 5,
    title: "OwnProp - The Future of Fractional Investing",
    subtitle: "Democratizing Real Estate Investment",
    description:
      "OwnProp revolutionizes the traditional real estate investment landscape by offering a platform to invest in fractionalized properties. With minimal entry barriers and enhanced liquidity, we combine the power of blockchain technology and regulatory compliance to usher in a new era of property investment.",
    techicalOverview: `Blockchain Integration: Secure, transparent, and decentralized property tokenization to ensure every transaction and ownership detail is immutable and verifiable.

    Robust Financial Analysis: Comprehensive financial breakdowns give investors the insights they need to make informed choices.
    
    Interactive Property Profiles: In-depth property specifics, virtual tours, and localized data give a 360-degree view of potential investments.
    
    Digital Dataroom: A repository filled with essential property documentation, ensuring investors have all they need at their fingertips.
    
    Platform Compatibility: Built with React Native for mobile applications and a sophisticated web version for broader accessibility.`,
    takeaway: `Step into the future of real estate investing. With OwnProp, dive deep into detailed property profiles, leverage robust financial insights, and confidently own tokenized properties backed by blockchain.`,
    client: {
      name: "",
      designation: "",
      review:
        "As a new-age investor, OwnProp's platform is exactly what I was looking for. The seamless integration of traditional real estate with cutting-edge technology ensures that my investments are not only secure but also profitable",
    },
    category: "App Development",
    thumbnail: "/images/Property-Details.png",
    images: [
      "/images/OwnProp-Generate-wealth-by-investing-in-fractional-real-estate.png",
      "/images/OwnProp-Thumbnail.webp",
      "/images/ownprop-1.png",
    ],
    webUrl: "https://app.ownprop.com/",
    technologies: [
      "React Native",
      "Typescipt",
      "Redux",
      "Node.js",
      "Express.js",
      "AWS",
    ],
    services: [
      "App Development",
      "React Native",
      "Mobile Development",
      "Hybrid App",
      "AWS",
      "Ongoing Support/Maintenance",
      "UX Design",
    ],
  },
  {
    id: 6,
    title: "Real Estate Data Scraper",
    subtitle: "Revolutionizing Real Estate Data Collection",
    description:
      "Harness the power of web scraping with state-of-the-art tool designed specifically for comprehensive real estate data collection. Our tool navigates the vast digital landscape, extracting valuable property data from multiple websites to equip you with actionable insights in one consolidated dashboard.",
    techicalOverview: `Scraping Engine: Leveraging advanced algorithms that swiftly navigate through diverse real estate sites, ensuring comprehensive data extraction.

    Data Consolidation: Collected data is refined and unified, eliminating redundancies and inconsistencies.
    
    Real-Time Analysis: Benefit from our on-the-fly data processing that offers current insights into the market.
    
    User-Friendly Dashboard: All acquired data is presented in an intuitive and interactive interface, ensuring easy access and comprehension.
    
    Scalable Architecture: Designed to accommodate expanding data sources, our scraper evolves with the ever-growing digital real estate landscape.
    
    Secure Operation: Data privacy is paramount. Our tool operates under stringent security measures, ensuring that the data collected remains confidential and is used ethically.`,
    takeaway:
      "Gain a competitive edge in the real estate market with in-depth, accurate, and up-to-date property data. Real Estate Data Scraper allows you to stay informed, make data-driven decisions, and maximize your real estate investments.",
    client: {
      name: "",
      designation: "",
      review:
        "I've been in the real estate business for over a decade, and tool has been a game-changer. The wealth of information it provides, combined with its ease of use, has given us a significant advantage in the market.",
    },
    category: "Automation",
    thumbnail: "/images/scraping-1.jpg",
    images: [
      "/images/projects/automation/tennessee-real-state-data/search-result.png",
      "/images/scraping-1.jpg",
      "/images/projects/automation/tennessee-real-state-data/properties.png",
    ],
    webUrl: "https://tnmap.tn.gov/",
    technologies: [
      "Selenium",
      "Python",
      "BeautifulSoup",
      "API",
      "Web Scraping",
    ],

    services: ["Web Scraping", "Automation", "Data Collection", "Data Mining"],
  },
];

export const projectsGerman = [
  {
    id: 1,
    title: "Twomatches B2B-Geschäft",
    subtitle:
      "Eine Community-Plattform für Einzelhändler und Marken zum gemeinsamen Verkauf",
    description:
      "Novawork spielte eine entscheidende Rolle bei der Unterstützung von Twomatches, einer Community-Plattform, die Einzelhändlern und Marken die Zusammenarbeit beim Verkauf ermöglicht. Wir waren maßgeblich an der Erstellung und Bereitstellung ihrer Website auf AWS beteiligt. Unser Fachwissen sorgte für einen nahtlosen Übergang in die Cloud, sodass Twomatches von erhöhter Skalierbarkeit, Sicherheit und Leistung profitieren konnte. Mit unserer Unterstützung war Twomatches in der Lage, seinen Benutzern ein optimales Online-Erlebnis zu bieten.",
    techicalOverview: `Novawork spielte eine entscheidende Rolle bei der Bereitstellung von Twomatches, einer Community-Plattform für Einzelhändler und Marken, auf der robusten Cloud-Plattform Amazon Web Services (AWS). Die architektonische Grundlage von Twomatches wurde mit einem auf ReactJS/Redux basierenden Frontend erstellt, das eine reaktionsfähige Benutzeroberfläche gewährleistet. Das Backend wurde durch die leistungsstarke Kombination von Node.js und Express.js verankert, wodurch eine skalierbare Serverumgebung geschaffen wurde, die für Wachstum gerüstet ist. Datenintegrität und strukturierte Speicherung waren von größter Bedeutung, was zu der Entscheidung führte, Amazon RDS mit PostgreSQL zu integrieren.

    Das Schöne an der Bereitstellung auf AWS ist die inhärente Skalierbarkeit und Flexibilität, die sie bietet. Twomatches wurde auf Amazon EC2-Instanzen gehostet, was eine vertikale Skalierung der Plattform basierend auf dem Zustrom von Datenverkehr und der Benutzernachfrage ermöglichte. Darüber hinaus fanden statische Assets – von Bildern bis zu Dokumenten – in Amazon S3 ein Zuhause, das für seine Zuverlässigkeit bekannt ist. Auch die Auto Scaling-Funktionen von AWS wurden genutzt, um sicherzustellen, dass sich die Plattform ohne manuelles Eingreifen an unterschiedliche Verkehrslasten anpassen kann.
    
    Sicherheit, ein nicht verhandelbares Thema in der heutigen digitalen Landschaft, wurde rigoros angegangen. Zur Isolierung von Ressourcen wurde eine Virtual Private Cloud (VPC) eingerichtet, um sicherzustellen, dass Twomatches in einer sicheren und geschlossenen Umgebung betrieben wird. In Verbindung mit dem Identity and Access Management (IAM) von AWS wurde die Plattform gegen unbefugten Zugriff und potenzielle Verstöße geschützt. Als zusätzliche Sicherheitsebene wurde die Datenübertragung mithilfe von SSL-Zertifikaten verschlüsselt.
    
    Als Ergänzung zur strukturierten Datenspeicherung in RDS wurde Amazon DynamoDB in Fällen eingesetzt, in denen NoSQL-Speicher von Vorteil war und eine hohe Leistung und Skalierbarkeit bot. Da die Benutzererfahrung im Vordergrund stand, hatte die Leistungsoptimierung Priorität. Um dies zu erreichen, wurde das Content Delivery Network von Amazon CloudFront implementiert, um sicherzustellen, dass Benutzer auf der ganzen Welt eine minimale Latenz erfahren. Darüber hinaus wurde Elastic Load Balancing genutzt, um den eingehenden Datenverkehr gleichmäßig auf mehrere EC2-Instanzen zu verteilen.
    Schließlich wurde die Wichtigkeit der Überwachung und Protokollierung nicht übersehen. Amazon CloudWatch wurde integriert, um den Gesamtzustand und die Leistung der Anwendung im Auge zu behalten. Und für unvorhergesehene Fälle, in denen eine umfassende Fehlersuche erforderlich war, stand AWS X-Ray bereit, um Probleme aufzuspüren und zu lösen.`,
    takeaway:
      "Die beispielhaften technischen Fähigkeiten von Novawork waren entscheidend für die Entwicklung und Bereitstellung von Twomatches auf AWS, einer bahnbrechenden Community-Plattform für Einzelhändler und Marken. Viele junge Plattformen kämpfen oft mit den komplizierten Aspekten der Cloud-Bereitstellung und der Gewährleistung eines nahtlosen Benutzererlebnisses. Hier glänzte Novawork und bot nicht nur das technische Know-how, sondern auch den strategischen Weitblick für skalierbare Architektur. Twomatches hat durch die Zusammenarbeit mit Novawork nicht nur seine unmittelbaren digitalen Bedürfnisse erfüllt, sondern auch eine solide Grundlage für die erwartete Geschäftsausweitung geschaffen. Während Twomatches in seinem Bereich voranschreitet, ist es davon überzeugt, dass das Unternehmen durch die Expertise von Novawork mit einer belastbaren und anpassungsfähigen Plattform ausgestattet ist.",
    client: {
      name: "Amos Omokpo",
      designation: "Staff Engineer, IBM",
      review:
        "Collaborating with Novawork has been a game-changer for Twomatches. In an era where digital presence can make or break a brand, Novawork proved to be the reliable partner we were seeking.",
    },
    category: "Web Development",
    thumbnail: "/images/thumbnail.jpg",
    images: [
      "/images/twoMatches-01.jpg",
      "/images/twomatches-02.jpg",
      "/images/twomatches-03.jpg",
    ],
    webUrl: "https://twomatches.xyz/",
    technologies: [
      "ReactJS",
      "NextJS",
      "Redux",
      "Node.js",
      "Express.js",
      "Amazon RDS (Relational Database Service)",
      "MySQL",
      "Amazon S3 (Simple Storage Service)",
      "Microservices",
      "Amazon EC2",
      "Amazon CloudWatch",
      "Elastic Load Balancing",
      "Auto Scaling",
    ],
    services: [
      "Software Consulting",
      "Devops",
      "Hosting",
      "AWS",
      "Ongoing Support/Maintenance",
      "UX Design",
    ],
  },
  {
    id: 2,
    title: "FreeCast",
    subtitle:
      "Eine innovative Plattform vereint alle Ihre Streaming-Apps in einer benutzerfreundlichen Oberfläche",
    description:
      "FreeCast, Inc. ist ein amerikanisches Vertriebsunternehmen für digitale Medien mit Sitz in Orlando, Florida. Das Unternehmen ist Entwickler von Rabbit TV, einem webbasierten Videoaggregator und Abonnementdienst, der Zugriff auf Inhalte Dritter bietet. Die SmartGuide-Technologie von FreeCast ist die Grundlage von SelectTV, einem Streaming-Medien-Aggregationsdienst, der alle Ihre Streaming-Apps in einer benutzerfreundlichen Oberfläche vereint.",

    techicalOverview:
      "Novawork arbeitet mit FreeCast zusammen, um seine Webplattform mit ReactJS, Typescript, Redux, Python, Fast API, AWS und vielen mehr aufzubauen. Wir bieten auch fortlaufenden Support und Wartung für ihre Plattform. ",
    takeaway:
      "Seit über zwei Jahren arbeitet Novawork mit FreeCast zusammen, um deren Webplattform aufzubauen, und hat sich nahtlos zusammengetan, um eine große Anzahl an Websites und digitalen Lösungen für Kunden im ganzen Land zu erstellen. Novawork war ein zuverlässiger Partner für FreeCast und hat ihnen geholfen, ihre Geschäftsziele zu erreichen.",

    client: {
      name: "",
      designation: "",
      review:
        "We respect honesty and we respect hard work. You have shown us both. It is a pleasure to work with people who demonstrate excellence in all they do.",
    },
    category: "Web Development",
    thumbnail: "/images/freecast-landing.png",
    images: [
      "/images/Freecast.png",
      "/images/freecast-landing.png",
      "/images/Freecast-2.png",
    ],
    webUrl: "https://freecast.com/",
    technologies: ["ReactJS", "Typescipt", "Redux", "Python", "Fast API"],
    services: [
      "Software Consulting",
      "Devops",
      "Hosting",
      "AWS",
      "Ongoing Support/Maintenance",
      "UX Design",
    ],
  },
  {
    id: 3,
    title: "Shoutt Freelancer Platform",
    subtitle: "Eine Plattform, die Freiberufler nahtlos mit Kunden verbindet",
    description:
      "Novawork arbeitet mit Shoutt zusammen, um seine Webplattform mit ReactJS, Typescript, Redux, Python, Fast API, AWS und vielen mehr aufzubauen. Wir bieten auch fortlaufenden Support und Wartung für ihre Plattform.",
    techicalOverview:
      "Novawork arbeitet mit Shoutt zusammen, um seine Webplattform mit .NET Core, C#, ReactJS, Typescript, Azure und vielen mehr aufzubauen. Wie bei vielen digitalen Freelance-Plattformen liegt ihre Stärke in ihrer Marketingkompetenz, Kreativität und Fähigkeit, Marken zu schaffen und aufzubauen. Um ihren Marketingfähigkeiten gerecht zu werden, benötigen sie ein ebenso starkes technisches Team, das ihnen dabei helfen kann, weiterhin innovativ zu sein und eine Vielzahl digitaler Lösungen auf den Markt zu bringen.",
    takeaway:
      "Von DevOps über Hosting-Lösungen bis hin zu UX-Design und -Entwicklung passt Novawork die Ressourcen an die Bedürfnisse an und bietet sogar Wochenend- und Abendunterstützung für kritische Initiativen an. Durch die Bereitstellung eines engagierten und dennoch flexiblen Teams von 4–6 Novawork-Ressourcen, die jeden Monat zur Verfügung stehen, kann MKJ Schwankungen und Nachfragen gerecht werden, sich aber auch angemessen reduzieren, um den Bedürfnissen seiner Kunden gerecht zu werden.",
    client: {
      name: "Saleem Khan",
      designation: "Shoutt, CEO",
      review:
        "Novawork has been a great partner for us. They are reliable, responsive, and deliver high-quality work.",
    },
    category: "Web Development",
    thumbnail: "/images/shoutt-04.png",
    images: [
      "/images/shoutt-long-1.png",
      "/images/shoutt-04.png",
      "/images/shoutt-002.png",
    ],
    webUrl: "https://shoutt-dev.azurewebsites.net/",
    technologies: [
      "ReactJS",
      "NextJS",
      "Redux",
      "Node.js",
      "Express.js",
      "Amazon RDS (Relational Database Service)",
      "MySQL",
      "Amazon S3 (Simple Storage Service)",
      "Microservices",
      "Amazon EC2",
      "Amazon CloudWatch",
      "Elastic Load Balancing",
      "Auto Scaling",
    ],
    services: [
      "Software Consulting",
      "Devops",
      "Hosting",
      "AWS",
      "Ongoing Support/Maintenance",
      "UX Design",
    ],
  },
  {
    id: 4,
    title: "GetDone Wartungsmanagement",
    subtitle: "Wartungsmanagement neu definiert",
    description:
      "Vereinfachen, optimieren und steigern Sie Ihre Wartungsmanagementaufgaben mit GetDone. Unser auf Effizienz ausgelegtes Tool automatisiert Prozesse, beschleunigt die Lösung von Arbeitsaufträgen und nutzt maschinelles Lernen, um Konsistenz und Qualität bei jedem Auftrag sicherzustellen.",

    techicalOverview: `Automatisierte Arbeitsabläufe: Verabschieden Sie sich von manuellen Prozessen. Von der Auftragssortierung bis zur Arbeitsauftragsbearbeitung sorgt die Automatisierung für Effizienz und Kundenzufriedenheit.
    Maschinelles Lernen: Passen Sie sich an jeden Auftrag an und lernen Sie daraus, um eine höhere Konsistenz zu gewährleisten und Folgeaufgaben zu reduzieren. Umsetzbare Dateneinblicke: Statten Sie Entscheidungsträger mit fundierten datengesteuerten Empfehlungen aus und steigern Sie so die betriebliche Effizienz. Optimierung der Kommunikation: Halten Sie alle auf dem gleichen Stand. Unsere Plattform erleichtert das Erwartungsmanagement, was zu geringeren Fluktuationen und erhöhter Zufriedenheit führt. Basierend auf React Native: Nahtlose Leistung auf allen Geräten stellt sicher, dass Sie Aufgaben von überall aus verwalten und überwachen können.`,
    takeaway:
      "GetDone ist mehr als nur ein Verwaltungstool; Es ist Ihr Partner bei der Erzielung hervorragender Wartungsarbeiten. Definieren Sie mit intelligenteren Prozessen und datengesteuerten Erkenntnissen die Art und Weise, wie Sie Wartungsaufgaben erledigen, neu und begeistern Sie Ihre Kunden jedes Mal aufs Neue.",
    client: {
      name: "",
      designation: "",
      review:
        "In the maintenance business, time is of the essence. GetDone has transformed the way we handle our operations. From quicker resolutions to intelligent task handling, we've experienced heightened client satisfaction and increased ROI.",
    },
    category: "App Development",
    thumbnail: "/images/getdone-thumbnail.jpg",
    images: [
      "/images/GetDone.png",
      "/images/getdone-thumbnail.jpg",
      "/images/Contact-GetDone-to-Learn-More.png",
    ],
    webUrl: "https://www.getdone.com/",
    technologies: [
      "React Native",
      "Typescipt",
      "Redux",
      "Node.js",
      "Express.js",
      "AWS",
    ],
    services: [
      "App Development",
      "React Native",
      "Mobile Development",
      "Hybrid App",
      "AWS",
      "Ongoing Support/Maintenance",
      "UX Design",
    ],
  },
  {
    id: 5,
    title: "OwnProp – Die Zukunft des fraktionierten Investierens",
    subtitle: "Demokratisierung von Immobilieninvestitionen",
    description:
      "OwnProp revolutioniert die traditionelle Immobilieninvestitionslandschaft, indem es eine Plattform für Investitionen in fragmentierte Immobilien bietet. Mit minimalen Eintrittsbarrieren und erhöhter Liquidität kombinieren wir die Leistungsfähigkeit der Blockchain-Technologie und die Einhaltung gesetzlicher Vorschriften, um eine neue Ära der Immobilieninvestitionen einzuleiten.",
    techicalOverview: `Blockchain-Integration: Sichere, transparente und dezentrale Tokenisierung von Eigentum, um sicherzustellen, dass jede Transaktion und jedes Eigentumsdetail unveränderlich und überprüfbar ist.
    Robuste Finanzanalyse: Umfassende Finanzaufschlüsselungen geben Anlegern die Einblicke, die sie benötigen, um fundierte Entscheidungen zu treffen. Interaktive Immobilienprofile: Detaillierte Immobiliendetails, virtuelle Rundgänge und lokalisierte Daten bieten einen 360-Grad-Blick auf potenzielle Investitionen. Digitaler Datenraum: Ein Repository voller wichtiger Immobiliendokumente, das sicherstellt, dass Investoren alles, was sie brauchen, immer zur Hand haben. Plattformkompatibilität: Entwickelt mit React Native für mobile Anwendungen und einer ausgefeilten Webversion für eine breitere Zugänglichkeit.
    `,
    takeaway:
      "Betreten Sie die Zukunft des Immobilieninvestments. Tauchen Sie mit OwnProp tief in detaillierte Immobilienprofile ein, nutzen Sie fundierte finanzielle Erkenntnisse und besitzen Sie sicher tokenisierte Immobilien, die durch Blockchain unterstützt werden.",
    client: {
      name: "",
      designation: "",
      review:
        "As a new-age investor, OwnProp's platform is exactly what I was looking for. The seamless integration of traditional real estate with cutting-edge technology ensures that my investments are not only secure but also profitable",
    },
    category: "App Development",
    thumbnail: "/images/Property-Details.png",
    images: [
      "/images/OwnProp-Generate-wealth-by-investing-in-fractional-real-estate.png",
      "/images/OwnProp-Thumbnail.webp",
      "/images/ownprop-1.png",
    ],
    webUrl: "https://app.ownprop.com/",
    technologies: [
      "React Native",
      "Typescipt",
      "Redux",
      "Node.js",
      "Express.js",
      "AWS",
    ],
    services: [
      "App Development",
      "React Native",
      "Mobile Development",
      "Hybrid App",
      "AWS",
      "Ongoing Support/Maintenance",
      "UX Design",
    ],
  },
  {
    id: 6,
    title: "Immobiliendaten-Scraper",
    subtitle: "Revolutionierung der Immobiliendatenerfassung",
    description:
      "Nutzen Sie die Leistungsfähigkeit des Web Scraping mit dem hochmodernen Tool von Novawork, das speziell für die umfassende Erfassung von Immobiliendaten entwickelt wurde. Unser Tool navigiert durch die riesige digitale Landschaft und extrahiert wertvolle Immobiliendaten von mehreren Websites, um Ihnen umsetzbare Erkenntnisse in einem konsolidierten Dashboard zu liefern.",

    techicalOverview: `Scraping Engine: Nutzung fortschrittlicher Algorithmen, die schnell durch verschiedene Immobilienseiten navigieren und so eine umfassende Datenextraktion gewährleisten.
    Datenkonsolidierung: Die gesammelten Daten werden verfeinert und vereinheitlicht, wodurch Redundanzen und Inkonsistenzen vermieden werden. Echtzeitanalyse: Profitieren Sie von unserer On-the-fly-Datenverarbeitung, die aktuelle Einblicke in den Markt bietet. Benutzerfreundliches Dashboard: Alle erfassten Daten werden in einer intuitiven und interaktiven Oberfläche dargestellt, die einen einfachen Zugriff und ein einfaches Verständnis gewährleistet. Skalierbare Architektur: Unser Scraper wurde für die Aufnahme wachsender Datenquellen entwickelt und entwickelt sich mit der ständig wachsenden digitalen Immobilienlandschaft weiter.`,
    takeaway:
      "Verschaffen Sie sich einen Wettbewerbsvorteil auf dem Immobilienmarkt mit detaillierten, genauen und aktuellen Immobiliendaten. Mit dem Real Estate Data Scraper von Novawork bleiben Sie informiert, treffen datengesteuerte Entscheidungen und maximieren Ihre Immobilieninvestitionen.",

    client: {
      name: "",
      designation: "",
      review:
        "I've been in the real estate business for over a decade, and Novawork's tool has been a game-changer. The wealth of information it provides, combined with its ease of use, has given us a significant advantage in the market.",
    },
    category: "Automation",
    thumbnail: "/images/scraping-1.jpg",
    images: [
      "/images/projects/automation/tennessee-real-state-data/search-result.png",
      "/images/scraping-1.jpg",
      "/images/projects/automation/tennessee-real-state-data/properties.png",
    ],
    webUrl: "https://tnmap.tn.gov/",
    technologies: [
      "Selenium",
      "Python",
      "BeautifulSoup",
      "API",
      "Web Scraping",
    ],

    services: ["Web Scraping", "Automation", "Data Collection", "Data Mining"],
  },
];
