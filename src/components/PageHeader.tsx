interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="page-header">
      <div className="container">
        <h1 className="page-header-title">{title}</h1>
        <p className="page-header-subtitle">{subtitle}</p>
      </div>
    </section>
  );
};

export default PageHeader;
