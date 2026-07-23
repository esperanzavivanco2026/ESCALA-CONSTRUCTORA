import { Project, Service, StatItem, LocationPin, Testimonial } from '../types';

// Using local generated assets for top key projects & curated unsplash assets for others
import heroArchImg from '../assets/images/escala_hero_arch_1784677238956.jpg';
import commercialImg from '../assets/images/escala_commercial_building_1784677249847.jpg';
import residentialImg from '../assets/images/escala_residential_villa_1784677259771.jpg';

export const HERO_IMAGE = heroArchImg;

export const SERVICES_DATA: Service[] = [
  {
    id: 'diseno-arquitectonico',
    title: 'Diseño Arquitectónico',
    shortDesc: 'Conceptualización visual y espacial con tecnología BIM 3D, optimización bioclimática y eficiencia estética vanguardista.',
    fullDesc: 'Desarrollamos proyectos arquitectónicos integrales combinando innovación visual, eficiencia de espacio y sustentabilidad. Empleamos modelado BIM de última generación para anticipar interferencias y asegurar que cada línea proyectada sea construible con máxima precisión.',
    iconName: 'Compass',
    features: [
      'Modelado de Información para la Edificación (BIM Level 2)',
      'Estudios Bioclimáticos y Eficiencia Energética',
      'Renders fotorrealistas y Recorridos Virtuales VR',
      'Diseño Interior y Paisajismo Corporativo'
    ],
    deliverables: ['Anteproyecto 3D', 'Planos de Permiso Municipal', 'Modelos BIM IFC', 'Memorias Descriptivas']
  },
  {
    id: 'construccion-comercial-residencial',
    title: 'Construcción Comercial y Residencial',
    shortDesc: 'Ejecución de obra civil de alta complejidad con estándares de calidad internacionales y cumplimiento riguroso de plazos.',
    fullDesc: 'Desde torres corporativas hasta complejos residenciales de alta gama, nuestra división de construcción ejecuta obras con un control férreo de materiales, personal altamente calificado y sistemas de supervisión técnica en tiempo real.',
    iconName: 'Building2',
    features: [
      'Sistemas Estructurales Mixtos (Acero y Hormigón Armado)',
      'Sistemas de Fachadas Ventiladas e Insonorización',
      'Gestión de Seguridad Industrial y Salud Ocupacional (ISO 45001)',
      'Montaje de Muros Cortina y Cristalería Estructural'
    ],
    deliverables: ['Garantía Estructural por 10 Años', 'Libro de Obra Digital', 'Actas de Recepción Definitiva', 'Manuales As-Built']
  },
  {
    id: 'gestion-obra-nacional',
    title: 'Gestión de Obra Nacional',
    shortDesc: 'Supervisión logística, dirección técnica y administración integral de recursos en proyectos desplegados en todo el país.',
    fullDesc: 'Nuestra red logística nacional nos permite desplegar campamentos, maquinaria pesada y profesionales colegiados en cualquier provincia de Ecuador. Monitoreamos costos, cronogramas y especificaciones técnicas mediante tableros digitales centralizados.',
    iconName: 'MapPin',
    features: [
      'Coordinación Logística Interprovincial de Materiales',
      'Control Estadístico del Valor Ganado (EVM)',
      'Fiscalización Técnica Independiente de Obras',
      'Auditoría de Calidad y Ensayos de Laboratorio'
    ],
    deliverables: ['Informes Mensuales de Avance EVM', 'Control de Presupuesto en Tiempo Real', 'Certificaciones de Avance de Obra']
  },
  {
    id: 'ingenieria-estructural',
    title: 'Ingeniería Estructural & Cálculo',
    shortDesc: 'Cálculo sismorresistente avanzado adaptado a la normativa ecuatoriana (NEC) para estructuras de máxima solidez.',
    fullDesc: 'Diseñamos estructuras robustas preparadas para resistir los eventos sísmicos más exigentes. Aplicamos modelado por elementos finitos y aisladores sísmicos de última tecnología para garantizar la preservación de vidas e inversiones.',
    iconName: 'ShieldCheck',
    features: [
      'Modelado Estructural Sismorresistente NEC-15',
      'Diseño con Aisladores y Disipadores Sísmicos',
      'Optimización de Cuantías de Acero y Hormigón',
      'Dictámenes Técnicos de Vulnerabilidad Sísmica'
    ],
    deliverables: ['Memorias de Cálculo Estructural', 'Planos de Planilla de Fierros', 'Certificado Sismorresistente Firmado']
  },
  {
    id: 'fiscalizacion-calidad',
    title: 'Fiscalización & Control de Calidad',
    shortDesc: 'Supervisión rigurosa e imparcial del cumplimiento normativo, especificaciones de materiales y normas de seguridad.',
    fullDesc: 'Garantizamos que cada metro cúbico de hormigón vertido y cada soldadura estructural cumpla estrictamente con las probetas de laboratorio y la normativa vigente. Cuidamos el presupuesto y el patrimonio del cliente.',
    iconName: 'ClipboardCheck',
    features: [
      'Ensayos Destructivos y No Destructivos (Ultrasonido, Esclerometría)',
      'Validación de Proveedores e Insumos de Construcción',
      'Supervisión Normativa de Uniones Soldadas AWS D1.1',
      'Control Preventivo de Riesgos Laborales'
    ],
    deliverables: ['Reportes de Laboratorio de Hormigones', 'Certificados de Calidad de Insumos', 'Bitácora Oficial de Fiscalización']
  },
  {
    id: 'infraestructura-remodelacion',
    title: 'Infraestructura & Remodelación Corporativa',
    shortDesc: 'Readecuación de espacios comerciales, naves industriales y reforzamiento estructural sin interrumpir sus operaciones.',
    fullDesc: 'Transformamos instalaciones operativas existentes mediante intervención por fases, reforzamientos con fibra de carbono y remodelaciones de alto impacto estético con tiempos récord de ejecución.',
    iconName: 'Hammer',
    features: [
      'Reforzamiento Estructural con Polímeros Fibrorreforzados (CFRP)',
      'Adecuación de Interiores para Hubs Tecnológicos y Retail',
      'Modernización de Fachadas e Iluminación Arquitectónica',
      'Tratamiento de Humedades e Impermeabilización Industrial'
    ],
    deliverables: ['Plan de Trabajo Nocturno / Fin de Semana', 'Planos As-Built de Adecuación', 'Garantía Estructural de Refuerzo']
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'torre-escala-corporativa',
    title: 'Torre ESCALA Capital',
    category: 'Comercial',
    location: 'Av. República de El Salvador, Quito',
    city: 'Quito',
    area: '24,500 m²',
    year: '2025',
    status: 'Completado',
    description: 'Edificio corporativo de 22 pisos con fachada de cristal termoacústico y estructura sismorresistente con disipadores de energía.',
    fullDetails: 'Diseñado como la sede emblemática del sector financiero. Cuenta con certificación LEED Gold, 5 niveles de subterráneos, heliunidades de rescate y un sistema automatizado de control de climatización.',
    image: commercialImg,
    gallery: [
      commercialImg,
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80'
    ],
    client: 'Grupo Inmobiliario del Pacífico',
    architectureLead: 'Arq. Mateo Valenzuela',
    keyFeatures: ['Certificación LEED Gold', 'Fachada Muro Cortina Térmico', '12 Disipadores Sísmicos Viscosos', 'Parqueaderos con Carga EV']
  },
  {
    id: 'villa-horizonte-alta-gama',
    title: 'Residencia Cumbres del Sol',
    category: 'Residencial',
    location: 'Isla Moggene, Samborondón',
    city: 'Guayaquil / Samborondón',
    area: '1,850 m²',
    year: '2024',
    status: 'Completado',
    description: 'Residencia de lujo con voladizos de hormigón visto, amplias terrazas integradas a la naturaleza y domótica total.',
    fullDetails: 'Una pieza de arquitectura contemporánea que desafía la gravedad con voladizos de más de 6 metros sobre el lago. Diseñada para ventilación cruzada natural e integración de paneles solares fotovoltaicos.',
    image: residentialImg,
    gallery: [
      residentialImg,
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    client: 'Privado',
    architectureLead: 'Arq. Sofia Alarcón',
    keyFeatures: ['Voladizos de Hormigón Postensado', 'Piscina Infinity en Volado', 'Sistema Domótico Crestron', 'Aislamiento Térmico EIFS']
  },
  {
    id: 'centro-logistico-amazonas',
    title: 'Hub Logístico Agroindustrial Manta',
    category: 'Industrial',
    location: 'Zona Franca Puerto de Manta, Manabí',
    city: 'Manta',
    area: '45,000 m²',
    year: '2025',
    status: 'En Ejecución',
    description: 'Complejo de naves industriales con estructura metálica de luz libre de 40 metros y pavimentos de alta resistencia.',
    fullDetails: 'Estructura industrial diseñada para soportar cargas pesadas de contenedores y tráfico de maquinaria pesada 24/7. Incluye muelles de carga automatizados y áreas frías para exportación agroindustrial.',
    image: heroArchImg,
    gallery: [
      heroArchImg,
      'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80'
    ],
    client: 'Corporación Exportadora del Litoral',
    architectureLead: 'Ing. Carlos Mendoza, M.Sc.',
    keyFeatures: ['Luces Libres Metálicas de 40m', 'Pisos de Hormigón Pulido Fibrorreforzado', '24 Muelles Hidráulicos', 'Sistema Contra Incendios NFPA']
  },
  {
    id: 'puente-viaducto-los-andes',
    title: 'Paso Elevado & Conector Interurbano',
    category: 'Infraestructura',
    location: 'Vía Cuenca - Azogues, Azuay',
    city: 'Cuenca',
    area: '3,200 m lineales',
    year: '2024',
    status: 'Completado',
    description: 'Obra vial y puente atirantado de hormigón pretensado con cimentación profunda de pilotes de 30 metros.',
    fullDetails: 'Intervención vial de alto impacto que descongestionó el acceso sur a Cuenca. Construido bajo estrictos estándares de la AASTHO y supervisión sismorresistente con instrumentación sísmica.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80'
    ],
    client: 'Ministerio de Transporte y Obras Públicas / Prefectura',
    architectureLead: 'Ing. Fernando Roca',
    keyFeatures: ['Vigas Pretensadas de 45m', 'Pilotes Fundados a 30m de Profundidad', 'Monitoreo Sísmico IoT', 'Iluminación LED Solar']
  },
  {
    id: 'masterplan-ecologico-baños',
    title: 'Ecolodge & Eco-Resort Yaku',
    category: 'Diseño',
    location: 'Baños de Agua Santa, Tungurahua',
    city: 'Ambato / Baños',
    area: '18,000 m²',
    year: '2026',
    status: 'En Planificación',
    description: 'Masterplan turístico sustentable integrado a la topografía de montaña utilizando bambú guadua tratada y piedra local.',
    fullDetails: 'Proyecto concebido con huella de carbono neutra. Integra captación de aguas lluvias, tratamiento de aguas servidas mediante humedales y estructuras flotantes en ladera.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    client: 'EcoTravel International',
    architectureLead: 'Arq. Lucía Cordero',
    keyFeatures: ['Huella de Carbono Neutra', 'Bambú Guadua Tratado', 'Energía Solar Térmica y Fotovoltaica', 'Integración Paisajística 100%']
  },
  {
    id: 'plaza-comercial-guayaquil',
    title: 'Plaza Gourmet Samborondón',
    category: 'Comercial',
    location: 'Km 10.5 Vía a Samborondón',
    city: 'Guayaquil / Samborondón',
    area: '11,200 m²',
    year: '2024',
    status: 'Completado',
    description: 'Centro gastronómico y comercial abierto con plazas arboladas, cubiertas metálicas ligeras y 45 locales comerciales.',
    fullDetails: 'Centro comercial al aire libre enfocado en experiencias gastronómicas. Incluye parqueaderos subterráneos, amplias zonas peatonales arboladas y climatización en terrazas.',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1200&q=80'
    ],
    client: 'Inversiones Gourmet Ecuador',
    architectureLead: 'Arq. Mateo Valenzuela',
    keyFeatures: ['45 Locales Comerciales', '280 Plazas de Parqueadero Subterráneo', 'Plazas Arboladas Bioclimáticas', 'Certificación Ambiental Municipal']
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: 'metros-cuadrados',
    value: '280,000+',
    numericValue: 280000,
    suffix: ' m²',
    label: 'Metros Cuadrados Construidos',
    subtext: 'Proyectos entregados con estándar de excelencia en todo el país.',
    iconName: 'Ruler'
  },
  {
    id: 'proyectos-ejecutados',
    value: '185+',
    numericValue: 185,
    suffix: '+',
    label: 'Proyectos Finalizados',
    subtext: 'Edificios corporativos, residencias exclusivas y naves industriales.',
    iconName: 'Building'
  },
  {
    id: 'cobertura-nacional',
    value: '24',
    numericValue: 24,
    suffix: ' Provincias',
    label: 'Cobertura Nacional Directa',
    subtext: 'Capacidad operativa e infraestructura logística en Sierra, Costa y Amazonía.',
    iconName: 'Map'
  },
  {
    id: 'anos-experiencia',
    value: '18',
    numericValue: 18,
    suffix: ' Años',
    label: 'Años de Trayectoria',
    subtext: 'Liderando el mercado con innovación tecnológica y rigurosidad técnica.',
    iconName: 'Award'
  }
];

