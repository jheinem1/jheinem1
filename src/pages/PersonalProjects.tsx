import { useState } from "react";
import AnimatedContainer from "../components/AnimatedContainer";
import NavButton from "../components/NavButton";

function PersonalProjects() {
  const [openRegion, setOpenRegion] = useState(false);
  const [openMarkdownAst, setOpenMarkdownAst] = useState(false);
  const [openLuaSerializer, setOpenLuaSerializer] = useState(false);

  return (
    <AnimatedContainer>
      <h1>Notable Personal Projects</h1>
      <div>
        <h2
          onClick={() => setOpenRegion(!openRegion)}
          style={{ cursor: "pointer" }}
        >
          @rbxts/region
        </h2>
        {openRegion && (
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
        )}
      </div>
      <div>
        <h2
          onClick={() => setOpenMarkdownAst(!openMarkdownAst)}
          style={{ cursor: "pointer" }}
        >
          @rbxts/markdown-ast
        </h2>
        {openMarkdownAst && (
          <p>
            This package translates markdown syntax into an easily traversable
            AST (Abstract Syntax Tree) without relying on regex, making it
            highly extensible.
          </p>
        )}
      </div>
      <div>
        <h2
          onClick={() => setOpenLuaSerializer(!openLuaSerializer)}
          style={{ cursor: "pointer" }}
        >
          Lua-Serializer
        </h2>
        {openLuaSerializer && (
          <p>
            A Lua API that converts values back into Lua syntax for debugging
            and data visualization. Updates are pushed periodically to improve
            efficiency and accuracy.
          </p>
        )}
      </div>
      <NavButton navigateTo="/">Back Home</NavButton>
    </AnimatedContainer>
  );
}

export default PersonalProjects;
