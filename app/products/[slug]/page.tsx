'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

// Sample product data - in a real app, this would come from a database or API
const productsData = {
  'single-component-bonding-agent': {
    title: 'Single Component Bonding Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392803/unsplash_x8ZStukS2PM_1_flkza9.svg',
    description: 'Aurobond 825 provides excellent improvement of adhesion value between fabric and coated steel cord (brass coated) with rubber compound against unprotected thin component systems (Monofilament and Cordboad).',
    specification: 'Auroband-833 provides excellent improvement of adhesion value between fabric and rubber material with rubber compound against unprotected thin component systems (Monofilament and Cordboad).',
    advantages: [
      'Disperses easily in rubber compound',
      'Helps to effectively avoid dust during mixing',
      'Reduces dust hazards',
      'Improves green tack of the compound',
      'Better adhesion properties with rubber compound',
      'Better adhesion properties with compound'
    ]
  },
  'two-component-bonding-agent': {
    title: 'Two Component Bonding Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763393226/unsplash_x8ZStukS2PM_15_oecjh1.svg',
    advantageGroups: [
      {
        heading: 'Modified Resorcinol Component',
        items: [
          'Aurobond RD I (S)- Modified Resorcinol & inert carrier',
          'Aurobond RD22- Modfied Resorcinol Formaldehyde Resin',
          'Aurobond R50(S)- Modified Resorcinol dipping agent'
        ]
      },
      {
        heading: 'Resorcinol Component',
        items: [
          'Aurobond RD I- Resorcinol Filler Masterbatch',
          'Aurobond RD 20 - Resorcinol Formaldehyde Resin',
          'Aurobond R80 (S) - Resorcinol Rubber Masterbatch'
        ]
      },
      {
        heading: 'Methylene Component',
        items: [
          'Aurobond MD IV - HMMM Masterbatch',
          'Aurobond MD 65 - HMMM Masterbatch'
        ]
      }
    ]
  },
  'peroxide-co-agent': {
    title: 'Peroxide Co Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392804/unsplash_x8ZStukS2PM_2_idqnag.svg',
    description: 'Peroxide co-agent is a monomeric or oligomeric system that when used in a peroxide cure system enhances cross – linking. Aurosin Grades of Peroxide Co-agent is used to enhance peroxide curing of elastomeric systems. Synergestic use of co agents and peroxide can result in more efficient use of free radicals and improved cross link density. Also available in pre-dispersed polymer bound masterbatches',
    specification: 'Enhances peroxide cure systems in rubber compounds.',
    advantages: [
      'Higher Tensile Strength & modulus',
      'Lower Compression',
      'Improves heat ageing & Adhesion',
      'Improves Dynamics properties',
      'Higher hardness',
      'Lower viscosity',
      'Improves resistance to oils and fuels',
      'Improves rubber to reinforcing material adhesion',
      'Increases cure rate',
      'Improves peroxide efficiency'
    ]
  },
  'tackifying-agent': {
    title: 'Tackifying Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392805/unsplash_x8ZStukS2PM_4_uqyhj5.svg',
    description: 'Aurotack is used in elastomeric products which require green tack in their construction like tyres, belts, hoses and tread rubber. It is also used in the manufacturing of rubber adhesive. Aurotack does not have any adverse effect on the cure rate of the vulcanisation.',
    specification: 'Provides excellent tack and green strength in uncured rubber compounds.',
    productList: [
      'Aurotack 202 (Powder) – Tackifier for black compound',
      'Aurotack BP 205 (Solid) – Tackifier for black compound',
      'Aurotack 209 (Solid) – Tackifier for non black compound'
    ],
    advantages: [
      'Increases tack and peel strength',
      'Better processing with no effect on final goods',
      'Better high temperature performance'
    ]
  },
  'physical-modifiers': {
    title: 'Physical Peptizer',
    subheading: 'Auroaid 250',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392802/unsplash_x8ZStukS2PM_5_jhmms9.svg',
    description: 'A unique physical peptizer for natural and polyisoprene rubber, the processibility of the compound is noticeably improved without lowering the molecular weight as chemical peptizers do.',
    specification: 'Tailors physical characteristics to meet specific application requirements.',
    advantages: [
      'Improve physical properties',
      'Improve scorch safety',
      'Reduce Viscosity'
    ]
  },
  'antisticking-agent': {
    title: 'Antisticking Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392803/unsplash_x8ZStukS2PM_3_bkvewj.svg',
    description: 'It is used as aqueous dispersion for anti-adhesive treatment of unvulcanised rubber compound in the form of sheet or strips.',
    specification: 'Prevents self-adhesion of uncured rubber surfaces.',
    productList: [
      'Aurosap VP – Water Dispersible Powder',
      'Aurosap S560 – Water Miscible Powder',
      'Aurosap L550 – Water Soluble Liquid'
    ],
    advantages: [
      'Prevents common problems like blister, sticking, porosity etc',
      'No effect on vulcanization',
      'Activity is excellent & uniform in nature',
      'Smooth surface finish',
      'Uniform coatings on rubber sheets',
      'No pungent gas is liberated & no foaming'
    ]
  },
  'homogenizing-agent': {
    title: 'Homogenizing Agent',
    subheading: 'Aurosin 40 (dark) & Aurosin 60 (light)',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392803/unsplash_x8ZStukS2PM_6_f9uw5k.svg',
    description: 'Improves the homogeneity of polymer blend with different polarities and viscosities, other compounding ingredients can also be mixed fast. It also improves processing behaviour and batch to batch uniformity.',
    specification: 'Promotes homogeneous distribution of additives in rubber matrix.',
    advantages: [
      'Better compatiability between polymer blends',
      'Improves flow properties and mechanical properties',
      'Increases mixing efficiency'
    ]
  },
  'anti-abrasion': {
    title: 'Anti-Abrasion Additive',
    subheading: 'Auroaid AR 262',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392803/unsplash_x8ZStukS2PM_7_jnqkaw.svg',
    description: 'It is an efficient anti-abrasion additive for rubber compound, used in tyre, conveyor belt, rubber shoe sole, etc.',
    specification: 'Significantly improves wear resistance and service life.',
    advantages: [
      'Improves abrasion resistance',
      'Improves surface quality like surface slip, gloss and surface finish',
      'Improves processing properties including better flow ability, reduces extrusion die drool, less extruder torque',
      'Eco-friendly material',
      'Applicable for NR, NBR, EPDM, CR, BR, SBR, IR, HR, CSM, etc'
    ]
  },
  'flame': {
    title: 'Flame Retardants',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392802/unsplash_x8ZStukS2PM_8_mrdg6d.svg',
    description: 'Flame retardant additives are used in rubber to inhibit combustion or to delay the spread of fire after ignition.',
    productGroups: [
      {
        subheading: 'Aurosin FRH 910',
        description: 'Halogen free FR for Thermoplastics & rubber. It provides excellent flame retardant properties & is effective in high processing temperature. It is based on intumescent systems with minimum effect on mechanical properties.',
        advantages: [
          'Aurosin FRH 910 is halogen free flame retardant and environment friendly',
          'Aurosin FRH 910 produce nontoxic gases when they burn',
          'After glow suppressor'
        ]
      },
      {
        subheading: 'Aurosin FRP 914',
        description: 'Aurosin FRP 914 is a proprietary flame retardant additive suitable for rubber compound, It also shows improved mechanical & chemical properties.',
        application: 'Aurosin FRP 914 is suitable for all kinds of rubber and rubber based compounds like seals, gaskets, insulating materials, conveyor belts etc.',
        advantages: [
          'Minimum or no impact on curing parameter',
          'Afterglow suppression',
          'Improved final product service performances',
          'Aurosin FRP 914 generates comparatively low smoke with improved char formation'
        ]
      },
      {
        subheading: 'Aurosin FRM 920',
        description: 'Halogenated FR in masterbatch form suitable for rubber compound, which provided varying degree of flammability protection. It also shows improved mechanical & chemical properties.',
        advantages: [
          'Reduces fly loss and dust hazards',
          'Uniform dispersion',
          'As the product is in granular form, it offers virtually no skin contact with the active component',
          'Ease of weighing',
          'Minimum or no impact on curing parameter',
          'After glow suppressor'
        ]
      }
    ]
  },
  'dispersing-processing-additives': {
    title: 'Dispersing & Processing Additives',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392864/unsplash_x8ZStukS2PM_9_zqbywg.svg',
    productVariants: [
      {
        subheading: 'Auroaid 212',
        description: 'Auroaid 212 is a fatty acid derivative bound to chemically inert fillers used to improve the flow properties during extrusion and molding applications like molded auto components, fuel hoses, LPG hoses, calendared & extruded products'
      },
      {
        subheading: 'Auroaid 216',
        description: 'Auroaid 216 is fatty acid based processing aid used in rubber compounds to improve flow properties and to eliminate the sticking to mill rolls, internal mixer rotors. Reduces the internal friction during processing.'
      },
      {
        subheading: 'Auroaid 222',
        description: 'Auroaid 222 is a high molecular weight fatty acid based processing aid for rubber polymers, which is normally used to improve the general compound processing without significant influence on the physical properties. It acts as a dispersing agent for powdered material and can shorten the mixing time by faster filler incorporation.'
      },
      {
        subheading: 'Auroaid 244',
        description: 'Auroaid 244 is a unique processing additive and provide excellent improvement of processing behaviour for a wide range of applications like EPDM Cables, Hoses, EVA Sheet & Footwear, Coloured Rubber Sheets, Profiles of Automobile.'
      },
      {
        subheading: 'Auroaid 260',
        description: 'Physical Peptizer cum processing additive for NR and its blends. It helps to reduce viscosity and also improve the processing behaviour of the compound.'
      }
    ],
    features: [
      'Reduce viscosity and improves flow properties',
      'Excellent flow promoter for compounds with high level of white fillers (Silica, Chalk, Clay, etc.)',
      'Process additives for all kinds of non-halogenated polymers',
      'Improves dispersion of white fillers',
      'Better batch to batch uniformity',
      'Decreases the tendency of re-agglomeration of Silica',
      'Improves compound processing',
      'Improves filler incorporation',
      'Better dispersion of powder materials',
      'Reduces internal friction & improves release property'
    ]
  },
  'desiccant-agent-silica': {
    title: 'Dispersing Agent for Silica',
    subheading: 'Auroaid SD 255',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392866/unsplash_x8ZStukS2PM_10_urq8xs.svg',
    description: 'It is a proprietary and environment friendly processing additive and dispersing additive for highly silica loaded compound.',
    specification: 'Controls moisture content in silica-based rubber formulations.',
    advantages: [
      'Effective in highly silica and inorganic filler loaded compound',
      'Reduces in mony viscosity and allows less increase of mooney viscosity over the time',
      'No influence in physical properties and curing system'
    ]
  },
  'desiccant-rubber': {
    title: 'Desiccant for Rubber',
    subheading: 'Aurosin 1028',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392863/unsplash_x8ZStukS2PM_11_joqvsp.svg',
    description: 'Aurosin 1028 is specially designed to absorbed the entrapped moisture and acid fumes and thereby preventing the formation of air bubble or blister in the product.',
    advantages: [
      'Reduces surface defects generated from the entrapped moisture and fumes',
      'Have negligible impact on curing or physical properties',
      'In pre-dispersed master batch form for better processing and handling'
    ],
    application: 'Conveyor belt (Fire resistant / Heat resistant and others), rubber seal, hoses and other polymeric product.'
  },
  'antistatic-agent': {
    title: 'Antistatic Agent',
    subheading: 'Auroaid AS 355',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392862/unsplash_x8ZStukS2PM_12_zhr7mu.svg',
    description: 'Auroaid AS 355 eliminates buildup of static electric charge on the surface of finished products .The static electricity needs to be dispersed to avoid problems such as sparking or dust attraction.',
    advantages: [
      'Minimizes risk of electrical discharge that may cause fire or explosion',
      'Reduces dust accumulation that affects performance and appearance of the products',
      'Offers improved flow and lubricating properties and easy releas'
    ]
  },
  'smoke-suppressant': {
    title: 'Smoke Suppressant',
    subheading: 'Aurogaurd 905',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392861/unsplash_x8ZStukS2PM_13_xg94ad.svg',
    description: 'Aurogaurd 905 is a unique smoke suppressant for both halogenated and non halogenated polymers. It acts efficiently in making Fire Resistant Low Smoke (FRLS) compound from a non-halogenated polymer when used in combination with Antimony Trioxide (Sb₂O₃) and trace of halogenated additives. Aurogaurd 905 also reduces the hazard from generation of smoke, toxic and corrosive fumes and does not impair any physical properties.',
    advantages: [
      'Lowering surface spread on exposure',
      'Generation of smoke to be lowered',
      'It also reduces the hazard from generation of smoke, toxic and corrosive fumes and does not impair the physical properties'
    ]
  },
  // Plastic Additives Products
  'multifunctional-process-aids': {
    title: 'Multifunctional Process Aids',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452039/product-pic13-big_pfk4mr.jpg',
    productVariants: [
      {
        subheading: 'Auroaid 300',
        description: 'Auroaid 300 is a multifunctional processing aid and it acts as an efficient blending and dispersing agent in highly filled systems leading to improved flow property, shortened mixing cycle and better productivity.',
        advantages: [
          'Timely and complete dispersion',
          'Better flow during moulding',
          'Even ply surface',
          'Minimizes airborne dust',
          'Process improvement',
          'Improves product with homogeneous blend'
        ]
      },
      {
        subheading: 'Auroaid 344',
        description: 'Auroaid 344 is an unique processing additive and provide excellent improvement of processing behavior for a wide range of filled polyolefins like PP/PE and EVA compound.',
        advantages: [
          'Reduces viscosity and improves flow properties',
          'Homogeneous dispersion',
          'Increases surface gloss',
          'Specially suitable for transfer and injection moulding application, increases productivity'
        ]
      }
    ]
  },
  'process-aids-vinyl': {
    title: 'Process Aids for Vinyl compounds',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452039/product-pic18_exrhdn.jpg',
    productVariants: [
      {
        subheading: 'Auroaid 320',
        description: 'Auroaid 320 is a versatile processing aid for PVC Compounds for reducing shrinkage of the molded products and faster fusion.',
        advantages: [
          'Improves production efficiency and increases output rates',
          'Excellent Dispersion',
          'Smooth and perfect glossy surface',
          'Reduces shrinkage of the molded products'
        ]
      },
      {
        subheading: 'Auroaid 322',
        description: 'Auroaid 322 is a unique processing aid for rigid PVC Compounds. It improves dispersion, gloss and dimensional stability.',
        advantages: [
          'Well compatibility with PVC',
          'Smooth glossy surfaces free of surface imperfection',
          'Improves dimensional stability',
          'Reduces shrinkage of the molded products',
          'Readily dispersed in the compounds',
          'Improves surface quality',
          'Better productivity'
        ]
      },
      {
        subheading: 'Auroaid 316',
        description: 'AUROAID 316 is a Zinc free processing lubricant for vinyl compounds.',
        advantages: [
          'Improves flow properties',
          'Homogeneous dispersion'
        ]
      }
    ]
  },
  'antiblock-additive': {
    title: 'Antiblock Additive',
    subheading: 'Auroaid 315C',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452039/antiblock_eyewow.jpg',
    description: 'Auroaid 315C is an amide based external lubricant and excellent antiblocking agent for plastic processing. It also improves flow and surface finish.',
    advantages: [
      'ABS /Polystyrene : Improves flow and mould release properties.',
      'Polymide / Nylon : Mould release agent , improves surface finish.',
      'Polyolefin: Good release effect on rolls and mould. Flow improver and mould release agent for filled PP/PE compounds.',
      'Rigid PVC: External lubricant, improve flow and anti-blocking properties, does not affect clarity of PVC films or sheet.'
    ]
  },
  'dispersing-wetting-agent': {
    title: 'Dispersing & Wetting Agent',
    subheading: 'Auroaid AL 335',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452038/dispersing_wetting_pspy8c.jpg',
    description: 'Auroaid AL335 is a dispersing & wetting agent for highly filled carbon black & inorganic filler based compounds without added gel.',
    advantages: [
      'Readily dispersed in the compound without added gel',
      'Improves flow characteristics',
      'Improves surface gloss and colour strength',
      'Even dispersion of carbon black in the polymer matrix',
      'Suitable for semi conducting cable compound'
    ]
  },
  'dispersing-additive-anti-fibrillation': {
    title: 'Dispersing Additive for Anti-fibrillation',
    subheading: 'Auroaid 345',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452037/product-pic40_wyrbov.jpg',
    description: 'Auroaid 345 is a unique dispersing additive for Anti-fibrillation master batches & compounds for reducing water carry over on tape line during high speed operation and thus increases gloss and strength of the tape.',
    advantages: [
      'Reduces water carry over on tape line during high speed operation',
      'Improve shining, clarity, surface finish and gloss of product',
      'Improves strength of the tape',
      'Reduces the viscosity leading to lower torque and improves flow at processing temperature',
      'Increase the colour strength of the pigment'
    ]
  },
  'plastic-smoke-suppressant': {
    title: 'Smoke Suppressant',
    subheading: 'Aurogaurd 905',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392861/unsplash_x8ZStukS2PM_13_xg94ad.svg',
    description: 'Aurogaurd 905 lowers the generation of smoke and toxic fumes for fire resistant PVC, CSP and EPDM compounds',
    advantages: [
      'To reduce the smoke generation',
      'No effect on the physical properties',
      'Improved mechanical strength',
      'Improved Limiting Oxygen Index (LOI)'
    ]
  },
  'polymer-processing-additives': {
    title: 'Polymer Processing Additives ( PPA)',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452039/ppa_f5gzqm.jpg',
    productVariants: [
      {
        subheading: 'Auroaid 90 MB',
        description: 'Auroaid 90 MB is a PFAS free polymer processing additive masterbatch developed to improve extrusion of different thermoplastic resins (LDPE, LLDPE, HDPE etc) along with process efficiency and product quality. Auroaid 90 MB can be easily incorporated into the process and will be more effective as the active component is uniformly dispersed in the carrier polymer.\n\nProduct is tested to meet the specification of US FDA 21 CFR 177.1520.\n\nAvailable : 3% and 5% active Content.',
        advantages: [
          'Reduces die lines, die build up',
          'Reduces or eliminates melt fracture',
          'Reduces melt viscosity and enhances processing of high strength resins',
          'High throughput',
          'Excellent "shark skin" prevention in blown, cast and BOPP films',
          'Significant reduction of the coefficient of friction (COF) and strong permanent slip enhancement.'
        ]
      },
      {
        subheading: 'Auroaid 96 MB',
        description: 'Auroaid 96MB is a polymer processing additive masterbatch developed to enhance and improve the extrusion of different thermoplastic resins (LDPE, LLDPE, HDPE etc) along with process efficiency and product quality.\n\nAvailable in 3 and 5 % active masterbatch.',
        advantages: [
          'Reduce die lines, die build up and sticking',
          'Reduce or eliminates melt fracture',
          'Reduce downtime for maintenance',
          'Reduce viscosity and enhance melt flow properties',
          'Minimize surface defects – weld lines, sink and flow marks',
          'With increase in melt temperature, extruder pressure also reduced and optimized.'
        ]
      }
    ]
  },
  'plastic-anti-abrasion': {
    title: 'Anti-Abrasion Additives',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452038/antiabbrasion_k7esih.jpg',
    productVariants: [
      {
        subheading: 'Auroaid SE 362',
        description: 'Auroaid SE 362 is specially designed to work as an efficient additive for PVC and EVA compatible resin system to improve anti-abrasion alongwith the processing properties and surface quality, better flow ability, mold filling & release, less extruder torque, lower coefficient of friction and for lower abrasion.',
        advantages: [
          'Improves the abrasion, wear, and scratch resistance. It improves the coefficient of friction.',
          'Improves surface quality, gloss and surface finish',
          'Improves processing properties including better flow ability, reduced extrusion die drool, less extruder torque',
          'No or negligible influence in physical property',
          'Faster throughput, reduce product defect rate',
          'Eco-friendly material'
        ]
      },
      {
        subheading: 'Auroaid AR 262',
        description: 'Auroaid AR 262 It is an efficient anti-abrasion additive for rubber compound, used in tyre, conveyor belt, rubber shoe sole, etc.',
        advantages: [
          'Improves abrasion resistance',
          'Improves surface quality, gloss and surface finish',
          'Improves processing properties including better flow ability, reduces extrusion die drool, less extruder torque',
          'Eco-friendly material u Applicable for NR, NBR, EPDM, CR, BR, SBR, IR, HR, CSM, etc'
        ]
      }
    ]
  },
  'plastic-flame-retardants': {
    title: 'Flame Retardants',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452038/product-pic12-big_tovbya.jpg',
    productGroups: [
      {
        subheading: 'Aurosin FRH 910',
        description: 'Aurosin FRH 910 is a halogen free phosphate based intumescent flame retardant powder for reducing flame propagation and smoke generation.',
        advantages: [
          'Aurosin FRH 910 is especially developed for PE, PP, etc.'
        ]
      },
      {
        subheading: 'Aurosin FRP 912',
        description: 'Aurosin FRP 912 is a proprietary flame retardant additive suitable for PVC, CPE, PVC-Nitrile blend FR / FRLS cable compound.',
        application: 'Flame retardant chemicals are used in FR/FRLS cable compound to inhibit combustion or to delay the spread of fire after ignition. Aurosin FRP 912 provides varying degrees of flammability protection when added or incorporated into PVC as well as halogenated rubber (CPE , Polychloroprene, PVC-Nitrile blend etc) compound.',
        advantages: [
          'Minimum or no impact on curing parameter',
          'Comparable compound stability'
        ]
      }
    ]
  },
  'plastic-peroxide-co-agent': {
    title: 'Peroxide Co Agent',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452037/z_collage_with_border_o1cnx7.jpg',
    description: 'Peroxide co-agent is a monomeric or oligomeric system that when used in a peroxide cure system enhances cross – linking. Aurosin Grades of Peroxide Co-agent is used to enhance peroxide curing of elastomeric systems. Synergestic use of co agents and peroxide can result in more efficient use of free radicals and improved cross link density.',
    advantages: [
      'Higher Tensile Strength & modulus',
      'Lower Compression',
      'Improves heat ageing & Adhesion',
      'Improves Dynamics properties',
      'Higher hardness',
      'Lower viscosity',
      'Improves resistance to oils and fuels',
      'Improves rubber to reinforcing material adhesion',
      'Increases cure rate',
      'Improves peroxide efficiency'
    ]
  },
  'processing-dispersing-additives': {
    title: 'Processing & Dispersing Additives',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763392864/unsplash_x8ZStukS2PM_9_zqbywg.svg',
    productVariants: [
      {
        subheading: 'Auroaid 340',
        description: 'Auroaid 340 improves wetting and dispersion of fillers, pigments in highly filled compounds and colour masterbatch respectively.',
        advantages: [
          'Smooth glossy surfaces free of surface imperfection',
          'Improves dimensional stability',
          'Reduces shrinkage of the moulded products',
          'Readily dispersed in the compounds'
        ]
      },
      {
        subheading: 'Auroaid SD 255',
        description: 'Dispersing & Processing Additive for Highly Filled Compounds\n\nAuroaid SD 255 is a proprietary environment friendly specially designed Organic amide to act as Dispersing & Processing aid for highly SilicaFilled compound. Auroaid SD 255 is also effective for highly inorganic filler loaded compound.',
        advantages: [
          'Effective in highly filled compound and also for high inorganic filler loaded compounds (like cable etc)',
          'Significant reduction of Mooney viscosity and less increase of Mooney over the time',
          'It improves filler dispersion',
          'No influence in physical property and curing parameter'
        ]
      }
    ]
  },
  'plastic-antistatic-agent': {
    title: 'Antistatic Agent',
    subheading: 'Auroaid AS 355',
    image: 'https://res.cloudinary.com/dgif730br/image/upload/v1763452037/antistatic_agent_t36xro.jpg',
    description: 'Auroaid AS 355 eliminates static electric charge on the surface of finished products. The static electricity needs to be dissipated to avoid problems such as sparking or dust accumulation.',
    advantages: [
      'Minimizes risk of static electric charge that may cause fire or explosion',
      'Reduces dust accumulation that affects performance and appearance of the products',
      'Offers improved flow and lubricating properties and easy release'
    ]
  }
};

