import defaultTailwindConfig from '@snowball-tech/design-tokens/dist/web/tailwindcss/tailwind.config'

const tailwindConfig = {
  ...defaultTailwindConfig,

  content: [...defaultTailwindConfig.content],
}

export default tailwindConfig
