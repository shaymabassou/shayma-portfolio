import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Cloud, Briefcase, GraduationCap, Award, Globe } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const skills = {
    "Langages de Programmation": ["JavaScript", "Python", "Java", "PHP", "C/C++", "Dart"],
    "Frameworks & Bibliothèques": ["React", "Next.js", "Node.js", "Nest.js", "Angular", "Spring Boot", "Symfony", "Laravel", "Flutter"],
    "Bases de Données": ["MongoDB", "MySQL", "PostgreSQL", "GraphQL"],
    "Intelligence Artificielle": ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "NumPy", "Pandas"],
    "DevOps & Cloud": ["Docker", "AWS", "GitHub", "GitLab"],
    "Autres": ["UML", "Postman", "Linux", "Ubuntu", "Windows"]
  };

  const experiences = [
    {
      period: "02/2025 - 06/2025",
      title: "Stage de fin d'études",
      company: "WattzHub - eMobility Operator",
      description: "Intégration du protocole ISO 15118 (Plug and Charge) dans une plateforme de gestion de bornes de recharge pour véhicules électriques.",
      technologies: ["ISO 15118", "Communication bidirectionnelle", "Sécurité", "Automatisation", "Angular", "Node.js" ]
    },
    {
      period: "07/2024 - 09/2024",
      title: "Stage d'été",
      company: "Dundil",
      description: "Développement d'un site vétérinaire pour la gestion des stocks, clients, animaux et historiques médicaux.",
      technologies: ["Nest.js", "Express", "MongoDB", "React"]
    },
    {
      period: "06/2024 - 07/2024",
      title: "Stage d'été",
      company: "CYBERSHIELD TN",
      description: "Application de gestion pour agence de location de voitures avec suivi des réservations et paiements.",
      technologies: ["Node.js", "Express", "MongoDB", "React"]
    },
    {
      period: "02/2022 - 07/2022",
      title: "Stage de fin d'études",
      company: "Technopole CRMN, Sousse",
      description: "Conception et programmation d'un système de géolocalisation en temps réel.",
      technologies: ["Géolocalisation", "Temps réel", "Programmation"]
    }
  ];

  const projets = [
    {
      title: "EmotionWave",
      description: "Application web d'analyse des émotions humaines via texte, images et audio utilisant l'IA.",
      technologies: ["DeepFace", "Transformers", "Hugging Face", "NLP", "Reconnaissance vocale"],
      type: "IA"
    },
    {
      title: "Application de Recettes",
      description: "Application de gestion de recettes avec création de recettes, gestion des ingrédients et catégories.",
      technologies: ["Spring Boot", "Next.js", "MongoDB", "Java", "React"],
      type: "Full Stack"
    },
    {
      title: "Système de Réservation d'Hôtel",
      description: "Application backend avec architecture microservices pour la réservation de chambres d'hôtel.",
      technologies: ["Kafka", "MongoDB", "gRPC", "REST", "GraphQL", "Microservices"],
      type: "Backend"
    },
    {
      title: "Gestion d'Employés",
      description: "Application CRUD complète pour la gestion des employés.",
      technologies: ["Symfony", "PHP", "Base de données"],
      type: "Web"
    }
  ];

  const formations = [
    {
      period: "09/2022 - 06/2025",
      title: "Ingénierie en Informatique",
      school: "École Polytechnique de Sousse",
      specialty: "Spécialisée en Génie Logiciel"
    },
    {
      period: "09/2018 - 07/2022",
      title: "Licence en TIC",
      school: "ISIMM Monastir",
      specialty: "Technologie d'Information et de Communication"
    },
    {
      period: "09/2017 - 06/2018",
      title: "Baccalauréat Sciences",
      school: "Lycée Essalem Hay Riath",
      specialty: ""
    }
  ];

  const certifications = [
    "JavaScript IT Specialist Certification",
    "PMI Project Management Ready™️",
    "Certification IEEE Xtreme",
    "DELF B2 - Français",
    "CCNAv7 - Cisco Networking",
    "Certification Allemand A1.2"
  ];

  const langues = [
    { langue: "Arabe", niveau: "Natale", percent: 100 },
    { langue: "Français", niveau: "Courant", percent: 90 },
    { langue: "Anglais", niveau: "Intermédiaire", percent: 70 },
    { langue: "Allemand", niveau: "Élémentaire", percent: 30 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'about', 'experience', 'projets', 'competences', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shayma Bassou
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'about', label: 'À propos' },
                { id: 'experience', label: 'Expérience' },
                { id: 'projets', label: 'Projets' },
                { id: 'competences', label: 'Compétences' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-white hover:text-purple-400 transition-colors duration-300 ${
                    activeSection === item.id ? 'text-purple-400 border-b-2 border-purple-400' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'about', label: 'À propos' },
                { id: 'experience', label: 'Expérience' },
                { id: 'projets', label: 'Projets' },
                { id: 'competences', label: 'Compétences' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white hover:text-purple-400 py-2 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-20 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Shayma
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Bassou</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Ingénieure Informatique Spécialisée en Génie Logiciel
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Passionnée par les technologies modernes et l'innovation, je développe des solutions logicielles performantes 
              et contribue à des projets technologiques d'envergure.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => scrollToSection('projets')}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Voir mes projets
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">À propos de moi</h2>
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              
              {/* Photo de profil - Centré sur mobile, à gauche sur desktop */}
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                    <div className="w-full h-full rounded-full bg-gray-800 overflow-hidden">
                      <img 
                        src="/photolink.jpg" 
                        alt="Shayma Bassou" 
                        className="w-full h-full rounded-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback si l'image ne charge pas */}
                      <div className="w-full h-full rounded-full bg-gray-700 hidden items-center justify-center text-white">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                            <span className="text-2xl text-white font-bold">SB</span>
                          </div>
                          <p className="text-sm">Shayma Bassou</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 blur-xl"></div>
                </div>
              </div>

              {/* Texte de présentation */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Ingénieure informatique diplômée de l'École Polytechnique de Sousse, je suis passionnée par le développement 
                    logiciel et les technologies émergentes. Mon parcours m'a permis d'acquérir une expertise solide en programmation 
                    et en conception de systèmes.
                  </p>
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    Je me spécialise dans le développement full-stack, l'intelligence artificielle, et les architectures modernes. 
                    Mon objectif est de contribuer à des projets innovants qui ont un impact positif sur la société.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="mr-3 text-purple-400" size={20} />
                      <span>Sousse, Tunisie</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Phone className="mr-3 text-purple-400" size={20} />
                      <span>+216 52 482 746</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Mail className="mr-3 text-purple-400" size={20} />
                      <span>chaimabassou167@gmail.com</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Linkedin className="mr-3 text-purple-400" size={20} />
                      <span>LinkedIn</span>
                    </div>
                  </div>
                </div>
                
                {/* Section Langues */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Langues</h3>
                  <div className="space-y-4">
                    {langues.map((lang, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-white">
                          <span>{lang.langue}</span>
                          <span className="text-gray-400">{lang.niveau}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${lang.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Expérience Professionnelle</h2>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-purple-400 font-medium text-lg">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full text-sm mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Projets Développés</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projets.map((projet, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {projet.title}
                    </h3>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
                      {projet.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{projet.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {projet.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {projet.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                        +{projet.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="competences" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Compétences Techniques</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList], index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
                  <div className="space-y-2">
                    {skillList.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">Certifications</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                    <Award className="text-purple-400 mr-3" size={20} />
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formation Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-16">Formation</h2>
            
            <div className="space-y-8">
              {formations.map((formation, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{formation.title}</h3>
                      <p className="text-purple-400 font-medium">{formation.school}</p>
                      {formation.specialty && <p className="text-gray-400">{formation.specialty}</p>}
                    </div>
                    <span className="text-gray-400 bg-gray-800/50 px-4 py-2 rounded-full text-sm mt-2 md:mt-0">
                      {formation.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Contactez-moi</h2>
            <p className="text-xl text-gray-300 mb-12">
              Intéressé par une collaboration ? N'hésitez pas à me contacter !
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Phone className="text-purple-400 mx-auto mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">Téléphone</h3>
                <p className="text-gray-300">+216 52 482 746</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Mail className="text-purple-400 mx-auto mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">Email</h3>
                <p className="text-gray-300">chaimabassou167@gmail.com</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <MapPin className="text-purple-400 mx-auto mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">Localisation</h3>
                <p className="text-gray-300">Sousse, Tunisie</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:chaimabassou167@gmail.com"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Mail className="mr-2" size={20} />
                Envoyer un email
              </a>
              <a
                href="https://linkedin.com/in/shayma-bassou-5132b8231"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-all duration-300"
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Shayma Bassou. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;