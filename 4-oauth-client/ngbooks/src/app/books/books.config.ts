export const BOOKS_API_BASE_PATH = 'https://www.googleapis.com/books/v1';

export const BOOKS_API_VOLUMES_PATH = BOOKS_API_BASE_PATH + '/volumes';
export const BOOK_BY_ID_PATH = id => `${BOOKS_API_VOLUMES_PATH}/${id}`;
