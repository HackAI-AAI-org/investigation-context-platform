'use client';

interface Investigation {
    id: string;
    title: string;
    status: string;
    priority: string;
    owner: string;
    lastUpdated: string;
}

interface InvestigationSummaryProps {
    investigation: Investigation;
    isDark: boolean;
}

export default function InvestigationSummary({
    investigation,
    isDark,
}: InvestigationSummaryProps) {

    const labelStyle: React.CSSProperties = {
        fontWeight: 600,
        width: "130px",
        display: "inline-block",
    };

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
                Investigation Summary
            </h2>

            <p>
                <span style={labelStyle}>Case</span>
                {investigation.title}
            </p>

            <p>
                <span style={labelStyle}>Investigation ID</span>
                {investigation.id}
            </p>

            <p>
                <span style={labelStyle}>Owner</span>
                {investigation.owner}
            </p>

            <p>
                <span style={labelStyle}>Priority</span>
                {investigation.priority}
            </p>

            <p>
                <span style={labelStyle}>Status</span>
                {investigation.status}
            </p>

            <p>
                <span style={labelStyle}>Last Updated</span>
                {investigation.lastUpdated}
            </p>
        </section>
    );
}