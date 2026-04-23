import React from "react";

// ── Design tokens ─────────────────────────────────────────────────────────────
const theme = {
  bgVoid:          "#03060A",
  surface:         "#272830",
  card:            "#25282e",
  cardStroke:      "rgba(59,59,59,0.8)",
  glassOverlay:    "rgba(203,215,227,0.1)",
  gold:            "#FFE49E",
  goldDark:        "#DEC89B",
  goldBtnFrom:     "#F3F3F3",
  goldBtnTo:       "#EACB7B",
  textTitle:       "#DEE1E8",
  textMuted:       "#8590A2",
  textPlaceholder: "#86898E",
  tfBg:            "rgba(255,255,255,0.04)",
  tfStroke:        "rgba(255,255,255,0.15)",
  error:           "#FF6357",
  success:         "#4ADE80",
};

const goldGradient  = `linear-gradient(170deg, ${theme.goldBtnFrom} 16%, ${theme.goldBtnTo} 83%)`;
const logoGradient  = "linear-gradient(156deg, #fff5e1 19%, #EAC87B 86%)";
const navGradient   = "linear-gradient(180deg, #1a1c24 0%, #12141a 100%)";

// Accent colors per badge variant
const accentColor: Record<BadgeVariant, string> = {
  up:      theme.success,
  down:    theme.error,
  neutral: theme.gold,
};

const NAV_ITEMS = [
  "仪表盘","支付管理","用户管理","报表管理","产品管理",
  "推广管理","运营管理","个人管理","系统管理","电销管理",
];

// ── Global styles ─────────────────────────────────────────────────────────────
const globalStyles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmer {
    0%   { opacity: 0.6; }
    50%  { opacity: 1; }
    100% { opacity: 0.6; }
  }
