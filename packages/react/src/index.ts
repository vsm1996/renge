// packages/react/src/index.ts

// Provider & hooks
export { RengeProvider, useRenge, useRengeTheme } from './provider';
export type { RengeProviderProps } from './provider';

// Components
export {
  Stack,
  Grid,
  Text,
  Heading,
  Card,
  Button,
  Divider,
  Section,
  // Atoms
  Badge,
  Avatar,
  Spinner,
  Progress,
  Input,
  Chip,
  // Molecules
  Alert,
  FormField,
  Stat,
  // Organisms
  Navbar,
} from './components';
export type {
  BadgeProps, BadgeVariant, BadgeSize,
  AvatarProps, AvatarSize, AvatarShape,
  SpinnerProps, SpinnerSize, SpinnerColor,
  ProgressProps, ProgressColor, ProgressSize,
  InputProps, InputSize, InputState,
  ChipProps, ChipVariant,
  AlertProps, AlertStatus,
  FormFieldProps,
  StatProps, TrendDirection,
  NavbarProps,
} from './components';

// Re-export tokens for convenience
export { createRengeTheme, PHI, FIBONACCI, GOLDEN_ANGLE, ANIMATION_NAMES } from '@renge/tokens';
export type { RengeThemeConfig, RengeTheme, ProfileName, AnimationName } from '@renge/tokens';