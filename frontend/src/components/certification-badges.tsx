import { Badge } from "@/components/ui/badge";

interface CertificationBadgesProps {
  certifications: string[];
}

export default function CertificationBadges({ certifications }: CertificationBadgesProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {certifications.map((cert) => (
        <Badge key={cert} variant="outline" className="border-dashed border-primary/40 text-xs">
          {cert}
        </Badge>
      ))}
    </div>
  );
}
