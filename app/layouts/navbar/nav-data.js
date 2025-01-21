import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  // {
  //   label: 'Creations',
  //   pathname: '/articles',
  // },
  {
    label: 'Contact',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Bluesky',
    url: `https://bsky.app/profile/${config.bluesky}`,
    icon: 'bluesky',
  },
  {
    label: 'behance',
    url: `https://www.behance.net/${config.behance}`,
    icon: 'behance',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
