interface Author {
    id: number;
    name: string;
    slug: string;
  }
  
  interface Category {
    id: number;
    name: string;
    is_leaf: boolean;
  }
  
  interface CurrentSeller {
    id: number;
    sku: string;
    name: string;
    link: string;
    logo: string;
    price: number;
    product_id: string;
    store_id: number;
    is_best_store: boolean;
    is_offline_installment_supported: boolean | null;
  }
  
  interface Image {
    base_url: string;
    is_gallery: boolean;
    label: string | null;
    large_url: string;
    medium_url: string;
    position: number | null;
    small_url: string;
    thumbnail_url: string;
  }
  
  interface QuantitySold {
    text: string;
    value: number;
  }
  
  interface SpecificationAttribute {
    code: string;
    name: string;
    value: string;
  }
  
  interface Specification {
    name: string;
    attributes: SpecificationAttribute[];
  }
  
  interface Book {
    authors: Author[];
    book_cover: null;
    categories: Category;
    current_seller: CurrentSeller;
    description: string;
    images: Image[];
    list_price: number;
    name: string;
    original_price: string;
    quantity_sold: QuantitySold;
    rating_average: number;
    short_description: string;
    specifications: Specification[];
    id: number;
  }
  
  interface Response {
    books: Book[];
  }

  // Interface
// interface User {
//     id: number,
//     username: string,
//     password: string,
//     email: string,
// }

enum LEVEL {MANAGER, STAFF}

// interface Admin extends User {
//     is_admin: boolean,
//     level: LEVEL.MANAGER | LEVEL.STAFF
// }

// Properties
// interface User {
//     // union type
//     id: string | number,
//     username: string,
//     password: string,
//     email: string,
// }
// // Method
// interface User {
//     login: () => void,
//     logout: () => void
// }

// interface Admin extends User {
//     id: string,
//     is_admin: boolean,
//     level: LEVEL.MANAGER | LEVEL.STAFF
// }