const rubberProducts = [
  { slug: 'single-component-bonding-agent', name: 'Single Component Bonding Agent', category: 'rubber' },
  { slug: 'two-component-bonding-agent', name: 'Two Component Bonding Agent', category: 'rubber' },
  { slug: 'peroxide-co-agent', name: 'Peroxide Co Agent', category: 'rubber' },
  { slug: 'antisticking-agent', name: 'Antisticking Agent', category: 'rubber' },
  { slug: 'tackifying-agent', name: 'Tackifying Agent', category: 'rubber' },
  { slug: 'physical-modifiers', name: 'Physical Peptizer', category: 'rubber' },
  { slug: 'homogenizing-agent', name: 'Homogenizing Agent', category: 'rubber' },
  { slug: 'anti-abrasion', name: 'Anti-Abrasion Additive', category: 'rubber' },
  { slug: 'flame', name: 'Flame Retardants', category: 'rubber' },
  { slug: 'dispersing-processing-additives', name: 'Dispersing & Processing Additives', category: 'rubber' },
  { slug: 'desiccant-agent-silica', name: 'Dispersing Agent for Silica', category: 'rubber' },
  { slug: 'desiccant-rubber', name: 'Desiccant for Rubber', category: 'rubber' },
  { slug: 'antistatic-agent', name: 'Antistatic Agent', category: 'rubber' },
  { slug: 'smoke-suppressant', name: 'Smoke Suppressant', category: 'rubber' }
];

