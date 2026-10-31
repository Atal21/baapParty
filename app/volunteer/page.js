import PageHeader from '@/components/PageHeader';
import VolunteerSection from '@/components/VolunteerSection';

export const metadata = {
  title: "Volunteer — Bharatiya Avijit Aawaz Party",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHeader eyebrow="Get Involved" title="Volunteer Signup Form" crumb="Volunteer Form" />

      <VolunteerSection />
    </>
  );
}
