import AnimatedContainer from "../components/AnimatedContainer";
import NavButton from "../components/NavButton";
import ExpandableTextBlock from "../components/ExpandableTextBlock";

function PersonalProjects() {
  return (
    <AnimatedContainer>
      <h1>Notable Personal Projects</h1>
      <ExpandableTextBlock title="@rbxts/region">
        <p>
          This is a neat API for{" "}
          <a href="https://github.com/roblox-ts/roblox-ts">roblox-ts</a>, a
          TypeScript-to-Luau transpiler that allows for performant and easy
          detection of parts entering different shaped regions. See an example{" "}
          <a
            href="https://roblox-ts.com/playground/#code/..."
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
      </ExpandableTextBlock>
      <ExpandableTextBlock title="@rbxts/markdown-ast">
        <p>
          This package translates markdown syntax into an easily traversable AST
          (Abstract Syntax Tree) without relying on regex, making it highly
          extensible.
        </p>
      </ExpandableTextBlock>
      <ExpandableTextBlock title="Lua-Serializer">
        <p>
          A Lua API that converts values back into Lua syntax for debugging and
          data visualization. Updates are pushed periodically to improve
          efficiency and accuracy.
        </p>
      </ExpandableTextBlock>
      <NavButton navigateTo="/">Back Home</NavButton>
    </AnimatedContainer>
  );
}

export default PersonalProjects;
