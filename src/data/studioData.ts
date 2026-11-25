export interface StudioService {
  id: string;
  name: string;
  category: 'cabello' | 'mirada' | 'estetica' | 'productos';
  categoryLabel: string;
  description: string;
  price: string;
  durability?: string;
  isVariablePrice?: boolean;
  image?: string;
  imageAlt?: string;
  imageObjectPosition?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  aspect: '3/4' | '4/3';
  spanClass: string;
  caption: string;
  technique: string;
  motif: 'hair' | 'color' | 'brows' | 'lashes' | 'makeup' | 'nails';
  serviceId: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const STUDIO_INFO = {
  brandName: 'Botsuana Studio',
  fullName: 'Botsuana Studio Beauty Room',
  tagline: 'Belleza, estilismo y cuidado personal',
  address: 'Calle Colegio de San Nicolás no. 272, Col. Vasco de Quiroga',
  whatsappDisplay: '443 182 4841',
  whatsappDigits: '524431824841',
  phoneDisplay: '443 420 3080',
  phoneDigits: '4434203080',
  socials: {
    facebook: 'Botsuana Studio',
    instagram: 'Botsuana Studio',
    tiktok: 'Mya Alvarez',
  },
};

export const SERVICE_CATEGORIES = [
  { id: 'todos', label: 'Todos los servicios' },
  { id: 'cabello', label: 'Cabello y Barbería' },
  { id: 'mirada', label: 'Mirada y Micropigmentación' },
  { id: 'estetica', label: 'Uñas, Maquillaje y Piel' },
  { id: 'productos', label: 'Productos y Suplementos' },
] as const;

export const STUDIO_SERVICES: StudioService[] = [
  // Cabello y Barbería
  {
    id: 'alaciados-permanentes',
    name: 'Alaciados Permanentes',
    category: 'cabello',
    categoryLabel: 'Cabello y Estilismo',
    description:
      'Alaciados progresivos en el cabello libres de formol, formulados para suavizar la fibra capilar manteniendo brillo y movimiento natural.',
    price: '$590 MXN / onza',
    durability: 'Duración 4 a 6 meses según cuidados',
  },
  {
    id: 'bases-de-chinos',
    name: 'Bases de Chinos',
    category: 'cabello',
    categoryLabel: 'Cabello y Estilismo',
    description:
      'Servicio permanente de rizado de cabello para lograr rizos definidos, volumen uniforme y textura duradera.',
    price: '$100 MXN / onza',
    durability: 'Duración 1 a 2 años según cuidados',
  },
  {
    id: 'disenos-de-color',
    name: 'Diseños de Color',
    category: 'cabello',
    categoryLabel: 'Cabello y Estilismo',
    description:
      'Procedimientos personalizados: luces, rayos, listones, baby lights, balayages y cubrimiento de cana para un cambio de imagen y look integral.',
    price: 'Cotización (según procedimiento y largo)',
    isVariablePrice: true,
    image: '/assets/aistudio/Dise_o_de_color_c0bc2b65.jpeg',
    imageAlt: 'Resultado de diseño de color e iluminación balayage en Botsuana Studio',
    imageObjectPosition: 'object-[center_20%]',
  },
  {
    id: 'cortes-de-cabello',
    name: 'Cortes de Cabello y Barbería',
    category: 'cabello',
    categoryLabel: 'Cabello y Barbería',
    description:
      'Alta peluquería para dama (shaggy, mariposa, bob, entre otros), corte escolar para niños y barbería para caballeros con desvanecidos, tijera, navaja y cera.',
    price: '$150 MXN',
    image: '/assets/aistudio/Corte_caballero_3e8b2dd5.jpeg',
    imageAlt: 'Corte de caballero y barbería de precisión en Botsuana Studio',
    imageObjectPosition: 'object-center',
  },
  {
    id: 'diseno-de-barba',
    name: 'Diseño de Barba',
    category: 'cabello',
    categoryLabel: 'Barbería',
    description:
      'Servicio enfocado en caballeros para delineado preciso, cambio de forma, tinturado y definición de barba.',
    price: '$80 MXN',
  },
  {
    id: 'peinado',
    name: 'Peinado Social',
    category: 'cabello',
    categoryLabel: 'Estilismo',
    description:
      'Elaboración de alto peinado, ondas, alaciados express y trenzas para eventos sociales con fijación profesional.',
    price: '$400 MXN',
    durability: 'Garantía de durabilidad todo el día',
  },

  // Mirada y Micropigmentación
  {
    id: 'pestanas-1x1',
    name: 'Pestañas 1 por 1 y Fibras Tecnológicas',
    category: 'mirada',
    categoryLabel: 'Mirada y Pestañas',
    description:
      'Aplicación minuciosa de extensiones de pestañas 1x1 sobre cada pestaña natural, realizando diversos diseños y técnicas con fibras tecnológicas.',
    price: 'Cotización (según diseño y técnica)',
    isVariablePrice: true,
  },
  {
    id: 'lifting-de-pestanas',
    name: 'Lifting de Pestañas',
    category: 'mirada',
    categoryLabel: 'Mirada y Pestañas',
    description:
      'Rizado semipermanente sobre las pestañas naturales para lograr una apariencia más larga, elevada y definida sin rizador de metal.',
    price: '$200 MXN',
    durability: 'Duración 1 mes',
  },
  {
    id: 'laminado-ceja',
    name: 'Laminado y Planchado de Ceja',
    category: 'mirada',
    categoryLabel: 'Cejas',
    description:
      'Estilizado direccional del vello de la ceja para peinar y fijar una apariencia más tupida, simétrica y estilizada (puede incluir tinte).',
    price: '$280 MXN',
  },
  {
    id: 'microblading',
    name: 'Microblading',
    category: 'mirada',
    categoryLabel: 'Micropigmentación',
    description:
      'Técnica artística de simulación de vellitos pelo a pelo en el área de la ceja para brindar densidad y definición conservando la naturalidad.',
    price: '$1,800 MXN',
    durability: 'Duración 1 a 2 años',
  },
  {
    id: 'micropigmentacion-cejas',
    name: 'Micropigmentación de Cejas',
    category: 'mirada',
    categoryLabel: 'Micropigmentación',
    description:
      'Procedimiento con máquina rotativa de maquillaje semipermanente en cejas para efectos polvo, simulación de vellitos, relleno y corrección.',
    price: '$1,800 MXN',
    durability: 'Duración 1 a 2 años',
  },
  {
    id: 'micropigmentacion-ojos',
    name: 'Micropigmentación de Ojos',
    category: 'mirada',
    categoryLabel: 'Micropigmentación',
    description:
      'Maquillaje semipermanente con máquina rotativa en ojos: delineado permanente con colita, punteo de pestañas y doble delineado.',
    price: '$2,000 MXN',
    durability: 'Duración 1 a 2 años',
  },
  {
    id: 'micropigmentacion-labios',
    name: 'Micropigmentación de Labios',
    category: 'mirada',
    categoryLabel: 'Micropigmentación',
    description:
      'Procedimiento con máquina rotativa en labios para delineado sutil del contorno, relleno efecto baby lips o cobertura full lips.',
    price: '$1,800 MXN',
    durability: 'Duración 1 a 2 años',
  },

  // Uñas, Maquillaje y Depilación
  {
    id: 'maquillaje',
    name: 'Maquillaje Social Profesional',
    category: 'estetica',
    categoryLabel: 'Maquillaje',
    description:
      'Servicio de maquillaje profesional elaborado con productos de gama alta para eventos sociales y sesiones especiales.',
    price: '$400 MXN',
    durability: 'Duración 12 a 24 horas sin retoque',
  },
  {
    id: 'manicura',
    name: 'Manicura',
    category: 'estetica',
    categoryLabel: 'Manos y Uñas',
    description:
      'Exfoliación completa de las palmas de las manos y dedos, acompañada de limpieza detallada de las uñas para remover piel muerta.',
    price: '$250 MXN',
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    category: 'estetica',
    categoryLabel: 'Pies y Relajación',
    description:
      'Remoción de piel muerta en planta de los pies y talones, limpieza de uñas, masaje relajante y reflexología en diversos paquetes.',
    price: '$400 MXN',
  },
  {
    id: 'unas-artificiales',
    name: 'Uñas Artificiales',
    category: 'estetica',
    categoryLabel: 'Manos y Uñas',
    description:
      'Extensiones y recubrimientos con acrílico, soft gel, dual system, rubber y gel semipermanente, recreando cualquier diseño.',
    price: 'Cotización (según técnica)',
    isVariablePrice: true,
    image: '/assets/aistudio/U_as_e63cc099.jpeg',
    imageAlt: 'Diseño y aplicación de uñas en tono rojo en Botsuana Studio',
    imageObjectPosition: 'object-center',
  },
  {
    id: 'depilacion',
    name: 'Depilación Facial y Corporal',
    category: 'estetica',
    categoryLabel: 'Cuidado Corporal',
    description:
      'Epilación delicada del vello en todas las áreas del cuerpo y rostro, dejando una sensación inmediata de suavidad y limpieza.',
    price: 'Cotización (según zona)',
    isVariablePrice: true,
  },

  // Productos y Suplementos
  {
    id: 'tratamiento-reestructurante',
    name: 'Tratamiento Reestructurante Capilar',
    category: 'productos',
    categoryLabel: 'Cuidado Capilar',
    description:
      'Venta y aplicación de mascarillas reestructurantes, hidratantes y regenerativas de la fibra capilar, ideal para cabello teñido o maltratado por químicos.',
    price: '$520 MXN (500 ml)',
  },
  {
    id: 'productos-cuidado-personal',
    name: 'Productos de Aseo y Cuidado Personal',
    category: 'productos',
    categoryLabel: 'Línea Bajo Pedido',
    description:
      'Extensa gama bajo pedido: cremas y sérums faciales y capilares, shampoo, acondicionadores, protectores térmicos, jabones y aceites hidratantes.',
    price: 'Cotización (según producto)',
    isVariablePrice: true,
  },
  {
    id: 'suplementos-multivitaminicos',
    name: 'Suplementos Alimenticios Multivitamínicos',
    category: 'productos',
    categoryLabel: 'Salud y Bienestar',
    description:
      'Suplementos de marcas Kromasol, Omnilife y Farmasi enfocados en apoyo energizante, antioxidante, hormonal y control de peso.',
    price: '$720 MXN (caja c/30 sobres)',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-color',
    title: 'Balayage & Diseños de Color',
    category: 'Colorimetría Capilar',
    aspect: '3/4',
    spanClass: 'md:col-span-5',
    caption: 'Iluminación dimensional, baby lights y transición suave respetando la salud de la fibra.',
    technique: 'Balayage, luces, rayos y mascarilla regenerativa',
    motif: 'color',
    serviceId: 'disenos-de-color',
  },
  {
    id: 'gal-alaciado',
    title: 'Alaciado Progresivo Sin Formol',
    category: 'Salud Capilar',
    aspect: '4/3',
    spanClass: 'md:col-span-7',
    caption: 'Acabado espejo y docilidad por 4 a 6 meses con fórmulas libres de formol.',
    technique: 'Alaciado por onza + hidratación capilar',
    motif: 'hair',
    serviceId: 'alaciados-permanentes',
  },
  {
    id: 'gal-microblading',
    title: 'Microblading & Diseño de Cejas',
    category: 'Micropigmentación',
    aspect: '4/3',
    spanClass: 'md:col-span-4',
    caption: 'Simulación hiperrealista pelo a pelo y efecto polvo adaptados a la estructura facial.',
    technique: 'Microblading / Máquina rotativa · 1 a 2 años',
    motif: 'brows',
    serviceId: 'microblading',
  },
  {
    id: 'gal-pestanas',
    title: 'Pestañas 1x1 & Fibras Tecnológicas',
    category: 'Mirada',
    aspect: '3/4',
    spanClass: 'md:col-span-4',
    caption: 'Curvatura y densidad a medida sobre cada pestaña natural o lifting sin rizador.',
    technique: 'Fibras tecnológicas / Lifting semipermanente',
    motif: 'lashes',
    serviceId: 'pestanas-1x1',
  },
  {
    id: 'gal-social',
    title: 'Maquillaje & Alto Peinado',
    category: 'Eventos Sociales',
    aspect: '4/3',
    spanClass: 'md:col-span-4',
    caption: 'Piel luminosa y peinados estructurados de gama alta con duración de 12 a 24 horas.',
    technique: 'Maquillaje blindado + ondas / alto peinado',
    motif: 'makeup',
    serviceId: 'maquillaje',
  },
  {
    id: 'gal-unas',
    title: 'Soft Gel, Acrílico & Manicura Spa',
    category: 'Manos y Pies',
    aspect: '3/4',
    spanClass: 'md:col-span-12 lg:col-span-6 lg:col-start-4',
    caption: 'Construcción limpia en soft gel, dual system, rubber y pedicure con reflexología.',
    technique: 'Soft gel, rubber, acrílico y exfoliación',
    motif: 'nails',
    serviceId: 'unas-artificiales',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-precios',
    question: '¿Qué precios manejan en sus servicios?',
    answer:
      'Contamos con tarifas específicas por servicio: Corte de cabello $150, Diseño de barba $80, Lifting de pestañas $200, Manicura $250, Laminado de ceja $280, Pedicure $400, Maquillaje o Peinado $400 c/u, Alaciado permanente $590/onza, Base de chinos $100/onza, Microblading y Micropigmentación de cejas o labios $1,800, y Micropigmentación de ojos $2,000. En diseños de color, uñas artificiales, pestañas 1x1 o depilación el costo varía según técnica, largo o zona.',
  },
  {
    id: 'faq-agendar',
    question: '¿Tienen disponibilidad de horario y cómo agendo mi cita?',
    answer:
      'Para consultar la disponibilidad actualizada y apartar tu espacio, comunícate directamente vía WhatsApp al 443 182 4841 o por llamada telefónica al 443 420 3080. También puedes usar nuestro formulario en esta página para enviarnos tu solicitud directa.',
  },
  {
    id: 'faq-duracion-efecto',
    question: '¿Cuánto tiempo duran los resultados de cada servicio?',
    answer:
      'La durabilidad depende del procedimiento y sus cuidados posteriores: Alaciados permanentes de 4 a 6 meses; Bases de chinos, Microblading y Micropigmentación (cejas, ojos y labios) de 1 a 2 años; Lifting de pestañas 1 mes; y Maquillaje o Peinado social garantizan durabilidad todo el día (12 a 24 horas sin retoque).',
  },
  {
    id: 'faq-tiempo-sesion',
    question: '¿Cuánto tiempo dura la aplicación en el studio?',
    answer:
      'La duración de la sesión varía según el servicio exacto, el largo del cabello o la técnica elegida. Al agendar tu cita vía WhatsApp (443 182 4841) te indicamos el tiempo estimado para que organices tu visita con comodidad.',
  },
  {
    id: 'faq-hidratacion',
    question: '¿Qué recomiendan para hidratar el cabello maltratado o teñido?',
    answer:
      'Recomendamos nuestra mascarilla reestructurante, hidratante y regenerativa de la fibra capilar ($520 MXN por 500 ml), especialmente formulada para cabellos teñidos o procesados químicamente, complementada con nuestra línea de sérums y aceites hidratantes.',
  },
  {
    id: 'faq-productos',
    question: '¿Qué productos y suplementos tienen a la venta?',
    answer:
      'Ofrecemos tratamientos reestructurantes capilares ($520 / 500 ml), productos de cuidado facial y capilar bajo pedido (cremas, sérums, shampoo, protectores térmicos, jabones y aceites) y suplementos alimenticios multivitamínicos de Kromasol, Omnilife y Farmasi ($720 la caja con 30 sobres).',
  },
  {
    id: 'faq-fotos',
    question: '¿Dónde puedo ver fotografías de trabajos reales y transformaciones?',
    answer:
      'Puedes explorar nuestro portafolio actualizado de resultados reales en nuestros canales oficiales: Facebook (Botsuana Studio), Instagram (Botsuana Studio) y TikTok (Mya Alvarez).',
  },
  {
    id: 'faq-cotizacion-pagos',
    question: '¿Realizan cotizaciones previas y aceptan transferencia bancaria?',
    answer:
      'Sí. Para servicios de precio variable (diseños de color, uñas artificiales, extensiones de pestañas o depilación) escríbenos por WhatsApp compartiendo detalles o foto de referencia. Aceptamos pagos por transferencia bancaria; al confirmar tu cita o cotización te enviamos los datos bancarios.',
  },
];
