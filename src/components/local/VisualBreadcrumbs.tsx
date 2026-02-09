import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface VisualBreadcrumbsProps {
  items: BreadcrumbItem[];
  showHomeIcon?: boolean;
}

export function VisualBreadcrumbs({ items, showHomeIcon = true }: VisualBreadcrumbsProps) {
  return (
    <nav aria-label="Fil d'Ariane" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground mx-2" />}
            {item.href ? (
              <Link 
                to={item.href} 
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                {index === 0 && showHomeIcon && <Home className="w-4 h-4" />}
                {item.label}
              </Link>
            ) : (
              <span className="text-primary font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
