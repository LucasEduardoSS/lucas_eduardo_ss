const hobbyButtons = document.querySelectorAll('.hobby-btn');
const hobbyDescriptions = document.querySelectorAll('.hobby-description');
const hobbyImages = document.querySelectorAll('.hobby-image');
const langButtons = document.querySelectorAll('.lang-btn');

const translations = {
    'pt-BR': {
        'nav.home': 'Início',
        'nav.skills': 'Skills',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',
        'hero.title': 'Desenvolvedor <span class="gradient-text">Full-Stack</span>',
        'hero.subtitle': 'Especializado em Python e Object Pascal, transformando ideias em soluções digitais robustas e escaláveis. Da infraestrutura ao front-end, construindo experiências completas.',
        'hero.cta.projects': 'Ver Projetos',
        'hero.cta.contact': 'Entre em Contato',
        'skills.title': 'Tecnologias & <span class="gradient-text">Habilidades</span>',
        'skills.python.title': 'Python',
        'skills.python.desc': 'Django, Flask, FastAPI, NumPy, Pandas. Desenvolvimento de APIs robustas e aplicações web escaláveis com foco em performance.',
        'skills.pascal.title': 'Object Pascal',
        'skills.pascal.desc': 'Delphi, Lazarus, FireDAC. Experiência em desenvolvimento desktop e sistemas legados com alta performance e confiabilidade.',
        'skills.databases.title': 'Databases',
        'skills.databases.desc': 'PostgreSQL, MySQL, MongoDB, Redis. Modelagem de dados, otimização de queries e gestão de bancos relacionais e NoSQL.',
        'skills.frontend.title': 'Front-End',
        'skills.frontend.desc': 'HTML5, CSS3, JavaScript, React. Interfaces modernas e responsivas com foco na experiência do usuário.',
        'skills.devops.title': 'DevOps',
        'skills.devops.desc': 'Docker, Git, CI/CD, Linux. Automação de deploy, containerização e gestão de infraestrutura.',
        'skills.security.title': 'APIs & Security',
        'skills.security.desc': 'REST, GraphQL, OAuth, JWT. Desenvolvimento seguro com autenticação e autorização robustas.',
        'projects.title': 'Projetos em <span class="gradient-text">Destaque</span>',
        'projects.erp.title': 'Sistema ERP Completo',
        'projects.erp.desc': 'Plataforma empresarial desenvolvida em Python (Django) com integração desktop em Delphi para processos críticos.',
        'projects.analytics.title': 'Dashboard Analytics',
        'projects.analytics.desc': 'Sistema de análise de dados em tempo real com visualizações interativas e processamento de grandes volumes.',
        'projects.pos.title': 'PDV Inteligente',
        'projects.pos.desc': 'Sistema de ponto de venda desktop com sincronização cloud, desenvolvido em Object Pascal com backend Python.',
        'hobbies.title': 'Hobbies & <span class="gradient-text">Interesses</span>',
        'hobbies.buttons.cad': 'CAD & BIM',
        'hobbies.buttons.woodwork': 'Marcenaria CNC',
        'hobbies.buttons.vector': 'Design Vetorial',
        'hobbies.buttons.circuit': 'Circuitos',
        'hobbies.cad.title': 'Projetos CAD & BIM',
        'hobbies.cad.desc': 'Desenvolvo projetos arquitetônicos utilizando softwares de CAD e BIM, criando modelos 3D detalhados de casas e construções. Essa paixão combina criatividade com precisão técnica, permitindo visualizar e planejar cada detalhe antes da execução, desde a estrutura até os acabamentos finais.',
        'hobbies.woodwork.title': 'Marcenaria com CNC',
        'hobbies.woodwork.desc': 'Projeto e executo peças de marcenaria utilizando máquinas router e CNC Fabex. Do design digital à produção física, transformo ideias em móveis e objetos de madeira com precisão milimétrica. É fascinante ver como a programação e a carpintaria se unem para criar peças únicas.',
        'hobbies.vector.title': 'Ilustração Vetorial',
        'hobbies.vector.desc': 'Crio ilustrações e designs vetoriais usando o Inkscape, desde logos até ilustrações complexas. A arte vetorial permite escalabilidade infinita e precisão matemática, perfeita para projetos que exigem versatilidade e qualidade profissional em qualquer tamanho.',
        'hobbies.circuit.title': 'Simulação de Circuitos',
        'hobbies.circuit.desc': 'Projeto e simulo circuitos eletrônicos com o SimulIDE, testando ideias antes de montar fisicamente. É uma forma de explorar eletrônica, microcontroladores e automação, combinando hardware e software para criar soluções inovadoras e entender o funcionamento de sistemas embarcados.',
        'contact.title': 'Vamos Trabalhar <span class="gradient-text">Juntos?</span>',
        'contact.subtitle': 'Estou disponível para novos projetos e oportunidades. Entre em contato!',
        'contact.cta': 'Enviar Mensagem',
        'footer.copy': '© 2024 Full-Stack Developer. Todos os direitos reservados.'
    },
    en: {
        'nav.home': 'Home',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.title': 'Full-Stack <span class="gradient-text">Developer</span>',
        'hero.subtitle': 'Specialized in Python and Object Pascal, turning ideas into robust, scalable digital solutions. From infrastructure to front-end, building complete experiences.',
        'hero.cta.projects': 'View Projects',
        'hero.cta.contact': 'Get in Touch',
        'skills.title': 'Technologies & <span class="gradient-text">Skills</span>',
        'skills.python.title': 'Python',
        'skills.python.desc': 'Django, Flask, FastAPI, NumPy, Pandas. Building robust APIs and scalable web apps with a focus on performance.',
        'skills.pascal.title': 'Object Pascal',
        'skills.pascal.desc': 'Delphi, Lazarus, FireDAC. Experience in desktop development and legacy systems with high performance and reliability.',
        'skills.databases.title': 'Databases',
        'skills.databases.desc': 'PostgreSQL, MySQL, MongoDB, Redis. Data modeling, query optimization, and relational/NoSQL management.',
        'skills.frontend.title': 'Front-End',
        'skills.frontend.desc': 'HTML5, CSS3, JavaScript, React. Modern, responsive interfaces with a focus on user experience.',
        'skills.devops.title': 'DevOps',
        'skills.devops.desc': 'Docker, Git, CI/CD, Linux. Deployment automation, containerization, and infrastructure management.',
        'skills.security.title': 'APIs & Security',
        'skills.security.desc': 'REST, GraphQL, OAuth, JWT. Secure development with strong authentication and authorization.',
        'projects.title': 'Featured <span class="gradient-text">Projects</span>',
        'projects.erp.title': 'Complete ERP System',
        'projects.erp.desc': 'Enterprise platform built in Python (Django) with Delphi desktop integration for critical workflows.',
        'projects.analytics.title': 'Analytics Dashboard',
        'projects.analytics.desc': 'Real-time data analysis system with interactive visualizations and large-scale processing.',
        'projects.pos.title': 'Smart POS',
        'projects.pos.desc': 'Desktop point-of-sale system with cloud sync, built in Object Pascal with a Python backend.',
        'hobbies.title': 'Hobbies & <span class="gradient-text">Interests</span>',
        'hobbies.buttons.cad': 'CAD & BIM',
        'hobbies.buttons.woodwork': 'CNC Woodworking',
        'hobbies.buttons.vector': 'Vector Design',
        'hobbies.buttons.circuit': 'Circuits',
        'hobbies.cad.title': 'CAD & BIM Projects',
        'hobbies.cad.desc': 'I develop architectural projects using CAD and BIM software, creating detailed 3D models of houses and buildings. This passion blends creativity with technical precision, enabling me to visualize and plan every detail before execution, from structure to final finishes.',
        'hobbies.woodwork.title': 'CNC Woodworking',
        'hobbies.woodwork.desc': 'I design and build woodworking pieces using router machines and CNC Fabex. From digital design to physical production, I turn ideas into furniture and wooden objects with millimeter precision. It is fascinating to see programming and craftsmanship come together to create unique pieces.',
        'hobbies.vector.title': 'Vector Illustration',
        'hobbies.vector.desc': 'I create vector illustrations and designs using Inkscape, from logos to complex illustrations. Vector art offers infinite scalability and mathematical precision, perfect for projects that require versatility and professional quality at any size.',
        'hobbies.circuit.title': 'Circuit Simulation',
        'hobbies.circuit.desc': 'I design and simulate electronic circuits with SimulIDE, testing ideas before building them physically. It is a way to explore electronics, microcontrollers, and automation, combining hardware and software to build innovative solutions and understand embedded systems.',
        'contact.title': "Let's Work <span class=\"gradient-text\">Together?</span>",
        'contact.subtitle': 'I am available for new projects and opportunities. Get in touch!',
        'contact.cta': 'Send Message',
        'footer.copy': '© 2024 Full-Stack Developer. All rights reserved.'
    }
};

