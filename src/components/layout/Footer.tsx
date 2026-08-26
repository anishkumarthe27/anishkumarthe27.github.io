import { Container } from '@/components/layout/Container';
import { NavigationList } from '@/components/layout/NavigationList';
import { profile } from '@/data/profile';
import { site } from '@/data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-raised">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-start sm:justify-between">
        <p className="text-sm text-muted">
          © {year.toString()} {profile.name}
        </p>
        <nav aria-label="Footer">
          <NavigationList items={site.navigation} layout="footer" />
        </nav>
      </Container>
    </footer>
  );
}
