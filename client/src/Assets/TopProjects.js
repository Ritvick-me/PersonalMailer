import StackLogos from "./Logos";
import ProjectLogos from "./ProjectLogos";
import ProjectList from "./ProjectList";

const TopProjects = {
  logos: [
    {
      icon: ProjectLogos.SRMKZILLALogo,
      name: "SRMKZILLA",
    },
    {
      icon: ProjectLogos.KzillaXYZLogo,
      name: "Kzilla.XYZ",
    },
    {
      icon: ProjectLogos.BETILogo,
      name: "BETI",
    },
    {
      icon: ProjectLogos.MyPortfolioLogo,
      name: "My Portfolio",
    },
  ],

  projects: [
    {
      website: ProjectList.SRMKZILLA,
      name: "SRMKZILLA",
      stacks: [],
    },
    {
      website: ProjectList.KzillaXYZ,
      name: "Kzilla.XYZ",
      stacks: [
        StackLogos.SvelteLogo,
        StackLogos.NodeLogo,
        StackLogos.MongodbLogo,
      ],
    },
    {
      website: ProjectList.BETI,
      name: "BETI",
      stacks: [
        StackLogos.SvelteLogo,
        StackLogos.NodeLogo,
        StackLogos.MongodbLogo,
      ],
    },
    {
      website: ProjectList.MyPortfolio,
      name: "My Portfolio",
      stacks: [StackLogos.ReactLogo],
    },
  ],
};

export default TopProjects;