// Function to handle hover effect
hobbyButtons.forEach(button => {
    button.addEventListener('mouseenter', () => {
        const hobby = button.dataset.hobby;
        
        // Remove active class from all
        hobbyButtons.forEach(btn => btn.classList.remove('active'));
        hobbyDescriptions.forEach(desc => desc.classList.remove('active'));
        hobbyImages.forEach(img => img.classList.remove('active'));
        
        // Add active class to current
        button.classList.add('active');
        document.querySelector(`[data-content="${hobby}"]`).classList.add('active');
        document.querySelector(`[data-image="${hobby}"]`).classList.add('active');
    });
});

const applyTranslations = (lang) => {
    const dictionary = translations[lang] || translations['pt-BR'];
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (dictionary[key]) {
            element.textContent = dictionary[key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(element => {
        const key = element.getAttribute('data-i18n-html');
        if (dictionary[key]) {
            element.innerHTML = dictionary[key];
        }
    });

    langButtons.forEach(button => {
        button.classList.toggle('active', button.dataset.lang === lang);
    });
};

const storedLang = localStorage.getItem('siteLang') || 'pt-BR';
applyTranslations(storedLang);

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedLang = button.dataset.lang;
        localStorage.setItem('siteLang', selectedLang);
        applyTranslations(selectedLang);
    });
});
