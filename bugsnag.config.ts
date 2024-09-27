import React from "react";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import BugsnagPerformance from "@bugsnag/browser-performance";

Bugsnag.start({
  apiKey: "1ce5528f878678349d31ad8161725273",
  plugins: [new BugsnagPluginReact()],
});

BugsnagPerformance.start({ apiKey: "1ce5528f878678349d31ad8161725273" });

const reactPlugin = Bugsnag.getPlugin("react");
export const BugSnagErrorBoundary = reactPlugin
  ? reactPlugin.createErrorBoundary(React)
  : React.Fragment;