`;

// ── Types ─────────────────────────────────────────────────────────────────────
type BadgeVariant = "up" | "down" | "neutral";

// ── Badge ─────────────────────────────────────────────────────────────────────
function Badge({ text, variant }: { text: string; variant: BadgeVariant }) {
  const arrow = variant === "up" ? "▲ " : variant === "down" ? "▼ " : "";
  const colors: Record<BadgeVariant, React.CSSProperties> = {
    up:      { background: "rgba(74,222,128,0.10)",  color: theme.success, border: "0.5px solid rgba(74,222,128,0.25)" },
    down:    { background: "rgba(255,99,87,0.10)",   color: theme.error,   border: "0.5px solid rgba(255,99,87,0.25)" },
    neutral: { background: "rgba(255,228,158,0.10)", color: theme.gold,    border: "0.5px solid rgba(255,228,158,0.25)" },
  };
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: "2px 7px", borderRadius: 4,
      fontSize: 10, fontWeight: 600, letterSpacing: "0.02em",
      whiteSpace: "nowrap",
      ...colors[variant],
    }}>
      {arrow}{text}
    </span>
  );
}

// ── MetaItem ──────────────────────────────────────────────────────────────────
function MetaItem({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10 }}>
      <span style={{ color: theme.textMuted }}>{label}</span>
      <span style={{ color: valueColor ?? theme.goldDark, fontWeight: 600 }}>{value}</span>
    </span>
  );
}

function Divider() {
  return <span style={{ width: 1, height: 11, background: "rgba(255,255,255,0.1)", flexShrink: 0 }} />;
}

// ── KPI Card ─────────────────────────────────────────────────────────────────
interface KpiCardProps {
  icon: string;
  label: string;
  badge: string;
  badgeVariant: BadgeVariant;
  value: string;
  valueSize?: number;
  valueColor?: string;
  footer: React.ReactNode;
  topRight?: React.ReactNode;
  animDelay?: string;
}

function KpiCard({
  icon, label, badge, badgeVariant, value, valueSize = 24,
  valueColor, footer, topRight, animDelay = "0s",
}: KpiCardProps) {
  const accent = accentColor[badgeVariant];
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: "rgba(37,40,46,0.95)",
        border: `0.5px solid ${hovered ? "rgba(255,228,158,0.25)" : "rgba(59,59,59,0.8)"}`,
        borderRadius: 12,
        padding: "15px 18px 14px 20px",
        overflow: "hidden",
        minHeight: 120,
        flex: 1,
        animation: `fadeInUp 0.35s ease ${animDelay} both`,
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: hovered
          ? "0 4px 24px rgba(255,228,158,0.06), 0 1px 4px rgba(0,0,0,0.4)"
          : "0 1px 4px rgba(0,0,0,0.3)",
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position: "absolute", left: 0, top: 12, bottom: 12,
        width: 3, borderRadius: "0 3px 3px 0",
        background: accent,
        opacity: hovered ? 0.9 : 0.55,
        transition: "opacity 0.2s",
      }} />

      {/* Corner glow */}
      <div style={{
        position: "absolute", top: 0, right: 0, width: 100, height: 100,
        background: `radial-gradient(circle at top right, ${accent}0D, transparent 65%)`,
        pointerEvents: "none",
      }} />

      {/* Decorative circles */}
      <div style={{ position: "absolute", bottom: -12, right: -12, width: 88, height: 88,
        opacity: 0.04, borderRadius: "50%", border: "22px solid #fff", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 22, right: 38, width: 48, height: 48,
        opacity: 0.03, borderRadius: "50%", border: "13px solid #fff", pointerEvents: "none" }} />

      {/* Optional top-right secondary stat */}
      {topRight && (
        <div style={{ position: "absolute", top: 15, right: 18, textAlign: "right" }}>
          {topRight}
        </div>
      )}

      {/* Header: icon + label + badge */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 24, height: 24, borderRadius: 6,
            background: logoGradient,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, flexShrink: 0,
            boxShadow: "0 2px 6px rgba(234,200,123,0.2)",
          }}>
            {icon}
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: theme.textTitle }}>{label}</span>
        </div>
        <Badge text={badge} variant={badgeVariant} />
      </div>

      {/* Main value */}
      <div style={{
        fontFamily: "'Roboto Mono','Roboto',monospace",
        fontSize: valueSize, fontWeight: 700,
        color: valueColor ?? theme.textTitle,
        letterSpacing: -0.5, lineHeight: 1,
        marginBottom: 10, paddingLeft: 32,
      }}>
        {value}
      </div>

      {/* Footer metrics */}
      <div style={{ paddingLeft: 32 }}>
        {footer}
      </div>
    </div>
  );
}

// ── Nav pill ──────────────────────────────────────────────────────────────────
function NavPill({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 6,
      padding: "5px 11px",
      border: `0.5px solid ${theme.tfStroke}`,
      borderRadius: 20, background: theme.tfBg,
      fontSize: 12, color: theme.textTitle, cursor: "pointer",
      whiteSpace: "nowrap",
    }}>
      {children}
    </div>
  );
}

// ── Filter select ─────────────────────────────────────────────────────────────
function FilterSelect({ children, minWidth = 120 }: { children: React.ReactNode; minWidth?: number }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 6,
      padding: "5px 10px",
      background: theme.tfBg,
      border: `0.5px solid ${theme.tfStroke}`,
      borderRadius: 6, fontSize: 12, color: theme.textTitle,
      cursor: "pointer", minWidth,
    }}>
      {children}
      <span style={{ marginLeft: "auto", opacity: 0.4, fontSize: 9 }}>▾</span>
    </div>
  );
}

// ── Section title ─────────────────────────────────────────────────────────────
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 3, height: 16, borderRadius: 2, background: theme.gold, flexShrink: 0 }} />
      <span style={{
        fontFamily: "'Roboto', sans-serif", fontSize: 14, fontWeight: 700,
        color: theme.textTitle, letterSpacing: "0.1px",
      }}>
        {children}
      </span>
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function Dashboard() {
  return (
    <>
      <style>{globalStyles}</style>
      <div style={{
        fontFamily: "'PingFang SC','PingFang HK',-apple-system,'Noto Sans SC',sans-serif",
        background: theme.bgVoid,
        color: theme.textTitle,
        minHeight: "100vh",
        width: 1280,
        position: "relative",
      }}>

        {/* Page-level radial ambient glow */}
        <div style={{
          position: "fixed", top: 0, left: "50%", transform: "translateX(-50%)",
          width: 800, height: 300, pointerEvents: "none", zIndex: 0,
          background: "radial-gradient(ellipse at top, rgba(255,228,158,0.04) 0%, transparent 70%)",
        }} />

        {/* ── TOP NAV ───────────────────────────────────────────────────────── */}
        <nav style={{
          background: navGradient,
          borderBottom: `0.5px solid rgba(59,59,59,0.8)`,
          height: 52, display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "0 20px",
          position: "sticky", top: 0, zIndex: 100,
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8,
              fontFamily: "'Roboto', sans-serif", fontWeight: 700,
              fontSize: 15, color: theme.gold, letterSpacing: "0.02em",
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 7,
                background: logoGradient,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
                boxShadow: "0 2px 8px rgba(234,200,123,0.3)",
              }}>⚔</div>
              现金系统
            </div>
          </div>

          {/* Nav tabs */}
          <div style={{
            display: "flex", alignItems: "stretch", gap: 0,
            flex: 1, margin: "0 24px", height: "100%", overflow: "hidden",
          }}>
            {NAV_ITEMS.map(item => {
              const active = item === "仪表盘";
              return (
                <div key={item} style={{
                  display: "flex", alignItems: "center",
                  padding: "0 13px", fontSize: 13, fontWeight: active ? 600 : 500,
                  color: active ? "#ffffff" : "rgba(222,225,232,0.55)",
                  cursor: "pointer", position: "relative", whiteSpace: "nowrap",
                  borderBottom: active ? `2px solid ${theme.gold}` : "2px solid transparent",
                  transition: "color 0.15s",
                }}>
                  {active && (
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(180deg, rgba(255,228,158,0.07) 0%, transparent 100%)",
                      borderRadius: "0 0 0 0",
                    }} />
                  )}
                  {item}
                </div>
              );
            })}
            <div style={{
              display: "flex", alignItems: "center",
              padding: "0 12px", fontSize: 13, color: theme.textMuted, cursor: "pointer",
            }}>···</div>
          </div>

          {/* Right controls */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 5,
              fontSize: 11, color: theme.textMuted,
              background: "rgba(255,255,255,0.03)", border: "0.5px solid rgba(255,255,255,0.08)",
              borderRadius: 6, padding: "3px 8px",
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: "50%",
                background: theme.success, flexShrink: 0,
                boxShadow: `0 0 6px ${theme.success}`,
                animation: "shimmer 2.5s ease infinite",
              }} />
              <span style={{ color: theme.goldDark, fontWeight: 600 }}>2330</span>
              <span>在线</span>
            </div>
            <NavPill>
              🌐 中文
              <span style={{ opacity: 0.4, fontSize: 9 }}>▾</span>
            </NavPill>
            <NavPill>
              <span style={{
                width: 22, height: 22, borderRadius: "50%",
                background: "linear-gradient(135deg, #3a3d48, #252830)",
                border: `1px solid ${theme.tfStroke}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, flexShrink: 0,
              }}>超</span>
              超管 · elencompany06
              <span style={{ opacity: 0.4, fontSize: 9 }}>▾</span>
            </NavPill>
            <div style={{
              width: 30, height: 30, borderRadius: 8,
              background: logoGradient,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 14, cursor: "pointer",
              boxShadow: "0 2px 8px rgba(234,200,123,0.2)",
            }}>⚙</div>
          </div>
        </nav>

        {/* ── SUB NAV ───────────────────────────────────────────────────────── */}
        <div style={{
          background: "rgba(14,16,20,0.97)",
          borderBottom: `0.5px solid rgba(59,59,59,0.8)`,
          height: 36, display: "flex", alignItems: "center",
          padding: "0 20px", gap: 4,
        }}>
          <div style={{
            padding: "4px 14px", fontSize: 12, fontWeight: 600,
            color: theme.gold, borderRadius: 5, cursor: "pointer",
            display: "flex", alignItems: "center", gap: 6,
            background: "rgba(255,228,158,0.06)",
            border: `0.5px solid rgba(255,228,158,0.2)`,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: theme.gold,
              boxShadow: `0 0 5px ${theme.gold}` }} />
            仪表盘
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 1 }}>

          {/* ── PAGE TITLE ──────────────────────────────────────────────────── */}
          <div style={{ padding: "16px 20px 0", display: "flex", alignItems: "center", gap: 10 }}>
            <SectionTitle>仪表盘</SectionTitle>
            <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.1)" }} />
            <span style={{ fontSize: 11, color: theme.textMuted }}>今日即时数据</span>
          </div>

          {/* ── FILTER BAR ──────────────────────────────────────────────────── */}
          <div style={{
            padding: "10px 20px 0",
            display: "flex", alignItems: "center", gap: 8,
            flexWrap: "wrap",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 11, color: theme.textMuted, whiteSpace: "nowrap" }}>公司</span>
              <FilterSelect minWidth={140}>Company88</FilterSelect>
            </div>

            <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.08)", margin: "0 2px" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 11, color: theme.textMuted, whiteSpace: "nowrap" }}>内部账号类型</span>
              <FilterSelect minWidth={110}>
                <span style={{ color: theme.textPlaceholder }}>请选择</span>
              </FilterSelect>
            </div>
          </div>

          {/* ── MAIN CONTENT ────────────────────────────────────────────────── */}
          <div style={{ padding: "16px 20px 28px" }}>

            {/* Section header row */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <SectionTitle>今日即时焦点</SectionTitle>

              {/* CNY pill */}
              <div style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "3px 10px",
                background: theme.tfBg,
                border: `0.5px solid ${theme.tfStroke}`,
                borderRadius: 20,
                fontSize: 11, color: theme.goldDark, fontWeight: 600,
              }}>
                ¥ CNY <span style={{ opacity: 0.4, fontSize: 9 }}>▾</span>
              </div>

              {/* Action buttons */}
              <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
                <button style={{
                  padding: "5px 16px", borderRadius: 6, fontSize: 11, fontWeight: 700,
                  cursor: "pointer", border: "none",
                  background: goldGradient, color: "#5a4820",
                  boxShadow: "0 2px 8px rgba(234,200,123,0.25)",
                  letterSpacing: "0.02em",
                }}>查询</button>
                <button style={{
                  padding: "5px 16px", borderRadius: 6, fontSize: 11, fontWeight: 600,
                  cursor: "pointer",
                  background: "#1e2026",
                  border: `0.5px solid rgba(255,255,255,0.15)`,
                  color: theme.textMuted,
                  letterSpacing: "0.02em",
                }}>重置</button>
              </div>
            </div>

            {/* ── Row 1 ── */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 10 }}>

              <KpiCard
                animDelay="0.05s"
                icon="👤" label="今日新增" badge="+123.11%" badgeVariant="up"
                value="8,445" valueSize={28}
                footer={
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <MetaItem label="会员" value="8,433人" />
                    <Divider />
                    <MetaItem label="代理" value="12人" />
                  </div>
                }
              />

              <KpiCard
                animDelay="0.10s"
                icon="👥" label="会员总数" badge="205.9120" badgeVariant="neutral"
                value="542,374" valueSize={22}
                footer={
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <MetaItem label="代理总数" value="12人" />
                    <Divider />
                    <MetaItem label="首充总数" value="12人" />
                  </div>
                }
              />

              <KpiCard
                animDelay="0.15s"
                icon="💰" label="今日充提差额" badge="-205.9012%" badgeVariant="down"
                value="-53,252" valueSize={22} valueColor={theme.error}
                footer={
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", gap: 14, fontSize: 10 }}>
                      <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
                        <span style={{ color: theme.textMuted }}>首充</span>
                        <span style={{ color: theme.goldDark, fontWeight: 600 }}>999,999,999.00</span>
                      </span>
                      <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
                        <span style={{ color: theme.textMuted }}>充值</span>
                        <span style={{ color: theme.goldDark, fontWeight: 600 }}>999,999,999.00(12人)</span>
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 4, fontSize: 10, alignItems: "center" }}>
                      <span style={{ color: theme.textMuted }}>提现</span>
                      <span style={{ color: theme.goldDark, fontWeight: 600 }}>999,999,999.00(12人)</span>
                    </div>
                  </div>
                }
              />
            </div>

            {/* ── Row 2 ── */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>

              <KpiCard
                animDelay="0.20s"
                icon="🎰" label="今日投注" badge="205.9120%" badgeVariant="up"
                value="999,999,999.00" valueSize={18}
                topRight={
                  <>
                    <div style={{ fontSize: 10, color: theme.textMuted, marginBottom: 3 }}>今日杀率</div>
                    <div style={{
                      fontFamily: "'Roboto', sans-serif", fontSize: 14, fontWeight: 700,
                      color: theme.gold,
                      textShadow: `0 0 10px rgba(255,228,158,0.4)`,
                    }}>
                      99.999%
                    </div>
                  </>
                }
                footer={
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", gap: 4, fontSize: 10, alignItems: "center" }}>
                      <span style={{ color: theme.textMuted }}>已结算</span>
                      <span style={{ color: theme.goldDark, fontWeight: 600 }}>450,000,000(999,999,999单)</span>
                    </div>
                    <div style={{ display: "flex", gap: 4, fontSize: 10, alignItems: "center" }}>
                      <span style={{ color: theme.textMuted }}>未结算</span>
                      <span style={{ color: theme.goldDark, fontWeight: 600 }}>549,999,999(999,999,999单)</span>
                    </div>
                  </div>
                }
              />

              <KpiCard
                animDelay="0.25s"
                icon="📈" label="今日损益" badge="205.90%" badgeVariant="up"
                value="999,999,999.00" valueSize={18}
                footer={
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <div style={{ display: "flex", gap: 14, fontSize: 10 }}>
                      <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
                        <span style={{ color: theme.textMuted }}>利润</span>
                        <span style={{ color: theme.error, fontWeight: 600 }}>-999,999,999.00</span>
                      </span>
                      <span style={{ display: "flex", gap: 4, alignItems: "center" }}>
                        <span style={{ color: theme.textMuted }}>存量</span>
                        <span style={{ color: theme.goldDark, fontWeight: 600 }}>999,999,999.00</span>
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 4, fontSize: 10, alignItems: "center" }}>
                      <span style={{ color: theme.textMuted }}>会员余额</span>
                      <span style={{ color: theme.goldDark, fontWeight: 600 }}>999,999,999,999</span>
                    </div>
                  </div>
                }
              />

              <KpiCard
                animDelay="0.30s"
                icon="🎫" label="今日优惠" badge="205.9120%" badgeVariant="up"
                value="11,741" valueSize={26}
                footer={
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <MetaItem label="活动参与人数" value="118" />
                    <Divider />
                    <MetaItem label="活动" value="64" />
                  </div>
                }
              />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
