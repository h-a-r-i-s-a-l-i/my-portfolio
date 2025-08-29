import TypingEffect from "./Effect.jsx";
function HeroStatement() {
  return (
    <div className="hero-statement">
      <TypingEffect 
        text="This is where I build." 
        speed={100} 
        words={["build", "innovate", "create", "manufacture", "construct", "produce"]} 
      />
    </div>
  );
}

export default HeroStatement;
