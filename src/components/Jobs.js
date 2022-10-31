import Job from "./Job";

const Jobs = (props) => {
  return (
    <>
      <Job
        className="job red"
        title="Full Time sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      />
      <Job
        className="job green"
        title="Agent de sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        className="job yellow"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="job blue"
        title="Chef de projets"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="job pink"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />
      <Job
        className="job red"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />
      <Job
        className="job green"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montana"
      />
      <Job
        className="job yellow"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New York"
      />
      <Job
        className="job blue"
        title="Infirmier"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </>
  );
};

export default Jobs;
