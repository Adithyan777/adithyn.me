export type SiteMode =
  | "default" // current: both SuperAGI + Lifie active
  | "hidingLifie" // at SuperAGI, applying to roles, hide Lifie
  | "replaceSuperAGI" // at SuperAGI but exploring alternatives, both shown
  | "postSuperagi" // after SuperAGI, full-time Lifie
  | "jobHunting"; // after both, general job hunting

export const contentConfig = {
  mode: "replaceSuperAGI" as SiteMode,
  showLifieCaseStudy: true,
};

export const is = {
  superagiActive: () =>
    ["default", "hidingLifie", "replaceSuperAGI"].includes(contentConfig.mode),
  lifieActive: () =>
    ["default", "postSuperagi", "replaceSuperAGI"].includes(contentConfig.mode),
  jobHunting: () =>
    ["jobHunting", "replaceSuperAGI"].includes(contentConfig.mode),
  showBadge: () =>
    ["jobHunting", "replaceSuperAGI"].includes(contentConfig.mode),
};
