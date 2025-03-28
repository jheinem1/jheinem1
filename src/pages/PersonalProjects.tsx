import { useState } from "react";
import AnimatedContainer from "../components/AnimatedContainer";
import NavButton from "../components/NavButton";
import ExpandableTextBlock from "../components/ExpandableTextBlock";
import { FaGithub } from "react-icons/fa";

// Define LinkCard component
function LinkCard({
  icon,
  label,
  link,
  displayLink,
  children,
}: {
  icon?: React.ReactNode;
  label: string;
  link: string;
  displayLink: string;
  children?: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#333",
        borderRadius: "20px",
        padding: "1rem",
        margin: "1rem 0",
        transform: hovered ? "scale(1.03)" : "scale(1)",
        transition: "transform 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <span
        style={{ marginBottom: "0.5rem", color: "#fff", fontWeight: "bold" }}
      >
        {icon || <FaGithub />} {label}
      </span>
      {children && (
        <div style={{ color: "#fff", fontSize: "0.9rem", textAlign: "center" }}>
          {children}
        </div>
      )}
      <div
        style={{
          maxHeight: hovered ? "20px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.3s ease, margin-top 0.3s ease",
          marginTop: hovered ? "0.5rem" : "0",
          color: "#fff",
          fontSize: "0.8rem",
        }}
      >
        {displayLink}
      </div>
    </div>
  );
}

function PersonalProjects() {
  return (
    <AnimatedContainer>
      <h1>Notable Personal Projects</h1>
      <ExpandableTextBlock title="@rbxts/region">
        <LinkCard
          icon={<FaGithub />}
          label="View Repository"
          link="https://github.com/jheinem1/region"
          displayLink="github.com/jheinem1/region"
        >
          This is a neat API for{" "}
          <a
            href="https://github.com/roblox-ts/roblox-ts"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4ea6ff" }}
          >
            roblox-ts
          </a>
          , a TypeScript-to-Luau transpiler that allows for performant and easy
          detection of parts entering different shaped regions.
        </LinkCard>
      </ExpandableTextBlock>
      <ExpandableTextBlock title="@rbxts/markdown-ast">
        <LinkCard
          icon={<FaGithub />}
          label="View Repository"
          link="https://github.com/jheinem1/markdown-ast"
          displayLink="github.com/jheinem1/markdown-ast"
        >
          This package translates markdown syntax into an easily traversable AST
          (Abstract Syntax Tree) without relying on regex, making it highly
          extensible.
        </LinkCard>
      </ExpandableTextBlock>
      <ExpandableTextBlock title="Lua-Serializer">
        <LinkCard
          icon={<FaGithub />}
          label="View Repository"
          link="https://github.com/jheinem1/Lua-Serializer"
          displayLink="github.com/jheinem1/Lua-Serializer"
        >
          A Lua API that converts values back into Lua syntax for debugging and
          data visualization. Updates are pushed periodically to improve
          efficiency and accuracy.
        </LinkCard>
      </ExpandableTextBlock>
      <ExpandableTextBlock title="@rbxts/better-binding">
        <LinkCard
          icon={<FaGithub />}
          label="View Repository"
          link="https://github.com/jheinem1/better-binding"
          displayLink="github.com/jheinem1/better-binding"
        >
          An extension of Roact's bindings (equivalent to React's hooks) that
          allows for a more object-oriented approach to state management.
        </LinkCard>
      </ExpandableTextBlock>
      <ExpandableTextBlock title="Other">
        <LinkCard
          icon={<FaGithub />}
          label="View Repositories"
          link="https://github.com/jheinem1?tab=repositories"
          displayLink="github.com/jheinem1?tab=repositories"
        >
          I open sourced a few of the previous projects I worked on (though most
          people wouldn't find them particularly useful) such as Mojave and
          Shady_Sands.
        </LinkCard>
      </ExpandableTextBlock>
      <NavButton navigateTo="/">Back Home</NavButton>
    </AnimatedContainer>
  );
}

export default PersonalProjects;
