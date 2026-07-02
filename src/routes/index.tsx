import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NUVO MAXX | Freight, Logistics & Cement Distribution in Ghana" },
      {
        name: "description",
        content:
          "NUVO MAXX is a registered Ghanaian freight forwarding, logistics, and cement distribution company based in Tema. Project management, consultancy, and business development across Ghana.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/nuvomaxx/index.html");
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      Loading NUVO MAXX…
    </div>
  );
}
