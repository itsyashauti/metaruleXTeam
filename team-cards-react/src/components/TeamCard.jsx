export default function TeamCard({ member }) {
  return (
    <article className={`card${member.highlight ? ' green' : ''}`}>
      <div className="card-top">
        <h2>{member.initial}</h2>
        <img className="teammate-img" src={member.image} alt={member.imageAlt} />
      </div>
      <h3>{member.name}</h3>
      <h4 className="designation">{member.designation}</h4>
      <p>{member.description}</p>
      <a
        className="linkedin-btn"
        href={member.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn Profile
      </a>
    </article>
  );
}
