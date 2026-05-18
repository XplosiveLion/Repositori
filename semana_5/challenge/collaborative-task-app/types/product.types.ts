export interface Product {
  id: number;

  name: string;

  sku: string | null;

  is_active: boolean;

  type: number;

  display_on_store: boolean;

  display_on_pos: boolean;

  average_rating: string;

  rating_count: number;

  main_model: {
    id: number;

    name: string;

    presentation: {
      id: number;

      name: string;

      price: number;

      cost: number;

      nickname: string;
    };
  };

  category: {
    id: number;

    name: string;
  };
}