import type { Schema, Struct } from '@strapi/strapi';

export interface ContentContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_content_blocks';
  info: {
    displayName: 'Content Block';
    icon: 'puzzle';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files'>;
    Text: Schema.Attribute.Blocks;
    Type: Schema.Attribute.Enumeration<['text', 'media']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.content-block': ContentContentBlock;
    }
  }
}
