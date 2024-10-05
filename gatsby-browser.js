import "./src/styles/global.css";

import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarResults,
  KBarSearch,
  useMatches,
} from "kbar";

import { AnimatePresence } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import React from "react";

const searchStyle = {
  padding: "17px 16px",
  fontSize: "16px",
  width: "auto",
  boxSizing: "border-box",
  outline: "none",
  border: "none",
  background: "var(--clr-card)",
  color: "var(--color-headline)",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  // background: "var(--color-basePrimary)",
  background: "var(--clr-card)",
  color: "var(--clr-body)",
  fontWeight: "500",
  borderRadius: "8px",
  overflow: "hidden",
  // boxShadow: "0px 10px 40px -10px rgb(0, 0, 0, 0.3)",
  boxShadow: "var(--shadow-md)",
};

const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "10px",
  textTransform: "uppercase",
  opacity: 1,
  width: "auto",
  fontWeight: "600",
  letterSpacing: ".5px",
  color: "var(--clr-subline)",
};

const actions = [
  {
    id: "showwcase-profile",
    name: "Showwcase Profile",
    shortcut: ["s"],
    keywords: "showwcase-profile",
    perform: () => (window.location = "https://profile.bmediax.dev"),
  },
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "home",
    perform: () => (window.location.pathname = "/"),
    section: "Pages",
  },
  {
    id: "meet-brian",
    name: "Meet Brian",
    shortcut: ["m"],
    keywords: "about brian",
    perform: () => (window.location.pathname = "meet-brian"),
    section: "Pages",
  },
  {
    id: "case-study",
    name: "Case Study",
    shortcut: ["c"],
    keywords: "case study",
    perform: () => (window.location.pathname = "casestudy"),
    section: "Pages",
  },
  {
    id: "work",
    name: "Work",
    shortcut: ["w"],
    keywords: "view works",
    section: "Pages",
    perform: () => (window.location.pathname = "work"),
  },
  {
    id: "github",
    name: "Github",
    shortcut: ["g"],
    keywords: "github",
    icon: "🦑",
    perform: () => (window.location = "https://github.com/bmediax"),
    section: "Social Media",
  },
  {
    id: "instagram",
    name: "Instagram",
    shortcut: ["I"],
    keywords: "instagram",
    icon: "📸",
    perform: () => (window.location = "https://instagram.com/bmediax"),
    section: "Social Media",
  },
  {
    id: "twitter",
    name: "Twitter",
    shortcut: ["T"],
    keywords: "twitter",
    icon: "🐤",
    perform: () => (window.location = "https://twitter.com/bm3diax"),
    section: "Social Media",
  },
];

export const wrapPageElement = ({ element }) => (
  <ParallaxProvider>
    <AnimatePresence initial={false} mode="wait">
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner
            style={{
              width: "auto",
            }}
          >
            <KBarAnimator style={animatorStyle}>
              <KBarSearch style={searchStyle} />
              <RenderResults />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {element}
      </KBarProvider>
    </AnimatePresence>
  </ParallaxProvider>
);

function RenderResults() {
  const { results, rootActionId } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ResultItem
            action={item}
            active={active}
            currentRootActionId={rootActionId}
          />
          // <div
          //   style={{
          //     background: active ? "#eee" : "transparent",
          //   }}
          // >
          //   {item.name}
          // </div>
        )
      }
    />
  );
}

const ResultItem = React.forwardRef(
  ({ action, active, currentRootActionId }, ref) => {
    const ancestors = React.useMemo(() => {
      if (!currentRootActionId) return action.ancestors;
      const index = action.ancestors.findIndex(
        (ancestor) => ancestor.id === currentRootActionId
      );
      // +1 removes the currentRootAction; e.g.
      // if we are on the "Set theme" parent action,
      // the UI should not display "Set theme… > Dark"
      // but rather just "Dark"
      return action.ancestors.slice(index + 1);
    }, [action.ancestors, currentRootActionId]);

    return (
      <div
        ref={ref}
        style={{
          padding: "12px 16px",
          background: active ? "var(--clr-card-hover)" : "transparent",
          borderLeft: `3px solid ${
            active ? "var(--clr-primary)" : "transparent"
          }`,
          color: active ? "var(--clr-headline)" : "var(--color-body)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            fontSize: 14,
          }}
        >
          {action.icon && action.icon}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              {ancestors.length > 0 &&
                ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor.id}>
                    <span
                      style={{
                        opacity: 0.5,
                        marginRight: 8,
                      }}
                    >
                      {ancestor.name}
                    </span>
                    <span
                      style={{
                        marginRight: 8,
                      }}
                    >
                      &rsaquo;
                    </span>
                  </React.Fragment>
                ))}
              <span>{action.name}</span>
            </div>
            {action.subtitle && (
              <span style={{ fontSize: 12 }}>{action.subtitle}</span>
            )}
          </div>
        </div>
        {action.shortcut?.length ? (
          <div
            aria-hidden
            style={{ display: "grid", gridAutoFlow: "column", gap: "4px" }}
          >
            {action.shortcut.map((sc) => (
              <kbd
                key={sc}
                style={{
                  padding: "4px 6px",
                  background: "rgba(0 0 0 / .1)",
                  borderRadius: "4px",
                  fontSize: 14,
                }}
              >
                {sc}
              </kbd>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
);
