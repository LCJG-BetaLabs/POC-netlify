"use client";

import Head from "next/head";
import * as Sentry from "@sentry/nextjs";

import { BugSnagErrorBoundary } from "../../../bugsnag.config";
import Bugsnag from "@bugsnag/js";

export default function Page() {
  return (
    <BugSnagErrorBoundary>
      <div>
        <Head>
          <title>Sentry Onboarding</title>
          <meta
            name="description"
            content="Test Bugsnag for your Next.js app!"
          />
        </Head>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Get started by sending Bugsnag a sample error:</p>
          <button
            type="button"
            style={{
              padding: "12px",
              cursor: "pointer",
              backgroundColor: "#84a7ff",
              borderRadius: "4px",
              border: "none",
              color: "white",
              fontSize: "14px",
              margin: "18px",
            }}
            onClick={() => {
              Bugsnag.notify(new Error("Test error"));
            }}
          >
            Throw error with notify!
          </button>

          <button
            type="button"
            style={{
              padding: "12px",
              cursor: "pointer",
              backgroundColor: "#84a7ff",
              borderRadius: "4px",
              border: "none",
              color: "white",
              fontSize: "14px",
              margin: "18px",
            }}
            onClick={async () => {
              throw new Error("Bugsnag Test Error");
            }}
          >
            Throw error without notify!
          </button>
        </main>
      </div>
    </BugSnagErrorBoundary>
  );
}
