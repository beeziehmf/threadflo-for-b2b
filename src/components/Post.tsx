interface PostProps {
  author: string;
  avatar: string;
  time: string;
  content: string;
  tags: string[];
}

export default function Post({ author, avatar, time, content, tags }: PostProps) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={avatar} alt="avatar" width={32} height={32} style={{ borderRadius: '50%' }} />
        <div>
          <strong>{author}</strong>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{time}</div>
        </div>
      </div>
      <div>{content}</div>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag} className="tag">#{tag}</span>
        ))}
      </div>
    </div>
  );
}
