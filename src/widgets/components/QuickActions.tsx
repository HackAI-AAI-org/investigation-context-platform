'use client';

interface QuickActionsProps {
    isDark: boolean;
}

export default function QuickActions({
    isDark,
}: QuickActionsProps) {

    const actions = [
        {
            title: "View Timeline",
            description: "Open the investigation timeline.",
        },
        {
            title: "Evidence",
            description: "Review collected evidence.",
        },
        {
            title: "IOCs",
            description: "Inspect indicators of compromise.",
        },
        {
            title: "Generate Report",
            description: "Create an investigation report.",
        },
    ];

    return (
        <section
            style={{
                background: isDark ? "#1e293b" : "#ffffff",
                border: `1px solid ${isDark ? "#334155" : "#e5e7eb"}`,
                borderRadius: "12px",
                padding: "20px",
                boxShadow: isDark
                    ? "0 2px 8px rgba(0,0,0,0.35)"
                    : "0 2px 8px rgba(0,0,0,0.08)",
            }}
        >
            <h2
                style={{
                    marginTop: 0,
                    marginBottom: "20px",
                }}
            >
                Quick Actions
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: "16px",
                }}
            >
                {actions.map((action) => (
                    <button
                        key={action.title}
                        style={{
                            background: isDark ? "#0f172a" : "#f8fafc",
                            border: `1px solid ${
                                isDark ? "#334155" : "#d1d5db"
                            }`,
                            borderRadius: "10px",
                            padding: "18px",
                            cursor: "pointer",
                            textAlign: "left",
                            transition: "0.2s",
                        }}
                    >
                        <div
                            style={{
                                fontWeight: 700,
                                marginBottom: "8px",
                            }}
                        >
                            {action.title}
                        </div>

                        <div
                            style={{
                                fontSize: "14px",
                                color: isDark ? "#94a3b8" : "#64748b",
                                lineHeight: 1.5,
                            }}
                        >
                            {action.description}
                        </div>
                    </button>
                ))}
            </div>
        </section>
    );
}