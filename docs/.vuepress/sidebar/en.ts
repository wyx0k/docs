import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/latest/": [
    "README.md",
    {
      text: "Get Started",
      prefix: "start/",
      children: 'structure',
      link: "start/README.md",
      icon: "launch",
      collapsible: true,
    },
    {
      text: "Deploy",
      prefix: "deploy/",
      children: 'structure',
      link: "deploy/README.md",
      icon: "stack",
      collapsible: true,
    },
    {
      text: "Develop",
      prefix: "develop/",
      children: 'structure',
      link: "develop/README.md",
      icon: "creative",
      collapsible: true,
    },
    {
      text: "Manage",
      prefix: "manage/",
      children: 'structure',
      link: "manage/README.md",
      icon: "tool",
      collapsible: true,
    },
    {
      text: "Reference",
      prefix: "reference/",
      children: 'structure',
      link: "reference/README.md",
      icon: "generic",
      collapsible: true,
    },
    {
      text: "Eco-integration",
      prefix: "eco/",
      children: 'structure',
      link: "eco/README.md",
      icon: "leaf",
      collapsible: true,
    },{
      text: "Release",
      prefix: "release/",
      children: 'structure',
      link: "release/README.md",
      icon: "copy",
      collapsible: true,
    },
  ],
  "/en/v2.3/": [
    "README.md",
    {
      text: "Get Started",
      prefix: "start/",
      children: 'structure',
      link: "start/README.md",
      icon: "launch",
      collapsible: true,
    },
    {
      text: "Deploy",
      prefix: "deploy/",
      children: 'structure',
      link: "deploy/README.md",
      icon: "stack",
      collapsible: true,
    },
    {
      text: "Develop",
      prefix: "develop/",
      children: 'structure',
      link: "develop/README.md",
      icon: "creative",
      collapsible: true,
    },
    {
      text: "Manage",
      prefix: "manage/",
      children: 'structure',
      link: "manage/README.md",
      icon: "tool",
      collapsible: true,
    },
    {
      text: "Reference",
      prefix: "reference/",
      children: 'structure',
      link: "reference/README.md",
      icon: "generic",
      collapsible: true,
    },
    {
      text: "Eco-integration",
      prefix: "eco/",
      children: 'structure',
      link: "eco/README.md",
      icon: "leaf",
      collapsible: true,
    },{
      text: "Release",
      prefix: "release/",
      children: 'structure',
      link: "release/README.md",
      icon: "copy",
      collapsible: true,
    },
  ],
});
