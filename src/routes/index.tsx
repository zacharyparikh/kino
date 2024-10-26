import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  const [count, setCount] = useState(0)
  return (
    <Box sx={{ p: '1em' }}>
      <h3>Welcome Home!</h3>
      <Stack direction="row" sx={{ gap: '0.5em', alignItems: 'center' }}>
        <IconButton
          aria-label="Decrement"
          onClick={() => {
            setCount((c) => c - 1)
          }}
        >
          <RemoveIcon />
        </IconButton>
        <Typography
          component="span"
          aria-label="Count"
          align="center"
          sx={{ minWidth: 20 }}
        >
          {count}
        </Typography>
        <IconButton
          aria-label="Increment"
          onClick={() => {
            setCount((c) => c + 1)
          }}
        >
          <AddIcon />
        </IconButton>
      </Stack>
    </Box>
  )
}
