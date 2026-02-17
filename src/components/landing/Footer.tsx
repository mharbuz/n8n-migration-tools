const Footer = () => (
  <footer className="py-12 border-t">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          <span className="text-gradient">Migrate</span>Flow
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} MigrateFlow. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
