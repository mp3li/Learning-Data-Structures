# Design Notes

## Visual Direction

The app uses a dark night-camping dashboard style. The goal is to keep the interface readable while matching the campfire, forest, and night-sky colors from the provided palette reference.

## Color Palette

| Hex | Use |
| --- | --- |
| `#aa5215` | Primary action color and campfire highlights. |
| `#66310c` | Secondary action color and bark-brown accents. |
| `#151e08` | Panel depth and forest-green surfaces. |
| `#0b1406` | Deep pine green backgrounds. |
| `#04040c` | Main night-sky black background. |

## Typography

- `DIGITALDREAMFATNARROW.ttf` is used for the app title, section titles, and large numeric labels.
- `DIGITALDREAMSKEWNARROW.ttf` is used for body text, form labels, controls, and cards.
- The Digital Dream font files are from the free commercial-use font set, with the included pizzadude.dk license kept in `LICENSES/`.
- System fonts are listed as fallbacks in CSS in case a local browser blocks or cannot load the font files.

## Background Image Treatment

The main background image is `assets/images/muhammad-masood-4bGPldCL4I8-unsplash.jpg`. It is darkened with a layered overlay so text and controls remain readable. Panels use translucent dark surfaces and blur to create a glass-style interface without making the image distract from the app.

## Layout

- The top hero introduces the project and shows summary stats.
- The controls panel is placed before the main work areas.
- Inventory and packing list sit side by side on desktop.
- Garage tree and add-item form sit below the primary workflow.
- The layout collapses to one column on smaller screens.

## Accessibility And Readability

- Text is light on dark surfaces for contrast.
- The background image is always dimmed behind content.
- Buttons and inputs have visible borders and stable dimensions.
- The app avoids layout shifts by using grid layouts and fixed card spacing.
- Labels are visible above form fields so the form can be used without placeholder text.