export const LOCATIONS_DATA: LocationPin[] = [
  {
    id: 'quito',
    city: 'Quito',
    region: 'Sierra Norte / Sede Central',
    projectCount: 68,
    featuredProject: 'Torre ESCALA Capital (22 pisos)',
    coordinates: { x: 48, y: 32 },
    address: 'Av. República de El Salvador N34-180 y Moscú, Piso 14, Quito',
    phone: '+593 (02) 398-4500'
  },
  {
    id: 'guayaquil',
    city: 'Guayaquil',
    region: 'Costa Sur / Sede Regional',
    projectCount: 54,
    featuredProject: 'Plaza Gourmet Samborondón',
    coordinates: { x: 32, y: 62 },
    address: 'Av. Joaquín Orrantia, Edificio Trade Building, Piso 8, Guayaquil',
    phone: '+593 (04) 263-8800'
  },
  {
    id: 'cuenca',
    city: 'Cuenca',
    region: 'Sierra Sur',
    projectCount: 32,
    featuredProject: 'Paso Elevado Conector Interurbano',
    coordinates: { x: 42, y: 76 },
    address: 'Av. Solano y Remigio Crespo, Edificio Cámara de Construcción, Cuenca',
    phone: '+593 (07) 284-1200'
  },
  {
    id: 'manta',
    city: 'Manta',
    region: 'Costa Central',
    projectCount: 21,
    featuredProject: 'Hub Logístico Agroindustrial',
    coordinates: { x: 22, y: 46 },
    address: 'Vía Barbasquillo, Edificio Manta Business Center, Manta',
    phone: '+593 (05) 262-9100'
  },
  {
    id: 'ambato',
    city: 'Ambato',
    region: 'Sierra Centro',
    projectCount: 15,
    featuredProject: 'Ecolodge Yaku Baños',
    coordinates: { x: 50, y: 48 },
    address: 'Av. Los Guaytambos y Ficoa, Ambato',
    phone: '+593 (03) 282-3300'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Ing. Roberto Lasso',
    role: 'Director General de Desarrollo',
    company: 'Grupo Inmobiliario del Pacífico',
    comment: 'Constructora ESCALA superó todas nuestras expectativas en la construcción de Torre ESCALA Capital. Su precisión en el control presupuestario y la aplicación del sistema BIM evitaron desviaciones en obra.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    projectType: 'Torre Corporativa de 22 Pisos'
  },
  {
    id: 't2',
    clientName: 'Dra. Elena Santamaría',
    role: 'Propietaria & Inversionista',
    company: 'Residencia Cumbres del Sol',
    comment: 'Ejecutar una casa con voladizos de hormigón de 6 metros no era tarea sencilla. El equipo de ingenieros de ESCALA demostró solvencia absoluta y la entrega fue exacta en el día pactado.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    projectType: 'Residencia de Lujo 1,850 m²'
  },
  {
    id: 't3',
    clientName: 'Lic. Xavier Holguín',
    role: 'Vicepresidente de Operaciones',
    company: 'Corporación Exportadora del Litoral',
    comment: 'Su capacidad de respuesta logística interprovincial en Manta nos permitió construir 45,000 m² de nave industrial en apenas 10 meses. Impecables en seguridad laboral y acabados.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    projectType: 'Hub Logístico Agroindustrial'
  }
];