const plasticProducts = [
  { slug: 'multifunctional-process-aids', name: 'Multifunctional Process Aids', category: 'plastic' },
  { slug: 'process-aids-vinyl', name: 'Process Aids for Vinyl compounds', category: 'plastic' },
  { slug: 'antiblock-additive', name: 'Antiblock Additive', category: 'plastic' },
  { slug: 'dispersing-wetting-agent', name: 'Dispersing & Wetting Agent', category: 'plastic' },
  { slug: 'dispersing-additive-anti-fibrillation', name: 'Dispersing Additive for Anti-fibrillation', category: 'plastic' },
  { slug: 'plastic-smoke-suppressant', name: 'Smoke Suppressant', category: 'plastic' },
  { slug: 'polymer-processing-additives', name: 'Polymer Processing Additives ( PPA)', category: 'plastic' },
  { slug: 'plastic-anti-abrasion', name: 'Anti-Abrasion Additives', category: 'plastic' },
  { slug: 'plastic-flame-retardants', name: 'Flame Retardants', category: 'plastic' },
  { slug: 'plastic-peroxide-co-agent', name: 'Peroxide Co Agent', category: 'plastic' },
  { slug: 'processing-dispersing-additives', name: 'Processing & Dispersing Additives', category: 'plastic' },
  { slug: 'plastic-antistatic-agent', name: 'Antistatic Agent', category: 'plastic' }
];

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = productsData[slug as keyof typeof productsData];

  if (!product) {
    return <div>Product not found</div>;
  }

  // Detect category based on slug
  const isPlasticProduct = plasticProducts.some(p => p.slug === slug);
  const currentCategory = isPlasticProduct ? 'plastic' : 'rubber';
  const categoryTitle = isPlasticProduct ? 'Plastic Additives' : 'Specialty Rubber Chemicals';
  const allProducts = isPlasticProduct ? plasticProducts : rubberProducts;
  const applicationText = isPlasticProduct ? 'plastic' : 'rubber';

  return (
    <div className="product-detail-page">
      <Header />

      {/* Hero Section with Breadcrumb */}
      <section className="product-detail-hero">
        <div className="product-detail-hero-overlay"></div>
        <div className="product-detail-breadcrumb">
          <Link href="/">Home</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <Link style={{color:"white"}} href={`/products?category=${currentCategory}`}>Products</Link>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>{categoryTitle}</span>
        </div>
        <h1 className="product-detail-hero-title">{product.title}</h1>
      </section>

      {/* Main Content */}
      <section className="product-detail-content">
        <div className="product-detail-layout">
          {/* Left Side - Product Image and Details */}
          <div className="product-detail-left">
            <div className="product-detail-image-container">
              <img src={product.image} alt={product.title} />
            </div>

            {'subheading' in product && (
              <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#000000', fontFamily: 'IBM Plex Mono, sans-serif', fontStyle: 'italic' }}>
                  {product.subheading}
                </h2>
              </div>
            )}

            {slug !== 'two-component-bonding-agent' && slug !== 'dispersing-processing-additives' && slug !== 'processing-dispersing-additives' && slug !== 'multifunctional-process-aids' && slug !== 'process-aids-vinyl' && slug !== 'polymer-processing-additives' && slug !== 'plastic-anti-abrasion' && 'description' in product && (
              <div className="product-detail-description">
                {slug === 'peroxide-co-agent' || slug === 'plastic-peroxide-co-agent' ? (
                  <>
                    <p>{product.description.split('Also available')[0]}</p>
                    <p style={{ marginTop: '20px' }}>Also available{product.description.split('Also available')[1]}</p>
                  </>
                ) : slug === 'smoke-suppressant' ? (
                  <>
                    <p>{product.description.split('It acts efficiently')[0]}</p>
                    <p style={{ marginTop: '20px' }}>It acts efficiently{product.description.split('It acts efficiently')[1]}</p>
                  </>
                ) : (
                  <p>{product.description}</p>
                )}
              </div>
            )}

            {slug !== 'two-component-bonding-agent' && slug !== 'peroxide-co-agent' && slug !== 'antisticking-agent' && slug !== 'tackifying-agent' && slug !== 'physical-modifiers' && slug !== 'homogenizing-agent' && slug !== 'anti-abrasion' && slug !== 'flame' && slug !== 'dispersing-processing-additives' && slug !== 'desiccant-agent-silica' && slug !== 'desiccant-rubber' && slug !== 'antistatic-agent' && slug !== 'smoke-suppressant' && slug !== 'plastic-smoke-suppressant' && slug !== 'plastic-flame-retardants' && slug !== 'processing-dispersing-additives' && slug !== 'plastic-antistatic-agent' && slug !== 'plastic-peroxide-co-agent' && slug !== 'multifunctional-process-aids' && slug !== 'process-aids-vinyl' && slug !== 'antiblock-additive' && slug !== 'dispersing-wetting-agent' && slug !== 'dispersing-additive-anti-fibrillation' && slug !== 'polymer-processing-additives' && slug !== 'plastic-anti-abrasion' && 'specification' in product && (
              <div className="product-detail-section">
                <h2 className="product-section-heading">Specification</h2>
                <p className="product-section-content">{product.specification}</p>
              </div>
            )}

            {(slug === 'antisticking-agent' || slug === 'tackifying-agent') && 'productList' in product && (
              <div className="product-detail-section">
                <ul className="product-list-arrows">
                  {product.productList.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {'productVariants' in product && (
              <div className="product-variants-container">
                {product.productVariants.map((variant: any, variantIndex: number) => (
                  <div key={variantIndex} style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: variantIndex < product.productVariants.length - 1 ? '1.5px solid rgb(16, 91, 78)' : 'none' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#000000', fontFamily: 'IBM Plex Mono, sans-serif', fontStyle: 'italic', marginBottom: '20px' }}>
                      {variant.subheading}
                    </h2>
                    <div style={{ marginBottom: variant.advantages ? '30px' : '0' }}>
                      {variant.description.split('\n\n').map((para: string, pIndex: number) => (
                        <p key={pIndex} style={{ fontSize: '18px', lineHeight: '26px', color: '#000000', fontFamily: 'IBM Plex Mono, sans-serif', marginTop: pIndex > 0 ? '20px' : '0' }}>
                          {para}
                        </p>
                      ))}
                    </div>
                    {variant.advantages && (
                      <>
                        <h3 className="product-section-heading" style={{ marginTop: '20px' }}>Advantages</h3>
                        <ul className="product-list-arrows">
                          {variant.advantages.map((advantage: string, advIndex: number) => (
                            <li key={advIndex}>{advantage}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}

            {'features' in product && (
              <div className="product-detail-section" style={{ marginTop: '0', paddingTop: '30px', borderBottom: 'none', paddingBottom: '0', marginBottom: '0' }}>
                <h2 className="product-section-heading">Features</h2>
                <ul className="product-list-arrows">
                  {product.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {slug !== 'dispersing-processing-additives' && slug !== 'processing-dispersing-additives' && slug !== 'multifunctional-process-aids' && slug !== 'process-aids-vinyl' && slug !== 'polymer-processing-additives' && slug !== 'plastic-anti-abrasion' && (
              <div className="product-detail-section">
                {slug !== 'two-component-bonding-agent' && slug !== 'flame' && slug !== 'plastic-flame-retardants' && (
                  <h2 className="product-section-heading">Advantages</h2>
                )}
              {'productGroups' in product ? (
                <div className="product-groups-container">
                  {product.productGroups.map((group: any, groupIndex: number) => (
                    <div key={groupIndex} className="product-group-section">
                      <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#000000', fontFamily: 'IBM Plex Mono, sans-serif', fontStyle: 'italic', marginBottom: '20px' }}>
                        {group.subheading}
                      </h2>
                      <p style={{ fontSize: '18px', lineHeight: '26px', color: '#000000', fontFamily: 'IBM Plex Mono, sans-serif', marginBottom: '20px' }}>
                        {group.description}
                      </p>
                      {group.application && (
                        <div style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: '1.5px solid rgb(16, 91, 78)' }}>
                          <h3 className="product-section-heading">Application</h3>
                          <p style={{ fontSize: '18px', lineHeight: '26px', color: '#000000', fontFamily: 'IBM Plex Mono, sans-serif' }}>
                            {group.application}
                          </p>
                        </div>
                      )}
                      <div style={{ marginBottom: '30px', paddingBottom: '30px', borderBottom: groupIndex < product.productGroups.length - 1 ? '1.5px solid rgb(16, 91, 78)' : 'none' }}>
                        <h3 className="product-section-heading">Advantages</h3>
                        <ul className="product-list-arrows">
                          {group.advantages.map((advantage: string, advIndex: number) => (
                            <li key={advIndex}>{advantage}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ) : 'advantageGroups' in product ? (
                <div className="product-advantage-groups">
                  {product.advantageGroups.map((group: any, groupIndex: number) => (
                    <div key={groupIndex} className="advantage-group">
                      <h3 className="advantage-group-heading">{group.heading}</h3>
                      <ul className="advantage-group-items">
                        {group.items.map((item: string, itemIndex: number) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="product-advantages">
                  {'advantages' in product && product.advantages?.map((advantage: string, index: number) => (
                    <li key={index}>{advantage}</li>
                  ))}
                </ul>
              )}
              </div>
            )}

            {slug === 'desiccant-rubber' && 'application' in product && (
              <div className="product-detail-section">
                <h2 className="product-section-heading">Application</h2>
                <p className="product-section-content">{product.application}</p>
              </div>
            )}

            <div className="product-two-column-section">
              <div className="product-detail-section product-brochure-download">
                <h2 className="product-section-heading">Brochure</h2>
                <div className="brochure-download-card">
                  <img src="https://res.cloudinary.com/dgif730br/image/upload/v1763212838/rubber-brochure_1_ouijmg.svg" alt="Brochure" />
                  <div className="brochure-download-content">
                    <h3>High Quality Solutions for {applicationText === 'plastic' ? 'Plastic' : 'Rubber'} Manufacturing</h3>
                    <button className="btn-download">
                      Download Brochure
                      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#203C56"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-detail-section product-query-box">
                <h2 className="product-query-heading">Have a Query?</h2>
                <h3 className="product-query-text">Get the perfect formulation for your {applicationText} application</h3>
                <Link href="/enquiry" className="btn-query">
                  Enquire Now
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="#105B4E"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Product List */}
          <div className="product-detail-right">
            <div className="product-list-sidebar">
              <h2 className="product-list-title">Product List</h2>
              <ul className="product-list-items">
                {allProducts.map((item) => (
                  <li key={item.slug} className={slug === item.slug ? 'active' : ''}>
                    <Link href={`/products/${item.slug}`}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sidebar Query Box */}
            <div className="sidebar-query-box">
              <h3 className="sidebar-query-heading">Have a Query?</h3>
              <p className="sidebar-query-text">We're here to help</p>
              <Link href="/enquiry" className="btn-sidebar-query">
                Enquire Now
                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.29425e-05 7.91412L11.5861 7.91412L7.08606 12.4141L8.50006 13.8281L15.4141 6.91412L8.50006 0.000125885L7.08606 1.41413L11.5861 5.91412L6.29425e-05 5.91412V7.91412Z" fill="white"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

