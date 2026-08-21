import {
  BarChart3,
  Bike,
  Boxes,
  Check,
  ChefHat,
  Clock,
  CreditCard,
  Database,
  DollarSign,
  Headphones,
  Heart,
  LayoutDashboard,
  MapPin,
  Menu,
  MessageSquare,
  Navigation,
  QrCode,
  Settings,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  TrendingDown,
  TrendingUp,
  Truck,
  Users,
  UtensilsCrossed,
  Zap
} from 'lucide-react'

/**
 * Explicit icon registry.
 *
 * Pages used to do `import * as Icons from 'lucide-react'` and index into it
 * with a name from the data files. That defeats tree-shaking and pulled the
 * entire icon library (~760kB) into the bundle. Registering only the icons the
 * data actually references keeps the same data-driven API at a fraction of the
 * cost — add a name here when you add one to a data file.
 */
const REGISTRY = {
  BarChart3,
  Bike,
  Boxes,
  Check,
  ChefHat,
  Clock,
  CreditCard,
  Database,
  DollarSign,
  Headphones,
  Heart,
  LayoutDashboard,
  MapPin,
  Menu,
  MessageSquare,
  Navigation,
  QrCode,
  Settings,
  Shield,
  ShoppingBag,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Store,
  TrendingDown,
  TrendingUp,
  Truck,
  Users,
  UtensilsCrossed,
  Zap
}

/** Renders a registered icon by name; falls back to Sparkles if unknown. */
const Icon = ({ name, className = '', ...rest }) => {
  const Component = REGISTRY[name] || Sparkles
  return <Component className={className} {...rest} />
}

export const getIcon = (name) => REGISTRY[name] || Sparkles

export default Icon