export const FAQ_DATA = [
  {
    q: '¿En qué provincias de Ecuador opera Constructora ESCALA?',
    a: 'Operamos en las 24 provincias de Ecuador. Contamos con sedes operativas en Quito, Guayaquil, Cuenca y Manta, con logística propia para trasladar campamentos, maquinaria y personal técnico a cualquier punto del territorio nacional.'
  },
  {
    q: '¿Cuál es el monto mínimo o escala de proyecto que gestionan?',
    a: 'Nos especializamos en proyectos de mediano y gran calado: obras residenciales unifamiliares de alta gama a partir de 300 m², urbanizaciones, torres departamentales, instalaciones comerciales e infraestructura industrial.'
  },
  {
    q: '¿Ofrecen el servicio integral de "Llave en Mano" (Turnkey)?',
    a: 'Sí. Ofrecemos la modalidad "Llave en Mano", abarcando desde el diseño arquitectónico, trámites de permisos municipales, ingeniería de cálculo sismorresistente, gestión de compras, construcción, hasta la entrega final lista para habitar.'
  },
  {
    q: '¿Cómo garantizan el cumplimiento de los plazos y presupuestos?',
    a: 'Utilizamos tecnología BIM Nivel 2 y la metodología de Gestión del Valor Ganado (EVM). Nuestros clientes tienen acceso a una plataforma digital donde auditan semanalmente el avance físico vs. financiero del proyecto.'
  },
  {
    q: '¿Qué garantías respaldan sus construcciones?',
    a: 'Ofrecemos una garantía estructural certificada por 10 años en todas nuestras edificaciones, de acuerdo al Código Civil ecuatoriano, acompañada de manuales As-Built y pólizas de fiel cumplimiento de contrato.'
  }
];
