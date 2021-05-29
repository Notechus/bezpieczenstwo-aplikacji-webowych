export interface BookIdentifier {
  type: string;
  identifier: string;
}

export interface BookImageLinks {
  smallThumbnail: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

export interface BookVolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers: BookIdentifier[];
  pageCount: number;
  mainCategory: string;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  imageLinks: BookImageLinks;
  maturityRating: string;
  language: string;
  infoLink: string;
  canonicalVolumeLink: string;
}

export interface BookVolume {
  id: string;
  selfLink: string;
  volumeInfo: BookVolumeInfo;
}

export interface BookVolumesResponse {
  items: BookVolume[];
  totalItems: number;
}

export enum BookshelfAccessType {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

export interface BookshelfItem {
  id: string;
  title: string;
  description: string;
  access: BookshelfAccessType;
  updated: string;
  created: string;
  volumeCount: number;
  volumes?: Book[];
  userId: string;
}

export interface BookshelfCreateRequest {
  title: string;
  description?: string;
  access?: BookshelfAccessType;
  created?: string;
  volumeCount?: number;
  userId?: string;
}

export interface BookshelfUpdateRequest {
  id: string;
  title?: string;
  description?: string;
  access?: BookshelfAccessType;
  updated?: string;
  created?: string;
  volumeCount?: number;
  volumes?: Book[];
}

export interface Book {
  id: string;
  bookshelfId?: string;
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  isbn10: string;
  isbn13: string;
  pageCount: number;
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  maturityRating: string;
  imageLinks: BookImageLinks;
  language: string;
}

export interface BookshelfIdWithTitle {
  id: string;
  title: string;
}
