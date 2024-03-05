import type { Schema, Attribute } from '@strapi/strapi';

export interface ItemsBaseItemCorn extends Schema.Component {
  collectionName: 'components_items_base_item_corns';
  info: {
    displayName: 'BaseItemCorn';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    FAO: Attribute.String;
    processing: Attribute.String;
    characteristics: Attribute.String;
    processing_1: Attribute.String;
    processing_2: Attribute.String;
    price: Attribute.String;
    price_1: Attribute.String;
    price_2: Attribute.String;
  };
}

export interface ItemsBaseItemSeedCornLidea extends Schema.Component {
  collectionName: 'components_items_base_item_seed_corn_lideas';
  info: {
    displayName: 'BaseItemSeedCornLidea';
  };
  attributes: {
    name: Attribute.String;
    FAO: Attribute.String;
    characteristics: Attribute.String;
    price: Attribute.String;
  };
}

export interface ItemsBaseItemSeedCornSyngenta extends Schema.Component {
  collectionName: 'components_items_base_item_seed_corn_syngentas';
  info: {
    displayName: 'BaseItemSeedCornSyngenta';
  };
  attributes: {
    name: Attribute.String;
    FAO: Attribute.String;
    processing: Attribute.String;
    price: Attribute.String;
    type: Attribute.String;
  };
}

export interface ItemsBaseItemSeedSunflowerBayer extends Schema.Component {
  collectionName: 'components_items_base_item_seed_sunflower_bayers';
  info: {
    displayName: 'BaseItemSeedSunflowerBayer';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    typeBayer: Attribute.String;
    price: Attribute.String;
  };
}

export interface ItemsBaseItemSeedSunflowerMaisadour extends Schema.Component {
  collectionName: 'components_items_base_item_seed_sunflower_maisadours';
  info: {
    displayName: 'BaseItemSeedSunflowerMaisadour';
  };
  attributes: {
    name: Attribute.String;
    group: Attribute.String;
    characteristic: Attribute.String;
    processing_1: Attribute.String;
    processing_2: Attribute.String;
    price_1: Attribute.String;
    price_2: Attribute.String;
  };
}

export interface ItemsBaseItemSeed extends Schema.Component {
  collectionName: 'components_items_base_item_seeds';
  info: {
    displayName: 'BaseItemSeedSunflower';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    group: Attribute.String;
    characteristic: Attribute.String;
    processing: Attribute.String;
    price: Attribute.String;
    type: Attribute.String;
  };
}

export interface ItemsBaseItem extends Schema.Component {
  collectionName: 'components_items_base_items';
  info: {
    displayName: 'baseItem';
    icon: 'alien';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    manufacturer: Attribute.String;
    price_1: Attribute.String;
    agents: Attribute.JSON;
    price_2: Attribute.String;
    rates: Attribute.String;
    container: Attribute.String;
    culture: Attribute.String;
    group: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'items.base-item-corn': ItemsBaseItemCorn;
      'items.base-item-seed-corn-lidea': ItemsBaseItemSeedCornLidea;
      'items.base-item-seed-corn-syngenta': ItemsBaseItemSeedCornSyngenta;
      'items.base-item-seed-sunflower-bayer': ItemsBaseItemSeedSunflowerBayer;
      'items.base-item-seed-sunflower-maisadour': ItemsBaseItemSeedSunflowerMaisadour;
      'items.base-item-seed': ItemsBaseItemSeed;
      'items.base-item': ItemsBaseItem;
    }
  }
}
