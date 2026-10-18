// Case study content. Inline text supports **bold** and [label](url).
// Block types: p, h (decision heading + text), img, imgs (side by side), list, quote, table.

const img = (slug, key, alt, caption) => ({ type: 'img', key: `${slug}/${key}`, alt, caption })

export const caseStudies = [
  {
    slug: 'onehealthng',
    name: 'OneHealthNG',
    title: 'One design language for a growing health ecosystem',
    platforms: ['Website', 'Web app', 'Mobile app'],
    industry: 'Healthtech',
    years: '2024 – present',
    featured: true,
    cover: 'onehealth/app',
    card: 'Leading design across an online pharmacy, refill and weight-loss programmes, a new mobile app and procurement dashboards, all on one design system.',
    proof: '$100K raise and ₦1B revenue (team), 35% higher engagement',
    intro:
      "I joined OneHealthNG on contract in 2024 and was promoted to Senior Product Designer in January 2026. I now lead design across the company's website, online pharmacy, refill and weight-loss programmes, its new mobile app and the Pillfinda web dashboards, and I direct a junior designer on the Pillfinda mobile app.",
    facts: [
      ['Company', "[OneHealthNG](https://www.onehealthng.com/), Nigeria's online pharmacy and pharmacy benefits manager"],
      ['My role', 'Product Designer & Webflow Developer (Apr 2024 – Dec 2025), Senior Product Designer (Jan 2026 – present)'],
      ['What I owned', 'Main website, online pharmacy store, auto-refill subscription, The Method weight-loss programme, OneHealth mobile app, Pillfinda web dashboards, the design system, five Webflow microsites'],
      ['What I led', 'Pillfinda mobile app, designed by a junior designer under my direction and review'],
      ['Worked with', 'Product managers (who ran research and testing), engineering leadership, marketing'],
      ['Tools', 'Figma, Webflow, Untitled UI (customised for OneHealth)'],
    ],
    sections: [
      {
        heading: 'The problem',
        blocks: [
          { type: 'p', text: 'OneHealthNG grew into several products serving very different people, and each one looked and behaved differently. Patients buy medicines and subscribe to refills. HMOs and telemedicine companies buy pharmacy benefits for their members. Pharmacies join a fulfilment network. Sister products Pillmova (pharma logistics) and Pillfinda (pharmacy procurement) sit alongside them.' },
          { type: 'p', text: "Without a shared design language, every new feature was designed from scratch. Users moving between the website, the store and the app met a different experience at each step, and the company's story to investors and partners was harder to tell." },
        ],
      },
      {
        heading: 'How I worked',
        blocks: [
          { type: 'p', text: 'Research and usability testing were run by the product managers. They brought findings and change requests to me, and I turned them into designs, often under tight deadlines with little time to plan. My job was to make fast work consistent: every quick fix had to fit one system rather than add another one-off screen.' },
        ],
      },
      {
        heading: 'Key decisions',
        blocks: [
          { type: 'h', title: 'A centralised design system before more screens', text: "I created universal colour styles and a type guide that every OneHealth design now uses: five palettes (brand green, secondary orange, supplementary green, grey and electric aqua), each with ten shades covering default, hover and active states, plus a Lato type scale from Display 2xl down to Text xs in four weights, and logo rules for OneHealth and Pillfinda. Rather than build components from scratch, I adapted components from the Untitled UI design system to OneHealth's brand, which gave the team a proven base to work from quickly. The re-themed library includes buttons in five sizes with hover and disabled states, badges for status, errors, warnings and success, and data tables with empty states. The system is shared across the website, store, mobile app and Pillfinda, making design-to-development handoff faster and letting new features ship without re-inventing patterns." },
          img('onehealth', 'foundations', 'Colour palettes, Lato type scale and OneHealth and Pillfinda logo rules', 'Foundations: five colour palettes with ten shades each, the Lato type scale and logo rules.'),
          img('onehealth', 'buttons', 'Re-themed buttons in five sizes with default, hover and disabled states', 'Buttons adapted from Untitled UI: primary, secondary and tertiary, five sizes, with icon and state variants.'),
          img('onehealth', 'badges', 'Re-themed badges for status, errors, warnings and success', 'Badges re-themed to the OneHealth palette.'),
          { type: 'imgs', items: [img('onehealth', 'table-desktop', 'Care team table on desktop'), img('onehealth', 'table-mobile', 'Care team table on mobile')], caption: 'The data table on desktop and mobile. On mobile, name and status lead and the remaining columns scroll sideways, with a simpler page control.' },
          { type: 'h', title: 'One front door, three audiences', text: 'The homepage routes people by who they are: patients go to the pharmacy, insurers and telemedicine companies to the PBM offer, and pharmacy owners to the network sign-up. Each audience gets its own path instead of one page trying to speak to everyone.' },
          img('onehealth', 'hero', 'OneHealth website hero'),
          img('onehealth', 'audiences', 'Three entry points on the homepage: for individuals, for insurers and telemeds, for pharmacies', 'The homepage hero, then one card per audience, each with its own next step.'),
          { type: 'h', title: 'Design for the repeat purchase, not the first one', text: 'Patients with chronic conditions need the same medicines every month. The auto-refill subscription puts the savings, the remaining refills and the delivery status in front of them, so staying subscribed is the easy choice.' },
          img('onehealth', 'app', 'OneHealth app: home, managing refills, checkout with automated refills, and prescription upload', 'The OneHealth mobile app, launched 16 October 2026. Home puts every service one tap away; refills show the next charge and amount up front; checkout lets people switch on automated refills for each item as they shop; and uploading a prescription builds the cart for them.'),
          { type: 'h', title: 'A clinical quiz that feels simple', text: 'The Method is a doctor-led weight-loss programme, so its entry point is a medical assessment. The flow had to collect clinical information without feeling like a hospital form.' },
          img('onehealth', 'method-how', 'How The Method works: consultation, verified medication and delivery, ongoing support'),
          img('onehealth', 'method-breakdown', 'The Method programme breakdown', 'The Method explained in three steps, then each feature tied to a plain-language benefit.'),
          { type: 'h', title: "Designing Pillfinda's web, leading its mobile", text: "I designed Pillfinda's web dashboards myself, then set direction and reviewed my junior designer's work on its mobile app, keeping both consistent with the design system. This is how I now spend part of my time: setting standards and feedback loops so other designers' work holds up." },
          img('onehealth', 'pillfinda-admin', 'Pillfinda super admin dashboard with order, product and revenue analytics'),
          img('onehealth', 'pharmacy-ops', 'Pharmacy operations dashboard with order tracking and fulfilment status', "The two web dashboards I designed: Pillfinda's super admin analytics, and the operations view for tracking prescriptions from order to fulfilment."),
        ],
      },
      {
        heading: 'Outcomes',
        blocks: [
          { type: 'list', items: [
            '**Funding and revenue:** I contributed design to both the investor materials and the product during a period in which the company raised $100K and passed ₦1B in revenue. These were team results; my part was the pitch designs, the whitepaper and the store and refill flows that drive sales.',
            '**Whitepaper site:** the Webflow whitepaper I designed and built increased site traffic by 10%.',
            '**OneWellness:** UX improvements to the OneWellness app raised engagement by 35%.',
            '**Cross-platform redesign:** a modernised brand and experience across the website, core mobile app and Pillfinda.',
            '**Mobile app:** the OneHealth mobile app launched on 16 October 2026. Results will be added once there is data.',
          ] },
        ],
      },
      {
        heading: 'Webflow microsites',
        blocks: [
          { type: 'table', head: ['Site', 'What it does'], rows: [
            ['[OneHealthNG whitepaper](https://onehealthng-whitepaper.webflow.io/)', 'Turns company research into a readable web experience'],
            ['[Imani breast pump](https://imani-onehealthng.webflow.io/)', 'Product site that educates new mothers and leads to purchase'],
            ['[24/7 Pharmacy](https://24-7-pharmacy.webflow.io/)', 'Online pharmacy landing experience'],
            ['[Kuda + OneWellness](https://kuda-onewellness.webflow.io/)', 'Partnership microsite with Kuda'],
            ['[OneWellness assessment](https://onehealth-05028b.webflow.io/)', 'Interactive health assessment'],
          ] },
        ],
      },
      {
        heading: "What I'd do next",
        blocks: [{ type: 'p', text: 'Track design-system adoption and handoff time so its impact can be measured, and set up post-launch metrics for the mobile app (installs, first order, refill sign-ups) from day one.' }],
      },
    ],
  },

  {
    slug: 'casha-business',
    name: 'Casha Business',
    title: 'Banking, payroll and inventory in one app for Nigerian SMEs',
    platforms: ['Mobile app'],
    industry: 'Fintech',
    years: '2026',
    featured: true,
    cover: 'casha/hero',
    card: 'A business banking app that also runs payroll, stock and team roles, designed end to end in two weeks.',
    proof: 'Full app in two weeks; not launched',
    intro:
      'As the sole designer, I designed the Casha Business mobile app in two weeks, working from a product requirements document: sign-up and business setup, the home dashboard, payments and transfers, payroll, inventory, team roles, analytics, statements and settings.',
    facts: [
      ['Client', 'Casha Microfinance Bank'],
      ['My role', 'Sole Product Designer, mobile app'],
      ['Worked with', 'Tolu Araba (Product Manager)'],
      ['Date', 'February 2026, two weeks from 5 February'],
      ['Status', 'Designed and handed over to development, not launched'],
      ['Inputs', "Product requirements document from Casha's product team, benchmarked against Moniepoint Business and Kuda Business; no formal user research"],
      ['Tools', 'Figma; ChatGPT to draft UX copy'],
    ],
    sections: [
      {
        heading: 'The problem',
        blocks: [
          { type: 'p', text: "Small businesses in Nigeria run on scattered tools. Payroll is done by hand or outsourced, stock is tracked in notebooks or spreadsheets, and expenses aren't categorised, so owners can't see where money goes. Business banking apps handle transactions well, but offer little for payroll and almost nothing for inventory." },
          { type: 'p', text: 'Casha wanted a business app that does the banking and runs the operations too. The design challenge: fit banking, payroll, inventory, team management and analytics into one app without it feeling like five apps stitched together, for owners who are short on time.' },
          img('casha', 'hero', 'Casha Business home, payroll and inventory tabs'),
        ],
      },
      {
        heading: 'What I designed',
        blocks: [
          { type: 'table', head: ['Area', 'Screens'], rows: [
            ['Sign-up and setup', 'Welcome, business details, optional CAC upload, owner details, phone verification, password, transaction PIN, sign in, password reset, session expiry'],
            ['Home and wallet', 'Business overview, all activity, add money (card, bank transfer, USSD), send money, transfer confirmation, receipts, switching between business accounts'],
            ['Payments', 'Transaction list filtered by income, expenses and payroll'],
            ['Payroll', 'Payroll summary, add and edit employees, run payroll, payslips, payroll history and audit trail'],
            ['Inventory', 'Stock summary, add and edit products, low-stock list, stock updates'],
            ['More', 'Business profile, team and roles, expenses and vendors, analytics, statements, settings and security, help and support, notifications'],
          ] },
          { type: 'p', text: "The identity verification flows were designed by another designer after I handed over, so they're not covered here." },
        ],
      },
      {
        heading: 'Key decisions',
        blocks: [
          { type: 'h', title: 'Navigation in the order an owner thinks', text: 'The five tabs follow the questions a business owner asks through the day: how much money do I have (Home), who am I paying (Payments), are my staff paid (Payroll), do I have stock (Inventory), and everything else (More). Payroll and inventory, the two features competitors lack, get their own tabs instead of sitting behind a menu.' },
          { type: 'h', title: 'Start using the account before verification', text: 'Sign-up asks only what is needed to tailor the app: business name, type, number of employees, and whether the business sells products. That last answer decides whether inventory is set up. Uploading CAC documents is marked "optional for now": the owner can skip it and start banking straight away, and verifying later unlocks higher limits.' },
          img('casha', 'signup', 'Casha Business sign-up: welcome screen, business details, and optional CAC verification', 'Sign-up: one promise on the welcome screen, a short business profile, and verification the owner can skip for now.'),
          { type: 'h', title: 'Payroll in one confirmed tap', text: 'Paying staff is usually a run of manual transfers. Here, the payroll tab shows the monthly total, number of employees and last run date, with Run Payroll as the main action. Before any money moves, a confirmation screen states exactly what will happen ("You\'re about to pay 12 employees a total of ₦880,000") and lists each person and amount. After payment, payslips are ready to download, and every run is kept in a payroll history with an audit trail.' },
          img('casha', 'payroll', 'Run payroll confirmation, payment sent, and payroll details with payslips', 'Run payroll: a plain-language confirmation, a clear success state, and a breakdown with a payslip for each employee.'),
          { type: 'h', title: 'Inventory that warns before stock runs out', text: "Each product has a stock threshold, set when it's added. When stock falls below it, a banner on the inventory tab says how many products are running low, and the low-stock list puts an Update Stock button on each one. Every product shows its margin, so owners see what they make as well as what they hold." },
          img('casha', 'inventory', 'Low-stock list, add product with stock threshold, and update stock', 'Inventory: low-stock items one tap from restocking, and a stock threshold set when each product is added.'),
          { type: 'h', title: 'Owners stay in control as the team grows', text: 'Owners invite staff and give each role its own permissions, such as payments, payroll, inventory or reports, so a cashier and an accountant see different things. Analytics turns the account\'s activity into answers: cash in against cash out, payroll as a share of revenue, and the best-selling products.' },
          img('casha', 'roles', 'Team and roles, editing a role\'s permissions, and analytics', 'Team and roles with permissions per role, and analytics that shows how the business is doing, not just its transactions.'),
          { type: 'h', title: 'Copy written for business owners, not bankers', text: 'I drafted the UX copy with ChatGPT, then shaped it to three rules. Buttons name the action ("Run payroll", "Update stock", "Send money") instead of "Proceed" or "Submit". Screens lead with insights such as "Next payroll in 3 days" or "3 products low on stock" before account details. Confirmations say exactly what will happen before money moves.' },
        ],
      },
      {
        heading: 'Outcome',
        blocks: [{ type: 'p', text: "I designed the full app in two weeks and handed it over for development in February 2026. The app hasn't launched yet, so there are no usage results." }],
      },
      {
        heading: "What I'd do differently",
        blocks: [{ type: 'p', text: 'Put the run-payroll and low-stock flows in front of a few SME owners before handover. Two weeks covered the full scope but left no room for testing, and those two flows carry the product\'s main promise.' }],
      },
    ],
  },

  {
    slug: 'iwello',
    name: 'iWello',
    title: "Affordable healthcare for people who can't afford healthcare",
    platforms: ['Website', 'Web app', 'Mobile app'],
    industry: 'Healthtech',
    years: '2021 – 2024',
    featured: true,
    cover: 'iwello/hero-then-now',
    card: 'Every version of a health platform for low-income Nigerians, from a telemedicine marketplace to a ₦2,000-a-month subscription.',
    proof: '+40 bookings a week, 10% fewer no-shows',
    intro:
      'I designed every version of iWello, from its 2021 telemedicine marketplace to the ₦2,000-a-month health subscription live today. The users are low-income Nigerians, many with limited literacy, so every screen had to work for someone who has never used a health app.',
    facts: [
      ['Company', '[iWello](https://iwello.org/), digital healthcare for low-income communities'],
      ['My role', 'Product Designer, part-time (Nov 2021 – Mar 2024); design consultant (2025)'],
      ['What I owned', 'All iWello design: website, patient, doctor and pharmacist web apps, mobile app, and the current subscription site'],
      ['Worked with', 'Chidinma (Product Manager), Tayo Akosile (Frontend), Ben (Backend), Ismail (founder)'],
      ['Tools', 'Figma'],
    ],
    sections: [
      {
        heading: 'The problem',
        blocks: [{ type: 'p', text: "For most low-income Nigerians, seeing a doctor means a long trip and a bill they can't plan for. Many people skip care until a problem becomes an emergency. iWello set out to make care cheap, close and easy to start, for people who may not read well and are wary of anything that sounds too good to be true." }],
      },
      {
        heading: 'How the product evolved',
        blocks: [
          { type: 'table', head: ['Version', 'What it was', 'What I designed'], rows: [
            ['2021 – 2024', 'Telemedicine marketplace linking patients, doctors and pharmacists', 'Patient dashboard (consultations, buying drugs, treatment history, fake-drug checker), doctor dashboard (consultations, patient records, wallet), pharmacist dashboard (orders, stock, wallet), mobile app for all three'],
            ['Today', 'Monthly health subscription from ₦2,000, with surgery cover and community outreach', 'Website and sign-up, subscription plans, surgery-cover journey, nurse-first care flow, health tracking and rewards'],
          ] },
          { type: 'p', text: 'I designed the current site before I stopped working with iWello. It launched once the team had the resources to build it. In 2025 I consulted on a separate redesign that was later abandoned, so it isn\'t shown here.' },
          img('iwello', 'hero-then-now', 'iWello homepage hero in 2021 and today', 'The homepage then and now. In 2021 the promise was a cheap consultation; today it is health cover that pays people back for staying well.'),
          img('iwello', 'app-2021', '2021 iWello app: onboarding, choosing an available doctor, calling, and buying medicine', 'The 2021 app: onboarding in one plain sentence per screen, then picking an available doctor, calling them in one tap, and buying medicine from a nearby pharmacy.'),
          img('iwello', 'roles-2021', '2021 iWello app menus for a patient, a doctor and a pharmacy', 'Three user types, one pattern. Patients, doctors and pharmacists share the same menu layout, each with the figure that matters to them: a wallet balance, patients seen, or items sold.'),
          img('iwello', 'web-2021', '2021 iWello web dashboard for patients', 'The 2021 web dashboard brought the same flows to desktop. The wallet and the fake-drug check, which lets patients verify a medicine before taking it, both shipped in this version.'),
          img('iwello', 'doctor-today', "Today's iWello doctor dashboard listing patients with triage level", "Today's doctor view: every patient carries a colour-coded triage level, from resuscitation to non-urgent, so the most serious cases stand out at a glance."),
        ],
      },
      {
        heading: 'Key decisions',
        blocks: [
          { type: 'h', title: 'Plain language over medical language', text: 'Copy is short, concrete and sometimes in Pidgin. The surgery-cover section warns that instant coverage is a scam sign, which builds trust with users who have been burned before.' },
          { type: 'h', title: 'Show the steps, not the policy', text: 'Pricing and surgery cover are explained as numbered steps (pick a plan, stay consistent, wait 90 days, request your procedure) instead of terms and conditions.' },
          { type: 'h', title: 'Meet people where they already are', text: 'Users can sign up online, through WhatsApp or at a community outreach. Many first-time users never touch the website alone, so the design supports assisted sign-up.' },
          { type: 'h', title: 'Reward the habit, not just the visit', text: 'Members log blood pressure and sugar weekly and earn cashback, airtime or wellness rewards. This turns preventive care into something with a visible, immediate benefit.' },
          img('iwello', 'patient-today', "Today's iWello patient dashboard", "Today's patient dashboard puts results, upcoming appointments and the member's grant eligibility on one screen."),
          { type: 'h', title: 'An automated booking tool to cut no-shows', text: "Patients often missed appointments, which wasted doctors' time. The booking flow was redesigned to automate scheduling and reminders." },
        ],
      },
      {
        heading: 'Outcomes',
        blocks: [
          { type: 'list', items: [
            '**+40 appointment bookings a week** after the 2021 designs launched.',
            '**10% fewer no-shows** with the automated booking tool, also after the 2021 launch.',
            '**Company results today:** iWello reports 20,000+ community members served, 50+ outreaches, a 40% average cut in out-of-pocket spending and a 90% satisfaction rate ([iwello.org](https://iwello.org/)). These are company-wide results that my design supports, not design metrics on their own.',
          ] },
        ],
      },
      {
        heading: "What I'd do differently",
        blocks: [{ type: 'p', text: "Test key flows with real members at outreaches. Watching someone sign up on a market stall would show where plain language still isn't plain enough." }],
      },
    ],
  },

  {
    slug: 'reelcruit',
    name: 'Reelcruit',
    title: 'AI job matching for tech talent and the companies hiring them',
    platforms: ['Website', 'Web app'],
    industry: 'Recruitment / AI',
    years: '2022 – 2024',
    featured: true,
    cover: 'reelcruit/audiences',
    card: 'Five sides of an AI hiring marketplace: website, candidate and employer dashboards, and two admin consoles.',
    proof: '25% faster hiring, 20% revenue growth',
    intro:
      'As lead designer, I designed all five sides of Reelcruit: the public website, the candidate dashboard, the employer dashboard and two admin consoles. After launch, recruiters found qualified candidates 25% faster and company revenue grew 20% while I led design.',
    facts: [
      ['Company', '[Reelcruit](https://reelcruit.com/), Montréal, Canada'],
      ['My role', 'Lead Product Designer, contract (Nov 2022 – May 2024)'],
      ['Worked with', 'Ralph François (founder and Product Manager), Nancy (Head of Design, set direction and reviewed), Kalu (Frontend), Anselme (Backend)'],
      ['Platforms', 'Website and candidate dashboard on desktop and mobile; employer and admin dashboards on desktop'],
      ['Tools', 'Figma'],
    ],
    sections: [
      {
        heading: 'The problem',
        blocks: [{ type: 'p', text: "General job boards bury tech professionals in roles that don't fit, and give recruiters stacks of unqualified applicants. Reelcruit's idea was to match people to jobs using AI, based on skills, goals and culture fit. That only works if both sides give the platform good data and trust its matches." }],
      },
      {
        heading: 'What I designed',
        blocks: [
          { type: 'table', head: ['Product', 'Users', 'Key screens'], rows: [
            ['Website and onboarding', 'Candidates and employers', 'Separate landing pages per audience, sign-up and profile setup'],
            ['Candidate dashboard', 'Permanent and contract candidates', 'Job matches, applications, profile; two variants for permanent and contract work'],
            ['Employer dashboard', 'Hiring teams', 'Onboarding, analytics, jobs, interviews, matches, offers, documents'],
            ['Reelcruit admin', 'Internal team', 'Platform management'],
            ['Reelcruiter admin', "Recruiters working on Reelcruit's behalf", 'Candidate and client management'],
          ] },
          img('reelcruit', 'audiences', 'Reelcruit homepage heroes for candidates and for employers', 'One product, two front doors: candidates are promised a free path to better IT roles; employers are promised unbiased hiring tools that support their diversity goals.'),
          img('reelcruit', 'join', 'Sign-up screen asking whether the user wants to work or to employ', 'Sign-up asks one question first, work or employ, so each side lands in the flow built for it.'),
        ],
      },
      {
        heading: 'Key decisions',
        blocks: [
          { type: 'h', title: 'Two candidate dashboards, not one', text: 'Permanent and contract candidates care about different things: career growth versus availability and rates. Giving each its own dashboard kept both clean instead of cramming every field into one.' },
          img('reelcruit', 'contract-profile', "Contract candidate's profile", "A contract candidate's profile adds what permanent candidates never need: a Company tab, payment details, and a way to switch employment type."),
          { type: 'h', title: 'Profiles worth filling in', text: 'AI matching depends on rich profiles, but long forms cause drop-off. Stakeholder reviews flagged the first version of onboarding as too long, so I broke it into short guided steps that ask for skills, goals and work preferences.' },
          img('reelcruit', 'home', 'Candidate home showing profile completeness, match counts and pending matches', 'The candidate home leads with profile completeness, broken into three short sections, so finishing the profile feels like a few small steps rather than one long form.'),
          img('reelcruit', 'professional', "Candidate's professional information", 'What the matching runs on: beyond skills and experience, the profile captures preferred work culture, personality and language ability, so matches can account for fit as well as qualifications.'),
          { type: 'h', title: 'Matches the user can steer', text: 'Too many recommendations overwhelm people. After stakeholder review, I added filters for remote work, salary and skills so candidates can narrow what they see, and sorting so recruiters can rank by skill match or recency.' },
          img('reelcruit', 'matches', 'Matches list with a match score', 'Each match shows the facts a candidate decides on (role, remote or on-site, salary, skills) next to a match score, sorted best first, with tabs to narrow the list.'),
          { type: 'h', title: 'A console for the team that runs the marketplace', text: "Matching only works if Reelcruit's own staff can see who is on the platform and step in. I designed the admin console they use to manage candidates, employers, jobs, recruiters and administrators. The candidate list splits permanent and contract candidates and can be searched and sorted. Each profile shows how complete it is and what the matching knows about the person, with a Chat button to follow up when a profile is stuck." },
          img('reelcruit', 'admin', "Reelcruit admin: the candidate list and one candidate's profile", "The admin console: Reelcruit's team searches permanent and contract candidates, then opens a profile to see how complete it is before reaching out."),
        ],
      },
      {
        heading: 'Outcomes',
        blocks: [
          { type: 'list', items: [
            '**25% less time** for recruiters to find qualified candidates.',
            '**30% more time** spent by users engaging with job suggestions and profiles after my redesign, compared with before it.',
            '**20% revenue growth** for Reelcruit over the period I led design. This was a company-wide result that my work contributed to, not one tied to a single design change.',
            'I also mentored junior designers and ran design-to-development handoffs.',
          ] },
          { type: 'quote', text: 'You did good on the design, here is our report after analysis… we do not take you for granted, ever.', by: 'Ralph François, Founder' },
        ],
      },
      {
        heading: "What I'd do differently",
        blocks: [{ type: 'p', text: 'Test onboarding with real candidates early. The steps were shaped by founder and stakeholder feedback; watching users would have shown where they still stall.' }],
      },
    ],
  },

  {
    slug: 'qshelter',
    name: 'QShelter',
    title: 'Making a Nigerian mortgage feel possible',
    platforms: ['Website', 'Web app'],
    industry: 'Proptech',
    years: '2023',
    featured: false,
    cover: 'qshelter/dashboard',
    card: 'A platform that puts buyers, developers, lenders, pension funds and lawyers on one mortgage journey.',
    proof: 'Live product',
    intro:
      'I co-designed QShelter, a platform that puts buyers, property developers, mortgage lenders, pension fund administrators and legal experts in one place. I owned the website and web app; my co-designer owned the mobile app.',
    facts: [
      ['Client', 'Quickshelter Limited, [qshelter.ng](https://www.qshelter.ng/)'],
      ['My role', 'Product Designer, co-lead with Iluezi-Ogbaudu Onowomano. I owned the website and web app, designing the buyer dashboard and contributing to the developer, lender, pension fund and legal dashboards; Onowomano owned mobile'],
      ['Date', '2023, over 3 months'],
      ['Inputs', 'Requirements from the client and stakeholders; no formal user research'],
      ['Tools', 'Figma, FigJam'],
    ],
    sections: [
      {
        heading: 'The problem',
        blocks: [
          { type: 'p', text: "Very few Nigerians buy homes with a mortgage. The process is slow and involves many parties who don't talk to each other: the developer, the bank, the pension fund, the surveyor, the valuer and the lawyer. Buyers also struggle to tell genuine listings from fake ones." },
          { type: 'p', text: "QShelter can't change interest rates. What it can do is make the process visible, put every party on one platform and help buyers see what they can afford." },
        ],
      },
      {
        heading: 'Key decisions',
        blocks: [
          { type: 'h', title: 'One journey across many parties', text: 'A mortgage moves between buyer, developer, lender, pension fund and legal team. The web app shows the buyer every step of their application, what is done and what is still pending, and how long the next step usually takes, instead of leaving them to chase each party.' },
          img('qshelter', 'dashboard', "Mortgage application tracker and the buyer's properties list", "The buyer's dashboard. Each mortgage application lists its steps with dates and status, from documents sent to the bank through to the pending loan disbursement, with a typical wait time for each. The properties list labels each home as mortgaging or owned."),
          { type: 'h', title: 'Affordability before the listing', text: "A mortgage calculator lets buyers see their monthly cost and whether they qualify before falling for a property they can't finance." },
          img('qshelter', 'calculator', 'Mortgage calculator with an eligibility result', 'Each input is explained in plain words, and the result answers the buyer\'s real question first: am I eligible, and what will it cost me each month?'),
          { type: 'h', title: 'Trust signals on every listing', text: 'Listings come from certified developers and vendors, and that verification is visible where buyers make decisions.' },
          img('qshelter', 'property', 'Property page with Certificate of Occupancy status and payment options', 'The property page puts the facts buyers check first in view: completion status, Certificate of Occupancy and who posted the listing. Buyers can then pay outright, with a mortgage or through a contribution plan.'),
          { type: 'h', title: 'Room for the informal economy', text: 'Many Nigerians earn outside formal payroll. The flows let buyers add more income sources to strengthen an application.' },
          { type: 'h', title: 'A clean split between web and mobile', text: 'Working as two designers, we divided by platform and shared components, so web and mobile stayed consistent without blocking each other.' },
        ],
      },
      {
        heading: 'Outcome',
        blocks: [{ type: 'p', text: "QShelter is live at [qshelter.ng](https://www.qshelter.ng/), and the features shown here, including the application tracker and the income-sources option, shipped as designed. I don't have launch metrics for this project." }],
      },
      {
        heading: "What I'd do differently",
        blocks: [{ type: 'p', text: 'Talk to buyers and lenders directly. The design was built from client requirements; a few interviews with first-time buyers would have shown which steps of the mortgage process scare people most.' }],
      },
    ],
  },

  {
    slug: 'naijafxrates',
    name: 'NaijaFXRates',
    title: "A redesign that makes the naira's daily moves readable",
    platforms: ['Website'],
    industry: 'Fintech',
    years: '2023',
    featured: false,
    cover: 'naijafx/themes',
    card: 'A calm rates dashboard in dark and light themes, rebuilt from a site that fell apart on phones.',
    proof: '75% of traders helped by alerts',
    intro:
      'I redesigned NaijaFXRates, a site that tracks the naira against the dollar, pound and euro. The original site worked, but its table, chart and sign-up form were hard to read and fell apart on phones. My redesign rebuilt it as one calm dashboard in dark and light themes, on desktop and mobile. 75% of traders said its rate alerts helped them make better trading decisions.',
    facts: [
      ['Client', 'Canary Point, [naijafxrates.com](https://naijafxrates.com/)'],
      ['My role', 'Product Designer, full redesign of the website'],
      ['Worked with', 'Kalu (Backend Developer)'],
      ['Date', '2023'],
      ['Scope', 'Desktop and mobile, dark and light themes, subscribe flow'],
      ['Inputs', 'The existing site and client requirements; no formal user research'],
      ['Tools', 'Figma'],
    ],
    sections: [
      {
        heading: 'Before and after',
        blocks: [img('naijafx', 'before-after', 'The original NaijaFXRates site next to the redesign', 'Left, the site I inherited: a gradient background behind a plain table, a date search that dominated the card, and a year of rates crammed into one chart with a single bad data point dropping it to zero. Right, the redesign: table and chart side by side, with buy and sell rates for the last seven days.')],
      },
      {
        heading: 'The problem',
        blocks: [{ type: 'p', text: 'In Nigeria the naira can move sharply within a day, and the cash (BDC) rate and the wire rate are often far apart. People check NaijaFXRates for one thing: today\'s rate, and which way it is heading. The original site made them work for it. The table and the chart sat far apart, the chart squeezed months of data into an unreadable line, and the sign-up form for rate alerts was a large block at the bottom of the page that most visitors never reached.' }],
      },
      {
        heading: 'Key decisions',
        blocks: [
          { type: 'h', title: 'Rates and trend side by side', text: 'The table answers "what is the rate today?" and the chart answers "which way is it going?" Putting them next to each other on desktop means one glance answers both, instead of scrolling between them.' },
          { type: 'h', title: 'A chart sized to the question', text: 'The old chart plotted almost a year of data, so daily changes disappeared and one bad data point dragged the line to zero. The new chart defaults to seven days, plots buy and sell as two clearly coloured lines, and labels the latest rate, with a menu for longer ranges.' },
          { type: 'h', title: 'Cash and wire as two simple tabs', text: 'The two markets used to look like two separate pages. They are now tabs at the top of the table, so switching between cash/BDC and wire rates is one tap.' },
          { type: 'h', title: 'Alerts that ask for less', text: 'Instead of a full form at the bottom of the page, a short banner offers FX notifications, and the form opens only when someone chooses to subscribe.' },
          { type: 'h', title: 'Dark and light, desktop and mobile', text: 'Traders check rates at all hours, so the site has a dark theme alongside the light one. On phones the table, chart and sign-up stack into one column, with the numbers sized to stay readable.' },
          img('naijafx', 'themes', 'The redesigned dashboard in dark and light themes', 'The same dashboard in both themes, switched with the toggle at the top right. Below the rates, short guides explain the basics: cash vs wire rates, reading buy and sell, and timing a transfer.'),
          img('naijafx', 'mobile', 'The redesign on mobile in dark and light themes', 'On mobile, rates come first, then the trend, then the option to subscribe.'),
          img('naijafx', 'subscribe', 'The subscribe form opening over the dashboard', 'The subscribe form opens on demand and asks for only three details.'),
        ],
      },
      {
        heading: 'Outcome',
        blocks: [{ type: 'list', items: ['**75% of traders** reported that the rate alerts helped them make better-informed trading decisions.', 'The redesign shipped with rate alerts, the cash and wire tabs, and the dark and light themes.'] }],
      },
      {
        heading: "What I'd do differently",
        blocks: [{ type: 'p', text: 'Talk to both traders and everyday users before designing. The redesign was based on the existing site and client requirements; watching people check rates on their phones would have shown what each group looks at first.' }],
      },
    ],
  },

  {
    slug: 'zygomed',
    name: 'Zygomed',
    title: 'An online store for African fashion, beauty and lifestyle',
    platforms: ['Website', 'Mobile app'],
    industry: 'E-commerce',
    years: '2023',
    featured: false,
    cover: 'zygomed/landing',
    card: 'A full shopping experience across web and mobile, from brand browsing to a checkout that shows the full cost.',
    proof: 'Live store, PM testimonial',
    intro:
      "As the sole designer, I designed Zygomed's full shopping experience: the storefront, customer account area, booking for beauty appointments and consultations, video and blog pages, and the mobile app.",
    facts: [
      ['Client', 'Dr. Emilia, Zygomed ([shop.zygomedltd.com](https://shop.zygomedltd.com/))'],
      ['My role', 'Sole Product Designer, web (desktop and mobile) and mobile app'],
      ['Worked with', 'Tolu Araba (Product Manager, who also represented the client), Allen (Frontend), Michael (Backend)'],
      ['Date', 'September 2023'],
      ['Inputs', 'Client and PM requirements; no formal user research'],
      ['Tools', 'Figma'],
    ],
    sections: [
      {
        heading: 'The problem',
        blocks: [{ type: 'p', text: 'Zygomed sells products from many African brands across fashion, beauty and lifestyle. A large catalogue is only useful if people can find things in it, and a new store has to earn trust before anyone pays. Many shoppers would arrive on phones, often on slow connections.' }],
      },
      {
        heading: 'What I designed',
        blocks: [{ type: 'table', head: ['Area', 'Screens'], rows: [
          ['Storefront', 'Landing page, product page, bag, checkout, about, contact, header and footer components'],
          ['Discovery', 'Search results, empty search state, saved items, brands'],
          ['Account', 'Sign up, OTP verification, account summary and settings, order history, coupons, address book, email preferences'],
          ['Content', 'Booking page for beauty appointments and consultations, video gallery, blog template'],
          ['Mobile app', 'Shopping, checkout and account flows, a dashboard adapted for mobile, and ZY Points loyalty'],
        ] }],
      },
      {
        heading: 'Key decisions',
        blocks: [
          { type: 'h', title: 'Browse by brand as well as category', text: 'With many brands in one store, a brand page lets shoppers who already trust a label go straight to it.' },
          img('zygomed', 'landing', 'Zygomed landing page', 'The landing page gives shoppers several ways in: featured brands, flash sales, top categories, and a grid of every brand the store carries.'),
          img('zygomed', 'product', 'Zygomed product page', "The product page puts price, discount and delivery terms above the fold, with similar items below so a shopper who isn't sold has somewhere to go."),
          { type: 'h', title: 'Design the empty states', text: 'A search with no results suggests other paths instead of a dead end, so shoppers keep browsing.' },
          img('zygomed', 'empty-search', 'Search with no results, followed by recommended products', 'A search with no matches says so plainly, then offers recommended products so the shopper has somewhere to go next.'),
          { type: 'h', title: 'A checkout that shows the full cost before payment', text: 'A new store has to earn trust, and surprise charges at the last step are a fast way to lose it. Shoppers choose a delivery partner on the checkout page, and the order summary lists subtotal, delivery, tax and any discount, so the total is never a surprise.' },
          img('zygomed', 'checkout', 'Desktop checkout with delivery options and order summary', 'Checkout: the delivery partner and its fee are chosen up front, and the summary adds up line by line to the total.'),
          { type: 'h', title: 'Saved items and coupons to bring people back', text: 'Saved items let shoppers come back to products later; coupons give a reason to return and buy.' },
          img('zygomed', 'account', 'Account summary with membership benefits and email preferences', 'The account summary brings membership benefits, a shareable influencer code and email preferences together on one page.'),
          { type: 'h', title: 'An app built for phones, with a reason to come back', text: "The app's shopping and account flows were laid out for a phone rather than squeezed from the desktop layout. ZY Points reward repeat orders, and the balance, its naira value and its expiry date sit together so shoppers know what they have and when to use it." },
          img('zygomed', 'mobile', 'Zygomed mobile app screens', 'The mobile app: a category splash, the home feed, checkout, and the ZY Points balance with its naira value and expiry date.'),
        ],
      },
      {
        heading: 'Outcome',
        blocks: [
          { type: 'p', text: "The store is live. I don't have sales or engagement figures for this project." },
          { type: 'quote', text: "You clearly understood the problem almost like you read my mind, you've put into account cases I hadn't even considered.", by: 'Tolu Araba, Product Manager' },
        ],
      },
      {
        heading: "What I'd do differently",
        blocks: [{ type: 'p', text: "Agree on success metrics with the client before launch, such as conversion rate and repeat purchases, so the design's impact could be measured." }],
      },
    ],
  },

  {
    slug: 'sociall-ai',
    name: 'Sociall.ai',
    title: 'A dating app that looks past first impressions',
    platforms: ['Website', 'Web app'],
    industry: 'Dating / AI',
    years: '2022',
    featured: false,
    cover: 'sociall/app',
    card: 'A concept for matching on personality, with an onboarding long enough to be useful and short enough to finish.',
    proof: 'Concept, not launched',
    intro:
      'As the sole designer, I designed the landing page and the responsive web app for Sociall.ai, a dating product that uses AI and behavioural science to help people get past snap judgments. The product was designed and handed to development but has not launched.',
    facts: [
      ['Client', 'Thibaut Segeral, founder'],
      ['My role', 'Sole Product Designer, landing page and responsive web app'],
      ['Worked with', 'Ralph François (Product Manager), Kalu (Full-stack Developer)'],
      ['Date', 'August 2022'],
      ['Status', 'Designed, in development, not launched'],
      ['Inputs', "Founder's concept and requirements; no formal user research"],
      ['Tools', 'Figma'],
    ],
    sections: [
      {
        heading: 'The problem',
        blocks: [
          { type: 'p', text: "Most dating apps are built around a photo and a swipe. People decide in a second, mostly on looks, and miss people they would actually get on with. Sociall.ai's founder wanted an app that slows that moment down and helps people judge each other on more than a first impression." },
          { type: 'p', text: "Matching on personality means asking people a lot about themselves: what they're looking for, their values, their interests, a personality test. The design challenge: how do you collect all of that without an onboarding so long that people give up before they meet anyone?" },
        ],
      },
      {
        heading: 'Key decisions',
        blocks: [
          { type: 'h', title: 'Make the promise clear before sign-up', text: 'The landing page leads with what makes Sociall.ai different: personality over appearance, and privacy and respect, with verified profiles and moderation. People who sign up know why the app will ask more of them than a photo and a swipe.' },
          img('sociall', 'landing', 'Sociall.ai landing page', 'The landing page: one call to action, and three benefits that set up why the app works differently.'),
          { type: 'h', title: 'Build profiles around personality, not just photos', text: 'Alongside photos, a profile covers why someone is here, their bio, work and education, a personality test, everyday details like drinking, religion and pets, expressions and interests. There is more to match on than a face.' },
          { type: 'h', title: 'Break the long onboarding into one question per screen', text: 'Onboarding asks a lot, so each step asks one thing, with a progress bar at the top showing how far there is to go. Interests are capped at five, which keeps the step quick and makes each choice say something.' },
          { type: 'h', title: 'Let people finish their profile later', text: "Not everything has to be done before someone can start. A completion ring on the profile shows how much is left, and each unfinished section, like photo verification or the personality test, is one tap away." },
          img('sociall', 'app', 'The interests step and a profile at 80% complete', "The web app at phone size. Left: one onboarding step, capped at five interests. Right: the profile shows it's 80% complete and lists what's left."),
        ],
      },
      {
        heading: 'Outcome',
        blocks: [
          { type: 'p', text: 'The app has not launched, so there are no usage results. The founder was happy with the design:' },
          { type: 'quote', text: 'We are really very happy with your work… Thank you again for your great work.', by: 'Thibaut Segeral, Founder' },
        ],
      },
      {
        heading: "What I'd do differently",
        blocks: [{ type: 'p', text: 'Prototype the core idea and test it with a small group of daters before designing the full app. For an unproven concept, the riskiest assumption is whether people want to slow down at all.' }],
      },
    ],
  },
]

