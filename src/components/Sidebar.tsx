const navItems = [
  'Créer un post',
  'Planifier une campagne',
  'Analyser les performances'
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        {navItems.map((item) => (
          <div key={item} className="nav-item">
            {item}
          </div>
        ))}
      </nav>
      <div style={{ marginTop: 'auto' }}>
        <p>Calendrier</p>
        <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
          12:00 - Planifier un post
        </div>
      </div>
    </aside>
  );
}
