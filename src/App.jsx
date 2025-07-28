import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Code, 
  Database, 
  Globe, 
  Server, 
  Smartphone, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  Github,
  Linkedin,
  ChevronDown,
  Menu,
  X,
  Star,
  Calendar,
  Users,
  Zap,
  Target,
  BookOpen,
  Briefcase,
  Languages
} from 'lucide-react';
import './App.css';

// Import images
import webDevHero from './assets/web-development-hero.jpg';
import programmingConcepts from './assets/programming-concepts.png';
import modernWebDesign from './assets/modern-web-design.jpg';

const App = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage, isRTL]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageMenuOpen(false);
  };

  const skills = [
    { name: 'Python', level: 95, icon: Code },
    { name: 'JavaScript', level: 90, icon: Code },
    { name: 'Django', level: 88, icon: Server },
    { name: 'React', level: 85, icon: Globe },
    { name: 'MySQL', level: 92, icon: Database },
    { name: 'Flutter', level: 80, icon: Smartphone },
    { name: 'PHP', level: 85, icon: Code },
    { name: 'C#', level: 82, icon: Code },
    { name: 'Node.js', level: 78, icon: Server },
    { name: 'MongoDB', level: 75, icon: Database },
    { name: 'HTML/CSS', level: 95, icon: Globe },
    { name: 'Bootstrap', level: 88, icon: Globe },
    { name: 'Git/GitHub', level: 85, icon: Code },
    { name: 'Linux', level: 80, icon: Server },
    { name: 'Docker', level: 70, icon: Server },
    { name: 'AWS', level: 65, icon: Server }
  ];

  const projects = [
    {
      title: t('booking_system_title'),
      description: t('booking_system_description'),
      technologies: ['Django', 'Flutter', 'MySQL', 'JavaScript', 'Bootstrap'],
      image: webDevHero,
      features: [t('instant_booking'), t('interactive_maps'), t('secure_payment'), t('inventory_management')]
    },
    {
      title: t('fuel_storage_system_title'),
      description: t('fuel_storage_system_description'),
      technologies: ['Django', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      image: programmingConcepts,
      features: [t('inventory_tracking'), t('detailed_reports'), t('smart_alerts'), t('responsive_interface')]
    },
    {
      title: t('millunieumsoft_website_title'),
      description: t('millunieumsoft_website_description'),
      technologies: ['PHP', 'C#', 'MySQL', 'HTML', 'CSS'],
      image: modernWebDesign,
      features: [t('data_sync'), t('visual_interface'), t('advanced_api'), t('high_security')]
    },
    {
      title: 'نظام إدارة المكتبة الرقمية',
      description: 'نظام شامل لإدارة المكتبات الرقمية مع إمكانيات البحث المتقدم وإدارة المستخدمين',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
      image: webDevHero,
      features: ['بحث متقدم', 'إدارة المستخدمين', 'نظام الحجز', 'تقارير تفصيلية']
    },
    {
      title: 'تطبيق التجارة الإلكترونية',
      description: 'منصة تجارة إلكترونية متكاملة مع نظام دفع آمن وإدارة المخزون',
      technologies: ['Flutter', 'Django REST', 'PostgreSQL', 'Redis', 'Stripe'],
      image: programmingConcepts,
      features: ['دفع آمن', 'إدارة المخزون', 'تتبع الطلبات', 'نظام التقييمات']
    },
    {
      title: 'نظام إدارة الموارد البشرية',
      description: 'نظام متكامل لإدارة الموارد البشرية مع إدارة الرواتب والحضور والانصراف',
      technologies: ['C#', '.NET Core', 'SQL Server', 'Angular', 'Bootstrap'],
      image: modernWebDesign,
      features: ['إدارة الرواتب', 'تتبع الحضور', 'إدارة الإجازات', 'تقارير الأداء']
    }
  ];

  const certifications = [
    { name: 'CCNA (Cisco Certified Network Associate)', year: '2024', issuer: 'المعهد العام للاتصالات' },
    { name: isRTL ? 'الرخصة الأوروبية لقيادة الحاسوب' : 'European Computer Driving License', year: '2019', issuer: 'المعهد العام للاتصالات' },
    { name: isRTL ? 'مقدمة في الأمن السيبراني' : 'Introduction to Cybersecurity', year: '2022', issuer: 'أكاديمية سيسكو' },
    { name: isRTL ? 'إدارة تكنولوجيا المعلومات' : 'IT Management', year: '2023', issuer: 'أكاديمية أليسون' },
    { name: isRTL ? 'تطوير تطبيقات الويب باستخدام Django' : 'Django Web Development', year: '2023', issuer: 'Coursera' },
    { name: isRTL ? 'تطوير تطبيقات الموبايل باستخدام Flutter' : 'Flutter Mobile Development', year: '2023', issuer: 'Udemy' },
    { name: isRTL ? 'إدارة قواعد البيانات MySQL' : 'MySQL Database Administration', year: '2022', issuer: 'Oracle' },
    { name: isRTL ? 'أساسيات الحوسبة السحابية AWS' : 'AWS Cloud Fundamentals', year: '2024', issuer: 'Amazon Web Services' },
    { name: isRTL ? 'إدارة المشاريع التقنية' : 'Technical Project Management', year: '2023', issuer: 'PMI' },
    { name: isRTL ? 'تطوير واجهات المستخدم React' : 'React Frontend Development', year: '2024', issuer: 'Meta' }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 ${isRTL ? 'font-arabic' : ''}`}>
      {/* Navigation */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold text-blue-800 dark:text-blue-200"
              whileHover={{ scale: 1.05 }}
            >
              {t('emad_mohamed')}
            </motion.div>
            
            {/* Desktop Menu */}
            <div className={`hidden md:flex space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
              {[
                { id: 'home', label: t('home') },
                { id: 'about', label: t('about') },
                { id: 'skills', label: t('skills') },
                { id: 'projects', label: t('projects') },
                { id: 'experience', label: t('experience') },
                { id: 'contact', label: t('contact') }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-lg transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Language Switcher */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Languages size={20} />
                  <span>{currentLanguage === 'ar' ? 'العربية' : 'English'}</span>
                  <ChevronDown size={16} className={`transition-transform ${isLanguageMenuOpen ? 'rotate-180' : ''}`} />
                </motion.button>
                
                <AnimatePresence>
                  {isLanguageMenuOpen && (
                    <motion.div
                      className="absolute top-full mt-2 right-0 bg-white dark:bg-slate-800 rounded-lg shadow-lg border dark:border-gray-700 overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <button
                        onClick={() => changeLanguage('ar')}
                        className={`block w-full px-4 py-2 text-right hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                          currentLanguage === 'ar' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        العربية
                      </button>
                      <button
                        onClick={() => changeLanguage('en')}
                        className={`block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                          currentLanguage === 'en' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        English
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              {/* Mobile Language Switcher */}
              <div className="relative">
                <motion.button
                  onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Languages size={20} />
                </motion.button>
                
                <AnimatePresence>
                  {isLanguageMenuOpen && (
                    <motion.div
                      className="absolute top-full mt-2 right-0 bg-white dark:bg-slate-800 rounded-lg shadow-lg border dark:border-gray-700 overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <button
                        onClick={() => changeLanguage('ar')}
                        className={`block w-full px-4 py-2 text-right hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                          currentLanguage === 'ar' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        العربية
                      </button>
                      <button
                        onClick={() => changeLanguage('en')}
                        className={`block w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                          currentLanguage === 'en' ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        English
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <button
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-gray-700"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {[
                  { id: 'home', label: t('home') },
                  { id: 'about', label: t('about') },
                  { id: 'skills', label: t('skills') },
                  { id: 'projects', label: t('projects') },
                  { id: 'experience', label: t('experience') },
                  { id: 'contact', label: t('contact') }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-${isRTL ? 'right' : 'left'} px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('emad_mohamed_mutaher')}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('job_title')}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Briefcase size={20} />
                {t('explore_works')}
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                {t('contact_me')}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about_me')}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('it_engineer_specialist')}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {t('about_me_paragraph_1')}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {t('about_me_paragraph_2')}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{t('location')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="text-blue-600" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{t('birth_year')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="text-blue-600" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{t('degree')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="text-blue-600" size={20} />
                  <span className="text-gray-700 dark:text-gray-300">{t('ccna_certificate')}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h4 className="text-xl font-bold mb-6">{t('core_skills')}</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Users className="text-blue-200" size={20} />
                    <span>{t('teamwork_leadership')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="text-blue-200" size={20} />
                    <span>{t('creative_problem_solving')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="text-blue-200" size={20} />
                    <span>{t('efficient_project_management')}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="text-blue-200" size={20} />
                    <span>{t('adapt_new_technologies')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('technical_skills')}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <skill.icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className="bg-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('featured_projects')}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('technologies_used')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('key_features')}</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <Star size={16} className="text-yellow-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={16} />
                    {t('view_details')}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('certifications_courses')}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? (isRTL ? 50 : -50) : (isRTL ? -50 : 50) }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Award className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-1">{cert.issuer}</p>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">{cert.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('experience')}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Experience Timeline */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-xl border-l-4 border-blue-600"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">مطور ويب متقدم - مستقل</h3>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">2023 - الآن</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  تطوير تطبيقات ويب متقدمة باستخدام Django وReact، مع التركيز على الأداء والأمان وتجربة المستخدم المتميزة.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Django', 'React', 'MySQL', 'AWS', 'Docker'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-green-600"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">مطور تطبيقات موبايل - Millunieumsoft</h3>
                  <span className="text-green-600 dark:text-green-400 font-semibold">2022 - 2023</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  تطوير تطبيقات موبايل متعددة المنصات باستخدام Flutter، مع التكامل مع أنظمة خلفية معقدة وواجهات برمجة التطبيقات.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Flutter', 'Dart', 'Firebase', 'REST APIs', 'Git'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-l-4 border-purple-600"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">مطور ويب مبتدئ - متدرب</h3>
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">2021 - 2022</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  بداية المسيرة المهنية في تطوير الويب، تعلم أساسيات البرمجة وتطوير مواقع ويب بسيطة باستخدام HTML وCSS وJavaScript.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 grid md:grid-cols-3 gap-6"
            >
              <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
                <div className="text-gray-600 dark:text-gray-300">مشروع مكتمل</div>
              </div>
              <div className="text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3+</div>
                <div className="text-gray-600 dark:text-gray-300">سنوات خبرة</div>
              </div>
              <div className="text-center p-6 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300">شهادة تقنية</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('contact_me_section')}</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {t('contact_me_description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Mail className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t('email')}</h3>
              <p className="text-gray-600 dark:text-gray-300">slldio4654@gmail.com</p>
              <p className="text-gray-600 dark:text-gray-300">amod76900@gmail.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <Phone className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t('phone_number')}</h3>
              <p className="text-gray-600 dark:text-gray-300" dir="ltr">+967 770 076 900</p>
              <p className="text-gray-600 dark:text-gray-300" dir="ltr">+967 784 455 100</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <MapPin className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">{t('location')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('location')}</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="flex justify-center gap-6">
              <motion.a
                href="mailto:slldio4654@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
                {t('send_message')}
              </motion.a>
              <motion.a
                href="tel:+967770076900 & 7784455100"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                {t('direct_call')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            {t('copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

