import { Afacad } from "next/font/google";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";

const afacad = Afacad({
  subsets: ["latin"],
});

export default function Experience() {
  const experiences = [
    {
      role: "Scholarship Mentor Even Semester 2024/2025",
      company: "BINUS University",
      type: "Seasonal",
      period: "Feb 2025 - Present · 4 mos",
      location: "Hybrid",
      description:
        "As a mentor, I support fellow university students in mastering database technology by providing guidance on database design, normalization, SQL queries, and other related subjects. I facilitate learning sessions and provide resources to help students develop their skills in database management.",
      skills: ["Public Speaking", "Teaching"],
      logo: "/binus-logo.png",
      logoAlt: "BINUS University logo",
    },
    {
      role: "Social Media Manager",
      company: "Sunsetter",
      type: "Self-employed",
      period: "Jan 2023 - Present · 2 yrs 5 mos",
      location: "Tangerang, Banten, Indonesia · Remote",
      description:
        "Running the social media and managing orders of an online shop as well as interacting with customers, providing an enjoyable shopping experience.",
      skills: ["Sales", "Customer Satisfaction"],
      logo: "/sunsetter-logo.png",
      logoAlt: "Sunsetter logo",
      additionalInfo: {
        title: "KOREAN MEN'S APPAREL (@sunsetter_)",
        description: "Instagram photos and videos",
        subtitle: "Social Media of Sunsetter",
      },
    },
    {
      role: "Activist",
      company: "Cyber Security Community",
      type: "Seasonal",
      period: "Feb 2024 - Feb 2025 · 1 yr 1 mo",
      location: "Hybrid",
      description:
        "In my role as an activist within the Cyber Security Community, I contribute to the Human Capital Division, where I focus on optimizing the quality of our talent pool. I have been actively involved in multiple initiatives to enhance the skills and knowledge of community members in the field of cybersecurity.",
      skills: ["Public Relations", "Human Resources (HR)"],
      logo: "/cybersec-logo.png",
      logoAlt: "Cyber Security Community logo",
    },
    {
      role: "Member",
      company: "Google Developer Student Club ITB",
      type: "Apprenticeship",
      period: "Aug 2023 - Aug 2024 · 1 yr 1 mo",
      description: "",
      skills: [],
      logo: "/gdsc-logo.png",
      logoAlt: "Google Developer Student Club logo",
    },
  ];

  return (
    <div className={`p-8 pb-20 sm:p-20 font-[500] ${afacad.className}`}>
      <h1 className="text-4xl font-[600] mb-12 text-center">
        My <span className="text-purple-500">Experience</span>
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="overflow-hidden border-l-4 border-l-purple-500"
          >
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center overflow-hidden">
                {/* Replace with actual logo or fallback to icon */}
                <Briefcase className="h-6 w-6 text-purple-500" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl">{exp.role}</CardTitle>
                <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1">
                  <span className="font-medium">{exp.company}</span>
                  {exp.type && (
                    <>
                      <span className="hidden sm:inline">•</span>
                      <span>{exp.type}</span>
                    </>
                  )}
                </CardDescription>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-gray-500 mt-1">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent className="pb-4">
              {exp.description && <p className="mb-4">{exp.description}</p>}

              {exp.additionalInfo && (
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-md mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <ExternalLink className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="font-medium">{exp.additionalInfo.title}</p>
                    <p className="text-sm text-gray-500">
                      {exp.additionalInfo.description}
                    </p>
                    <p className="text-sm text-gray-600">
                      {exp.additionalInfo.subtitle}
                    </p>
                  </div>
                </div>
              )}

              {exp.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="outline" className="bg-purple-50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
