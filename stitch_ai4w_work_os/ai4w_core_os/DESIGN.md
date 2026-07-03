---
name: AI4W Core OS
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434656'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737688'
  outline-variant: '#c3c5d9'
  surface-tint: '#004ced'
  primary: '#003ec7'
  on-primary: '#ffffff'
  primary-container: '#0052ff'
  on-primary-container: '#dfe3ff'
  inverse-primary: '#b7c4ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#005a3c'
  on-tertiary: '#ffffff'
  tertiary-container: '#007550'
  on-tertiary-container: '#72fec0'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001452'
  on-primary-fixed-variant: '#0038b6'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 20px
  margin-mobile: 16px
  margin-desktop: 32px
  max-width: 1440px
---

## Brand & Style
The design system for this product is built on the philosophy of an "Intelligent Workspace Operating System." It prioritizes clarity, performance, and reliability for Vietnamese SMB owners who manage high-velocity service and retail operations. 

The aesthetic is **Modern Corporate** with a focus on **Layered Utility**. It blends the precision of enterprise software with the fluidity of modern AI-driven interfaces. By utilizing a "Glassmorphism Lite" approach for temporary surfaces (modals, dropdowns, and overlays), the UI creates a distinct "Experience Layer" that sits above the data-heavy workspace. The emotional goal is to evoke a sense of calm control and professional confidence, moving away from cluttered legacy systems toward a streamlined, future-proof environment.

## Colors
This design system uses a high-contrast professional palette designed for long-term legibility and clear action hierarchy.

- **Primary (Electric Blue):** Reserved for primary actions, active states, and critical paths. It represents the "energy" of the AI.
- **Secondary (Deep Navy):** Used for structural elements like sidebars and headers, providing a grounded, authoritative frame.
- **Tertiary (Automation Green):** Used specifically for success states, growth indicators, and automated task completions.
- **Surface & Background:** The palette uses a Light Slate base to reduce eye strain compared to pure white, while keeping the interface feeling airy and modern.

## Typography
The typography strategy utilizes two complementary sans-serifs. **Geist** provides a technical, precise feel for headlines and functional labels, echoing the "OS" aesthetic. **Inter** is used for all body text to ensure maximum readability for Vietnamese diacritics and long-form data.

- **Scale:** Use `headline-xl` only for dashboard overviews. 
- **Readability:** Ensure `body-md` is the default for all user-generated content and table data.
- **Language Support:** All weights must support the full Vietnamese character set, ensuring no vertical clipping of diacritics in high-density layouts.

## Layout & Spacing
The layout follows a **Hybrid Fluid Grid** system. The sidebar navigation remains fixed (240px or 64px collapsed), while the main content area expands.

- **Grid:** A 12-column system is used for desktop dashboards.
- **Density:** High density is preferred for data tables (8px padding), while management views use a standard 16px rhythm to maintain breathing room.
- **Reflow:** On mobile, the 12-column grid collapses to a single column with 16px side margins. Tables should transition to "card-stack" views or implement horizontal scroll with frozen ID columns.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Selective Glassmorphism**.

1.  **Base Layer (#F8FAFC):** The primary canvas for all work.
2.  **Surface Layer (#FFFFFF):** Used for cards, tables, and primary containers. These use a subtle 1px border (#E2E8F0) rather than heavy shadows to maintain a "flat OS" look.
3.  **The Experience Layer (Glass):** Modals, side-drawers, and command palettes use a semi-transparent white background (80% opacity) with a 12px backdrop blur. This allows the user to maintain context of the underlying data while focusing on a specific task.
4.  **Shadows:** When used (only for floating elements), shadows are extra-diffused: `0px 10px 15px -3px rgba(15, 23, 42, 0.08)`.

## Shapes
The shape language is **Refined and Structured**. 

- **Standard Elements:** Buttons, input fields, and cards use a 0.5rem (8px) radius to feel modern but professional.
- **Large Containers:** Dashboard widgets and main content areas use `rounded-lg` (16px) to define clear boundaries.
- **Interactive Indicators:** Small badges or chips use `rounded-xl` for a "pill" look, distinguishing them from structural containers.

## Components
Consistent implementation of these components ensures the "OS" feeling:

- **Buttons:** Primary buttons use the #0052FF background with white text. Secondary buttons are ghost-style with a #E2E8F0 border.
- **Inputs:** Fields must include a clear 1px border that thickens to 2px in #0052FF on focus. Labels always use the `label-md` Geist style.
- **Data Tables:** These are the heart of the OS. Use #FFFFFF backgrounds, 1px horizontal dividers only, and Geist-SemiBold for column headers to differentiate from row data.
- **AI Command Palette:** A floating glassmorphic input centered at the top of the screen, triggered by `Cmd+K`, using a 20px backdrop-blur.
- **Status Chips:** Use high-saturation backgrounds at 10% opacity with 100% opacity text in the same color (e.g., Success Green text on light green tint).
- **Navigation Sidebar:** Uses the Deep Navy (#0F172A) background with subtle #334155 dividers to house the primary application hierarchy.