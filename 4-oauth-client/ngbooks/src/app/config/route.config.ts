export interface NavbarLinkInterface {
  path: string;
  label: string;
}

export const booksRoutes: NavbarLinkInterface[] = [
  { label: 'Search', path: 'books/search' },
  { label: 'My books', path: 'books/bookshelves' },
  { label: 'List', path: 'books/list' }
];

export const userRoutes: NavbarLinkInterface[] = [
  { label: 'Profile', path: 'profile' },
  { label: 'Settings', path: '#' },
  { label: 'Logout', path: 'logout' }
];
