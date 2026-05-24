export const MOCK_VERIFICATION_DATABASE = {
  'SORT-2026-X': {
    date: 'January 14, 2026',
    target: 'X-bearing (Female enrichment)',
    accuracy: '93% purity of X-bearing sperm in final sample',
    lab: 'MicroSort Mexico (Puerto Vallarta)',
    physician: 'Dr. Sofia Romero',
    method: 'Flow Cytometry (staining & sorting)',
    status: 'Verified'
  },
  'SORT-2026-Y': {
    date: 'March 22, 2026',
    target: 'Y-bearing (Male enrichment)',
    accuracy: '82% purity of Y-bearing sperm in final sample',
    lab: 'MicroSort Switzerland (Basel)',
    physician: 'Dr. Hans Meier',
    method: 'Flow Cytometry (staining & sorting)',
    status: 'Verified'
  },
  'SORT-2026-CYP': {
    date: 'April 08, 2026',
    target: 'X-bearing (Female enrichment)',
    accuracy: '93% purity of X-bearing sperm in final sample',
    lab: 'MicroSort North Cyprus (Nicosia)',
    physician: 'Dr. Andreas Georgiou',
    method: 'Flow Cytometry (staining & sorting)',
    status: 'Verified'
  }
};

export const FAQ_DATABASE = {
  GENERAL: [
    {
      q: "What is MicroSort?",
      a: "MicroSort is a pre-conception sperm-sorting technology that separates X-bearing and Y-bearing sperm using high-speed flow cytometry. By isolating sperm with the desired chromosome, it increases the probability of conceiving a child of your preferred sex. The sorted sample is then used in IUI or IVF/ICSI cycles."
    },
    {
      q: "Is MicroSort legal in my country?",
      a: "Regulatory structures vary by country. MicroSort laboratories operate exclusively in jurisdictions where sperm sorting for medical and family-balancing indications is permitted. Intended parents can travel internationally to complete their procedures."
    },
    {
      q: "How long has MicroSort been available?",
      a: "MicroSort has been in clinical use and laboratory validation for several decades. Our sperm-sorting methods have been the subject of peer-reviewed clinical research papers and conference presentations since the late 1990s."
    },
    {
      q: "How is MicroSort different from other sperm-sorting methods?",
      a: "Most alternative methods (such as Swim-Up or Albumin separation) rely on behavioral estimates like motility or weight, which yield minimal, undocumented enrichment. MicroSort is the only technology that measures the actual physical DNA density difference (2.8% variance) using flow cytometry."
    }
  ],
  ELIGIBILITY: [
    {
      q: "Do I have to have a child already to qualify?",
      a: "For family-balancing purposes, licensed laboratories require intended parents to have at least one child of the non-preferred sex. This rule does not apply to carriers of X-linked genetic disorders, who qualify regardless of family size."
    },
    {
      q: "What if I'm a known X-linked carrier?",
      a: "Known carrier couples qualify immediately for medical sperm sorting to reduce inheritance risks. A clinical referral and session with a certified genetic counselor are strongly recommended before cycle scheduling."
    },
    {
      q: "Can same-sex couples or single parents use MicroSort?",
      a: "Access and eligibility depend on the specific regulations of the country where the processing laboratory is located. Please discuss your circumstances with a coordinator to identify a suitable licensed center."
    },
    {
      q: "What if my fertility profile is borderline?",
      a: "A preliminary semen analysis is required to evaluate sperm counts before traveling. If your count falls slightly below the threshold, our laboratory team can discuss options such as combining multiple ejaculates or cryopreserving backup vials."
    }
  ],
  PROCEDURE: [
    {
      q: "How long does the sort take?",
      a: "A complete flow cytometry sperm-sorting procedure typically takes 6 to 7 hours of laboratory preparation on the scheduled day. The sample must be used immediately for IUI/IVF or frozen."
    },
    {
      q: "Do both partners need to travel?",
      a: "For IUI cycles, both partners typically need to be present on the day of sorting since insemination must occur immediately. For IVF cycles, semen can be cryopreserved locally and shipped to our lab, allowing the female partner to remain home for tracking."
    },
    {
      q: "Can the sample be cryopreserved or shipped?",
      a: "Yes. Once a sample is sorted, it can be cryopreserved at the processing lab and shipped in specialized dry shippers to partner IVF laboratories worldwide, subject to local regulations."
    },
    {
      q: "Can MicroSort be combined with Preimplantation Genetic Testing (PGT)?",
      a: "Yes. Combining MicroSort with IVF and PGT-A is highly common. Sperm sorting enriches the sample before fertilization, and PGT-A confirms the chromosomal sex of resulting embryos prior to transfer."
    }
  ],
  OUTCOMES: [
    {
      q: "How accurate is MicroSort?",
      a: "Clinical outcomes show average enrichment purities of approximately 93% for female sorts (X-bearing) and 82% for male sorts (Y-bearing) in the prepared specimens. Individual results depend on sperm health and sample parameters."
    },
    {
      q: "Does MicroSort guarantee the sex of the baby?",
      a: "No. MicroSort increases the probability of conceiving the desired sex but does not guarantee outcomes. A small percentage of sorted samples will contain sperm of the non-preferred sex, which is why we qualify all statements."
    },
    {
      q: "What pregnancy rates should I expect?",
      a: "Pregnancy rates are separate from sorting purities. Success depends on factors such as maternal age, egg quality, uterine environment, and the chosen reproductive method (IUI vs. IVF) managed by your physician."
    }
  ],
  COST_LOGISTICS: [
    {
      q: "How much does MicroSort cost?",
      a: "Fees vary depending on the licensed laboratory and procedure type. Sorting fees are charged directly by the processing lab and are separate from the treatment, medication, and clinical costs of your primary fertility physician."
    },
    {
      q: "What's included in the quoted cost?",
      a: "The MicroSort fee covers the laboratory processing, flow cytometry sorting, and final sample analysis. Travel, physician procedures (IUI/IVF), medications, and diagnostic tests are billed separately."
    },
    {
      q: "What happens if my procedure is cancelled due to low sample quality?",
      a: "If the semen sample does not meet the minimum motile sperm requirements (140M for IUI, 70M for IVF) on the day of processing, the sort must be cancelled. A 40% cancellation fee applies to cover laboratory prep costs."
    },
    {
      q: "Does insurance cover MicroSort?",
      a: "In most regions, sperm sorting for family balancing is considered elective and not covered by health insurance. Partial coverage may be available for medical indications (carrier risk reduction); check with your insurer."
    }
  ],
  AFTERWARDS: [
    {
      q: "How do I verify my sort?",
      a: "Every sorting procedure generates a secure verification code. Visit our Verify Your Sort portal and enter your code to view the date, target chromosome, and laboratory details associated with your specimen."
    },
    {
      q: "What if my pregnancy doesn't result in the expected sex?",
      a: "Because MicroSort improves probabilities but does not guarantee sex, a small percentage of cycles may result in the non-preferred sex. Licensed coordinators outline these probabilities during clinical consent."
    }
  ]
};
