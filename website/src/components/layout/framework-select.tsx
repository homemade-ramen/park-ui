import { CheckIcon, ChevronsUpDownIcon, InfoIcon } from 'lucide-react'
import { memo } from 'react'
import { HStack } from 'styled-system/jsx'
import {
  Select,
  SelectContent,
  SelectControl,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
  type SelectProps,
} from '~/components/ui/select'
import { Icon } from '../ui/icon'
import {
  Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipTrigger,
} from '../ui/tooltip'

type Item = {
  label: string
  value: string
  disabled?: boolean
}

export const FrameworkSelect = memo(() => {
  const frameworks = [
    { label: 'React', value: 'react' },
    { label: 'Solid', value: 'solid', disabled: true },
    { label: 'Vue', value: 'vue', disabled: true },
  ]

  return (
    <Select<SelectProps<Item>>
      defaultValue={['react']}
      positioning={{ sameWidth: true }}
      items={frameworks}
      size="sm"
    >
      <HStack gap="1.5">
        <SelectLabel>JS Framework</SelectLabel>
        <Tooltip openDelay={0} closeDelay={0} positioning={{ placement: 'top' }}>
          <TooltipTrigger asChild>
            <Icon size="sm" color="fg.subtle">
              <InfoIcon />
            </Icon>
          </TooltipTrigger>
          <TooltipPositioner>
            <TooltipArrow>
              <TooltipArrowTip />
            </TooltipArrow>
            <TooltipContent>
              Code examples and documentation are tailored to the selected framework. Vue and Solid
              coming soon.
            </TooltipContent>
          </TooltipPositioner>
        </Tooltip>
      </HStack>
      <SelectControl>
        <SelectTrigger>
          <SelectValue placeholder="Select a Framework" />
          <ChevronsUpDownIcon />
        </SelectTrigger>
      </SelectControl>
      <SelectPositioner>
        <SelectContent>
          {frameworks.map((item) => (
            <SelectItem key={item.value} item={item}>
              <SelectItemText>{item.label}</SelectItemText>
              <SelectItemIndicator>
                <CheckIcon />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPositioner>
    </Select>
  )
})

FrameworkSelect.displayName = 'FrameworkSelect'
