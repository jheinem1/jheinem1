import { FaGithub } from "react-icons/fa";
import AnimatedContainer from "../components/AnimatedContainer";
import ExpandableTextBlock from "../components/ExpandableTextBlock";
import NavButton from "../components/NavButton";
import LinkCard from "../components/LinkCard";

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
