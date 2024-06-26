import { Accordion } from '@ark-ui/solid'
import { type VariantProps, tv } from 'tailwind-variants'
import { createStyleContext } from '~/lib/create-style-context'

const accordion = tv(
  {
    base: 'accordion',
    defaultVariants: { size: 'md' },
    slots: {
      root: 'accordion__root',
      item: 'accordion__item',
      itemTrigger: 'accordion__itemTrigger',
      itemContent: 'accordion__itemContent',
      itemIndicator: 'accordion__itemIndicator',
    },
    variants: {
      size: {
        md: {
          root: 'accordion__root--size_md',
          item: 'accordion__item--size_md',
          itemTrigger: 'accordion__itemTrigger--size_md',
          itemContent: 'accordion__itemContent--size_md',
          itemIndicator: 'accordion__itemIndicator--size_md',
        },
      },
    },
  },
  { twMerge: false },
)
const { withProvider, withContext } = createStyleContext(accordion)

export interface RootProps extends Accordion.RootProps, VariantProps<typeof accordion> {}
export const Root = withProvider<RootProps>(Accordion.Root, 'root')

export const ItemContent = withContext<Accordion.ItemContentProps>(
  Accordion.ItemContent,
  'itemContent',
)

export const ItemIndicator = withContext<Accordion.ItemIndicatorProps>(
  Accordion.ItemIndicator,
  'itemIndicator',
)

export const Item = withContext<Accordion.ItemProps>(Accordion.Item, 'item')

export const ItemTrigger = withContext<Accordion.ItemTriggerProps>(
  Accordion.ItemTrigger,
  'itemTrigger',
)

export {
  AccordionContext as Context,
  AccordionItemContext as ItemContext,
  type AccordionContextProps as ContextProps,
  type AccordionItemContextProps as ItemContextProps,
} from '@ark-ui/solid'

export type {
  AccordionFocusChangeDetails as FocusChangeDetails,
  AccordionValueChangeDetails as ValueChangeDetails,
} from '@ark-ui/solid'
