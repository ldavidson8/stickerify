import { Select as SelectPrimitive } from '@base-ui-components/react/select'
import TablerCaretDown from 'icons:react/tabler/caret-down'
import TablerSun from '~icons/tabler/sun'
import TablerMoon from '~icons/tabler/moon'
import TablerDeviceDesktop from '~icons/tabler/device-desktop'

import { useStore } from '@nanostores/react'
import {
  selectedThemePreference,
  setThemePreference,
  type ThemePreference,
} from '@/stores/theme'

const themes = [
  {
    value: 'system',
    label: 'System',
    icon: <TablerDeviceDesktop className="size-4" />,
  },
  { value: 'light', label: 'Light', icon: <TablerSun className="size-4" /> },
  { value: 'dark', label: 'Dark', icon: <TablerMoon className="size-4" /> },
]

export default function Select() {
  const currentPreference = useStore(selectedThemePreference)

  // Find the theme object corresponding to the current preference
  const currentThemeObject = themes.find((t) => t.value === currentPreference)

  // Handler for when the select value changes - uses the Nanostore action
  const handleValueChange = (value: string) => {
    // Ensure the value is of the correct type before setting
    if (value === 'light' || value === 'dark' || value === 'system') {
      setThemePreference(value as ThemePreference)
    }
  }

  return (
    <SelectPrimitive.Root
      value={currentPreference}
      onValueChange={handleValueChange}
    >
      <SelectPrimitive.Trigger className="border-slate-3 text-slate-12 hover:bg-slate-2 active:bg-slate-2 data-[popup-open]:bg-slate-2 focus-visible:outline-blue-8 flex h-10 min-w-36 items-center justify-between gap-3 rounded-md border pr-3 pl-3.5 text-sm select-none focus-visible:outline-2 focus-visible:-outline-offset-1">
        <span className="flex items-center">{currentThemeObject?.icon}</span>
        <SelectPrimitive.Value placeholder="Theme" />
        <SelectPrimitive.Icon className="flex">
          <TablerCaretDown />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Positioner className="outline-none" sideOffset={8}>
          <SelectPrimitive.ScrollUpArrow className="bg-slate-1 top-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]" />

          <SelectPrimitive.Popup className="group bg-slate-1 text-slate-12 shadow-slate-1 outline-slate-3 [max-height:var(--available-height)] origin-[var(--transform-origin)] overflow-y-auto rounded-md py-1 shadow-lg outline-1 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:transition-none data-[starting-style]:scale-90 data-[starting-style]:opacity-0 data-[side=none]:data-[starting-style]:scale-100 data-[side=none]:data-[starting-style]:opacity-100">
            {themes.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                className="data-[highlighted]:text-slate-1 data-[highlighted]:before:bg-slate-12 grid min-w-[var(--anchor-width)] cursor-default grid-cols-[1.25rem_1fr] items-center gap-2 py-2 pr-4 pl-2.5 text-sm leading-4 outline-none select-none group-data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)] group-data-[side=none]:pr-12 group-data-[side=none]:text-base group-data-[side=none]:leading-4 data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm"
              >
                <span className="col-start-1 flex items-center">
                  {option.icon}
                </span>
                <SelectPrimitive.ItemText className="col-start-2">
                  {option.label}
                </SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Popup>

          <SelectPrimitive.ScrollDownArrow className="bg-slate-1 bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]" />
        </SelectPrimitive.Positioner>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
