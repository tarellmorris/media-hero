// @flow
import { FIELD_TYPES, FIELD_CATEGORIES } from '@uber/component-common';

export const schema = {
  title: 'Media Hero',
  fields: [
    {
      label: 'Poster Image',
      type: FIELD_TYPES.COLLAPSIBLE,
      category: FIELD_CATEGORIES.CONTENT,
      itemSchema: {
        fields: [
          {
            field: 'posterImages',
            type: FIELD_TYPES.TABBED_FIELDS,
            itemSchema: {
              fields: [
                {
                  field: 'desktopImage',
                  label: 'Desktop',
                  type: FIELD_TYPES.DYNAMIC_PHOTO,
                  dynamicPhotoType: 'CARD',
                },
                {
                  field: 'tabletImage',
                  label: 'Tablet',
                  type: FIELD_TYPES.DYNAMIC_PHOTO,
                  dynamicPhotoType: 'CARD',
                },
                {
                  field: 'mobileImage',
                  label: 'Mobile',
                  type: FIELD_TYPES.DYNAMIC_PHOTO,
                  dynamicPhotoType: 'CARD',
                },
              ],
            },
          },
        ],
      },
    },
    {
      label: 'Looping Video',
      type: FIELD_TYPES.COLLAPSIBLE,
      category: FIELD_CATEGORIES.CONTENT,
      itemSchema: {
        fields: [
          {
            field: 'loopingVideo',
            type: FIELD_TYPES.TABBED_FIELDS,
            itemSchema: {
              fields: [
                {
                  field: 'desktopVideo',
                  label: 'Desktop',
                  type: FIELD_TYPES.TEXT_LINE,
                  disableCount: true,
                  placeholder: '1080p video URL (webm, mp4)',
                },
                {
                  field: 'tabletVideo',
                  label: 'Tablet',
                  type: FIELD_TYPES.TEXT_LINE,
                  disableCount: true,
                  placeholder: '720p video URL (webm, mp4)',
                },
                {
                  field: 'mobileVideo',
                  label: 'Mobile',
                  type: FIELD_TYPES.TEXT_LINE,
                  disableCount: true,
                  placeholder: '480p video URL (webm, mp4)',
                },
                {
                  field: 'fallbackVideo',
                  label: 'Fallback',
                  type: FIELD_TYPES.TEXT_LINE,
                  disableCount: true,
                  placeholder: '360p video URL (webm, mp4)',
                },
              ],
            },
          },
        ],
      },
    },
    {
      field: 'contentBlocks',
      label: 'Content Blocks',
      type: FIELD_TYPES.ARRAY,
      category: FIELD_CATEGORIES.CONTENT,
      itemSchema: {
        fields: [
          {
            field: 'heading',
            label: 'Heading',
            type: FIELD_TYPES.TEXT_LINE,
          },
          {
            field: 'headingSize',
            label: 'Heading Size',
            type: FIELD_TYPES.BUTTON_GROUP,
            options: [
              {
                label: 'Display',
                value: 'display',
              },
              {
                label: 'H1',
                value: 1,
              },
              {
                label: 'H2',
                value: 2,
              },
              {
                label: 'H3',
                value: 3,
              },
              {
                label: 'H4',
                value: 4,
              },
              {
                label: 'H5',
                value: 5,
              },
            ],
          },
          {
            field: 'headingSpacerSize',
            label: 'Heading Spacer Size',
            type: FIELD_TYPES.BUTTON_GROUP,
            options: [
              {
                label: 'None',
                value: 0,
              },
              {
                label: 'Small',
                value: 1,
              },
              {
                label: 'Medium',
                value: 2,
              },
              {
                label: 'Large',
                value: 3,
              },
            ],
          },
          {
            field: 'body',
            label: 'Body Copy',
            type: FIELD_TYPES.MARKDOWN,
          },
          {
            field: 'bodySize',
            label: 'Body Text Size',
            type: FIELD_TYPES.BUTTON_GROUP,
            options: [
              {
                label: 'Small',
                value: 'legal',
              },
              {
                label: 'Medium',
                value: 'medium',
              },
              {
                label: 'Large',
                value: 'large',
              },
              {
                label: 'X-Large',
                value: 'xlarge',
              },
            ],
          },
          {
            field: 'ctaSpacerSize',
            label: 'CTA Spacer Size',
            type: FIELD_TYPES.BUTTON_GROUP,
            options: [
              {
                label: 'None',
                value: 0,
              },
              {
                label: 'Small',
                value: 1,
              },
              {
                label: 'Medium',
                value: 2,
              },
              {
                label: 'Large',
                value: 3,
              },
            ],
          },
          {
            field: 'ctaPrimary',
            label: 'CTA Primary',
            type: FIELD_TYPES.OBJECT,
            itemSchema: {
              fields: [
                {
                  field: 'ctaType',
                  label: 'CTA Type',
                  type: FIELD_TYPES.BUTTON_GROUP,
                  options: [
                    {
                      label: 'Link',
                      value: 'link',
                    },
                    {
                      label: 'Button',
                      value: 'button',
                    },
                    {
                      label: 'Inverted',
                      value: 'inverted',
                    },
                  ],
                },
                {
                  field: 'ctaDetails',
                  label: 'CTA Details',
                  type: FIELD_TYPES.TEXT_LINK_MODAL,
                },
              ],
            },
          },
          {
            field: 'ctaSecondary',
            label: 'CTA Secondary',
            type: FIELD_TYPES.OBJECT,
            itemSchema: {
              fields: [
                {
                  field: 'ctaType',
                  label: 'CTA Type',
                  type: FIELD_TYPES.BUTTON_GROUP,
                  options: [
                    {
                      label: 'Link',
                      value: 'link',
                    },
                    {
                      label: 'Button',
                      value: 'button',
                    },
                    {
                      label: 'Inverted',
                      value: 'inverted',
                    },
                  ],
                },
                {
                  field: 'ctaDetails',
                  label: 'CTA Details',
                  type: FIELD_TYPES.TEXT_LINK_MODAL,
                },
              ],
            },
          },
          {
            field: 'blockEndSpacerSize',
            label: 'Block End Spacer Size',
            type: FIELD_TYPES.BUTTON_GROUP,
            options: [
              {
                label: 'None',
                value: 0,
              },
              {
                label: 'Small',
                value: 1,
              },
              {
                label: 'Medium',
                value: 2,
              },
              {
                label: 'Large',
                value: 3,
              },
              {
                label: 'Full',
                value: 4,
              },
            ],
          },
        ],
      },
    },
    {
      field: 'textColor',
      label: 'Text Color',
      type: FIELD_TYPES.BUTTON_GROUP,
      category: FIELD_CATEGORIES.DESIGN,
      options: [
        {
          label: 'Black',
          value: 'black',
        },
        {
          label: 'White',
          value: 'white',
        },
      ],
    },
    {
      field: 'textAlign',
      label: 'Text Align',
      type: FIELD_TYPES.BUTTON_GROUP,
      category: FIELD_CATEGORIES.DESIGN,
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Center',
          value: 'center',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
    },
    {
      field: 'contentMaxWidth',
      label: 'Content Max Width',
      type: FIELD_TYPES.BUTTON_GROUP,
      category: FIELD_CATEGORIES.DESIGN,
      options: [
        {
          label: 'Default',
          value: null,
        },
        {
          label: 'Wide',
          value: '1000px',
        },
        {
          label: 'Tight',
          value: '800px',
        },
      ],
    },
    {
      label: 'Animations',
      type: FIELD_TYPES.COLLAPSIBLE,
      category: FIELD_CATEGORIES.ADVANCED,
      itemSchema: {
        fields: [
          {
            field: 'animations',
            type: FIELD_TYPES.ANIMATION_BUILDER,
            options: [
              { label: 'Full block', value: 'fullBlock' },
              { label: 'Content group header', value: 'contentGroupHeader' },
              { label: 'Content group body', value: 'contentGroupBody' },
              { label: 'CTA group', value: 'contentGroupCta' },
            ],
          },
        ],
      },
    },
  ],
};
