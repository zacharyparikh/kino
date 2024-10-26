import { mergeSx } from '@/utils/mergeSx'
import { Tab, TabProps } from '@mui/material'
import { LinkComponent, createLink } from '@tanstack/react-router'
import * as React from 'react'

interface MUILinkProps extends Omit<TabProps, 'href'> {
  // Add any additional props you want to pass to the button
}

const MUILinkComponent = React.forwardRef<HTMLAnchorElement, MUILinkProps>(
  (props, ref) => {
    return <Tab component={'a'} ref={ref} {...props} />
  },
)

const CreatedLinkComponent = createLink(MUILinkComponent)

export const TabLink: LinkComponent<typeof MUILinkComponent> = (props) => {
  return <CreatedLinkComponent preload={'intent'} {...mergeSx(props)} />
}
