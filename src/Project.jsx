function Project({name = "Default", description = "Default description", image = "https://via.placeholder.com/300x200", alt = "Default alt text"}) {
  return (
    <div className="projects">
      <h1>{name}</h1>
      <div className="project-content">
        <div className="project-description">
          <p>
            {description}
          </p>
        </div>
        <div className="project-image">
          <img
            src={image}
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;