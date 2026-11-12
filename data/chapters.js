// Full content of the 18 chapters (source: "Our Resolution" document).
// Each chapter gets its own page at /manifesto/<slug>.
// `images` = 2-3 images per chapter, shown zig-zag with the content. To use real photos: replace entries in `images` (and `image`, used for sharing) with a path in /public or a remote URL.
export const chapters = [
  {
    slug: "good-nutrition-for-every-child",
    title: "Good Nutrition for Every Child",
    icon: "apple",
    image: "/chapters/good-nutrition-for-every-child-1.svg",
    summary:
      "Children are the future of any nation. If they do not get adequate and nutritious food in childhood, their physical and mental development can be affected.",
    content: [
      {
        type: "p",
        text: "Children are the future of any nation. If they do not get adequate and nutritious food in childhood, their physical and mental development can be affected.",
      },
      {
        type: "p",
        text: "Our proposal is that, along with the distribution of grain to needy families, a system of financial assistance for children's nutrition should be considered.",
      },
      {
        type: "p",
        text: "We want a practical scheme to be designed to give eligible and economically weak mothers assistance of ₹5,000 to ₹6,000 per month for their children's nutrition.",
      },
      {
        type: "p",
        text: "A mother should have the freedom to buy milk, fruit, pulses, and other nutritious foods for her child.",
      },
      {
        type: "p",
        text: "Simply put: every poor mother should be given ₹5,000 to ₹6,000 so that she has the freedom to feed her child well.",
      },
    ],
    resolve:
      "No child should be deprived of nutritious food merely because of poverty.",
    closing: [],
    images: [
      "/chapters/good-nutrition-for-every-child-1.svg",
      "/chapters/good-nutrition-for-every-child-2.svg",
      "/chapters/good-nutrition-for-every-child-3.svg",
    ],
  },
  {
    slug: "affordable-cooking-gas-for-poor-housewives",
    title: "Affordable Cooking Gas for Poor Housewives",
    icon: "flame",
    image: "/chapters/affordable-cooking-gas-for-poor-housewives-1.svg",
    summary:
      "The kitchen is the foundation of a family's health and dignity. Cooking gas should be available to every poor family at half the rate.",
    content: [
      {
        type: "p",
        text: "The kitchen is the foundation of a family's health and dignity. Cooking gas should be available to every poor family at half the rate.",
      },
      {
        type: "p",
        text: "A system should be considered to provide cooking gas to housewives of economically weak families at roughly half the market price.",
      },
      {
        type: "p",
        text: "We want that a mother in a poor family should not have to struggle every month to manage the kitchen budget.",
      },
    ],
    resolve: "Relief should reach the kitchen of every poor family.",
    closing: [],
    images: [
      "/chapters/affordable-cooking-gas-for-poor-housewives-1.svg",
      "/chapters/affordable-cooking-gas-for-poor-housewives-2.svg",
    ],
  },
  {
    slug: "transparency-in-elections-above-all",
    title: "Transparency in Elections Above All",
    icon: "vote",
    image: "/chapters/transparency-in-elections-above-all-1.svg",
    summary: "The greatest strength of democracy is the people's trust.",
    content: [
      {
        type: "p",
        text: "The greatest strength of democracy is the people's trust.",
      },
      {
        type: "p",
        text: "There should be a broad national discussion on the questions being raised about the election process.",
      },
      {
        type: "p",
        text: "We propose a serious debate on the transparency, security, and reliability of all election systems, including the possibility of conducting elections with ballot papers.",
      },
      {
        type: "p",
        text: "This discussion should involve the Election Commission, political parties, technical experts, constitutional experts, and ordinary citizens.",
      },
      {
        type: "p",
        text: "All election reforms should be carried out according to constitutional and legal processes.",
      },
    ],
    resolve: "Every citizen should have trust in the election process.",
    closing: [],
    images: [
      "/chapters/transparency-in-elections-above-all-1.svg",
      "/chapters/transparency-in-elections-above-all-2.svg",
      "/chapters/transparency-in-elections-above-all-3.svg",
    ],
  },
  {
    slug: "employment-for-youth-in-the-nations-security",
    title: "Employment for Youth in the Nation's Security",
    icon: "shield",
    image: "/chapters/employment-for-youth-in-the-nations-security-1.svg",
    summary:
      "India's youth should not merely be job seekers, but partners in the country's security and administration.",
    content: [
      {
        type: "p",
        text: "India's youth should not merely be job seekers, but partners in the country's security and administration.",
      },
      {
        type: "p",
        text: "Our proposal is that employment opportunities in government security services be increased for youth who have passed Class 12.",
      },
      {
        type: "p",
        text: "Youth who are physically fit, disciplined, mentally healthy, and of good character should get training and employment opportunities according to the prescribed standards of the respective services.",
      },
    ],
    resolve: "To connect youth power with nation-building and security.",
    closing: [],
    images: [
      "/chapters/employment-for-youth-in-the-nations-security-1.svg",
      "/chapters/employment-for-youth-in-the-nations-security-2.svg",
    ],
  },
  {
    slug: "skilled-india-self-reliant-india",
    title: "Skilled India, Self-Reliant India",
    icon: "wrench",
    image: "/chapters/skilled-india-self-reliant-india-1.svg",
    summary:
      "Every young person's talent is different. No one's future should depend on only one kind of job.",
    content: [
      {
        type: "p",
        text: "Every young person's talent is different. No one's future should depend on only one kind of job.",
      },
      {
        type: "p",
        text: "We propose establishing and expanding training centres where young people can be trained as carpenters, weavers, plumbers, welders, temple builders, building construction workers, electricians, machine repairers, and in other technical trades.",
      },
      {
        type: "p",
        text: "Our aim is not merely to give certificates, but to help young people stand on their own feet.",
      },
    ],
    resolve: "A skill in the hands of every youth, and self-reliance in life.",
    closing: [],
    images: [
      "/chapters/skilled-india-self-reliant-india-1.svg",
      "/chapters/skilled-india-self-reliant-india-2.svg",
    ],
  },
  {
    slug: "respect-for-faith-opposition-to-superstition-and-exploitation",
    title: "Respect for Faith, Opposition to Superstition and Exploitation",
    icon: "sparkles",
    image:
      "/chapters/respect-for-faith-opposition-to-superstition-and-exploitation-1.svg",
    summary:
      "India is the land of rishis, munis, saints, scholars, and great philosophers.",
    content: [
      {
        type: "p",
        text: "India is the land of rishis, munis, saints, scholars, and great philosophers.",
      },
      {
        type: "p",
        text: "We respect religious faith and modes of worship. At the same time, we believe in the tradition of knowledge, reason, reflection, and questioning.",
      },
      {
        type: "p",
        text: "Frightening a person in the name of faith, or financially or physically exploiting them by claiming false miracles, cannot be accepted.",
      },
      {
        type: "p",
        text: "The strictest legal action should be taken against those who torture, beat, and murder women by labelling them as witches or sorceresses.",
      },
    ],
    resolve:
      "Let faith remain protected, but let no one be exploited in the name of faith.",
    closing: [],
    images: [
      "/chapters/respect-for-faith-opposition-to-superstition-and-exploitation-1.svg",
      "/chapters/respect-for-faith-opposition-to-superstition-and-exploitation-2.svg",
    ],
  },
  {
    slug: "end-fraud-in-the-name-of-jobs-abroad",
    title: "End Fraud in the Name of Jobs Abroad",
    icon: "plane",
    image: "/chapters/end-fraud-in-the-name-of-jobs-abroad-1.svg",
    summary:
      "Many families sell their land and take loans to send their children abroad.",
    content: [
      {
        type: "p",
        text: "Many families sell their land and take loans to send their children abroad.",
      },
      {
        type: "p",
        text: "Agencies that commit fake-job, fake-visa, and other frauds destroy their dreams.",
      },
      {
        type: "p",
        text: "We propose a strong verification system for overseas employment.",
      },
      {
        type: "p",
        text: "The identity of the foreign employer, the legitimacy of the recruitment agency, the salary, the living arrangements, and the job contract should all be verified in advance.",
      },
    ],
    resolve:
      "The dream of a job abroad should not become a cause of fraud for any family.",
    closing: [],
    images: [
      "/chapters/end-fraud-in-the-name-of-jobs-abroad-1.svg",
      "/chapters/end-fraud-in-the-name-of-jobs-abroad-2.svg",
    ],
  },
  {
    slug: "a-new-chapter-of-safety-in-india",
    title: "A New Chapter of Safety in India",
    icon: "lock",
    image: "/chapters/a-new-chapter-of-safety-in-india-1.svg",
    summary: "Safety is the first right of every Indian.",
    content: [
      {
        type: "p",
        text: "Safety is the first right of every Indian.",
      },
      {
        type: "p",
        text: "The police system, grievance redressal, and crime investigation should be strengthened for the safety of women, children, the elderly, and youth.",
      },
      {
        type: "p",
        text: "Crimes against women such as harassment, stalking, robbery, physical assault, sexual harassment, and rape should be met with strict action in accordance with the law.",
      },
    ],
    resolve: "Respect and safety for every daughter, sister, and mother.",
    closing: [],
    images: [
      "/chapters/a-new-chapter-of-safety-in-india-1.svg",
      "/chapters/a-new-chapter-of-safety-in-india-2.svg",
    ],
  },
  {
    slug: "safety-of-sons-and-the-trust-of-parents",
    title: "Safety of Sons and the Trust of Parents",
    icon: "user-check",
    image: "/chapters/safety-of-sons-and-the-trust-of-parents-1.svg",
    summary:
      "Safety is not only for daughters; it is just as important for our sons.",
    content: [
      {
        type: "p",
        text: "Safety is not only for daughters; it is just as important for our sons.",
      },
      {
        type: "p",
        text: "Protecting children and youth from drugs, crime, bad company, fraud, and exploitation is the collective responsibility of society.",
      },
      {
        type: "p",
        text: "We emphasize strengthening communication between parents and children.",
      },
      {
        type: "p",
        text: 'Our message to every child: do not hide your troubles and fears from your parents. If someone tells you, \\"Don\'t tell your parents about this,\\" be alert and speak to a trusted adult.',
      },
    ],
    resolve:
      "Every child should be safe, and the bond of trust in every family should grow stronger.",
    closing: [],
    images: [
      "/chapters/safety-of-sons-and-the-trust-of-parents-1.svg",
      "/chapters/safety-of-sons-and-the-trust-of-parents-2.svg",
    ],
  },
  {
    slug: "drug-free-youth-safe-india",
    title: "Drug-Free Youth, Safe India",
    icon: "pill",
    image: "/chapters/drug-free-youth-safe-india-1.svg",
    summary:
      "Drug addiction is not just one person's problem. It affects the future of the entire family and society.",
    content: [
      {
        type: "p",
        text: "Drug addiction is not just one person's problem. It affects the future of the entire family and society.",
      },
      {
        type: "p",
        text: "We want strict legal action against the illegal drug trade, trafficking, and networks that push young people toward drugs.",
      },
      {
        type: "p",
        text: "Young people caught in the grip of addiction should also get treatment, counselling, and rehabilitation facilities.",
      },
    ],
    resolve: "End the drug trade and save the future of our youth.",
    closing: [],
    images: [
      "/chapters/drug-free-youth-safe-india-1.svg",
      "/chapters/drug-free-youth-safe-india-2.svg",
    ],
  },
  {
    slug: "transparency-and-accountability-of-peoples-representatives",
    title: "Transparency and Accountability of People's Representatives",
    icon: "eye",
    image:
      "/chapters/transparency-and-accountability-of-peoples-representatives-1.svg",
    summary:
      "The public should be able to know about the work of their representatives.",
    content: [
      {
        type: "p",
        text: "The public should be able to know about the work of their representatives.",
      },
      {
        type: "p",
        text: "We want a clear code of conduct, transparent working methods, and a system of regular public dialogue for people's representatives.",
      },
      {
        type: "p",
        text: "Our proposal is that people's representatives should interact with the people of their constituency through social media at a fixed time every day.",
      },
      {
        type: "p",
        text: "Proposed time for dialogue: every day from 8:00 PM to 9:30 PM.",
      },
      {
        type: "p",
        text: "The work schedules of people's representatives, their visits to their areas, action taken on complaints, and the progress of development work should be made public.",
      },
    ],
    resolve: "The office may be high, but the people can never be small.",
    closing: [],
    images: [
      "/chapters/transparency-and-accountability-of-peoples-representatives-1.svg",
      "/chapters/transparency-and-accountability-of-peoples-representatives-2.svg",
      "/chapters/transparency-and-accountability-of-peoples-representatives-3.svg",
    ],
  },
  {
    slug: "a-voice-in-parliament-for-every-section-of-india",
    title: "A Voice in Parliament for Every Section of India",
    icon: "megaphone",
    image: "/chapters/a-voice-in-parliament-for-every-section-of-india-1.svg",
    summary:
      "We want greater participation of different sections of society in the country's Parliament and in political representation.",
    content: [
      {
        type: "p",
        text: "We want greater participation of different sections of society in the country's Parliament and in political representation.",
      },
      {
        type: "p",
        text: "Our proposed representation targets:",
      },
      {
        type: "ul",
        items: [
          "Women — 40%",
          "Youth (aged 25 to 40) — 25%",
          "Experienced elders — 10%",
          "Former soldiers and people connected with the soldier community — 10%",
          "Farmers — 10%",
          "Social workers, labour representatives, experts, and other capable people — 5%",
        ],
      },
      {
        type: "p",
        text: "These are the party's proposed representation targets. Constitutional and election laws will be followed while implementing them.",
      },
    ],
    resolve: "Let the real voice of India's society reach Parliament.",
    closing: [],
    images: [
      "/chapters/a-voice-in-parliament-for-every-section-of-india-1.svg",
      "/chapters/a-voice-in-parliament-for-every-section-of-india-2.svg",
      "/chapters/a-voice-in-parliament-for-every-section-of-india-3.svg",
    ],
  },
  {
    slug: "reform-of-police-forensics-and-the-justice-system",
    title: "Reform of Police, Forensics, and the Justice System",
    icon: "gavel",
    image: "/chapters/reform-of-police-forensics-and-the-justice-system-1.svg",
    summary:
      "Justice should be equal for everyone — rich and poor, leaders and ordinary citizens alike.",
    content: [
      {
        type: "p",
        text: "Justice should be equal for everyone — rich and poor, leaders and ordinary citizens alike.",
      },
      {
        type: "p",
        text: "We demand strengthening the police system, improving the quality of investigations, and expanding forensic facilities.",
      },
      {
        type: "p",
        text: "Our priorities:",
      },
      {
        type: "ul",
        items: [
          "Improve the capacity and strength of the police force.",
          "Impartial and scientific investigation.",
          "Increase the number and quality of forensic laboratories.",
          "Protection of evidence and a record of the entire process.",
          "Immediate action in cases of missing children.",
          "Priority investigation of crimes against women and children.",
          "Reduce pending cases by increasing the capacity of courts.",
          "Effective legal aid for the poor.",
        ],
      },
    ],
    resolve:
      "Less delay in justice, impartial investigation, and law that is equal for all.",
    closing: [],
    images: [
      "/chapters/reform-of-police-forensics-and-the-justice-system-1.svg",
      "/chapters/reform-of-police-forensics-and-the-justice-system-2.svg",
      "/chapters/reform-of-police-forensics-and-the-justice-system-3.svg",
    ],
  },
  {
    slug: "health-and-mental-health",
    title: "Health and Mental Health",
    icon: "heart-pulse",
    image: "/chapters/health-and-mental-health-1.svg",
    summary:
      "Pressure from studies, employment, family, and society on children and youth is increasing.",
    content: [
      {
        type: "p",
        text: "Pressure from studies, employment, family, and society on children and youth is increasing.",
      },
      {
        type: "p",
        text: "Mental health should be given as much importance as physical health.",
      },
      {
        type: "p",
        text: "Our proposal is that mental health counselling facilities be strengthened in every district, trained counsellors be available in schools and colleges, and mental health treatment facilities be available in hospitals.",
      },
    ],
    resolve:
      "To build a society with a healthy mind along with a healthy body.",
    closing: [],
    images: [
      "/chapters/health-and-mental-health-1.svg",
      "/chapters/health-and-mental-health-2.svg",
    ],
  },
  {
    slug: "respect-and-economic-security-for-farmers",
    title: "Respect and Economic Security for Farmers",
    icon: "wheat",
    image: "/chapters/respect-and-economic-security-for-farmers-1.svg",
    summary:
      "Farmers are the foundation of the country's economy and food security.",
    content: [
      {
        type: "p",
        text: "Farmers are the foundation of the country's economy and food security.",
      },
      {
        type: "p",
        text: "We want farmers to get a fair price for their crops and for the system related to Minimum Support Price (MSP) to be worked on seriously.",
      },
      {
        type: "p",
        text: "Farmers should get seeds, fertilizer, irrigation, and modern technology on time. They should receive fair compensation when crops are damaged in natural disasters. Farmers' children should get opportunities for education and employment.",
      },
    ],
    resolve:
      "Respect for the farmer should be visible not just in words, but in his life.",
    closing: [],
    images: [
      "/chapters/respect-and-economic-security-for-farmers-1.svg",
      "/chapters/respect-and-economic-security-for-farmers-2.svg",
    ],
  },
  {
    slug: "respect-and-protection-for-the-elderly",
    title: "Respect and Protection for the Elderly",
    icon: "hand-helping",
    image: "/chapters/respect-and-protection-for-the-elderly-1.svg",
    summary: "The elderly are the experience of our families and society.",
    content: [
      {
        type: "p",
        text: "The elderly are the experience of our families and society.",
      },
      {
        type: "p",
        text: "Many elderly people face financial, physical, and social problems.",
      },
      {
        type: "p",
        text: "We propose strengthening better healthcare, social security, pensions, a safe environment, and support systems for needy elderly people.",
      },
    ],
    resolve: "No elderly person should feel alone, helpless, or neglected.",
    closing: [],
    images: [
      "/chapters/respect-and-protection-for-the-elderly-1.svg",
      "/chapters/respect-and-protection-for-the-elderly-2.svg",
    ],
  },
  {
    slug: "ending-corruption-and-nepotism",
    title: "Ending Corruption and Nepotism",
    icon: "ban",
    image: "/chapters/ending-corruption-and-nepotism-1.svg",
    summary:
      "Government jobs and public opportunities should be given on the basis of merit.",
    content: [
      {
        type: "p",
        text: "Government jobs and public opportunities should be given on the basis of merit.",
      },
      {
        type: "p",
        text: "No one's connections, relationships, or recommendations should count for more than their merit.",
      },
      {
        type: "p",
        text: "Our priorities:",
      },
      {
        type: "ul",
        items: [
          "The recruitment process should be transparent.",
          "Strict action on paper leaks and recruitment fraud.",
          "Time limits should be fixed for government services.",
          "Every department should be accountable.",
          "Action against those who deliberately obstruct the public's work.",
          "Officers and employees who work honestly should be honoured.",
        ],
      },
    ],
    resolve: "Merit should be honoured and corruption punished.",
    closing: [],
    images: [
      "/chapters/ending-corruption-and-nepotism-1.svg",
      "/chapters/ending-corruption-and-nepotism-2.svg",
      "/chapters/ending-corruption-and-nepotism-3.svg",
    ],
  },
  {
    slug: "end-casteism-and-discrimination",
    title: "End Casteism and Discrimination",
    icon: "equal",
    image: "/chapters/end-casteism-and-discrimination-1.svg",
    summary:
      "We believe that no child is born having chosen their caste. Then how can anyone be high or low on the basis of birth?",
    content: [
      {
        type: "p",
        text: "We believe that no child is born having chosen their caste. Then how can anyone be high or low on the basis of birth?",
      },
      {
        type: "p",
        text: "Caste-based discrimination has divided society for a long time.",
      },
      {
        type: "p",
        text: "We want an India where no one faces discrimination because of caste — in temples, public places, education, employment, social opportunities, or personal dignity.",
      },
      {
        type: "p",
        text: "We are against untouchability, social boycott, caste-based violence, and humiliation.",
      },
      {
        type: "p",
        text: "The constitutional rights and statutory provisions such as reservation, made for social justice, should be respected.",
      },
      {
        type: "p",
        text: "We do not want to take away the rights of any section. Our aim is to ensure dignity and equal opportunity for every section.",
      },
    ],
    resolve:
      "Our identity should not be caste; our identity should be being Indian. When casteism and discrimination end, only then will a strong India be built.",
    closing: [""],
    images: [
      "/chapters/end-casteism-and-discrimination-1.svg",
      "/chapters/end-casteism-and-discrimination-2.svg",
      "/chapters/end-casteism-and-discrimination-3.svg",
    ],
  },
].map((c, i) => ({ ...c, number: String(i + 1).padStart(2, "0") }));

export const getChapter = (slug) => chapters.find((c) => c.slug === slug);
