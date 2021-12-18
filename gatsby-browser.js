import { AnimatePresence } from "framer-motion";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
  useMatches,
  KBarResults,
} from "kbar";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const searchStyle = {
  padding: "17px 16px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  border: "none",
  background: "var(--color-basePrimary)",
  color: "var(--color-headline)",
};

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  background: "var(--color-basePrimary)",
  color: "var(--color-headline)",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0px 10px 40px -10px rgb(0, 0, 0, 0.3)",
};

const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "10px",
  textTransform: "uppercase",
  opacity: 0.5,
};

const actions = [
  {
    id: "home",
    name: "Home",
    shortcut: ["h"],
    keywords: "home",
    perform: () => (window.location.pathname = "/"),
  },
  {
    id: "meet-brian",
    name: "Meet Brian",
    shortcut: ["m"],
    keywords: "about brian",
    perform: () => (window.location.pathname = "meet-brian"),
  },
  {
    id: "work",
    name: "Work",
    shortcut: ["w"],
    keywords: "view works",
    perform: () => (window.location.pathname = "work"),
  },
  {
    id: "case-study",
    name: "Case Study",
    shortcut: ["c"],
    keywords: "case study",
    perform: () => (window.location.pathname = "casestudy"),
  },
];

export const wrapPageElement = ({ element }) => (
  <ParallaxProvider>
    <AnimatePresence initial={false} exitBeforeEnter>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner>
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
          background: active ? "var(--color-whiteToSable)" : "transparent",
          borderLeft: `2px solid ${
            active ? "var(--color_textTitle)" : "transparent"
          }`,
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
