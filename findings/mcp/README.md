# MCP Findings Cache

This folder stores extracted Figma MCP findings so implementation can continue without repetitive MCP calls.

## Source
- Figma file key: `1LR6YSo7ZPJAlRlyJUtOym`
- Main node: `148:390`
- Frame size: `1440 x 6491`

## Key nodes cached
- `148:515` top navigation strip (`image 1206`)
- `282:16` hero/header (square pattern, orange gradients, two hero cards)
- `148:517` how-it-works section
- `148:606` applications section
- `148:609` services section
- `148:615` testimonials section
- `148:612` latest blog section
- `148:563` contact section
- `703:380` footer
- `703:2445` and `703:2431` right floating widgets

## Asset strategy used
- Local design exports in `InsightfulMindLandingPage/` are treated as the canonical visual assets.
- Final HTML uses the full-page export for strict visual parity in a single deterministic render.
