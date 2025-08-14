import Post from './Post';

const posts = [
  {
    author: 'Jean Dupont',
    avatar: 'https://via.placeholder.com/32',
    time: 'il y a 3 heures',
    content:
      "Introduire et utiliser des outils IA a eu un plus d'engagement aujourd'hui.",
    tags: ['IA', 'tpa', 'tio']
  },
  {
    author: 'Jean Dupont',
    avatar: 'https://via.placeholder.com/32',
    time: 'il y a 3 heures',
    content:
      "5 commens cet des outils IA pour s'metier en éctatige productique.",
    tags: ['laststack', 'former']
  }
];

export default function Feed() {
  return (
    <main className="feed">
      <div className="posts">
        {posts.map((p, i) => (
          <Post key={i} {...p} />
        ))}
      </div>
    </main>
  );
}
