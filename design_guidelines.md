# Windows Multi-Tool Website Design Guidelines

## Design Approach
**Design System Approach**: Material Design - Clean, technical aesthetic appropriate for a developer tool with strong visual hierarchy and clear interaction states.

## Core Design Elements

### Color Palette
- **Primary**: 220 85% 15% (Deep blue for trustworthy, technical feel)
- **Secondary**: 220 20% 25% (Muted blue-gray for supporting elements)
- **Success**: 140 70% 40% (Green for available download)
- **Disabled**: 0 0% 30% (Dark gray for unavailable downloads)
- **Background**: 220 15% 8% (Very dark blue-gray)
- **Surface**: 220 20% 12% (Slightly lighter dark surface)
- **Text Primary**: 0 0% 95% (Near white)
- **Text Secondary**: 0 0% 70% (Light gray)

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: 600 weight, clean geometric sans-serif
- **Body**: 400 weight for readability
- **Code/Technical**: JetBrains Mono for any technical references

### Layout System
**Tailwind Spacing**: Use units of 4, 8, 12, and 16 for consistent rhythm (p-4, m-8, gap-12, py-16)

### Component Library

#### Navigation
- Simple horizontal nav with logo and page links
- Subtle hover states with color transitions
- Mobile-responsive hamburger menu

#### Buttons
- **Primary (Windows Download)**: Solid blue background with white text
- **Disabled (Linux/Mac)**: Dark gray background, darker text, no hover effects
- Rounded corners (rounded-lg) for modern feel

#### Cards/Sections
- Dark surface backgrounds with subtle borders
- Generous padding for breathing room
- Soft shadows for depth

#### Layout Structure
- **Home Page**: Single viewport hero section with centered content, tool description, and navigation to download
- **Download Page**: Clean grid layout for download options, clear visual hierarchy showing available vs unavailable platforms

### Visual Treatment
- **Minimalist Approach**: Clean, uncluttered interface focusing on functionality
- **Technical Aesthetic**: Subtle grid patterns or code-inspired elements
- **Platform Icons**: Use recognizable Windows, Linux, and Mac platform icons
- **Status Indication**: Clear visual distinction between active and disabled download buttons

### Key Design Principles
1. **Clarity**: Immediately apparent which downloads are available
2. **Trust**: Professional appearance befitting a system tool
3. **Efficiency**: Quick navigation between pages, obvious action buttons
4. **Accessibility**: High contrast, clear disabled states, keyboard navigation

### Images
No large hero images required. Focus on clean typography and iconography. Include small platform icons (Windows, Linux, Mac logos) next to respective download buttons for immediate recognition.

This design emphasizes the technical, utility-focused nature of the tool while maintaining a modern, professional appearance that builds user confidence in downloading and using the software.