export const gallery = [
  {
    slug: 'peek',
    name: 'Peek',
    platforms: ['Website'],
    type: 'Websites',
    role: 'Sole designer',
    year: 'July 2025',
    text: "A one-page site for PeekDebug, a macOS debugging app for developers. I designed the website; the app screens shown on it are the client's own. The page opens with the product itself: a real stack trace in the app window, right under the headline, so developers see what they'd get before reading a word of marketing. A short problem section names the pains they already know, then the feature cards show each capability alongside a view of the app.",
    images: [{ key: 'gallery/peek', alt: 'Peek website: hero with the app window, problem section and feature cards' }],
  },
  {
    slug: 'made4kids',
    name: 'Made4Kids',
    platforms: ['Website', 'User dashboard', 'Admin dashboard'],
    type: 'Websites',
    role: 'Sole designer',
    year: 'February 2025',
    link: 'https://made4kids.netlify.app/',
    text: "An online store for personalised name labels, stickers and tags for children's things. The home page answers a parent's first question before they browse: will these labels survive? A row of icons shows they're microwave, dishwasher, washer and dryer safe, right under a hero that leads with the benefit. Behind the store, the admin dashboard gives the owner sales, orders, customers and stock at a glance, and customers get their own account area for orders, wish list and delivery addresses.",
    images: [
      { key: 'gallery/made4kids', alt: 'Made4Kids home page and Sticky Labels category page' },
      { key: 'gallery/made4kids-dashboards', alt: 'Made4Kids admin dashboard and customer account page' },
    ],
  },
  {
    slug: 'greenhand',
    name: 'Greenhand',
    platforms: ['Mobile app'],
    type: 'Mobile apps',
    role: 'Design exercise',
    year: 'March 2025',
    text: "A plant care app that keeps houseplants alive without asking people to know their plant's care needs. Adding a plant is a few plain questions, one per screen: where it lives, how much sun it gets, whether it's potted, and when it was last watered. The app turns the answers into a watering schedule and reminders. Home shows only what needs doing today.",
    images: [{ key: 'gallery/greenhand', alt: 'Greenhand: home, setup questions, plant added, and plant details' }],
  },
  {
    slug: 'fixiconn',
    name: 'Fixiconn Socials',
    platforms: ['Mobile app'],
    type: 'Mobile apps',
    role: 'Sole designer of the social module, for Fixiconn',
    year: '2024',
    text: "The social side of Fixiconn's super-app: a video feed, profiles, chats and posting. Because it sits inside an app that already holds a wallet, money is part of the conversation. People can send money in a group chat, request it, and send gifts on videos, and it all shows up in the thread like any other message. Creators can also tag products in their posts.",
    images: [{ key: 'gallery/fixiconn', alt: 'Fixiconn Socials: video feed, profile, group chat with money, send-money sheet, new post' }],
  },
  {
    slug: 'priority-express',
    name: 'Priority Express',
    platforms: ['Web app'],
    type: 'Web apps',
    role: 'Sole designer, client project, not launched',
    year: '2025',
    text: 'A shipping web app for booking and tracking deliveries. Booking is split into short, numbered steps with progress shown down the side. People pick a package size from boxes labelled with exact dimensions, then compare carriers on price, pickup and delivery time. Tracking shows each status update next to a live map, with the dispatch rider one tap away. The client stopped the project before launch.',
    images: [{ key: 'gallery/priority', alt: 'Priority Express: shipments, tracking, package size and carrier comparison' }],
  },
]

// Site tab each case study appears under (a project can be in more than one).
export const typeOf = (platforms) => {
  const t = new Set()
  platforms.forEach((p) => {
    if (/mobile/i.test(p)) t.add('Mobile apps')
    else if (/web app|dashboard/i.test(p)) t.add('Web apps')
    else if (/website/i.test(p)) t.add('Websites')
  })
  return [...t]
}
