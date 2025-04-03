// Unified Section component
export function Section({ children, title, bgColor = 'white' }) {
  return (
    <section className={`section section--${bgColor}`}>
      <div className="container">
        <h2 className="section__title">
          {title}
          <span className="section__title-line"></span>
        </h2>
        {children}
      </div>
    </section>
  );
}

// Unified Card component for various card types
export function Card({ title, content, className = 'card' }) {
  return (
    <div className={className}>
      <h4 className={`${className}__title`}>{title}</h4>
      <p className={`${className}__content`}>{content}</p>
    </div>
  );
}
