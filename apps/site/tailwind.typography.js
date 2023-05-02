module.exports = (theme) => ({
  slate: {
    css: {
      '--tw-prose-body': theme('colors.slate.900'),
      '--tw-prose-quotes': theme('colors.slate.500'),
      '--tw-prose-invert-quotes': theme('colors.slate.400'),
      '--tw-prose-code': theme('colors.slate.900'),
      '--tw-prose-code-bg': theme('colors.slate.50'),
      '--tw-prose-code-ring': theme('colors.slate.200'),
      '--tw-prose-invert-code': theme('colors.white'),
      '--tw-prose-invert-code-bg': theme('colors.slate.700 / 0.15'),
      '--tw-prose-invert-code-ring': theme('colors.white / 0.1'),
      'blockquote': {
        fontWeight: 'normal',
        paddingLeft: '1.25em',
        borderLeftWidth: '2px',
      },
      'code': {
        fontWeight: 'normal',
        color: 'var(--tw-prose-code)',
        borderRadius: theme('borderRadius.md'),
        paddingTop: theme('padding.1'),
        paddingRight: theme('padding[1.5]'),
        paddingBottom: theme('padding.1'),
        paddingLeft: theme('padding[1.5]'),
        boxShadow: 'inset 0 0 0 1px var(--tw-prose-code-ring)',
        backgroundColor: 'var(--tw-prose-code-bg)',
        fontSize: theme('fontSize.2xs'),
      },
      'code::before': { content: 'none' },
      'code::after': { content: 'none' },
    },
  },
  invert: {
    css: {
      '--tw-prose-code': 'var(--tw-prose-invert-code)',
      '--tw-prose-code-bg': 'var(--tw-prose-invert-code-bg)',
      '--tw-prose-code-ring': 'var(--tw-prose-invert-code-ring)',
    },
  },
});
